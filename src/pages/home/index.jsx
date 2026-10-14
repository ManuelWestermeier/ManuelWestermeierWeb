import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Orbit from "../../components/Orbit";
import BoatFilm from "../../components/BoatFilm";
import TechCarousel from "../../components/TechCarousel";
import ProjectCard from "../../components/ProjectCard";
import Icon from "../../components/Icon";
import StepNav from "../../components/StepNav";
import { observeResize, scrollPast, scrollToProgress, svh, useRise, useScrollProgress, useTilt } from "../../lib/hooks";
import { useSeo } from "../../lib/seo";
import { projects } from "../../data/projects";
import { awards, year } from "../../data/awards";
import "./home.css";

const STATEMENT =
  "Ich baue Dinge, die es vorher nicht gab: ein Betriebssystem für einen Mikrocontroller, ein Routing-Protokoll für Funknetze und ein Boot, das Ertrinkende selbst findet.";

function Hero() {
  const card = useTilt(6);
  const title = useRef(null);
  const sub = useRef(null);
  const orbit = useRef(null);
  const cue = useRef(null);
  const cardMove = useRef(null);

  /* Nur transform/opacity – keine Layout- oder Stilneuberechnung */
  const ref = useScrollProgress((p) => {
    if (title.current) {
      title.current.style.transform = `translate3d(0,${-p * 18}vh,0)`;
      title.current.style.opacity = Math.max(0, 1 - p * 1.6);
    }
    if (sub.current) sub.current.style.opacity = Math.max(0, 1 - p * 2);
    if (orbit.current) {
      orbit.current.style.transform = `translate3d(0,-50%,0) scale(${1 + p * 0.9})`;
      orbit.current.style.opacity = 1 - p * 0.85;
    }
    if (cardMove.current) cardMove.current.style.transform = `translate3d(0,${-p * 30}vh,0)`;
    if (cue.current) cue.current.style.opacity = Math.max(0, 1 - p * 4);
  });

  const yes = awards[0];

  return (
    <section className="hero" ref={ref} aria-labelledby="hero-title">
      <div className="hero__stage">
        <Orbit className="hero__orbit" innerRef={orbit} />

        <div className="wrap hero__inner">
          <h1 id="hero-title" className="hero__title" ref={title}>
            <span className="hero__line">Manuel</span>
            <span className="hero__line hero__line--2">Westermeier</span>
          </h1>

          <p className="hero__sub" ref={sub}>
            Betriebssysteme, Netzwerkprotokolle und KI. <span className="dim">Gebaut in Ruhpolding.</span>
          </p>

          <div className="hero__cardpos" ref={cardMove}>
            <Link to="/wettbewerbe" className="hero__card glass glass--refract tilt" ref={card}>
              <span className="meta">{yes.round} {year(yes.date)}</span>
              <span className="hero__card-title">{yes.prize} bei YES!</span>
              <span className="dim hero__card-sub">{yes.project}, {yes.team}</span>
              <Icon name="arrow" size={16} className="hero__card-arr" />
            </Link>
          </div>
        </div>

        <span className="hero__cue" ref={cue} aria-hidden="true" />
      </div>
    </section>
  );
}

function Statement() {
  const words = STATEMENT.split(" ");
  const spans = useRef([]);
  const lit = useRef(-1);
  const ref = useScrollProgress((p) => {
    const n = Math.round(p * 1.25 * words.length);
    if (n === lit.current) return;
    const from = Math.min(n, Math.max(lit.current, 0));
    const to = Math.max(n, lit.current);
    for (let i = from; i < to; i++) spans.current[i]?.classList.toggle("on", i < n);
    lit.current = n;
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

/* Vertikales Scrollen schiebt die Karten horizontal – auch mobil. */
function Work() {
  const featured = projects.filter((p) => p.featured);
  const track = useRef(null);
  const dist = useRef(0);
  const cur = useRef(0);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  const ref = useScrollProgress((p) => {
    cur.current = p;
    if (track.current) track.current.style.transform = `translate3d(${-p * dist.current}px,0,0)`;
    if (prevBtn.current) prevBtn.current.disabled = p < 0.002;
  });

  /* Fortschritt, bei dem Karte i am linken Rand steht */
  const stops = () => {
    const t = track.current;
    if (!t || !dist.current) return [];
    const pad = t.firstElementChild ? t.firstElementChild.offsetLeft : 0;
    return [...t.children].map((c) => Math.min(1, (c.offsetLeft - pad) / dist.current));
  };
  const next = () => {
    const s = stops().find((x) => x > cur.current + 0.01);
    /* Am Ende der Karten geht es weiter zum nächsten Abschnitt */
    if (s === undefined || cur.current > 0.998) scrollPast(ref.current);
    else scrollToProgress(ref.current, s);
  };
  const prev = () => {
    const s = stops().filter((x) => x < cur.current - 0.01).pop();
    scrollToProgress(ref.current, s ?? 0);
  };

  useEffect(() => {
    const sec = ref.current;
    const t = track.current;
    if (!sec || !t) return;
    const measure = () => {
      dist.current = Math.max(0, t.scrollWidth - sec.clientWidth);
      /* Scrollweg = horizontale Strecke, auf Touch etwas kürzer */
      const k = window.matchMedia("(pointer: coarse)").matches ? 0.9 : 1.1;
      sec.style.height = `calc(100${svh} + ${Math.round(dist.current * k)}px)`;
    };
    measure();
    return observeResize(t, measure);
  }, [ref]);

  return (
    <section className="work" ref={ref} aria-labelledby="work-title">
      <div className="work__stage">
        <div className="wrap work__head">
          <h2 id="work-title" className="work__title">
            {featured.length} von {projects.length}.
          </h2>
          <div className="work__ctl">
            <StepNav onPrev={prev} onNext={next} prevRef={prevBtn} nextRef={nextBtn} label="Projekte blättern" />
            <Link to="/projects" className="pill pill--glass glass">
              Alle Projekte <Icon name="arrow" size={15} className="arr" />
            </Link>
          </div>
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
          <li key={a.id} className="aw__row rise" style={{ "--d": `${(i % 3) * 0.05}s` }}>
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
      <div className="close__more rise" style={{ "--d": ".1s" }}>
        <p className="dim">Anfragen beantworte ich meist innerhalb von 24 Stunden. Lieber anrufen oder schreiben?</p>
        <Link to="/contact" className="pill pill--glass glass">
          <Icon name="phone" size={16} /> Telefon & alle Kontaktwege <Icon name="arrow" size={15} className="arr" />
        </Link>
      </div>
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
      <TechCarousel />
      <Statement />
      <BoatFilm />
      <Work />
      <Awards />
      <Close />
    </>
  );
}
