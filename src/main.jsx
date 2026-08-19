window.cw =
  localStorage.getItem("cw") == "false"
    ? false
    : new URL(document.location).searchParams.get("cw") != "n";

if (!window.cw) {
  localStorage.setItem("cw", "false");
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// ── Lokale Fonts (DSGVO-konform, kein Google-Fonts-Request) ──────────────────
// Benötigt: npm install @fontsource-variable/lora
//                       @fontsource-variable/instrument-sans
import "@fontsource-variable/lora"; // Variable Font: alle Gewichte
import "@fontsource-variable/instrument-sans"; // Variable Font: alle Gewichte
// ────────────────────────────────────────────────────────────────────────────

import "./index.css";
import SplashCursor from "./comp/react-bits/splash-cursor";
import { BrowserRouter } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <>
    <SplashCursor
      key={777}
      COLOR_UPDATE_SPEED={1}
      BACK_COLOR={{ r: 0, g: 0, b: 255 }}
    />
    <Main />
  </>, //</React.StrictMode>,
);