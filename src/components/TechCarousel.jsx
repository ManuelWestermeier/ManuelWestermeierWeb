import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import StepNav from "./StepNav";
import { techGroups } from "../data/tech";
import { scrollToProgress, useScrollProgress } from "../lib/hooks";

/* Scroll-Karussell: Jede Gruppe kommt gemeinsam leicht von oben rechts,
   bleibt lange ruhig in der Mitte stehen und zieht kleiner nach links hinaus.
   t = Abstand zur Mitte in „Plätzen“ (t > 0 rechts, t < 0 links).
   Die Zeilen einer Gruppe folgen leicht versetzt, in der Mitte stehen sie bündig.
   Geschrieben werden nur transform/opacity, und nur für sichtbare Gruppen. */
const LEAD = 0.75;
const HOLD = 0.5; // Anteil des Scrollwegs je Gruppe, in dem sie still steht
const LAG = 0.09; // Versatz pro Zeile

const total = techGroups.reduce((n, g) => n + g.items.length, 0);

export default function TechCarousel() {
  const groups = useRef([]);
  const rows = useRef([]);
  const shown = useRef([]);
  const count = useRef(null);
  const pos = useRef(-LEAD);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  const apply = (p) => {
    const n = techGroups.length;
    const raw = -LEAD + p * (n - 1 + LEAD * 2);
    const base = Math.floor(raw);
    const f = raw - base;
    /* Bewegung nur im mittleren Teil, sanft (smoothstep) – davor und danach Stillstand */
    const g = Math.min(1, Math.max(0, (f - HOLD / 2) / (1 - HOLD)));
    const k = base + g * g * (3 - 2 * g);
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const spread = vw < 760 ? 0.9 : 0.55;

    for (let i = 0; i < n; i++) {
      const el = groups.current[i];
      if (!el) continue;
      const t = i - k;
      const vis = Math.abs(t) < 1.3;
      if (vis !== shown.current[i]) {
        el.style.visibility = vis ? "visible" : "hidden";
        shown.current[i] = vis;
      }
      if (!vis) continue;
      el.style.setProperty("--lbl", Math.max(0, 1 - Math.abs(t) * 2.2).toFixed(3));
      const lagAmt = LAG * Math.min(1, Math.abs(t) * 4);
      const rs = rows.current[i] || [];
      for (let j = 0; j < rs.length; j++) {
        const r = rs[j];
        if (!r) continue;
        /* Untere Zeilen hängen nach; beim Hinausziehen eilen die oberen voraus */
        const tj = t > 0 ? t + j * lagAmt : t - (rs.length - 1 - j) * lagAmt;
        const a = Math.abs(tj);
        const x = tj * vw * spread;
        const y = tj > 0 ? -tj * vh * 0.12 : -tj * vh * 0.04;
        const s = tj > 0 ? 1 - tj * 0.22 : 1 + tj * 0.4;
        r.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) scale(${Math.max(0.3, s).toFixed(3)})`;
        const o = Math.max(0, 1 - a / 0.75);
        r.style.opacity = (o * (2 - o)).toFixed(3);
      }
    }
    pos.current = k;
    if (prevBtn.current) prevBtn.current.disabled = k < 0.001;
    if (count.current) {
      const c = Math.min(n, Math.max(1, Math.round(k) + 1));
      count.current.textContent = String(c).padStart(2, "0");
    }
  };

  const ref = useScrollProgress(apply);

  /* Knöpfe springen genau auf die Ruheposition der nächsten/vorigen Gruppe */
  const n = techGroups.length;
  const goTo = (c) => scrollToProgress(ref.current, (c + LEAD) / (n - 1 + LEAD * 2));
  const next = () => {
    const c = Math.floor(pos.current + 0.001) + 1;
    if (c < n) goTo(c);
    else scrollToProgress(ref.current, 1); // nach der letzten Gruppe: weiter zum nächsten Abschnitt
  };
  const prev = () => {
    const c = Math.ceil(pos.current - 0.001) - 1;
    if (c >= 0) goTo(c);
  };

  useEffect(() => {
    apply(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="tc" ref={ref} style={{ "--n": techGroups.length }} aria-labelledby="tc-title">
      <h2 id="tc-title" className="sr-only">
        Technologien
      </h2>
      <div className="tc__stage">
        {techGroups.map((grp, i) => (
          <div key={grp.label} className="tc__group wrap" ref={(el) => (groups.current[i] = el)}>
            <p className="meta tc__label">{grp.label}</p>
            <ul className="tc__list">
              {grp.items.map((t, j) => (
                <li
                  key={t.name}
                  className="tc__row"
                  ref={(el) => {
                    rows.current[i] = rows.current[i] || [];
                    rows.current[i][j] = el;
                  }}
                >
                  <Icon name={t.icon} size={20} className="tc__ico" />
                  <span className="tc__name">{t.name}</span>
                  <span className="tc__note dim">{t.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="wrap tc__foot">
          <span className="meta">
            <span ref={count}>01</span> / {String(techGroups.length).padStart(2, "0")}
            <span className="tc__total"> · {total} Technologien</span>
          </span>
          <StepNav onPrev={prev} onNext={next} prevRef={prevBtn} nextRef={nextBtn} label="Technologie-Gruppen" />
          <Link to="/my-work" className="ul tc__more">
            Alle Technologien <Icon name="arrow" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
