import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SplashCursor from "./comp/react-bits/splash-cursor";
import { HashRouter } from "react-router-dom";

function Main() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
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
  </> //</React.StrictMode>,
);
