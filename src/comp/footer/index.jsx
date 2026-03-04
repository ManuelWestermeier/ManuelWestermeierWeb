import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex gap center">
      <div className="flex col gap">
        <a
          target="_blank"
          href="https://www.youtube.com/@TAGESSCHATTEN?sub_confirmation=1"
        >
          Youtube
        </a>
        <a
          target="_blank"
          href="https://play.unity.com/en/user/66818d56-98e8-499c-8fca-b3eb98a886c7"
        >
          Unity
        </a>
      </div>
      <div className="flex col gap">
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </div>
      <div className="flex col gap">
        <Link to="/contact">Kontakt</Link>
        <a target="_blank" href="https://github.com/manuelWestermeier/">
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
