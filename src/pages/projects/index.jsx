import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { kinds, projects } from "../../data/projects";
import { reducedMotion, useRise } from "../../lib/hooks";
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
          {k}
        </button>
      ))}
    </div>
  );
}

/* Vorschaubild, das dem Zeiger folgt (nur Desktop) */
function usePreview() {
  const ref = useRef(null);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reducedMotion()) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf;
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      const el = ref.current;
      if (el) {
        const rot = Math.max(-8, Math.min(8, (x - cx) * 0.06));
        el.style.transform = `translate3d(${cx + 28}px, ${cy - 120}px, 0) rotate(${rot}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return { ref, src, setSrc };
}

function Row({ p, open, onToggle, onHover }) {
  const panel = `panel-${p.id}`;
  return (
    <article id={p.id} className={`row${open ? " row--open" : ""}`}>
      <h2 className="row__h">
        <button
          className="row__head"
          aria-expanded={open}
          aria-controls={panel}
          onClick={onToggle}
          onPointerEnter={() => onHover(p.poster || p.images[0] || null)}
          onPointerLeave={() => onHover(null)}
        >
          <span className="row__name">{p.name}</span>
          <span className="row__full dim">{p.full}</span>
          <span className="meta row__kind">{p.kind}</span>
          <span className="row__plus" aria-hidden="true" />
        </button>
      </h2>

      <div className="row__panel" id={panel} role="region" aria-label={p.name}>
        <div>
          <div className="row__inner">
            <div className="row__text">
              <p className="row__line">{p.line}</p>
              {p.detail && <p className="dim">{p.detail}</p>}
              {p.award && <p className="meta row__award">{p.award}</p>}
              {p.note && <p className="meta">{p.note}</p>}
              {p.links.length > 0 && (
                <div className="row__links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="pill pill--solid" tabIndex={open ? 0 : -1}>
                      {l.label} <span className="arr">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {(p.video || p.images.length > 0) && (
              <div className="row__media">
                {open && p.video && (
                  <video src={p.video} poster={p.poster} controls muted playsInline preload="none" aria-label={`${p.name} – Video`} />
                )}
                {open &&
                  !p.video &&
                  p.images.map((src, i) => (
                    <img key={src} src={src} alt={`${p.name}, Ansicht ${i + 1}`} loading="lazy" decoding="async" />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { hash } = useLocation();
  const [kind, setKind] = useState("Alle");
  const [open, setOpen] = useState(() => hash.slice(1) || null);
  const preview = usePreview();
  const list = kind === "Alle" ? projects : projects.filter((p) => p.kind === kind);

  useSeo({
    title: "Projekte",
    description:
      "Projekte von Manuel Westermeier: MW-OS für ESP32, LHRP-Routingprotokoll, KI-Wasserrettung TWR, Easy-Einkauf, PrivusChat, Unity-Spiele und mehr.",
    path: "/projects",
    jsonLd,
  });
  useRise([kind]);

  useEffect(() => {
    const id = hash.slice(1);
    if (!id) return;
    setOpen(id);
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
    }, 120);
    return () => clearTimeout(t);
  }, [hash]);

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

      <div className="wrap prj__list" onPointerLeave={() => preview.setSrc(null)}>
        {list.map((p) => (
          <Row key={p.id} p={p} open={open === p.id} onToggle={() => setOpen(open === p.id ? null : p.id)} onHover={(s) => open !== p.id && preview.setSrc(s)} />
        ))}
      </div>

      <div className={`prv glass${preview.src ? " prv--on" : ""}`} ref={preview.ref} aria-hidden="true">
        {preview.src && <img src={preview.src} alt="" />}
      </div>
    </div>
  );
}
