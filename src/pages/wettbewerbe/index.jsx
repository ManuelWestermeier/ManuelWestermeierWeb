import React, { useEffect, useMemo, useRef } from "react";
import Icon from "../../components/Icon";
import { awards, fmtDate, fmtRange, paths, time, year } from "../../data/awards";
import { observeVisible, reducedMotion, smoothScrollTo, useRise } from "../../lib/hooks";
import { useSeo } from "../../lib/seo";
import "./wettbewerbe.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manuel Westermeier",
  url: "https://manuel-westermeier.de/",
  award: awards.map((a) => `${a.prize} – ${a.contest} ${a.round} ${year(a.date)}: ${a.project}`),
};

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
  const axis = useRef(null);

  /* Schmale Bildschirme: Achse am neuesten Ende beginnen lassen */
  useEffect(() => {
    const el = box.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  /* Beim Hineinscrollen: Linie aufziehen, Punkte nacheinander einblenden */
  useEffect(() => {
    const el = axis.current;
    if (!el) return;
    if (reducedMotion()) return void el.classList.add("ax--in");
    const stop = observeVisible(
      el,
      (on) => {
        if (!on) return;
        el.classList.add("ax--in");
        stop();
      },
      { threshold: 0.2 },
    );
    return stop;
  }, []);

  /* Nicht maßstabsgetreu: Ereignisse stehen in gleichen Abständen,
     Jahreswechsel werden markiert – keine leeren Monate */
  const { start, months, points, today } = useMemo(() => {
    const now = new Date();
    const asc = [...items].sort((a, b) => time(a.date) - time(b.date));
    const groups = Object.values(
      asc.reduce((g, a) => {
        (g[a.date] ||= []).push(a);
        return g;
      }, {}),
    );
    const n = groups.length;
    const pos = (i) => 6 + (n > 1 ? (i / (n - 1)) * 86 : 43);

    const ys = [];
    groups.forEach((g, i) => {
      const y = Number(year(g[0].date));
      if (!ys.length || ys[ys.length - 1].y !== y) {
        const x = i === 0 ? 1 : (pos(i - 1) + pos(i)) / 2;
        ys.push({ key: `y${y}`, m: 0, y, x });
      }
    });

    return {
      start: new Date(`${asc[0].date}T12:00:00`),
      months: ys,
      today: { x: 98, label: fmtDate(iso(now)) },
      points: groups.map((group, i) => {
        const x = pos(i);
        /* Breite Mehrfach-Labels liegen unten; was rechts daneben
           auf derselben Seite läge, wandert nach oben */
        const multi = (j) => groups[j]?.length > 1;
        const up = multi(i) ? false : multi(i - 2) || multi(i + 2) ? true : i % 2 === 0;
        return { a: group[0], group, x, up, edge: x < 9 ? "l" : x > 91 ? "r" : "" };
      }),
    };
  }, [items]);

  return (
    <div className="ax-scroll rise" ref={box} role="region" aria-label="Zeitachse" tabIndex={0}>
      <div className="ax" ref={axis}>
        {months.map((m) => (
          <span key={m.key} className={`ax__month${m.m === 0 ? " ax__month--year" : ""}`} style={{ left: `${m.x}%` }} aria-hidden="true">
            <b className="ax__year">{m.y}</b>
          </span>
        ))}

        <span className="ax__line" aria-hidden="true" />

        <span className="ax__today" style={{ left: `${today.x}%` }} title={`Heute, ${today.label}`} aria-hidden="true" />

        <ol className="ax__pts">
          {points.map(({ a, group, x, up, edge }, i) => (
            <li key={a.id} className={`ax__pt${up ? " ax__pt--up" : ""}${group.some((g) => g.major) ? " ax__pt--major" : ""}${edge ? ` ax__pt--${edge}` : ""}`} style={{ left: `${x}%`, "--i": i }}>
              <button type="button" onClick={() => jumpTo(a.id)} aria-label={`${group.map((g) => `${g.short} (${g.what})`).join(", ")}, ${fmtRange(a)}: zum Eintrag springen`}>
                <span className={`ax__label${group.length > 1 ? " ax__label--multi" : ""}`}>
                  <time className="meta" dateTime={a.date}>{fmtRange(a)}</time>
                  {group.map((g) => (
                    <span key={g.id} className="ax__item">
                      <span className="ax__short">{g.short}</span>
                      <span className="ax__what">{g.what}</span>
                    </span>
                  ))}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <p className="meta ax__legend">
        <span className="ax__legend-dot" aria-hidden="true" /> Heute · {today.label}
        <span className="ax__legend-span">
          {fmtDate(iso(start))} – heute
        </span>
      </p>
    </div>
  );
}

/* Wege: Stationen eines Projekts nebeneinander, verbunden durch Pfeile */
function Paths() {
  return (
    <div className="paths">
      {paths.map((p) => {
        const steps = awards.filter((a) => a.path === p.id).sort((a, b) => time(a.date) - time(b.date));
        return (
          <section key={p.id} className="path rise" aria-label={`Weg ${p.name}`}>
            <header className="path__head">
              <h2 className="path__name">{p.name}</h2>
              <p className="dim">{p.line}</p>
              {p.team && <p className="meta path__team">{p.team}</p>}
            </header>
            <ol className="path__steps">
              {steps.map((a, i) => (
                <li key={a.id} className={`path__step${i === steps.length - 1 ? " path__step--last" : ""}`}>
                  <button type="button" onClick={() => jumpTo(a.id)}>
                    <span className="meta">{fmtRange(a)}</span>
                    <span className="path__prize">{a.prize}</span>
                    <span className="dim path__round">{a.round}</span>
                  </button>
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

export default function Wettbewerbe() {
  useSeo({
    title: "Wettbewerbe",
    description:
      "Bundessieg bei YES! 2026 mit EnergieFlow. Jugend forscht 2026, Regionalwettbewerb Rosenheim: 1. Preis für TWR, 3. Preis für LHRP, Sonderpreis Ressourceneffizienz für ESP32 Mini OS. Landeswettbewerb Bayern, European Talent School, Schülerstipendium QAware.",
    path: "/wettbewerbe",
    jsonLd,
  });
  useRise();

  const sorted = useMemo(() => [...awards].sort((a, b) => time(b.date) - time(a.date)), []);
  /* Was am selben Tag war, steht in einem Eintrag */
  const days = useMemo(() => {
    const out = [];
    for (const a of sorted) {
      const last = out[out.length - 1];
      if (last && last[0].date === a.date) last.push(a);
      else out.push([a]);
    }
    return out;
  }, [sorted]);

  return (
    <div className="cmp">
      <header className="wrap cmp__head">
        <h1 className="cmp__title rise">
          Wettbewerbe
          <span className="dim">
            {" "}
            · {sorted.filter((a) => !a.event).length} Auszeichnungen seit {year(sorted[sorted.length - 1].date)}
          </span>
        </h1>
      </header>

      <section className="wrap tl" aria-label="Zeitleiste">
        <Axis items={awards} />

        <Paths />

        <ol className="tl__list" aria-label="Alle Stationen, neueste zuerst">
          {days.map((group, i) => {
            const a = group[0];
            const newYear = i === 0 || year(days[i - 1][0].date) !== year(a.date);
            return (
              <React.Fragment key={a.date}>
                {newYear && (
                  <li className="tl__year rise" aria-hidden="true">
                    {year(a.date)}
                  </li>
                )}
                <li id={`aw-${a.id}`} className={`tl__item rise${group.some((g) => g.major) ? " tl__item--major" : ""}`}>
                  <time className="meta tl__date" dateTime={a.date}>
                    {fmtRange(a)}
                    {group.length > 1 && <span className="tl__count">{group.length} Preise</span>}
                  </time>
                  <span className="tl__node" aria-hidden="true" />
                  <div className="tl__group">
                    {group.map((g, j) => (
                      <div key={g.id} id={j ? `aw-${g.id}` : undefined} className={`tl__entry${g.major ? " tl__entry--major" : ""}${g.event ? " tl__entry--event" : ""}`}>
                        <div className="tl__main">
                          <p className="tl__prize">{g.prize}</p>
                          <p className="tl__project">{g.project}</p>
                          {g.team && <p className="dim tl__team">{g.team}</p>}
                          {g.note && <p className="dim tl__note">{g.note}</p>}
                        </div>
                        <div className="tl__side">
                          <p className="meta">{g.contest}</p>
                          <p className="dim">{g.round}</p>
                          {g.field && <p className="dim">{g.field}</p>}
                          {g.place && <p className="dim">{g.place}</p>}
                          <Links links={g.links} />
                        </div>
                      </div>
                    ))}
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
