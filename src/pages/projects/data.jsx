import React from "react";
import "./index.css";

const assets = {
  "https://web.manuel-westermeier.de/home-page/car-game_2.png":
    "/imag/car-game_2.jpg",
  "https://web.manuel-westermeier.de/home-page/car-game-back.png":
    "/imag/car-game-back.jpg",
  "https://web.manuel-westermeier.de/home-page/bird-game.jpg":
    "/imag/bird-game.jpg",
  "https://web.manuel-westermeier.de/Car.png": "/imag/car.jpg",
  "https://web.manuel-westermeier.de/Player.png": "/imag/player.jpg",
  "https://web.manuel-westermeier.de/home-page/car-top.png":
    "/imag/car-top.jpg",
  "https://web.manuel-westermeier.de/home-page/car-top-play.png":
    "/imag/car-top-play.jpg",
  "https://web.manuel-westermeier.de/home-page/nb-student.png":
    "/imag/nb-student.jpg",
  "https://web.manuel-westermeier.de/home-page/nb-class.png":
    "/imag/nb-class.jpg",
  "https://web.manuel-westermeier.de/home-page/nb-main.png":
    "/imag/nb-main.jpg",
  "https://web.manuel-westermeier.de/esp32_141os.jpg": "/imag/esp32_141os.jpg",
  "https://web.manuel-westermeier.de/home-page/Chatt.jpg": "/imag/chatt.jpg",
  "https://web.manuel-westermeier.de/home-page/Contacts.jpg":
    "/imag/contacts.jpg",
  "https://web.manuel-westermeier.de/home-page/Invite.jpg": "/imag/invite.jpg",
  "https://web.manuel-westermeier.de/home-page/c-data.png": "/imag/c-data.jpg",
  "https://web.manuel-westermeier.de/home-page/c-search.png":
    "/imag/c-search.jpg",
  "https://web.manuel-westermeier.de/home-page/c-form.png": "/imag/c-form.jpg",
  "https://web.manuel-westermeier.de/home-page/browser-1.png":
    "/imag/browser-1.jpg",
  "https://web.manuel-westermeier.de/img/Browser2.jpg": "/imag/browser-2.jpg",
  "https://web.manuel-westermeier.de/esp32_141os.mp4": "/imag/esp32_141os.mp4",
  "https://web.manuel-westermeier.de/home-page/TWR-VideoLQ.mp4":
    "/TWR-VideoLQ.mp4",
};

// SEO & Performance Optimized Image Component
function Img({ className, alt, ...otherProps }) {
  return (
    <div
      className={`img-wrapper ${className || ""}`}
      onClick={(e) => {
        const target = e.target.closest("img");
        if (target) target.classList.toggle("max");
      }}
      role="button"
      tabIndex={0}
      aria-label="Bild vergrößern"
    >
      <img
        loading="lazy"
        decoding="async"
        title="Klicken zum Vergrößern"
        alt={alt || "Projekt Screenshot"}
        {...otherProps}
      />
    </div>
  );
}

// Optimized Iframe for Accessibility
function Iframe(props) {
  return (
    <iframe
      {...props}
      title={props.title || "Project Demo Interaktiv"}
      style={{ borderRadius: "10px", width: "100%", border: "none" }}
      loading="lazy"
    />
  );
}

// Reusable Button Component (Syntax-Fehler behoben)
const LinkBtn = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    {children}
  </a>
);

