import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { reducedMotion, useScrollProgress, useVisible } from "../lib/hooks";

/* Stummer Loop des TWR-Boots. Lädt erst kurz vor dem Sichtbereich,
   pausiert außerhalb. Wächst beim Scrollen von 86 % auf volle Breite. */
export default function BoatFilm() {
  const video = useRef(null);
  const frame = useRef(null);
  const [paused, setPaused] = useState(reducedMotion());
  const userPaused = useRef(reducedMotion());

  const wrap = useScrollProgress((p) => {
    const f = frame.current;
    if (!f) return;
    const k = Math.min(1, p * 2.2);
    f.style.transform = `scale(${0.86 + k * 0.14})`;
  });

  const sentinel = useVisible((on) => {
    const v = video.current;
    if (!v) return;
    if (on) {
      if (!v.src) v.src = "/twr-loop.mp4";
      if (!userPaused.current) v.play().catch(() => setPaused(true));
    } else v.pause();
  }, "200px");

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (!v.src) v.src = "/twr-loop.mp4";
    if (v.paused) {
      userPaused.current = false;
      v.play();
      setPaused(false);
    } else {
      userPaused.current = true;
      v.pause();
      setPaused(true);
    }
  };

  return (
    <section className="film" ref={wrap} aria-label="TWR – autonomes Rettungsboot im Einsatz">
      <div className="film__sticky" ref={sentinel}>
        <div className="film__frame" ref={frame}>
          <video ref={video} muted loop playsInline preload="none" poster="/imag/twr-poster.webp" aria-hidden="true" />
          <div className="film__bar">
            <Link to="/projects#twr" className="film__cap glass">
              <span className="meta">TWR</span>
              <span>Das Boot fährt allein zur Person.</span>
              <Icon name="arrow" size={16} />
            </Link>
            <button className="film__btn glass" onClick={toggle} aria-label={paused ? "Video abspielen" : "Video pausieren"}>
              <Icon name={paused ? "play" : "pause"} size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
