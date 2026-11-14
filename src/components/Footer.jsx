import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <p>© {new Date().getFullYear()} Manuel Westermeier</p>
        <nav aria-label="Rechtliches und Profile">
          <a href="https://github.com/ManuelWestermeier" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/manuel-westermeier/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.tiktok.com/@pdev111" target="_blank" rel="noopener noreferrer">TikTok</a>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
