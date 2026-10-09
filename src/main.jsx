import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Schriften lokal ausgeliefert (DSGVO: keine Verbindung zu Google Fonts)
import "@fontsource-variable/stack-sans-notch";
import "@fontsource-variable/stack-sans-text";

import "./index.css";
import "./pages.css";
import App from "./App.jsx";

// ?cw=n blendet den ChiemWeb-Hinweis aus. Bewusst ohne localStorage,
// damit nichts auf dem Endgerät gespeichert wird (§ 25 TDDDG).
window.cw = new URL(document.location).searchParams.get("cw") !== "n";

if (
  !["http://localhost:4000", "http://localhost:5173", "http://localhost:4173", "http://localhost", "https://manuel-westermeier.de"].includes(
    document.location.origin,
  )
) {
  document.location = "https://manuel-westermeier.de";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
