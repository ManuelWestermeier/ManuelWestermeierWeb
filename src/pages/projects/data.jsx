import React from "react";
import "./index.css";

function Img(props) {
  return (
    <a
      href={props.src}
      onClick={(e) => e.preventDefault() || e.target.classList.toggle("max")}
      onContextMenu={(e) =>
        e.preventDefault() || e.target.classList.toggle("max")
      }
    >
      <img {...props} />
    </a>
  );
}

function Iframe(props) {
  return <iframe {...props} style={{ borderRadius: "10px" }} frameBorder={0} />;
}

export const data = {
  carGame: {
    name: "Car Game (3D)",
    elem: (
      <>
        <Img
          className="img"
          src="https://manuel-westermeier.netlify.app/car-game_2.png"
          alt="bild"
        />
        <Img
          className="img"
          src="https://manuel-westermeier.netlify.app/car-game-back.png"
          alt="bild"
        />
        <a
          target="_blank"
          href="https://play.unity.com/mg/other/webgl-builds-363726"
        >
          Spielen
        </a>
      </>
    ),
  },
  birdGame: {
    name: "Bird Game (2D)",
    elem: (
      <>
        <Img
          className="img"
          src="https://manuel-westermeier.netlify.app/bird-game.jpg"
          alt="bild"
        />
        <p>Ein spaßiges Spiel in dem ein Vogel die Welt erkundet....</p>
        <a
          target="_blank"
          href="https://play.unity.com/mg/other/webgl-builds-356896"
        >
          Spielen
        </a>
      </>
    ),
  },
  carGameTop: {
    name: "Car Game Top (3D)",
    elem: (
      <>
        <Img
          style={{ height: "200px" }}
          className="img"
          src="https://manuel-westermeier.netlify.app/car-top.png"
          alt="bild"
        />
        <Img
          className="img"
          src="https://manuel-westermeier.netlify.app/car-top-play.png"
          alt="bild"
        />
        <a
          target="_blank"
          href="https://play.unity.com/mg/other/webgl-builds-368263"
        >
          Spielen
        </a>
      </>
    ),
  },
  browser: {
    name: "Browser",
    elem: (
      <>
        <Img
          className="img"
          src="https://manuel-westermeier.netlify.app/browser-1.png"
          alt="bild"
        />
        <Img
          className="img"
          src="https://manuelwestermeier.github.io/img/Browser2.jpg"
          alt="bild"
        />
        <p>
          Ein eigener Browser erstellt mit Electron mit Tab sowie Extesion- und
          Farbthmefunktion.
        </p>
      </>
    ),
  },
  notenBuch: {
    name: "Notenbuch",
    elem: (
      <>
        <p>
          Eine Notenbuchapp für Lehrer und Schüler mit dem man Noten berechnen
          und veranschaulichen kann.
        </p>
        <Img
          alt="Bild"
          src="https://manuel-westermeier.netlify.app/nb-student.png"
        />
        <Img
          alt="Bild"
          src="https://manuel-westermeier.netlify.app/nb-class.png"
        />
        <Img
          alt="Bild"
          src="https://manuel-westermeier.netlify.app/nb-main.png"
        />
        <a href="https://noten-buch.netlify.app" target="_blank">
          Öffnen
        </a>
      </>
    ),
  },
  memoryGame: {
    name: "Memory-Game",
    elem: (
      <>
        <p>Das beste Memory-Game online. (ohne Werbung)</p>
        <Img
          alt="Bild"
          src="https://manuelwestermeier.github.io/memory_game/logo.jpg"
        />
        <br />
        <a
          href="https://manuelwestermeier.github.io/memory_game/"
          target="_blank"
        >
          Öffnen
        </a>
      </>
    ),
  },
  vPresent: {
    name: "V-Present",
    elem: (
      <>
        <p>Eine Presentationssoftware, die Markdown nutzt</p>
        <Iframe src="https://manuelwestermeier.github.io/v-present/" />
        <a
          href="https://manuelwestermeier.github.io/v-present/"
          target="_blank"
        >
          Öffnen
        </a>
      </>
    ),
  },
  desktopAppFramkeWork: {
    name: "Desktopapp Framework",
    elem: (
      <>
        <p>Ein App Framework, dass html, css, js und c++ im backend nutzt</p>
        <a
          href="https://github.com/manuelWestermeier/next-gen-exe"
          target="_blank"
        >
          [ Source Code ]
        </a>
        <Iframe src="https://manuelwestermeier.github.io/next-gen-exe/" />
      </>
    ),
  },
  wsnet: {
    name: "WSNET Framework && WSNET Starter",
    elem: (
      <>
        <p>
          WSNET Framework : ein Full Stack Framework, das schnelle und
          bidirektionale Kommunikation zwischen Client und Server ermöglicht.
          <br />
          <a
            href="https://github.com/ManuelWestermeier/WSNET_Framework"
            target="_blank"
          >
            [Code auf Github]
          </a>
        </p>
        <p>
          WSNET Starter : Ein React, Vite, Bootstrap CSS und Node JS starter
          template, das Dinge wie die Verbindung, Authentifizierung und Routing
          mit sich bringt.
          <br />
          <a
            href="https://github.com/ManuelWestermeier/WSNET_STARTER"
            target="_blank"
          >
            [Code auf Github]
          </a>
        </p>
      </>
    ),
  },
  quatchapp: {
    name: "Quatsch App (Messenger)",
    elem: (
      <>
        <p>
          Full Stack realtime Chattapp mit öffentlichen und privaten Chats,
          Kontakten und vieles mehr...
        </p>
        <Img
          className="img"
          src="https://manuel-westermeier.netlify.app/Chatt.jpg"
          alt="Bild"
        />
        <Img
          className="img"
          src="https://manuel-westermeier.netlify.app/Contacts.jpg"
          alt="Bild"
        />
        <Img
          className="img"
          src="https://manuel-westermeier.netlify.app/Invite.jpg"
          alt="Bild"
        />
        <Img
          className="img"
          src="https://manuel-westermeier.netlify.app/Invite-2.jpg"
          alt="Bild"
        />
        <p>Auf Anfrage testbar</p>
      </>
    ),
  },
  wop: {
    name: "Wahrheit oder Pflicht App",
    elem: (
      <>
        <p>Eine gratis Wahrheit oder Pflicht App</p>
        <Img
          alt="Bild"
          src="https://manuel-westermeier.netlify.app/wop-create.png"
        />
        <Img
          alt="Bild"
          src="https://manuel-westermeier.netlify.app/wop-ask.png"
        />
        <Img
          alt="Bild"
          src="https://manuel-westermeier.netlify.app/wop-users.png"
        />
        <p>Auf Anfrage testbar</p>
      </>
    ),
  },
  conntacts: {
    name: "Business Contacts",
    elem: (
      <>
        <p>Eine Businessapp mit der man Freelancer weltweit finden kann.</p>
        <Img
          alt="Bild"
          src="https://manuel-westermeier.netlify.app/c-data.png"
        />
        <Img
          alt="Bild"
          src="https://manuel-westermeier.netlify.app/c-search.png"
        />
        <Img
          alt="Bild"
          src="https://manuel-westermeier.netlify.app/c-form.png"
        />
        <p>Auf Anfrage testbar</p>
      </>
    ),
  },
};
