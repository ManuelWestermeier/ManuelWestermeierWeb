import React from "react";

/* SVG-Filter für die Lichtbrechung am Glasrand.
   Wird über backdrop-filter: url(#lg-refract) in Chromium genutzt,
   andere Browser fallen auf den reinen Blur zurück. */
export default function GlassFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
      <filter id="lg-refract" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="noise" />
        <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
        <feDisplacementMap in="SourceGraphic" in2="soft" scale="38" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
