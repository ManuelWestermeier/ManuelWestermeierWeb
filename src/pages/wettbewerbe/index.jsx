import React from "react";
import { awards, fmtDate, next, year } from "../../data/awards";
import { useRise, useTilt } from "../../lib/hooks";
import { useSeo } from "../../lib/seo";
import "./wettbewerbe.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manuel Westermeier",
  url: "https://manuel-westermeier.de/",
  award: awards.map((a) => `${a.prize} – ${a.contest} ${a.round} ${year(a.date)}: ${a.project}`),
};

function Links({ links }) {
  if (!links?.length) return null;
  return (
    <div className="cmp__links">
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="ul">
          {l.label} ↗
        </a>
      ))}
    </div>
  );
}

function Highlight({ a }) {
  const ref = useTilt(4);
  return (
    <article className="hl glass tilt rise" ref={ref}>
      <p className="meta">{a.contest} · {a.round} {year(a.date)}</p>
      <h2 className="hl__prize">{a.prize}</h2>
      <div className="hl__body">
        <div>
          <p className="hl__project">{a.project}</p>
          <p className="dim">{a.note}</p>
        </div>
        <dl className="hl__facts">
          <div>
            <dt className="meta">Forschungsfrage</dt>
            <dd>Wie können Mieterinnen und Mieter aktiv an der Energiewende teilhaben und finanziell davon profitieren?</dd>
          </div>
          <div>
            <dt className="meta">Partner</dt>
            <dd>{a.partner}</dd>
          </div>
          <div>
            <dt className="meta">Team</dt>
            <dd>{a.team}</dd>
          </div>
        </dl>
      </div>
      <Links links={a.links} />
    </article>
  );
}

function Next() {
  const ref = useTilt(4);
  return (
    <article className="nx glass tilt rise" ref={ref} aria-labelledby="nx-title">
      <p className="meta">Nächste Teilnahme · {next.contest} · {next.field}</p>
      <h2 id="nx-title" className="nx__lead">{next.lead}</h2>
      <p className="nx__text">{next.text}</p>
      <p className="dim nx__team">{next.project} · {next.team}</p>
      <a href={next.href} target="_blank" rel="noopener noreferrer" className="pill pill--solid">
        twr-systems.de <span className="arr">↗</span>
      </a>
    </article>
  );
}

export default function Wettbewerbe() {
  useSeo({
    title: "Wettbewerbe",
    description:
      "Bundessieg bei YES! 2026 mit EnergieFlow. Jugend forscht, Regionalwettbewerb Rosenheim: 1. Preis Arbeitswelt für TWR, 3. Preise für LHRP und MW-Protokoll, Sonderpreise für ESP32 Mini OS und Fraunhofer Talents.",
    path: "/wettbewerbe",
    jsonLd,
  });
  useRise();

  const [yes, ...rest] = awards;

  return (
    <div className="cmp">
      <header className="wrap cmp__head">
        <h1 className="cmp__title rise">
          Wettbewerbe<span className="dim"> seit {year(awards[awards.length - 1].date)}.</span>
        </h1>
      </header>

      <div className="wrap cmp__top">
        <Highlight a={yes} />
        <Next />
      </div>

      <ol className="wrap cmp__list" aria-label="Alle Auszeichnungen">
        {rest.map((a, i) => (
          <li key={a.id} className="cmp__row rise" style={{ "--d": `${i * 0.04}s` }}>
            <time className="meta cmp__date" dateTime={a.date}>{fmtDate(a.date)}</time>
            <div className="cmp__main">
              <p className="cmp__prize">{a.prize}</p>
              <p className="cmp__project">{a.project}</p>
              {a.team && <p className="dim cmp__team">{a.team}</p>}
            </div>
            <div className="cmp__side">
              <p className="meta">{a.contest}</p>
              <p className="dim">{a.round}</p>
              {a.field && <p className="dim">{a.field}</p>}
              <Links links={a.links} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