export const data = {
  twr: {
    name: "TWR - Turbo Wasserrettung",
    elem: (
      <article>
        <p>
          Baywatch, aber futuristisch: Unser System erkennt mithilfe von KI
          eigenständig ertrinkende Personen per Kamera - von Landstationen oder
          Schiffen aus. Daraufhin wird ein autonomes, kleines Rettungsboot
          aktiviert, das zielgenau zur gefährdeten Person navigiert. Es bringt
          dieser eine Schwimmboje und zieht die Person sicher zurück an Land
          oder an Bord.
        </p>
        <p>
          Ausgezeichnet durch den <strong>1. Preis</strong> bei dem{" "}
          <strong>Jugend forscht</strong> Regionalwettbewerb.
        </p>
        <p>
          Mit über 20.000 Zeilen Software, 30.000 Bildern in den
          Erkennungs-Datensätzen, eigens entwickelten, verschlüsselten
          Protokollen und viel Entwicklungszeit gelang uns (Alexander Zuchenko &
          Manuel Westermeier) die Entwicklung eines autonomen und sicheren
          Wasserrettungssystems.
        </p>
        <div className="links-row">
          <LinkBtn href="https://twr-systems.de/">Mehr Infos</LinkBtn>
        </div>
        <video
          src={
            assets[
              "https://web.manuel-westermeier.de/home-page/TWR-VideoLQ.mp4"
            ]
          }
          title="Autonomes Turbo Wasser Rettungsboot in Aktion"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </article>
    ),
  },
  easyEinakuf: {
    name: "Easy-Einkauf",
    elem: (
      <article>
        <p>
          Die smarte Einkaufslisten-App für effizientes und schnelles Planen.
        </p>
        <div className="links-row">
          <LinkBtn href="https://easy-einkauf.de/">App Testen</LinkBtn>
        </div>
        <Img
          src="/imag/list-page.jpg"
          alt="Benutzeroberfläche der Easy-Einkauf App - Listenansicht"
        />
        <div className="social-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@easy-einkauf?sub_confirmation=1"
          >
            YouTube
          </a>{" "}
          •
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@easyeinkauf"
          >
            TikTok
          </a>{" "}
          •
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/easy.einkauf"
          >
            Instagram
          </a>
        </div>
      </article>
    ),
  },
  MW32OS: {
    name: "MW-OS (ESP32)",
    elem: (
      <article>
        <p>
          Ein vollwertiges Mini-Betriebssystem für ESP-32 Mikrocontroller mit
          Touch-Display.
        </p>
        <Img
          src="/imag/os/home.jpg"
          alt="Startbildschirm des MW-OS Betriebssystems"
        />
        <ul className="feature-list">
          <li>- Hardwarekosten &lt; 5 Euro</li>
          <li>- &gt; 22.000 Zeilen Code</li>
          <li>- SD-Support, Accounts & Verschlüsselung</li>
          <li>- Apps, Browser & Virtuelles Keyboard</li>
          <li>- Eigener App Manager & Moderne UI</li>
          <li>- WLAN-Konnektivität</li>
        </ul>
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/esp-wroom-2-4-inch-os">
            GitHub Repo
          </LinkBtn>
          <LinkBtn href="https://www.tiktok.com/@pdev111">TikTok Demo</LinkBtn>
          <p>
            <b>Jugend Forsch: Sonderpreis in Resourceneffizienz</b>:{" "}
            <LinkBtn href="https://wv.jugend-forscht.de/media/2025/project_120063/description/description_2026-01-26_22-41-07.pdf">
              Jugend Forsct Arbeit (PDF)
            </LinkBtn>
          </p>
        </div>
        <div className="gallery-grid">
          <Img src="/imag/os/paint.jpg" alt="MW-OS Paint Applikation" />
          <Img src="/imag/os/login.jpg" alt="MW-OS Login-Bildschirm" />
          <Img src="/imag/os/fs.jpg" alt="MW-OS Dateisystem Explorer" />
          <Img src="/imag/os/settings.jpg" alt="MW-OS System-Einstellungen" />
          <Img
            src="/imag/os/designer.jpg"
            alt="MW-OS User Interface Designer"
          />
          <Img src="/imag/os/wlan.jpg" alt="MW-OS WLAN Scanner" />
          <Img src="/imag/os/keyboard.jpg" alt="MW-OS Virtuelle Tastatur" />
        </div>
      </article>
    ),
  },
  browserV3: {
    name: "MW-Browser V3",
    elem: (
      <article>
        <p>
          Innovativer Webbrowser mit Swipe-Multitab Funktionalität für eine
          extrem schnelle Navigation.
        </p>
        <Img
          src="/imag/mw-browser.jpg"
          alt="Benutzeroberfläche des MW-Browser V3"
        />
      </article>
    ),
  },
  privusChat: {
    name: "PrivusChat",
    elem: (
      <article>
        <p>Hochsicherer Messenger mit maximalem Fokus auf Privatsphäre.</p>
        <p>
          Implementiert symmetrische, quantencomputer-sichere Verschlüsselung
          (AES).
        </p>
        <div className="links-row">
          <LinkBtn href="https://privuschat.github.io/easy-messenger/">
            Live Demo
          </LinkBtn>
          <LinkBtn href="https://github.com/ManuelWestermeier/easy-messenger">
            Source Code
          </LinkBtn>
        </div>
        <div className="gallery-grid">
          <Img src="/imag/privuschat1.jpg" alt="PrivusChat Login Interface" />
          <Img
            src="/imag/privuschat2.jpg"
            alt="PrivusChat aktives Chatfenster"
          />
        </div>
      </article>
    ),
  },
  carGame: {
    name: "Car Game (3D)",
    elem: (
      <article>
        <div className="gallery-grid">
          <Img
            src={
              assets[
                "https://web.manuel-westermeier.de/home-page/car-game_2.png"
              ]
            }
            alt="3D Car Game Gameplay auf der Rennstrecke"
          />
          <Img
            src={
              assets[
                "https://web.manuel-westermeier.de/home-page/car-game-back.png"
              ]
            }
            alt="3D Car Game Auto Rückansicht"
          />
        </div>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/en/games/c07e7711-8f85-4b24-8091-6cebc8543cae/singemulti-player-car-game">
            Jetzt Spielen
          </LinkBtn>
        </div>
      </article>
    ),
  },
  birdGame: {
    name: "Bird Game (2D)",
    elem: (
      <article>
        <Img
          src={
            assets["https://web.manuel-westermeier.de/home-page/bird-game.jpg"]
          }
          alt="2D Bird Game atmosphärisches Gameplay"
        />
        <p>Ein atmosphärisches Erkundungsspiel.</p>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/en/games/e6fb7edc-ba03-48ea-ba03-e7e3d5e4094f/bird-game-manuel111">
            Jetzt Spielen
          </LinkBtn>
        </div>
      </article>
    ),
  },
  jumpAndDrive: {
    name: "Jump and Drive",
    elem: (
      <article>
        <div className="gallery-grid">
          <Img
            src={assets["https://web.manuel-westermeier.de/Car.png"]}
            alt="Jump and Drive Spielmodus: Auto"
          />
          <Img
            src={assets["https://web.manuel-westermeier.de/Player.png"]}
            alt="Jump and Drive Spielmodus: Charakter"
          />
        </div>
        <p>
          Kreativer Genre-Mix: Wechsle nahtlos zwischen klassischen "Jump & Run"
          und Rennspiel-Mechaniken.
        </p>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/en/games/fe032d11-f973-4ba8-ad86-a89fe01f9047/webgl-build-jump-and-drive">
            Jetzt Spielen
          </LinkBtn>
        </div>
      </article>
    ),
  },
  carGameTop: {
    name: "Car Game Top-Down (3D)",
    elem: (
      <article>
        <div className="gallery-grid">
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/car-top.png"]
            }
            alt="Car Game Top-Down Hauptmenü"
          />
          <Img
            src={
              assets[
                "https://web.manuel-westermeier.de/home-page/car-top-play.png"
              ]
            }
            alt="Car Game Top-Down aktives Gameplay"
          />
        </div>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/mg/other/webgl-builds-368263">
            Jetzt Spielen
          </LinkBtn>
        </div>
      </article>
    ),
  },
  hiddenFs: {
    name: "Hidden-FS",
    elem: (
      <article>
        <p>
          Lokaler, verschlüsselter Dateicontainer. Sichert Videos, Bilder und
          Dokumente mit starker AES-Verschlüsselung direkt im Browser. Zugriff
          nur via Passwort möglich.
        </p>
        <div className="links-row">
          <LinkBtn href="https://hidden-fs.manuel-westermeier.de/">
            App Öffnen
          </LinkBtn>
        </div>
        <Img
          alt="Hidden FS Secure Icon Logo"
          src="/imag/hidden-fs-favicon.jpg"
          style={{ width: "64px", margin: "10px auto", display: "block" }}
        />
      </article>
    ),
  },
  notenBuch: {
    name: "Digitales Notenbuch",
    elem: (
      <article>
        <p>
          Modernes Notenmanagement-Tool für Lehrer und Schüler zur Berechnung
          und Visualisierung des Leistungsstands.
        </p>
        <div className="gallery-grid">
          <Img
            alt="Digitales Notenbuch Dashboard für Schüler"
            src={
              assets[
                "https://web.manuel-westermeier.de/home-page/nb-student.png"
              ]
            }
          />
          <Img
            alt="Digitales Notenbuch Übersicht für die gesamte Klasse"
            src={
              assets["https://web.manuel-westermeier.de/home-page/nb-class.png"]
            }
          />
          <Img
            alt="Digitales Notenbuch Hauptmenü"
            src={
              assets["https://web.manuel-westermeier.de/home-page/nb-main.png"]
            }
          />
        </div>
        <div className="links-row">
          <LinkBtn href="https://noten-buch.netlify.app">App Öffnen</LinkBtn>
        </div>
      </article>
    ),
  },
  memoryGame: {
    name: "Memory Game",
    elem: (
      <article>
        <p>Ein responsives, werbefreies Online Memory-Spiel.</p>
        <Img alt="Memory Game Logo und Titel" src="/imag/memory-logo.jpg" />
        <div className="links-row">
          <LinkBtn href="https://memory-game.manuel-westermeier.de/">
            Spiel Starten
          </LinkBtn>
        </div>
      </article>
    ),
  },
  vPresent: {
    name: "V-Present",
    elem: (
      <article>
        <p>
          Effiziente, Markdown-basierte Präsentationssoftware für Entwickler.
        </p>
        <div className="links-row">
          <LinkBtn href="https://web.manuel-westermeier.de/v-present/">
            Startseite
          </LinkBtn>
          <LinkBtn href="https://web.manuel-westermeier.de/v-present/#/project/0">
            Demo Projekt
          </LinkBtn>
        </div>
        <Img alt="V-Present Software Logo" src="/imag/vpresent-logo.jpg" />
      </article>
    ),
  },
  esp32c6OS: {
    name: "ESP32 C6 OS",
    elem: (
      <article>
        <video
          className="project-video"
          src={assets["https://web.manuel-westermeier.de/esp32_141os.mp4"]}
          title="ESP32 C6 Betriebssystem Demo Video"
          loop
          onClick={(e) =>
            e.target.paused ? e.target.play() : e.target.pause()
          }
          autoPlay
          muted
          playsInline
        />
        <p>
          Ein revolutionäres OS für 1€-Hardware (ESP32) mit 1,41" Display und
          Ein-Knopf-Steuerung (Gesten). Features: Multi-User, Verschlüsselung,
          Server-Side Rendering Protokoll, JS-Framework und persistenter
          Speicher.
        </p>
        <Img
          className="img"
          src={assets["https://web.manuel-westermeier.de/esp32_141os.jpg"]}
          alt="ESP32 C6 Hardware Setup mit Display"
        />
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/mw-141-os">
            Source Code
          </LinkBtn>
        </div>
      </article>
    ),
  },
  quatchapp: {
    name: "Quatsch App (Messenger)",
    elem: (
      <article>
        <p>
          Full-Stack Realtime Messenger mit Gruppen, Kontaktverwaltung und
          Invite-System.
        </p>
        <div className="gallery-grid">
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/Chatt.jpg"]
            }
            alt="Quatsch App Chat-Verlauf Ansicht"
          />
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/Contacts.jpg"]
            }
            alt="Quatsch App Kontaktliste"
          />
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/Invite.jpg"]
            }
            alt="Quatsch App Einladungssystem"
          />
        </div>
        <p className="note">Auf Anfrage testbar</p>
      </article>
    ),
  },
  conntacts: {
    name: "Business Contacts",
    elem: (
      <article>
        <p>Plattform zur weltweiten Vermittlung von Freelancern.</p>
        <div className="gallery-grid">
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/c-data.png"]
            }
            alt="Business Contacts Entwickler Profil"
          />
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/c-search.png"]
            }
            alt="Business Contacts Suchfunktion für Freelancer"
          />
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/c-form.png"]
            }
            alt="Business Contacts Kontakt- und Anfrageformular"
          />
        </div>
        <p className="note">Auf Anfrage testbar</p>
      </article>
    ),
  },
  browser: {
    name: "Browser V1 (Electron)",
    elem: (
      <article>
        <p>
          Electron-basierter Desktop-Browser mit Tabs, Extensions und
          dynamischen Themes.
        </p>
        <div className="gallery-grid">
          <Img
            src={
              assets[
                "https://web.manuel-westermeier.de/home-page/browser-1.png"
              ]
            }
            alt="Browser V1 Standard Theme Interface"
          />
          <Img
            src={assets["https://web.manuel-westermeier.de/img/Browser2.jpg"]}
            alt="Browser V1 Dark Mode Interface"
          />
        </div>
      </article>
    ),
  },
  desktopAppFramkeWork: {
    name: "Next-Gen-Exe Framework",
    elem: (
      <article>
        <p>
          Hybrid App Framework: Frontend in modernen Webtechnologien
          (HTML/CSS/JS), High-Performance Backend in C++.
        </p>
        <div className="links-row">
          <LinkBtn href="https://github.com/manuelWestermeier/next-gen-exe">
            Source Code
          </LinkBtn>
        </div>
      </article>
    ),
  },
  LHRP: {
    name: "LHRP Protocol",
    elem: (
      <article>
        <p>
          <strong>Lightweight Hierarchical Routing Protocol:</strong> Entwickelt
          für ESP-Mikrocontroller Mesh-Netzwerke. Bietet effiziente
          Verschlüsselung und baumbasiertes Routing.
        </p>
        <Img src="/imag/lhrp.jpg" alt="LHRP Protocol" />
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/LHRP">
            GitHub
          </LinkBtn>
          <br />
          <LinkBtn href="https://wv.jugend-forscht.de/media/2025/project_117500/description/description_2026-01-26_12-47-46.pdf">
            Jugend Forscht Arbeit (PDF)
          </LinkBtn>
        </div>
      </article>
    ),
  },
  wsnet: {
    name: "WSNET Ecosystem",
    elem: (
      <article>
        <p>
          <strong>WSNET Framework:</strong> Full Stack Framework für schnelle,
          bidirektionale Echtzeit-Kommunikation.
        </p>
        <LinkBtn href="https://github.com/ManuelWestermeier/WSNET_Framework">
          Framework Code
        </LinkBtn>
        <hr className="divider" />
        <p>
          <strong>WSNET Npm:</strong>
        </p>
        <LinkBtn href="https://www.npmjs.com/package/wsnet-server">
          Starter Template
        </LinkBtn>
      </article>
    ),
  },
};
