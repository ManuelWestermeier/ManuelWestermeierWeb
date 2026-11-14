import React from "react";

/* Schematische Diagramme für Projekte ohne gute Bildschirmfotos.
   Reines SVG: gestochen scharf, ein paar Hundert Byte, keine Requests. */

const W = "rgba(255,255,255,0.86)";
const D = "rgba(255,255,255,0.22)";
const B = "#1e5bff";
const Y = "#ffd400";

const Box = ({ x, y, w, h, label, sub, hl }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="14" fill="rgba(255,255,255,0.03)" stroke={hl ? B : D} strokeWidth={hl ? 1.5 : 1} />
    <text x={x + w / 2} y={y + h / 2 + (sub ? -4 : 6)} textAnchor="middle" fill={W} fontSize="18" fontWeight="400">
      {label}
    </text>
    {sub && (
      <text x={x + w / 2} y={y + h / 2 + 20} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="13" letterSpacing="1.5">
        {sub}
      </text>
    )}
  </g>
);

const Arrow = ({ x1, y1, x2, y2, both, color = D, dash }) => (
  <g stroke={color} strokeWidth="1.5" fill="none" strokeDasharray={dash}>
    <line x1={x1} y1={y1} x2={x2} y2={y2} />
    <path d={`M${x2 - 8} ${y2 - 6} L${x2} ${y2} L${x2 - 8} ${y2 + 6}`} transform={`rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI} ${x2} ${y2})`} />
    {both && <path d={`M${x1 + 8} ${y1 - 6} L${x1} ${y1} L${x1 + 8} ${y1 + 6}`} transform={`rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI} ${x1} ${y1})`} />}
  </g>
);

/* Baum-Mesh: Wurzel, zwei Ebenen Knoten, Pakete laufen entlang der Kanten */
function Lhrp() {
  const root = [400, 90];
  const l1 = [[220, 230], [400, 230], [580, 230]];
  const l2 = [[150, 380], [270, 380], [350, 380], [450, 380], [530, 380], [650, 380]];
  const edges = [
    [root, l1[0]], [root, l1[1]], [root, l1[2]],
    [l1[0], l2[0]], [l1[0], l2[1]], [l1[1], l2[2]], [l1[1], l2[3]], [l1[2], l2[4]], [l1[2], l2[5]],
  ];
  return (
    <>
      {edges.map(([a, b], i) => (
        <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={i === 1 || i === 6 ? B : D} strokeWidth={i === 1 || i === 6 ? 2 : 1.2} />
      ))}
      <path d="M150 380 C 150 450, 650 450, 650 380" stroke={D} strokeDasharray="4 6" fill="none" />
      <circle cx={root[0]} cy={root[1]} r="16" fill={Y} />
      {l1.map(([x, y]) => <circle key={x} cx={x} cy={y} r="11" fill={W} />)}
      {l2.map(([x, y]) => <circle key={x} cx={x} cy={y} r="8" fill="none" stroke={W} strokeWidth="1.5" />)}
      <circle r="4" fill={B}>
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M350 380 L400 230 L400 90" />
      </circle>
      <text x="430" y="96" fill="rgba(255,255,255,0.5)" fontSize="13" letterSpacing="1.5">ROOT</text>
      <text x="400" y="470" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="13" letterSpacing="1.5">ESP-MESH · AES</text>
    </>
  );
}

function Wsnet() {
  return (
    <>
      <Box x={70} y={110} w={200} h={90} label="Browser" sub="CLIENT" />
      <Box x={70} y={300} w={200} h={90} label="Node.js" sub="CLIENT" />
      <Box x={530} y={200} w={200} h={100} label="wsnet-server" sub="NPM" hl />
      <Arrow x1={276} y1={160} x2={524} y2={235} both color={B} />
      <Arrow x1={276} y1={345} x2={524} y2={265} both color={B} />
      <circle r="4" fill={Y}>
        <animateMotion dur="1.8s" repeatCount="indefinite" path="M276 160 L524 235" />
      </circle>
      <circle r="4" fill={W}>
        <animateMotion dur="2.2s" repeatCount="indefinite" path="M524 265 L276 345" />
      </circle>
      <text x="400" y="440" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="13" letterSpacing="1.5">WEBSOCKET · BIDIREKTIONAL</text>
    </>
  );
}

