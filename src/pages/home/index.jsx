import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Orbit from "../../components/Orbit";
import ProjectCard from "../../components/ProjectCard";
import { useRise, useScrollProgress, useTilt } from "../../lib/hooks";
import { useSeo } from "../../lib/seo";
import { projects } from "../../data/projects";
import { awards, year } from "../../data/awards";
import "./home.css";

const STATEMENT =
  "Ich baue Dinge, die es vorher nicht gab: ein Betriebssystem für einen Mikrocontroller, ein Routing-Protokoll für Funknetze und ein Boot, das Ertrinkende selbst findet.";

function Hero() {
  const ref = useScrollProgress();
  const card = useTilt(6);
  const yes = awards[0];

  const onMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    el.style.setProperty("--ox", ((e.clientY / window.innerHeight - 0.5) * -14).toFixed(2) + "deg");
    el.style.setProperty("--oy", ((e.clientX / window.innerWidth - 0.5) * 18).toFixed(2) + "deg");
  };

  return (
    <section className="hero" ref={ref} onPointerMove={onMove} aria-labelledby="hero-title">
      <div className="hero__stage">
        <Orbit className="hero__orbit" />

        <div className="wrap hero__inner">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line">Manuel</span>
            <span className="hero__line hero__line--2">Westermeier</span>
          </h1>

          <p className="hero__sub">
            Betriebssysteme, Netzwerkprotokolle und KI. <span className="dim">Gebaut in Ruhpolding.</span>
          </p>

          <Link to="/wettbewerbe" className="hero__card glass tilt" ref={card}>
            <span className="meta">{yes.round} {year(yes.date)}</span>
            <span className="hero__card-title">{yes.prize} bei YES!</span>
            <span className="dim hero__card-sub">{yes.project}, {yes.team}</span>
            <span className="hero__card-arr" aria-hidden="true">↗</span>
          </Link>
        </div>

        <span className="hero__cue" aria-hidden="true" />
      </div>
    </section>
  );
}

function Statement() {
  const words = STATEMENT.split(" ");
  const spans = useRef([]);
  const ref = useScrollProgress((p) => {
    const lit = Math.round(p * 1.25 * words.length);
    spans.current.forEach((s, i) => s && s.classList.toggle("on", i < lit));
  });

  return (
    <section className="stmt" ref={ref}>
      <div className="stmt__stage">
        <div className="wrap grid">
          <p className="stmt__text">
            {words.map((w, i) => (
              <span key={i} ref={(el) => (spans.current[i] = el)}>
                {w}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const featured = projects.filter((p) => p.featured);
  const track = useRef(null);
  const ref = useScrollProgress((p) => {
    const t = track.current;
    if (!t || window.innerWidth < 900) return;
    const dist = t.scrollWidth - t.clientWidth;
    t.style.transform = `translate3d(${-p * dist}px,0,0)`;
  });

  return (
    <section className="work" ref={ref} style={{ "--n": featured.length }} aria-labelledby="work-title">
      <div className="work__stage">
        <div className="wrap work__head">
          <h2 id="work-title" className="work__title">
            {featured.length} von {projects.length}.
          </h2>
          <Link to="/projects" className="pill pill--glass glass">
            Alle Projekte <span className="arr">↗</span>
          </Link>
        </div>
        <div className="work__track" ref={track}>
          {featured.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="aw wrap grid" aria-labelledby="aw-title">
      <div className="aw__side">
        <h2 id="aw-title" className="aw__count rise">
          {awards.length}
          <span>Auszeichnungen seit {year(awards[awards.length - 1].date)}</span>
        </h2>
        <Link to="/wettbewerbe" className="ul aw__more rise" style={{ "--d": ".1s" }}>
          Alle Wettbewerbe und die nächste Runde
        </Link>
      </div>

      <ol className="aw__list">
        {awards.map((a, i) => (
          <li key={a.id} className="aw__row rise" style={{ "--d": `${i * 0.05}s` }}>
            <span className="meta">{year(a.date)}</span>
            <span className="aw__prize">{a.prize}</span>
            <span className="dim aw__proj">{a.project}</span>
            <span className="meta aw__where">{a.contest} · {a.round}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Close() {
  return (
    <section className="close wrap" aria-label="E-Mail schreiben">
      <a className="close__mail rise" href="mailto:info@manuel-westermeier.de">
        info@manuel-
        <wbr />
        westermeier.de
      </a>
      <p className="dim close__note rise" style={{ "--d": ".1s" }}>
        Anfragen beantworte ich meist innerhalb von 24 Stunden. <Link to="/contact" className="ul">Telefon und weitere Wege</Link>
      </p>
    </section>
  );
}

export default function Home() {
  useSeo({
    title: "Entwickler aus Ruhpolding",
    description:
      "Manuel Westermeier, Entwickler aus Ruhpolding: Betriebssysteme für ESP32, Netzwerkprotokolle, KI-Wasserrettung TWR. Bundessieg YES! 2026, Preise bei Jugend forscht.",
    path: "/",
  });
  useRise();

  return (
    <>
      <Hero />
      <Statement />
      <Work />
      <Awards />
      <Close />
    </>
  );
}
