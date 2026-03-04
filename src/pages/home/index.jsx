import React from "react";
import "./index.css";
import WriteText from "../../comp/write-text";
import AnimCt from "../../comp/amim-ct";
import { Link } from "react-router-dom";
import BlurText from "../../comp/react-bits/blur-text";

function Home() {
  function scrollTo(id) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <>
      <section className="home flex bg-image" id="page-top">
        <h1 style={{ fontSize: "max(3dvw, 30px)" }}>
          {innerWidth > 500 ? (
            <WriteText text="Manuel Westermeier" />
          ) : (
            <BlurText text="Manuel Westermeier" />
          )}
        </h1>
        <p>
          {innerWidth > 500 ? (
            <WriteText
              text="Full-Stack Web Entwickler | Software Engineer"
              timeToNextChar={40}
            />
          ) : (
            <BlurText
              text="Full-Stack Entwickler | Software Engineer"
              timeToNextChar={40}
            />
          )}
        </p>
        <button
          className="flex trigger-btn"
          onClick={() => scrollTo("my-work")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </button>
      </section>

      <section id="my-work" className="flex">
        <h1 style={{ fontSize: "max(2dvw, 25px)" }}>
          <AnimCt>
            <WriteText text="Über mich" timeToNextChar={20} />
          </AnimCt>
        </h1>
        <AnimCt>
          <p>
            <WriteText
              text="Ich bin Leidenschaftlicher Entwickler aus dem Chiemgau."
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="Ich entwickle maßgeschneiderte Softwarelösungen -"
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="von Webapps, Websites bis Embedded-Systemen."
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="Zusätzlich arbeite ich im Sounddesign und an Musikproduktionen"
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="für Apps, Videospiele und Medienprojekte."
              timeToNextChar={20}
            />
          </p>
        </AnimCt>

        <Link to="/my-work">mehr erfahren </Link>
        <Link to="/contact">Website oder App güstig Kaufen?</Link>
      </section>

      <section id="projects" className="flex bg-image home">
        <h1 style={{ fontSize: "max(2dvw, 25px)" }}>
          <AnimCt>
            <WriteText text="Projekte & Erfahrungen" timeToNextChar={20} />
          </AnimCt>
        </h1>
        <AnimCt>
          <p>
            <WriteText
              text="Ich habe über 300 realisierte Projekte -"
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="von Tools bis komplexen Systemen."
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="Hier finden Sie eine Auswahl meiner wichtigsten Projekte."
              timeToNextChar={20}
            />
          </p>
        </AnimCt>

        <Link to="/projects">Projekte ansehen</Link>
      </section>

      <section id="contact" className="flex">
        <h1 style={{ fontSize: "max(2dvw, 25px)" }}>
          <AnimCt>
            <WriteText text="Kontakt aufnehmen" timeToNextChar={20} />
          </AnimCt>
        </h1>

        <Link to="/contact">Meine Kontaktdaten</Link>
      </section>
    </>
  );
}

export default Home;
