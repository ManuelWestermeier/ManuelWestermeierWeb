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
              text="Full-Stack Entwickler | Software-Ingenieur | Technikliebhaber"
              timeToNextChar={40}
            />
          ) : (
            <BlurText
              text="Full-Stack Entwickler | Software-Ingenieur | Technikliebhaber"
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
            <WriteText text="Über mich & meine Arbeit" timeToNextChar={20} />
          </AnimCt>
        </h1>
        <AnimCt>
          <p>
            <WriteText
              text="Ich bin Manuel Westermeier - leidenschaftlicher Entwickler aus dem Chiemgau."
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="Ich konzipiere, entwickle und betreue individuelle Softwarelösungen -"
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="von modernen Webanwendungen bis hin zu Embedded-Systemen."
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="Neben der Programmierung habe ich mich in letzter Zeit auch intensiv mit"
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="Sounddesign und Musikproduktion beschäftigt - von digitalen Soundeffekten"
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="bis hin zu kompletten Musikstücken für Apps, Spiele oder Videos."
              timeToNextChar={20}
            />
          </p>
        </AnimCt>

        <Link to="/my-work">[ mehr über meine Arbeit ]</Link>
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
              text="Im Laufe der Jahre habe ich über 300 Projekte realisiert -"
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="von kleinen Tools bis zu komplexen Systemarchitekturen."
              timeToNextChar={20}
            />
            <br />
            <WriteText
              text="Eine Auswahl meiner spannendsten Arbeiten stelle ich Ihnen hier vor."
              timeToNextChar={20}
            />
          </p>
        </AnimCt>

        <Link to="/projects">[ zu den Projekten ]</Link>
      </section>

      <section id="contact" className="flex">
        <h1 style={{ fontSize: "max(2dvw, 25px)" }}>
          <AnimCt>
            <WriteText text="Kontakt aufnehmen" timeToNextChar={20} />
          </AnimCt>
        </h1>

        <Link to="/contact">[ meine Kontaktdaten ]</Link>
      </section>
    </>
  );
}

export default Home;
