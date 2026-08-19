import React from "react";

/**
 * Thin stepped waveform used as the section-transition seam instead of a
 * hard border — nods to Manuel's embedded/audio work (PCB trace / signal
 * plot) rather than a generic decorative wave.
 */
export default function SignalTrace({ color = "var(--accent-bright)", opacity = 0.8 }) {
  return (
    <div className="signal-trace" aria-hidden="true">
      <svg viewBox="0 0 400 32" preserveAspectRatio="none">
        <polyline
          points="0,16 40,16 55,4 75,28 95,16 140,16 155,24 175,6 195,16 240,16 255,4 275,26 295,16 340,16 355,22 375,8 400,16"
          fill="none"
          stroke={color}
          strokeOpacity={opacity}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
