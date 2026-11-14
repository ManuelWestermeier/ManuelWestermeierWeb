import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { kinds, projects } from "../../data/projects";
import Icon from "../../components/Icon";
import Schema, { hasSchema } from "../../components/Schema";
import Model3D from "../../components/Model3D";
import { observeVisible, smoothScrollTo, useRise } from "../../lib/hooks";
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

function Filter({ value, onChange }) {
  return (
    <div className="chips" role="tablist" aria-label="Nach Bereich filtern">
      {kinds.map((k) => (
        <button key={k} role="tab" aria-selected={value === k} className="chip" onClick={() => onChange(k)}>
          {k}
        </button>
      ))}
    </div>
  );
}

/* Bildschirmfotos im Hochformat (Handy) stehen schmal in der Mitte,
   Querformat füllt den Rahmen. Diagramme für Projekte ohne gute Fotos. */
/* Projekte mit 3D-Modell: Umschalter zwischen Modell und Video */
function Media({ p }) {
  const [view, setView] = useState(p.model ? "3d" : "media");
  if (!p.model) return <MediaInner p={p} />;
  return (
    <div className="pm-wrap">
      {view === "3d" ? (
        <div className="pm pm--3d">
          <Model3D src={p.model} title={p.name} poster={p.modelPoster} />
        </div>
      ) : (
        <MediaInner p={p} />
      )}
      <div className="pm__switch" role="tablist" aria-label="Ansicht">
        <button role="tab" aria-selected={view === "3d"} onClick={() => setView("3d")}>3D-Modell</button>
        <button role="tab" aria-selected={view === "media"} onClick={() => setView("media")}>Video</button>
      </div>
    </div>
  );
}

function MediaInner({ p }) {
  const [sel, setSel] = useState(0);
  const [tall, setTall] = useState(false);
  const box = useRef(null);

  /* Videos nur abspielen, solange sie im Bild sind */
  useEffect(() => {
    const v = box.current?.querySelector("video");
    if (!v) return;
    return observeVisible(v, (on) => (on ? v.play().catch(() => {}) : v.pause()), { threshold: 0.4 });
  }, []);

  if (hasSchema(p.id) && (p.schema || !p.images.length) && !p.video) {
    return (
      <div className="pm pm--schema">
        <Schema id={p.id} title={p.name} />
      </div>
    );
  }

  if (p.video) {
    return (
      <div className="pm" ref={box}>
        <video src={p.video} poster={p.poster} muted loop playsInline preload="none" aria-label={`${p.name} – Video`} />
      </div>
    );
  }

  return (
    <div className={`pm${tall ? " pm--tall" : ""}`}>
      <img
        key={p.images[sel]}
        src={p.images[sel]}
        alt={`${p.name}, Ansicht ${sel + 1}`}
        loading="lazy"
        decoding="async"
        draggable="false"
        onLoad={(e) => setTall(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth * 1.1)}
      />
      {p.images.length > 1 && (
        <div className="pm__dots" role="group" aria-label={`${p.name}: Ansichten`}>
          {p.images.map((src, i) => (
            <button key={src} type="button" className="pm__dot" aria-pressed={i === sel} aria-label={`Ansicht ${i + 1}`} onClick={() => setSel(i)} />
          ))}
        </div>
      )}
    </div>
  );
}

function Slide({ p, i, n }) {
  return (
    <article id={p.id} className="ps" aria-label={`${i + 1} von ${n}: ${p.name}`}>
      <div className="wrap ps__in">
        <div className="ps__text rise">
          <p className="meta ps__meta">
            <span>{pad(i + 1)} / {pad(n)}</span>
            <span>{p.kind}</span>
          </p>
          <h2 className="ps__name">{p.name}</h2>
          <p className="ps__line">{p.line}</p>
          {p.award && <p className="ps__award">{p.award}</p>}
          {(p.links.length > 0 || p.note) && (
            <div className="ps__links">
              {p.links.map((l, j) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`pill ${j === 0 ? "pill--solid" : "pill--ghost"}`}>
                  {l.label} <Icon name="arrow" size={15} className="arr" />
                </a>
              ))}
              {p.note && <span className="meta ps__note">{p.note}</span>}
            </div>
          )}
        </div>
        <div className="ps__media rise" style={{ "--d": ".08s" }}>
          <Media p={p} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { hash } = useLocation();
  const [kind, setKind] = useState("Alle");
  const list = kind === "Alle" ? projects : projects.filter((p) => p.kind === kind);

  useSeo({
    title: "Projekte",
    description:
      "Projekte von Manuel Westermeier: MW-OS für ESP32, LHRP-Routingprotokoll, KI-Wasserrettung TWR, Easy-Einkauf, PrivusChat, Unity-Spiele und mehr.",
    path: "/projects",
    jsonLd,
  });
  useRise([kind]);

  /* Vertikales Einrasten nur auf dieser Seite */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("snap-y");
    return () => root.classList.remove("snap-y");
  }, []);

  /* /projects#id: direkt zur Kachel */
  useEffect(() => {
    const id = hash.slice(1);
    if (!projects.some((p) => p.id === id)) return;
    setKind("Alle");
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) smoothScrollTo(el.getBoundingClientRect().top + window.scrollY);
    }, 120);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <div className="prj">
      <header className="wrap prj__head">
        <h1 className="prj__title rise">Projekte</h1>
        <div className="rise" style={{ "--d": ".1s" }}>
          <Filter value={kind} onChange={setKind} />
        </div>
      </header>

      {list.map((p, i) => (
        <Slide key={p.id} p={p} i={i} n={list.length} />
      ))}
    </div>
  );
}
