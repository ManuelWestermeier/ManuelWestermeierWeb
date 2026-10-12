import React from "react";

/* Eigene Linien-Icons, 24er Raster, 1.25 Strich, currentColor. */
const paths = {
  arrow: <path d="M7 17 17 7M9 7h8v8" />,
  plus: <path d="M12 5v14M5 12h14" />,
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </>
  ),
  phone: <path d="M7.5 3.5h-2a2 2 0 0 0-2 2.2C4.3 13.6 10.4 19.7 18.3 20.5a2 2 0 0 0 2.2-2v-2l-4-1.5-2 2a12 12 0 0 1-5.5-5.5l2-2z" />,
  github: <path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 2.9 5.6 3.2 5.6 3.2a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.6c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  play: <path d="M8 5.5v13l10.5-6.5z" />,
  pause: <path d="M8.5 5.5v13M15.5 5.5v13" />,
  sound: <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5zM15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />,
  mute: <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5zM16 10l4 4M20 10l-4 4" />,
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10 9.2 5 2.8-5 2.8z" />
    </>
  ),
  tiktok: <path d="M13.5 3.5v11.2a3.6 3.6 0 1 1-3.6-3.6M13.5 3.5c.4 2.6 2.4 4.5 5 4.7" />,

  /* Technologien (Karussell) */
  "t-chip": (
    <>
      <rect x="6.5" y="7.5" width="11" height="11" rx="1.5" />
      <path d="M9.5 18.5V21M12 18.5V21M14.5 18.5V21M3.5 10.5h3M3.5 13h3M3.5 15.5h3M17.5 10.5h3M17.5 13h3M17.5 15.5h3M9 7.5V5.5l1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5v2" />
    </>
  ),
  "t-cpp": <path d="M9 4C7 4 6 5 6 7v2c0 1.5-.8 2.5-2.5 3 1.7.5 2.5 1.5 2.5 3v2c0 2 1 3 3 3M15 4c2 0 3 1 3 3v2c0 1.5.8 2.5 2.5 3-1.7.5-2.5 1.5-2.5 3v2c0 2-1 3-3 3" />,
  "t-rf": (
    <>
      <circle cx="12" cy="9.5" r="1.6" />
      <path d="M12 11.1V21M9.2 6.7a4 4 0 0 0 0 5.6M14.8 6.7a4 4 0 0 1 0 5.6M6.6 4.1a7.7 7.7 0 0 0 0 10.8M17.4 4.1a7.7 7.7 0 0 1 0 10.8M9 21h6" />
    </>
  ),
  "t-mesh": (
    <>
      <circle cx="12" cy="4.5" r="1.8" />
      <circle cx="5" cy="11" r="1.8" />
      <circle cx="19" cy="11" r="1.8" />
      <circle cx="8" cy="19" r="1.8" />
      <circle cx="16" cy="19" r="1.8" />
      <path d="m10.7 5.8-4.4 4M13.3 5.8l4.4 4M6 12.6l1.3 4.8M18 12.6l-1.3 4.8M9.8 19h4.4M6.8 11h10.4" />
    </>
  ),
  "t-jetson": (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="9" cy="12" r="3.3" />
      <path d="M9 8.7v6.6M5.7 12h6.6M15 9v6M17.2 9v6M19.4 9v6M6 18v2M18 18v2" />
    </>
  ),
  "t-yolo": (
    <>
      <path d="M4 8.5V4h4.5M15.5 4H20v4.5M20 15.5V20h-4.5M8.5 20H4v-4.5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 6.5v2.3M12 15.2v2.3M6.5 12h2.3M15.2 12h2.3" />
    </>
  ),
  "t-python": <path d="M12 3.5c-4 0-4 1.8-4 3v2.5h4.5V10H6.3c-1.8 0-3 1.3-3 4s1.2 4 3 4H8v-2.6c0-1.6 1.2-2.9 2.8-2.9h4.4c1.5 0 2.8-1.2 2.8-2.7V6.5c0-1.6-1.6-3-6-3zM16 8.5V6M12 20.5c4 0 4-1.8 4-3V15h-4.5v-1h6.2c1.8 0 3-1.3 3-4M10 18v-2" />,
  "t-ml": (
    <>
      <circle cx="5" cy="7" r="1.6" />
      <circle cx="5" cy="17" r="1.6" />
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
      <path d="m6.5 6.6 4-1.2M6.5 7.6l4 3.7M6.5 16.4l4-3.7M6.5 17.4l4 1.2M13.5 5.6l4 5.4M13.6 12h3.8M13.5 18.4l4-5.4" />
    </>
  ),
  "t-key": (
    <>
      <circle cx="8" cy="15.5" r="4" />
      <path d="m10.9 12.6 8.6-8.6M16.5 7l2.5 2.5M14 9.5l2 2" />
    </>
  ),
  "t-shield": <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6zM8.5 10.5h7M8.5 14h7M10.5 8v9M13.5 8v9" />,
  "t-server": (
    <>
      <rect x="4" y="3.5" width="16" height="5" rx="1.5" />
      <rect x="4" y="9.5" width="16" height="5" rx="1.5" />
      <rect x="4" y="15.5" width="16" height="5" rx="1.5" />
      <path d="M7.5 6h.01M7.5 12h.01M7.5 18h.01M11 6h5.5M11 12h5.5M11 18h5.5" />
    </>
  ),
  "t-node": <path d="M12 2.8 20 7.4v9.2l-8 4.6-8-4.6V7.4zM12 8v8M8.5 10l3.5 2 3.5-2" />,
  "t-ws": <path d="M4 9h15l-3.5-3.5M20 15H5l3.5 3.5" />,
  "t-p2p": (
    <>
      <rect x="2.5" y="8" width="6" height="8" rx="1.5" />
      <rect x="15.5" y="8" width="6" height="8" rx="1.5" />
      <path d="M8.5 12h7M11 10l-2.5 2 2.5 2M13 10l2.5 2-2.5 2" />
    </>
  ),
  "t-react": (
    <>
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  "t-ts": (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M7 11h5M9.5 11v6.5M17.5 11.6c-.6-.8-3-1-3 .7 0 1.8 3.2 1.3 3.2 3.2 0 1.6-2.4 1.7-3.3.8" />
    </>
  ),
  "t-electron": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <ellipse cx="12" cy="12" rx="8.5" ry="3.2" transform="rotate(-30 12 12)" />
      <circle cx="18.3" cy="8.6" r="1.1" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  "t-term": (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="m7 10 3 2.5L7 15M12.5 15.5h4.5" />
    </>
  ),
  "t-git": (
    <>
      <circle cx="6.5" cy="5.5" r="2" />
      <circle cx="6.5" cy="18.5" r="2" />
      <circle cx="17.5" cy="8.5" r="2" />
      <path d="M6.5 7.5v9M17.5 10.5c0 4-5 4-10 6.3" />
    </>
  ),
  "t-cloud": <path d="M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.5 1.5 3.8 3.8 0 0 1-.4 7.5z" />,
  "t-cube": <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12 4 7.5" />,
  "t-asm": (
    <>
      <rect x="3.5" y="4" width="17" height="4.5" rx="1" />
      <rect x="3.5" y="10" width="11" height="4.5" rx="1" />
      <rect x="3.5" y="16" width="14" height="4.5" rx="1" />
      <path d="M17.5 12.2h3" />
    </>
  ),
  "t-pcb": (
    <>
      <circle cx="5" cy="6" r="1.6" />
      <circle cx="19" cy="18" r="1.6" />
      <circle cx="19" cy="6" r="1.6" />
      <circle cx="5" cy="18" r="1.6" />
      <path d="M6.6 6H11l3 4h5M17.4 18H13l-3-4H5M19 7.6v2.4M5 16.4V14" />
    </>
  ),
  "t-wave": <path d="M3 12h1.5M6.5 9v6M10 5.5v13M13.5 8v8M17 10v4M20.5 11.5v1" />,

  /* Bereiche */
  Embedded: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" />
      <path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" />
    </>
  ),
  Netzwerk: (
    <>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M11 6.8 6 16.2M13 6.8l5 9.4M7 18h10" />
    </>
  ),
  Web: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5z" />
    </>
  ),
  Security: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2" />
    </>
  ),
  Spiele: (
    <>
      <path d="M7 8h10a4 4 0 0 1 4 4.4l-.4 3.3a2.5 2.5 0 0 1-4.5 1.2L14.5 15h-5l-1.6 1.9a2.5 2.5 0 0 1-4.5-1.2L3 12.4A4 4 0 0 1 7 8z" />
      <path d="M8 10.5v3M6.5 12h3M15.5 11.5h.01M17.5 13h.01" />
    </>
  ),
  Desktop: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M9 20h6M12 16.5V20" />
    </>
  ),
};

export default function Icon({ name, size = 18, className = "" }) {
  return (
    <svg
      className={`ico ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
