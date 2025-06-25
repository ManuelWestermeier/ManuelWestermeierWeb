import React from "react";
import "./index.css";

function Img(props) {
  return (
    <a
      href={props.src}
      onClick={(e) => e.preventDefault() || e.target.classList.toggle("max")}
      // onContextMenu={(e) =>
      //   e.preventDefault() || e.target.classList.toggle("max")
      // }
    >
      <img {...props} />
    </a>
  );
}

function Iframe(props) {
  return <iframe {...props} style={{ borderRadius: "10px" }} frameBorder={0} />;
}

export const data = {
  browserV3: {
    name: "MW-Browser V3",
    elem: (
      <>
        <p>Der beste Browser mit Swipe-Multitab funktionalität</p>
        <Img src="https://github.com/user-attachments/assets/66d0bcf0-918e-4576-9a45-9cc1b9d54cd5"></Img>
      </>
    ),
  },
  privusChat: {
    name: "PrivusChat",
    elem: (
      <>
        <p>Der sicherste Chat-App/Messenger der Welt.</p>
        <p>
          Implementiert mit symetrischen (quantencomputersicheren)
          Verschlüsselungsverfahren (AES)
        </p>
        <p>
          <a href="https://privuschat.github.io/easy-messenger/">
            Website Öffnen & Testen
          </a>
        </p>
        <p>
          <a href="https://github.com/ManuelWestermeier/easy-messenger">
            Source Code
          </a>
        </p>
        <Img src="https://github.com/ManuelWestermeier/easy-messenger/blob/main/public/img/screenshot1.png?raw=true" />
        <Img src="https://github.com/ManuelWestermeier/easy-messenger/blob/main/public/img/screenshot3.png?raw=true" />
      </>
    ),
  },
  carGame: {
    name: "Car Game (3D)",
    elem: (
      <>
        <Img
          className="img"
          src="https://manuelwestermeier.github.io/home-page/car-game_2.png"
          alt="bild"
        />
        <Img
          className="img"
          src="https://manuelwestermeier.github.io/home-page/car-game-back.png"
          alt="bild"
        />
        <a
          target="_blank"
          href="https://play.unity.com/en/games/c07e7711-8f85-4b24-8091-6cebc8543cae/singemulti-player-car-game"
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
          src="https://manuelwestermeier.github.io/home-page/bird-game.jpg"
          alt="bild"
        />
        <p>Ein spaßiges Spiel in dem ein Vogel die Welt erkundet....</p>
        <a
          target="_blank"
          href="https://play.unity.com/en/games/e6fb7edc-ba03-48ea-ba03-e7e3d5e4094f/bird-game-manuel111"
        >
          Spielen
        </a>
      </>
    ),
  },
  jumpAndDrive: {
    name: "Jump and Drive",
    elem: (
      <>
        <Img
          className="img"
          src="https://raw.githubusercontent.com/ManuelWestermeier/manuelwestermeier.github.io/refs/heads/main/Car.png"
          alt="bild"
        />
        <p>
          Ein Spiel, in dem man zwischen einem klassischen "Jump and Run" und
          einem Auto wechseln muss, um Level zu meistern.
        </p>
        <Img
          className="img"
          src="https://raw.githubusercontent.com/ManuelWestermeier/manuelwestermeier.github.io/refs/heads/main/Player.png"
          alt="bild"
        />
        <br />
        <a
          target="_blank"
          href="https://play.unity.com/en/games/fe032d11-f973-4ba8-ad86-a89fe01f9047/webgl-build-jump-and-drive"
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
          src="https://manuelwestermeier.github.io/home-page/car-top.png"
          alt="bild"
        />
        <Img
          className="img"
          src="https://manuelwestermeier.github.io/home-page/car-top-play.png"
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
  hiddenFs: {
    name: "Hidden-FS",
    elem: (
      <>
        verschlüsselt Videos, Bilder, Audios, PDFs und alle anderen Dateitypen
        lokal einzeln mit passwortbasierter AES-Verschlüsselung in einem
        verborgenen Container, sodass ohne dein Passwort niemand Zugriff auf die
        Inhalte hat.
        <br />
        <a href="https://hidden-fs.duckdns.org" target="_blank">
          Öffnen
        </a>
        <Img
          alt="Hidden FS Logo"
          src="https://hidden-fs.duckdns.org/favicon.ico"
        />
      </>
    ),
  },
  notenBuch: {
    name: "Notenbuch",
    elem: (
      <>
        <p>
          Eine Notenbuchapp für Lehrer und Schüler mit der man Noten berechnen
          und veranschaulichen kann.
        </p>
        <Img
          alt="Bild"
          src="https://manuelwestermeier.github.io/home-page/nb-student.png"
        />
        <Img
          alt="Bild"
          src="https://manuelwestermeier.github.io/home-page/nb-class.png"
        />
        <Img
          alt="Bild"
          src="https://manuelwestermeier.github.io/home-page/nb-main.png"
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

        <a
          href="https://manuelwestermeier.github.io/v-present/#/project/0"
          target="_blank"
        >
          Öffnen (Projekt-View)
        </a>
        <br />
        <a
          href="https://manuelwestermeier.github.io/v-present/"
          target="_blank"
        >
          Öffnen (Start Seite)
        </a>
        <br />
        <Img
          alt="Logo V-Present"
          src="https://manuelwestermeier.github.io/v-present/logo.jpg"
        />
      </>
    ),
  },
  esp32c6OS: {
    name: "ESP32 C6 OS",
    elem: (
      <>
        <video
          className="img"
          style={{ width: "100%" }}
          src="https://raw.githubusercontent.com/ManuelWestermeier/manuelwestermeier.github.io/refs/heads/main/esp32_141os.mp4"
          alt="esp32c6 bild"
          loop
          onClick={(e) => e.target.play()}
          autoPlay
          muted
        />
        <p>
          Ein Betriebssystem, das auf einem 1-Euro-ESP32 mit einem 1,41 Zoll
          großen Display und nur einem einzigen Knopf läuft. Es unterstützt
          mehrere Accounts, ist verschlüsselt und bietet Internetzugang.
          Mitgeliefert werden eine Suchmaschine, ein Browser und eine virtuelle
          Tastatur, die über den einzigen Knopf mittels Gesten wie Doppelklick,
          langem Klick und einfachem Klick gesteuert wird. Außerdem gehören ein
          serverseitiges JavaScript-Framework sowie ein eigenes Protokoll zum
          System. Alle Inhalte werden serverseitig gerendert und als Anweisungen
          an den ESP32 übertragen. Dieser ist in der Lage, Auswahlmenüs,
          Grafiken, Texte und vieles mehr zu verarbeiten und darzustellen.
          Zusätzlich verfügt das System über einen clientseitigen Speicher.
        </p>
        <Img
          className="img"
          src="https://raw.githubusercontent.com/ManuelWestermeier/manuelwestermeier.github.io/refs/heads/main/esp32_141os.jpg"
          alt="esp32c6 bild"
        />
        <br />
        <a
          href="https://github.com/ManuelWestermeier/mw-141-os"
          target="_blank"
        >
          Source Code
        </a>
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
          src="https://manuelwestermeier.github.io/home-page/Chatt.jpg"
          alt="Bild"
        />
        <Img
          className="img"
          src="https://manuelwestermeier.github.io/home-page/Contacts.jpg"
          alt="Bild"
        />
        <Img
          className="img"
          src="https://manuelwestermeier.github.io/home-page/Invite.jpg"
          alt="Bild"
        />
        <Img
          className="img"
          src="https://manuelwestermeier.github.io/home-page/Invite-2.jpg"
          alt="Bild"
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
          src="https://manuelwestermeier.github.io/home-page/c-data.png"
        />
        <Img
          alt="Bild"
          src="https://manuelwestermeier.github.io/home-page/c-search.png"
        />
        <Img
          alt="Bild"
          src="https://manuelwestermeier.github.io/home-page/c-form.png"
        />
        <p>Auf Anfrage testbar</p>
      </>
    ),
  },
  browser: {
    name: "Browser V1",
    elem: (
      <>
        <Img
          className="img"
          src="https://manuelwestermeier.github.io/home-page/browser-1.png"
          alt="bild"
        />
        <Img
          className="img"
          src="https://manuelwestermeier.github.io/img/Browser2.jpg"
          alt="bild"
        />
        <p>
          Ein eigener Browser erstellt mit Electron mit Tab sowie Extesion- und
          Farbthemenwächelfunktion.
        </p>
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
  wop: {
    name: "Wahrheit oder Pflicht App",
    elem: (
      <>
        <p>Eine gratis Wahrheit oder Pflicht App</p>
        <Img
          alt="Bild"
          src="https://manuelwestermeier.github.io/home-page/wop-create.png"
        />
        <Img
          alt="Bild"
          src="https://manuelwestermeier.github.io/home-page/wop-ask.png"
        />
        <Img
          alt="Bild"
          src="https://manuelwestermeier.github.io/home-page/wop-users.png"
        />
        <p>Auf Anfrage testbar</p>
      </>
    ),
  },
};
