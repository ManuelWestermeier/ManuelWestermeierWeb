import React, { useEffect, useMemo, useRef } from "react";
import Icon from "../../components/Icon";
import { awards, fmtDate, fmtRange, next, time, year } from "../../data/awards";
import { smoothScrollTo, useRise, useTilt } from "../../lib/hooks";
import { useSeo } from "../../lib/seo";
import "./wettbewerbe.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manuel Westermeier",
  url: "https://manuel-westermeier.de/",
  award: awards.map((a) => `${a.prize} – ${a.contest} ${a.round} ${year(a.date)}: ${a.project}`),
};

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

function Links({ links }) {
  if (!links?.length) return null;
  return (
    <div className="cmp__links">
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="ul">
          {l.label} <Icon name="arrow" size={14} />
        </a>
      ))}
    </div>
  );
}

function Highlight({ a }) {
  const ref = useTilt(4);
  return (
    <article className="hl glass tilt rise" ref={ref}>
      <p className="meta">
        {a.contest} · {a.round} · {fmtRange(a)}
        {a.place && ` · ${a.place}`}
      </p>
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
        twr-systems.de <Icon name="arrow" size={15} className="arr" />
      </a>
    </article>
  );
}

/* Springt zum Eintrag in der Chronik und lässt ihn kurz aufleuchten. */
function jumpTo(id) {
  const el = document.getElementById(`aw-${id}`);
  if (!el) return;
  smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - 140);
  el.classList.remove("tl__item--flash");
  void el.offsetWidth;
  el.classList.add("tl__item--flash");
}

/* Maßstabsgetreue Zeitachse: jeder Monat gleich breit, Punkte tagesgenau. */
function Axis({ items }) {
  const box = useRef(null);

  /* Schmale Bildschirme: Achse am neuesten Ende beginnen lassen */
  useEffect(() => {
    const el = box.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  const { start, end, months, points, today } = useMemo(() => {
    const now = new Date();
    const asc = [...items].sort((a, b) => time(a.date) - time(b.date));
    const first = new Date(`${asc[0].date}T12:00:00`);
    const last = new Date(Math.max(time(asc[asc.length - 1].date), now.getTime()));
    const s = new Date(first.getFullYear(), first.getMonth() - 1, 1);
    const e = new Date(last.getFullYear(), last.getMonth() + 2, 1);
    const span = e - s;
    const pos = (t) => ((t - s) / span) * 100;

    const ms = [];
    for (let d = new Date(s); d < e; d.setMonth(d.getMonth() + 1)) {
      ms.push({ key: iso(d), m: d.getMonth(), y: d.getFullYear(), x: pos(d.getTime()) });
    }

    return {
      start: s,
      end: e,
      months: ms,
      today: { x: pos(now.getTime()), label: fmtDate(iso(now)) },
      points: asc.map((a, i) => {
        const x = pos(time(a.date));
        return { a, x, up: i % 2 === 0, edge: x < 9 ? "l" : x > 91 ? "r" : "" };
      }),
    };
  }, [items]);

  return (
    <div className="ax-scroll rise" ref={box} role="region" aria-label="Zeitachse" tabIndex={0}>
      <div className="ax">
        {months.map((m) => (
          <span key={m.key} className={`ax__month${m.m === 0 ? " ax__month--year" : ""}`} style={{ left: `${m.x}%` }} aria-hidden="true">
            {(m.m === 0 || m.key === months[0].key) && <b className="ax__year">{m.y}</b>}
            <i>{MONTHS[m.m]}</i>
          </span>
        ))}

        <span className="ax__line" aria-hidden="true" />

        <span className="ax__today" style={{ left: `${today.x}%` }} title={`Heute, ${today.label}`} aria-hidden="true" />

        <ol className="ax__pts">
          {points.map(({ a, x, up, edge }) => (
            <li key={a.id} className={`ax__pt${up ? " ax__pt--up" : ""}${a.major ? " ax__pt--major" : ""}${edge ? ` ax__pt--${edge}` : ""}`} style={{ left: `${x}%` }}>
              <button type="button" onClick={() => jumpTo(a.id)} aria-label={`${a.short}, ${fmtRange(a)}: zum Eintrag springen`}>
                <span className="ax__label">
                  <time className="meta" dateTime={a.date}>{fmtRange(a)}</time>
                  <span className="ax__short">{a.short}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <p className="meta ax__legend">
        <span className="ax__legend-dot" aria-hidden="true" /> Heute · {today.label}
        <span className="ax__legend-span">
          {fmtDate(iso(start))} – {fmtDate(iso(new Date(end - 864e5)))}
        </span>
      </p>
    </div>
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

  const sorted = useMemo(() => [...awards].sort((a, b) => time(b.date) - time(a.date)), []);
  const yes = awards.find((a) => a.id === "yes-2026");

  return (
    <div className="cmp">
      <header className="wrap cmp__head">
        <h1 className="cmp__title rise">
          Wettbewerbe<span className="dim"> seit {year(sorted[sorted.length - 1].date)}.</span>
        </h1>
      </header>

      <div className="wrap cmp__top">
        <Highlight a={yes} />
        <Next />
      </div>

      <section className="wrap tl" aria-labelledby="tl-title">
        <div className="tl__head rise">
          <h2 id="tl-title" className="tl__title">Zeitleiste</h2>
          <p className="dim">
            {sorted.length} Auszeichnungen in {new Set(sorted.map((a) => year(a.date))).size} Jahren, tagesgenau auf der Achse.
          </p>
        </div>

        <Axis items={awards} />

        <ol className="tl__list" aria-label="Alle Auszeichnungen, neueste zuerst">
          {sorted.map((a, i) => {
            const newYear = i === 0 || year(sorted[i - 1].date) !== year(a.date);
            return (
              <React.Fragment key={a.id}>
                {newYear && (
                  <li className="tl__year rise" aria-hidden="true">
                    {year(a.date)}
                  </li>
                )}
                <li id={`aw-${a.id}`} className={`tl__item rise${a.major ? " tl__item--major" : ""}`}>
                  <time className="meta tl__date" dateTime={a.date}>{fmtRange(a)}</time>
                  <span className="tl__node" aria-hidden="true" />
                  <div className="tl__main">
                    <p className="tl__prize">{a.prize}</p>
                    <p className="tl__project">{a.project}</p>
                    {a.team && <p className="dim tl__team">{a.team}</p>}
                  </div>
                  <div className="tl__side">
                    <p className="meta">{a.contest}</p>
                    <p className="dim">{a.round}</p>
                    {a.field && <p className="dim">{a.field}</p>}
                    {a.place && <p className="dim">{a.place}</p>}
                    <Links links={a.links} />
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
