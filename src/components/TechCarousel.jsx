import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { tech } from "../data/tech";
import { useScrollProgress } from "../lib/hooks";

/* Scroll-Karussell: Jede Technologie kommt leicht von oben rechts,
   steht groß in der Mitte und zieht kleiner nach links hinaus.
   t = Abstand zur Mitte in „Plätzen“ (t > 0 rechts, t < 0 links).
   Geschrieben werden nur transform/opacity, und nur für sichtbare Plätze. */
const LEAD = 0.9;

export default function TechCarousel() {
  const items = useRef([]);
  const count = useRef(null);
  const state = useRef([]);

  const apply = (p) => {
    /* Kurzer Halt in der Mitte: Steigung 0 an jeder ganzen Zahl */
    const raw = -LEAD + p * (tech.length - 1 + LEAD * 2);
    const f = raw - Math.floor(raw);
    const k = Math.floor(raw) + f - Math.sin(f * Math.PI * 2) / (Math.PI * 2);
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const spread = vw < 760 ? 0.42 : 0.34;
    for (let i = 0; i < items.current.length; i++) {
      const el = items.current[i];
      if (!el) continue;
      const t = i - k;
      const a = Math.abs(t);
      const vis = a < 1.25;
      if (!vis) {
        if (state.current[i] !== 0) {
          el.style.visibility = "hidden";
          state.current[i] = 0;
        }
        continue;
      }
      if (state.current[i] === 0 || state.current[i] === undefined) el.style.visibility = "visible";
      state.current[i] = 1;
      const x = t * vw * spread;
      const y = t > 0 ? -t * vh * 0.16 : -t * vh * 0.05;
      const s = t > 0 ? 1 - t * 0.5 : 1 + t * 0.62;
      el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) rotateY(${(-t * 28).toFixed(1)}deg) scale(${Math.max(0.2, s).toFixed(3)})`;
      el.style.opacity = Math.max(0, 1 - a * 0.95).toFixed(3);
      el.style.setProperty("--lbl", Math.max(0, 1 - a * 2.6).toFixed(3));
    }
    if (count.current) {
      const n = Math.min(tech.length, Math.max(1, Math.round(k) + 1));
      count.current.textContent = String(n).padStart(2, "0");
    }
  };

  const ref = useScrollProgress(apply);

  useEffect(() => {
    apply(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="tc" ref={ref} style={{ "--n": tech.length }} aria-labelledby="tc-title">
      <h2 id="tc-title" className="sr-only">
        Technologien
      </h2>
      <div className="tc__stage">
        <ul className="tc__ring">
          {tech.map((t, i) => (
            <li key={t.name} className="tc__item" ref={(el) => (items.current[i] = el)}>
              <span className="tc__tile glass">
                <Icon name={t.icon} size={64} />
              </span>
              <span className="tc__name">{t.name}</span>
              <span className="tc__note dim">{t.note}</span>
            </li>
          ))}
        </ul>

        <div className="wrap tc__foot">
          <span className="meta">
            <span ref={count}>01</span> / {String(tech.length).padStart(2, "0")}
          </span>
          <Link to="/my-work" className="ul tc__more">
            Alle Technologien <Icon name="arrow" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
