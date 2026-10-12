import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { kinds, projects } from "../../data/projects";
import Icon from "../../components/Icon";
import StepNav from "../../components/StepNav";
import { finePointer, reducedMotion, smoothScrollTo, useRise } from "../../lib/hooks";
import { useSeo } from "../../lib/seo";
import "./projects.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projekte von Manuel Westermeier",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${p.name} – ${p.full}`,
    url: `https://manuel-westermeier.de/projects#${p.id}`,
  })),
};

const pad = (n) => String(n).padStart(2, "0");

/* Segmentierte Filterleiste mit gleitender Glasmarke */
function Filter({ value, onChange }) {
  const wrap = useRef(null);
  const [mark, setMark] = useState({ x: 0, w: 0 });

  useLayoutEffect(() => {
    const el = wrap.current?.querySelector(`[data-k="${value}"]`);
    if (el) setMark({ x: el.offsetLeft, w: el.offsetWidth });
  }, [value]);

  return (
    <div className="seg glass" ref={wrap} role="tablist" aria-label="Nach Bereich filtern">
      <span className="seg__mark" style={{ transform: `translateX(${mark.x}px)`, width: mark.w }} aria-hidden="true" />
      {kinds.map((k) => (
        <button key={k} data-k={k} role="tab" aria-selected={value === k} className="seg__btn" onClick={() => onChange(k)}>
          {k !== "Alle" && <Icon name={k} size={15} />}
          {k}
        </button>
      ))}
    </div>
  );
}

