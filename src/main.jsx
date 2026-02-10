import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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

if (document.location.hash == "#white") {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>:root {
  /* Backgrounds */
  --b: rgb(245, 247, 250) !important;          /* Haupt-Hintergrund (sehr hell) */
  --b-l: rgba(245, 247, 250, 0.8)!important;  /* Transparente Variante */
  --b-light: rgb(255, 255, 255)!important;    /* Karten / Panels */

  /* Content / Text */
  --c: rgb(20, 25, 30)!important;             /* Haupt-Textfarbe (dunkel) */

  /* Accent */
  --a: rgb(157, 247, 255)!important;           /* DodgerBlue, gut lesbar im White Mode */
}

.bg-image {
 background-image:
    linear-gradient(to bottom, var(--b), transparent),
    linear-gradient(to bottom, transparent, var(--b)),
    url("/bg.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(1);
}
</style>`,
  );
}
