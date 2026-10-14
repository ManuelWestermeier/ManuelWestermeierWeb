import React, { useEffect, useRef } from "react";
import { finePointer, isLite, observeResize, observeVisible, reducedMotion } from "../lib/hooks";

/* Wireframe-Kugel als Canvas: ein einziges Element statt vieler 3D-Ebenen.
   Knoten stehen für ein Mesh-Netz (LHRP), einer trägt den Akzent.
   Läuft nur im Sichtbereich; auf Lite-Geräten mit 30 fps und DPR ≤ 1.5. */
const MERIDIANS = 12;
const LATITUDES = [-60, -30, 0, 30, 60];
const NODES = [
  [20, 35], [95, -20], [160, 50], [215, 10], [280, -45], [330, 25], [60, -60], [250, 65],
];
const SEG = 56;
const rad = (d) => (d * Math.PI) / 180;

/* Ringe einmal als Punktlisten auf der Einheitskugel vorberechnen */
const RINGS = [
  ...Array.from({ length: MERIDIANS }, (_, i) => {
    const a = (Math.PI / MERIDIANS) * i;
    return Array.from({ length: SEG + 1 }, (_, k) => {
      const t = (k / SEG) * Math.PI * 2;
      return [Math.cos(t) * Math.cos(a), Math.sin(t), Math.cos(t) * Math.sin(a)];
    });
  }),
  ...LATITUDES.map((lat) => {
    const y = Math.sin(rad(lat));
    const r = Math.cos(rad(lat));
    return Array.from({ length: SEG + 1 }, (_, k) => {
      const t = (k / SEG) * Math.PI * 2;
      return [Math.cos(t) * r, y, Math.sin(t) * r];
    });
  }),
];
const NODE_PTS = NODES.map(([lon, lat]) => [
  Math.cos(rad(lat)) * Math.sin(rad(lon)),
  Math.sin(rad(lat)),
  Math.cos(rad(lat)) * Math.cos(rad(lon)),
]);

export default function Orbit({ className = "", innerRef }) {
  const canvas = useRef(null);

  useEffect(() => {
    const cv = canvas.current;
    const ctx = cv.getContext("2d");
    const lite = isLite();
    const still = reducedMotion();
    const dpr = Math.min(window.devicePixelRatio || 1, lite ? 1.5 : 2);
    let w = 0, R = 0, raf = 0, running = false, lastT = 0;
    let spin = 0, tx = rad(-18), ty = 0, cx = tx, cy = ty;

    const size = () => {
      w = cv.clientWidth;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(w * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = w * 0.48;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, w);
      const sy = Math.sin(spin + cy), cyy = Math.cos(spin + cy);
      const sx = Math.sin(cx), cxx = Math.cos(cx);
      const F = 3.2;
      const proj = ([x, y, z]) => {
        const x1 = x * cyy + z * sy;
        const z1 = -x * sy + z * cyy;
        const y2 = y * cxx - z1 * sx;
        const z2 = y * sx + z1 * cxx;
        const s = F / (F - z2);
        return [w / 2 + x1 * R * s, w / 2 + y2 * R * s, z2];
      };

      ctx.lineWidth = 1;
      /* zwei Durchgänge: Rückseite gedämpft, Vorderseite klar */
      for (let pass = 0; pass < 2; pass++) {
        ctx.strokeStyle = pass === 0 ? "rgba(12,67,121,0.38)" : "rgba(30,90,150,0.85)";
        ctx.beginPath();
        for (let r = 0; r < RINGS.length; r++) {
          const ring = RINGS[r];
          let pen = false;
          for (let k = 0; k < ring.length; k++) {
            const [px, py, pz] = proj(ring[k]);
            const front = pz >= 0;
            if ((pass === 1) === front) {
              pen ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
              pen = true;
            } else pen = false;
          }
        }
        ctx.stroke();
      }

      for (let i = 0; i < NODE_PTS.length; i++) {
        const [px, py, pz] = proj(NODE_PTS[i]);
        const on = i === 2;
        ctx.globalAlpha = pz >= 0 ? 1 : 0.3;
        ctx.fillStyle = on ? "#32FAEA" : "#AAB5C1";
        ctx.beginPath();
        ctx.arc(px, py, (on ? 5 : 3.2) * (0.75 + pz * 0.25), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const frame = (t) => {
      raf = requestAnimationFrame(frame);
      if (lite && t - lastT < 32) return; /* ~30 fps */
      const dt = Math.min(64, t - (lastT || t));
      lastT = t;
      spin += dt * 0.00011;
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      draw();
    };

    const start = () => {
      if (running || still) return;
      running = true;
      lastT = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      tx = rad(-18 + (e.clientY / window.innerHeight - 0.5) * -14);
      ty = rad((e.clientX / window.innerWidth - 0.5) * 18);
    };

    size();
    draw();
    const unobserve = observeVisible(cv, (v) => (v ? start() : stop()));
    const unresize = observeResize(cv, () => {
      size();
      draw();
    });
    const fine = finePointer();
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      stop();
      unobserve();
      unresize();
      if (fine) window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className={`orbit ${className}`} ref={innerRef} aria-hidden="true">
      <canvas ref={canvas} />
    </div>
  );
}