/* Bilder: großes Bild + Vorschaustreifen, Video mit Poster, sonst Typo-Fläche */
function Media({ p, near }) {
  const [sel, setSel] = useState(0);

  if (p.video) {
    return (
      <div className="pc__media">
        <video src={near ? p.video : undefined} poster={p.poster} controls muted playsInline preload="none" aria-label={`${p.name} – Video`} />
      </div>
    );
  }

  if (!p.images.length) {
    return (
      <div className="pc__media pc__media--empty" aria-hidden="true">
        <Icon name={p.kind} size={40} />
        <span>{p.name}</span>
      </div>
    );
  }

  return (
    <div className="pc__media">
      <img className="pc__img" src={p.images[sel]} alt={`${p.name}, Ansicht ${sel + 1}`} loading={near ? "eager" : "lazy"} decoding="async" draggable="false" />
      {p.images.length > 1 && (
        <div className="pc__thumbs" role="group" aria-label={`${p.name}: Ansichten`}>
          {p.images.map((src, i) => (
            <button key={src} type="button" className="pc__thumb" aria-pressed={i === sel} aria-label={`Ansicht ${i + 1}`} onClick={() => setSel(i)}>
              <img src={src} alt="" loading="lazy" decoding="async" draggable="false" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Card({ p, i, n, active, near }) {
  return (
    <article
      id={p.id}
      className={`pc${active ? " pc--on" : ""}`}
      aria-roledescription="Folie"
      aria-label={`${i + 1} von ${n}: ${p.name}`}
      aria-hidden={!near || undefined}
    >
      <div className="pc__text">
        <p className="meta pc__meta">
          <span>{pad(i + 1)}</span>
          <span className="pc__kind">
            <Icon name={p.kind} size={14} />
            {p.kind}
          </span>
        </p>
        <h2 className="pc__name">{p.name}</h2>
        <p className="pc__full dim">{p.full}</p>
        <p className="pc__line">{p.line}</p>
        {p.detail && <p className="dim">{p.detail}</p>}
        {p.award && <p className="meta pc__award">{p.award}</p>}
        {p.note && <p className="meta">{p.note}</p>}
        {p.links.length > 0 && (
          <div className="pc__links">
            {p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="pill pill--solid" tabIndex={near ? 0 : -1}>
                {l.label} <Icon name="arrow" size={15} className="arr" />
              </a>
            ))}
          </div>
        )}
      </div>
      <Media p={p} near={near} />
    </article>
  );
}

export default function Projects() {
  const { hash } = useLocation();
  const [kind, setKind] = useState("Alle");
  const [active, setActive] = useState(0);
  const track = useRef(null);
  const cur = useRef(0);
  const list = kind === "Alle" ? projects : projects.filter((p) => p.kind === kind);
  const n = list.length;

  useSeo({
    title: "Projekte",
    description:
      "Projekte von Manuel Westermeier: MW-OS für ESP32, LHRP-Routingprotokoll, KI-Wasserrettung TWR, Easy-Einkauf, PrivusChat, Unity-Spiele und mehr.",
    path: "/projects",
    jsonLd,
  });
  useRise([kind]);

  const go = useCallback((i, instant = false) => {
    const el = track.current;
    if (!el) return;
    const cards = el.children;
    const to = Math.max(0, Math.min(cards.length - 1, i));
    cur.current = to;
    setActive(to);
    el.scrollTo({ left: cards[to].offsetLeft - cards[0].offsetLeft, behavior: instant || reducedMotion() ? "auto" : "smooth" });
  }, []);

  /* Aktive Karte aus der Scrollposition (Wischen, Trackpad, Scrollbar) */
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let raf = 0;
    const read = () => {
      raf = 0;
      const cards = el.children;
      if (!cards.length) return;
      const x = el.scrollLeft;
      let i = 0;
      if (x >= el.scrollWidth - el.clientWidth - 4) i = cards.length - 1;
      else {
        let best = Infinity;
        for (let j = 0; j < cards.length; j++) {
          const d = Math.abs(cards[j].offsetLeft - cards[0].offsetLeft - x);
          if (d < best) {
            best = d;
            i = j;
          }
        }
      }
      cur.current = i;
      setActive(i);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Mausrad: eine Karte pro Geste. Am Anfang/Ende scrollt die Seite normal weiter. */
  useEffect(() => {
    const el = track.current;
    if (!el || !finePointer()) return;
    let lock = false;
    let idle = 0;
    const onWheel = (e) => {
      if (e.ctrlKey || Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
      const dir = Math.sign(e.deltaY);
      const i = cur.current;
      const last = el.children.length - 1;
      if (!lock && ((dir > 0 && i >= last) || (dir < 0 && i <= 0))) return;
      e.preventDefault();
      clearTimeout(idle);
      idle = setTimeout(() => (lock = false), 220);
      if (lock) return;
      lock = true;
      go(i + dir);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      clearTimeout(idle);
      el.removeEventListener("wheel", onWheel);
    };
  }, [go]);

  /* Filterwechsel: zurück zur ersten Karte */
  useEffect(() => {
    if (track.current) track.current.scrollLeft = 0;
    cur.current = 0;
    setActive(0);
  }, [kind]);

  /* Laufende Videos anhalten, sobald ihre Karte nicht mehr aktiv ist */
  useEffect(() => {
    track.current?.querySelectorAll("video").forEach((v) => {
      if (v.closest(".pc") !== track.current.children[active]) v.pause();
    });
  }, [active]);

  /* /projects#id: Karte ansteuern und den Slider ins Bild holen */
  useEffect(() => {
    const id = hash.slice(1);
    const idx = projects.findIndex((p) => p.id === id);
    if (idx < 0) return;
    setKind("Alle");
    const t = setTimeout(() => {
      go(idx, true);
      const el = track.current;
      if (el) smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - 140);
    }, 140);
    return () => clearTimeout(t);
  }, [hash, go]);

  const onKey = (e) => {
    if (e.target !== e.currentTarget) return;
    const map = { ArrowRight: 1, ArrowLeft: -1 };
    if (map[e.key]) {
      e.preventDefault();
      go(cur.current + map[e.key]);
    } else if (e.key === "Home" || e.key === "End") {
      e.preventDefault();
      go(e.key === "Home" ? 0 : n - 1);
    }
  };

  return (
    <div className="prj">
      <header className="wrap prj__head">
        <h1 className="prj__title rise">
          {projects.length} Projekte<span className="dim">, vom Mikrocontroller bis zum Browser.</span>
        </h1>
        <div className="rise" style={{ "--d": ".1s" }}>
          <Filter value={kind} onChange={setKind} />
        </div>
      </header>

      <section className="pt rise" style={{ "--d": ".15s" }} aria-roledescription="Karussell" aria-label="Projekte">
        <div className="wrap pt__bar">
          <p className="pt__count" aria-live="polite">
            <span className="pt__num">{pad(active + 1)}</span>
            <span className="dim"> / {pad(n)}</span>
            <span className="meta pt__cur">{list[active]?.name}</span>
          </p>
          <StepNav
            onPrev={() => go(cur.current - 1)}
            onNext={() => go(cur.current + 1)}
            prevRef={(b) => b && (b.disabled = active === 0)}
            nextRef={(b) => b && (b.disabled = active >= n - 1)}
            label="Projekte blättern"
          />
        </div>

        <div className="pt__track" ref={track} tabIndex={0} onKeyDown={onKey} aria-label="Projekte, mit Pfeiltasten blättern">
          {list.map((p, i) => (
            <Card key={p.id} p={p} i={i} n={n} active={i === active} near={Math.abs(i - active) <= 1} />
          ))}
        </div>

        <div className="wrap">
          <div className="pt__dots" role="group" aria-label="Direkt zu Projekt">
            {list.map((p, i) => (
              <button key={p.id} type="button" className={`pt__dot${i === active ? " pt__dot--on" : ""}`} aria-label={p.name} aria-current={i === active || undefined} title={p.name} onClick={() => go(i)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
