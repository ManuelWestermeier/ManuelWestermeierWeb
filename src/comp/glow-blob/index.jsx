import React from "react";

/**
 * Animated glowing blob backdrop — slow drifting blurred radial shapes in
 * the section's accent hue. Pure CSS animation (transform), so it stays
 * cheap and respects prefers-reduced-motion via the .glow-blob rules.
 */
export default function GlowBlob({
  color = "var(--accent)",
  size = 420,
  top,
  left,
  right,
  bottom,
  slow = false,
  delay = 0,
}) {
  return (
    <div
      className={`glow-blob ${slow ? "animate-blob-float-slow" : "animate-blob-float"}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: color,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
