import React from "react";

/* Pokal in der Farbe der Platzierung: Gold für Siege und 1. Preise,
   Silber für 2., Bronze für 3., Stahlblau für Sonderpreise und Stipendien. */
const TIERS = [
  [/bundessieg|regionalsieg|1\.\s*preis|landessieg/i, ["#FFE08A", "#E3A812", "#9A6B00"]],
  [/2\.\s*preis/i, ["#F4F6F8", "#B8C0CA", "#6E7782"]],
  [/3\.\s*preis/i, ["#F2C29B", "#C27A3A", "#7A4519"]],
  [/sonderpreis|stipendium/i, ["#DCE6FF", "#7FA2F5", "#3A5BB8"]],
];

export const trophyTier = (text = "") => TIERS.find(([re]) => re.test(text))?.[1] || null;

let uid = 0;

export default function Trophy({ prize, size = 18, className = "" }) {
  const c = trophyTier(prize);
  if (!c) return null;
  const id = `tg${++uid}`;
  return (
    <svg className={`trophy ${className}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c[0]} />
          <stop offset="0.55" stopColor={c[1]} />
          <stop offset="1" stopColor={c[2]} />
        </linearGradient>
      </defs>
      {/* Henkel */}
      <path d="M7 5.5H4.5a.5.5 0 0 0-.5.5c0 2.6 1.4 4.4 3.6 4.9M17 5.5h2.5a.5.5 0 0 1 .5.5c0 2.6-1.4 4.4-3.6 4.9" fill="none" stroke={c[1]} strokeWidth="1.6" strokeLinecap="round" />
      {/* Kelch */}
      <path d="M6.8 3.5h10.4v4.2a5.2 5.2 0 0 1-10.4 0z" fill={`url(#${id})`} />
      {/* Glanz */}
      <path d="M9 5v2.6a3 3 0 0 0 1.2 2.4" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.1" strokeLinecap="round" />
      {/* Stiel und Sockel */}
      <path d="M10.6 12.6h2.8l-.5 3.4h-1.8z" fill={c[1]} />
      <rect x="7.5" y="16.5" width="9" height="3.6" rx="1.2" fill={`url(#${id})`} />
    </svg>
  );
}
