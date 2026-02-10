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
