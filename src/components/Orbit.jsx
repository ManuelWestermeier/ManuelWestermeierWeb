import React, { useMemo } from "react";

/* Wireframe-Kugel aus reinen CSS-3D-Ringen. Die Knoten stehen für ein
   Mesh-Netz (LHRP); einer davon trägt den Akzent. Keine Leuchteffekte. */
const MERIDIANS = 12;
const LATITUDES = [-60, -30, 0, 30, 60];
const NODES = [
  [20, 35], [95, -20], [160, 50], [215, 10], [280, -45], [330, 25], [60, -60], [250, 65],
];

export default function Orbit({ className = "" }) {
  const rings = useMemo(
    () => [
      ...Array.from({ length: MERIDIANS }, (_, i) => ({
        key: `m${i}`,
        t: `rotateY(${(180 / MERIDIANS) * i}deg)`,
      })),
      ...LATITUDES.map((lat) => {
        const r = (lat * Math.PI) / 180;
        return {
          key: `l${lat}`,
          t: `rotateX(90deg) translateZ(calc(var(--R) * ${Math.sin(r).toFixed(4)})) scale(${Math.cos(r).toFixed(4)})`,
          lat: true,
        };
      }),
    ],
    [],
  );

  return (
    <div className={`orbit ${className}`} aria-hidden="true">
      <div className="orbit__tilt">
        <div className="orbit__spin">
          {rings.map(({ key, t, lat }) => (
            <span key={key} className={`orbit__ring${lat ? " orbit__ring--lat" : ""}`} style={{ transform: t }} />
          ))}
          {NODES.map(([lon, lat], i) => (
            <span
              key={i}
              className={`orbit__node${i === 2 ? " orbit__node--on" : ""}`}
              style={{ transform: `rotateY(${lon}deg) rotateX(${lat}deg) translateZ(var(--R))` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
