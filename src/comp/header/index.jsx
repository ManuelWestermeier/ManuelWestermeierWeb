import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import BlurText from "../react-bits/blur-text";

function Header() {
  return (
    <header className="flex">
      <h2 style={{ display: "flex" }}>
        <Link to="/">
          {innerWidth < 500 ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <BlurText
                text="Manuel"
                delay={30}
                animateBy="chars"
                direction="top"
              />
              <BlurText
                text="Westermeier"
                delay={30}
                animateBy="chars"
                direction="top"
              />
            </div>
          ) : (
            <BlurText
              text="Manuel Westermeier"
              delay={30}
              animateBy="chars"
              direction="top"
            />
          )}
        </Link>
      </h2>
      <div style={{ gap: "10px" }} className="flex">
        <Link to="/my-work">Meine Arbeit</Link>
        <Link to="/projects">Meine Projekte</Link>
        <Link to="/contact">Kontakt</Link>
      </div>
    </header>
  );
}

export default Header;