function HiddenFs() {
  return (
    <>
      {["Video", "Bild", "PDF"].map((l, i) => (
        <Box key={l} x={60} y={90 + i * 110} w={160} h={74} label={l} />
      ))}
      {[0, 1, 2].map((i) => (
        <Arrow key={i} x1={226} y1={127 + i * 110} x2={330} y2={250} />
      ))}
      <g transform="translate(340 190)">
        <rect width="120" height="120" rx="20" fill="rgba(30,91,255,0.12)" stroke={B} strokeWidth="1.5" />
        <rect x="38" y="52" width="44" height="36" rx="6" fill="none" stroke={Y} strokeWidth="2" />
        <path d="M46 52 v-10 a14 14 0 0 1 28 0 v10" fill="none" stroke={Y} strokeWidth="2" />
      </g>
      <Arrow x1={466} y1={250} x2={560} y2={250} color={B} />
      <Box x={566} y={200} w={180} h={100} label="Container" sub="IM BROWSER" />
      <text x="400" y="460" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="13" letterSpacing="1.5">PASSWORT → SCHLÜSSEL → VERSCHLÜSSELT</text>
    </>
  );
}

function NextGenExe() {
  return (
    <>
      <Box x={60} y={190} w={200} h={110} label="Oberfläche" sub="HTML · CSS · JS" />
      <Box x={300} y={190} w={200} h={110} label="Bridge" sub="IPC" hl />
      <Box x={540} y={190} w={200} h={110} label="Backend" sub="C++" />
      <Arrow x1={266} y1={245} x2={294} y2={245} both color={B} />
      <Arrow x1={506} y1={245} x2={534} y2={245} both color={B} />
      <rect x="40" y="150" width="720" height="190" rx="22" fill="none" stroke={D} strokeDasharray="5 7" />
      <text x="60" y="140" fill="rgba(255,255,255,0.45)" fontSize="13" letterSpacing="1.5">EINE .EXE</text>
    </>
  );
}

function VPresent() {
  return (
    <>
      <g transform="translate(70 110)">
        <rect width="250" height="280" rx="16" fill="rgba(255,255,255,0.03)" stroke={D} />
        {["# Titel", "", "- Punkt eins", "- Punkt zwei", "", "---", "", "## Folie 2"].map((t, i) => (
          <text key={i} x="22" y={44 + i * 28} fill={t.startsWith("#") ? Y : "rgba(255,255,255,0.7)"} fontSize="16" fontFamily="ui-monospace, monospace">
            {t}
          </text>
        ))}
      </g>
      <Arrow x1={340} y1={250} x2={420} y2={250} color={B} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${450 + i * 18} ${150 + i * 18})`}>
          <rect width="260" height="160" rx="12" fill={i === 2 ? "#0c0d12" : "rgba(255,255,255,0.03)"} stroke={i === 2 ? B : D} />
          {i === 2 && (
            <>
              <rect x="24" y="30" width="120" height="12" rx="6" fill={W} />
              <rect x="24" y="64" width="180" height="6" rx="3" fill={D} />
              <rect x="24" y="82" width="150" height="6" rx="3" fill={D} />
            </>
          )}
        </g>
      ))}
    </>
  );
}

function Memory() {
  const open = new Set([1, 6]);
  const done = new Set([3, 9]);
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => {
        const x = 175 + (i % 4) * 118;
        const y = 70 + Math.floor(i / 4) * 125;
        return (
          <g key={i}>
            <rect x={x} y={y} width="96" height="104" rx="14" fill={open.has(i) ? "rgba(30,91,255,0.16)" : "rgba(255,255,255,0.03)"} stroke={open.has(i) ? B : done.has(i) ? "rgba(255,255,255,0.08)" : D} />
            {open.has(i) && <circle cx={x + 48} cy={y + 52} r="16" fill={Y} />}
            {done.has(i) && <circle cx={x + 48} cy={y + 52} r="16" fill="none" stroke="rgba(255,255,255,0.18)" />}
          </g>
        );
      })}
    </>
  );
}

const MAP = { lhrp: Lhrp, wsnet: Wsnet, "hidden-fs": HiddenFs, "next-gen-exe": NextGenExe, "v-present": VPresent, memory: Memory };

export const hasSchema = (id) => id in MAP;

export default function Schema({ id, title }) {
  const C = MAP[id];
  if (!C) return null;
  return (
    <svg className="schema" viewBox="0 0 800 500" role="img" aria-label={`${title}: schematische Darstellung`} fontFamily="inherit">
      <C />
    </svg>
  );
}
