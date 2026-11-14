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

    let intro = still ? 1 : 0;

    const size = () => {
      w = cv.clientWidth;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(w * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      /* Perspektive vergrößert die Vorderseite bis ×1.45 – Radius so wählen,
         dass auch die Umlaufbahn nie über den Canvas-Rand ragt */
      R = w * 0.3;
    };

    /* Großkreis-Bögen zwischen Knoten: Signale laufen darauf entlang */
    const LINKS = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [6, 1], [7, 3], [2, 7], [6, 4]];
    const slerp = (a, b, t) => {
      const d = Math.acos(Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])));
      const s = Math.sin(d) || 1;
      const k1 = Math.sin((1 - t) * d) / s, k2 = Math.sin(t * d) / s;
      return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, w);
      const e = 1 - Math.pow(1 - intro, 3);
      const Rr = R * (0.6 + 0.4 * e);
      const sy = Math.sin(spin + cy), cyy = Math.cos(spin + cy);
      const sx = Math.sin(cx), cxx = Math.cos(cx);
      const F = 3.2;
      const c = w / 2;
      const proj = ([x, y, z], k = 1) => {
        x *= k; y *= k; z *= k;
        const x1 = x * cyy + z * sy;
        const z1 = -x * sy + z * cyy;
        const y2 = y * cxx - z1 * sx;
        const z2 = y * sx + z1 * cxx;
        const s = F / (F - z2);
        return [c + x1 * Rr * s, c + y2 * Rr * s, z2];
      };

      ctx.globalAlpha = e;

      /* Kern: weiches Leuchten */
      const g = ctx.createRadialGradient(c - Rr * 0.3, c - Rr * 0.35, 0, c, c, Rr * 1.35);
      g.addColorStop(0, "rgba(90,140,255,0.32)");
      g.addColorStop(0.55, "rgba(30,91,255,0.10)");
      g.addColorStop(1, "rgba(30,91,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(c, c, Rr * 1.35, 0, Math.PI * 2);
      ctx.fill();

      ctx.lineWidth = 1;
      /* zwei Durchgänge: Rückseite gedämpft, Vorderseite klar */
      for (let pass = 0; pass < 2; pass++) {
        ctx.strokeStyle = pass === 0 ? "rgba(30,91,255,0.22)" : "rgba(140,175,255,0.55)";
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

      /* Umlaufbahn: geneigter Ring außerhalb der Kugel mit Satellit */
      const tilt = rad(64), ct = Math.cos(tilt), st = Math.sin(tilt);
      const orb = (t) => [Math.cos(t) * 1.32, Math.sin(t) * 1.32 * st, Math.sin(t) * 1.32 * ct];
      ctx.strokeStyle = "rgba(255,255,255,0.16)";
      ctx.setLineDash([2, 6]);
      ctx.beginPath();
      for (let k = 0; k <= SEG; k++) {
        const [px, py] = proj(orb((k / SEG) * Math.PI * 2));
        k ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);
      {
        const [px, py, pz] = proj(orb(spin * 3.2));
        ctx.globalAlpha = e * (pz >= 0 ? 1 : 0.35);
        ctx.fillStyle = "#ffd400";
        ctx.beginPath();
        ctx.arc(px, py, 3.6 * (0.8 + pz * 0.2), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = e;
      }

      /* Signale entlang der Verbindungen */
      const tt = spin * 14;
      ctx.lineWidth = 1.6;
      for (let i = 0; i < LINKS.length; i++) {
        const [a, b] = LINKS[i];
        const ph = (tt + i * 0.37) % 1.6;
        if (ph > 1) continue;
        const [hx, hy, hz] = proj(slerp(NODE_PTS[a], NODE_PTS[b], ph));
        const [qx, qy] = proj(slerp(NODE_PTS[a], NODE_PTS[b], Math.max(0, ph - 0.22)));
        if (hz < -0.2) continue;
        const lg = ctx.createLinearGradient(qx, qy, hx, hy);
        lg.addColorStop(0, "rgba(255,255,255,0)");
        lg.addColorStop(1, "rgba(255,255,255,0.9)");
        ctx.strokeStyle = lg;
        ctx.beginPath();
        ctx.moveTo(qx, qy);
        ctx.lineTo(hx, hy);
        ctx.stroke();
      }

      for (let i = 0; i < NODE_PTS.length; i++) {
        const [px, py, pz] = proj(NODE_PTS[i]);
        const on = i === 2;
        const r = (on ? 4.5 : 2.8) * (0.75 + pz * 0.25);
        ctx.globalAlpha = e * (pz >= 0 ? 1 : 0.3);
        if (pz >= 0) {
          ctx.fillStyle = on ? "rgba(255,212,0,0.18)" : "rgba(140,175,255,0.18)";
          ctx.beginPath();
          ctx.arc(px, py, r * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = on ? "#ffd400" : "#ffffff";
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
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
      if (intro < 1) intro = Math.min(1, intro + dt / 1400);
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
