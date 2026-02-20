import React from "react";
import "./index.css";

// Optimized Image Component
function Img(props) {
  // Extract className to avoid overriding the logical classNames
  const { className, ...otherProps } = props;

  return (
    <div
      className={`img-wrapper ${className || ""}`}
      onClick={(e) => {
        // Toggle the 'max' class on the wrapper or image for the lightbox effect
        // Using currentTarget ensures we target the container/image consistently
        const target = e.target.closest('img');
        if (target) target.classList.toggle("max");
      }}
    >
      <img
        loading="lazy" // SEO/Performance: Lazy load images
        decoding="async"
        title="Klicken zum Vergrößern"
        {...otherProps}
      />
    </div>
  );
}

function Iframe(props) {
  return (
    <iframe
      {...props}
      title={props.title || "Project Demo"} // Accessibility requirement
      style={{ borderRadius: "10px", width: "100%", border: "none" }}
      loading="lazy"
    />
  );
}

// Reusable Button Component for consistent design
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
  easyEinakuf: {
    name: "Easy-Einkauf",
    elem: (
      <article>
        <p>Die smarte Einkaufslisten-App für effizientes Planen.</p>
        <div className="links-row">
          <LinkBtn href="https://app.easy-einkauf.de/">App Testen</LinkBtn>
        </div>
        <Img
          src="https://app.easy-einkauf.de/screenshots/list-page.jpg"
          alt="Easy-Einkauf App Benutzeroberfläche Listenansicht"
        />
        <div className="social-links">
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@easy-einkauf?sub_confirmation=1">YouTube</a> •
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@easyeinkauf">TikTok</a> •
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/easy.einkauf">Instagram</a>
        </div>
      </article>
    ),
  },
  MW32OS: {
    name: "MW-OS (ESP32)",
    elem: (
      <article>
        <p>Ein vollwertiges Mini-Betriebssystem für ESP-32 Mikrocontroller mit Touch-Display.</p>
        <Img src="/imag/os/home.png" alt="MW-OS Startbildschirm Interface" />
        <ul className="feature-list">
          <li>- Hardwarekosten &lt; 5 Euro</li>
          <li>- &gt; 22.000 Zeilen Code</li>
          <li>- SD-Support, Accounts & Verschlüsselung</li>
          <li>- Apps, Browser & Virtuelles Keyboard</li>
          <li>- Eigener App Manager & Moderne UI</li>
          <li>- WLAN-Konnektivität</li>
        </ul>
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/esp-wroom-2-4-inch-os">GitHub Repo</LinkBtn>
          <LinkBtn href="https://www.tiktok.com/@pdev111">TikTok Demo</LinkBtn>
        </div>
        <div className="gallery-grid">
          <Img src="/imag/os/paint.png" alt="MW-OS Paint App" />
          <Img src="/imag/os/login.png" alt="MW-OS Login Screen" />
          <Img src="/imag/os/fs.png" alt="MW-OS Dateisystem" />
          <Img src="/imag/os/settings.png" alt="MW-OS Einstellungen" />
          <Img src="/imag/os/designer.png" alt="MW-OS UI Designer" />
          <Img src="/imag/os/wlan.png" alt="MW-OS WLAN Scan" />
          <Img src="/imag/os/keyboard.png" alt="MW-OS Tastatur" />
        </div>
      </article>
    ),
  },
  browserV3: {
    name: "MW-Browser V3",
    elem: (
      <article>
        <p>Innovativer Browser mit Swipe-Multitab Funktionalität für schnelle Navigation.</p>
        <Img
          src="https://github.com/user-attachments/assets/66d0bcf0-918e-4576-9a45-9cc1b9d54cd5"
          alt="MW-Browser V3 Interface Demo"
        />
      </article>
    ),
  },
  privusChat: {
    name: "PrivusChat",
    elem: (
      <article>
        <p>Hochsicherer Messenger mit Fokus auf Privatsphäre.</p>
        <p>Implementiert symmetrische, quantencomputer-sichere Verschlüsselung (AES).</p>
        <div className="links-row">
          <LinkBtn href="https://privuschat.github.io/easy-messenger/">Live Demo</LinkBtn>
          <LinkBtn href="https://github.com/ManuelWestermeier/easy-messenger">Source Code</LinkBtn>
        </div>
        <div className="gallery-grid">
          <Img src="https://github.com/ManuelWestermeier/easy-messenger/blob/main/public/img/screenshot1.png?raw=true" alt="PrivusChat Login" />
          <Img src="https://github.com/ManuelWestermeier/easy-messenger/blob/main/public/img/screenshot3.png?raw=true" alt="PrivusChat Chat Fenster" />
        </div>
      </article>
    ),
  },
  carGame: {
    name: "Car Game (3D)",
    elem: (
      <article>
        <div className="gallery-grid">
          <Img src="https://manuelwestermeier.github.io/home-page/car-game_2.png" alt="3D Car Game Screenshot Rennstrecke" />
          <Img src="https://manuelwestermeier.github.io/home-page/car-game-back.png" alt="3D Car Game Rückansicht" />
        </div>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/en/games/c07e7711-8f85-4b24-8091-6cebc8543cae/singemulti-player-car-game">Jetzt Spielen</LinkBtn>
        </div>
      </article>
    ),
  },
  birdGame: {
    name: "Bird Game (2D)",
    elem: (
      <article>
        <Img src="https://manuelwestermeier.github.io/home-page/bird-game.jpg" alt="2D Bird Game Gameplay" />
        <p>Ein atmosphärisches Erkundungsspiel.</p>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/en/games/e6fb7edc-ba03-48ea-ba03-e7e3d5e4094f/bird-game-manuel111">Jetzt Spielen</LinkBtn>
        </div>
      </article>
    ),
  },
  jumpAndDrive: {
    name: "Jump and Drive",
    elem: (
      <article>
        <div className="gallery-grid">
          <Img src="https://manuelwestermeier.github.io/Car.png" alt="Jump and Drive Auto Modus" />
          <Img src="https://manuelwestermeier.github.io/Player.png" alt="Jump and Drive Spieler Modus" />
        </div>
        <p>Genre-Mix: Wechsle zwischen klassischem "Jump & Run" und Rennspiel-Mechaniken.</p>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/en/games/fe032d11-f973-4ba8-ad86-a89fe01f9047/webgl-build-jump-and-drive">Jetzt Spielen</LinkBtn>
        </div>
      </article>
    ),
  },
  carGameTop: {
    name: "Car Game Top-Down (3D)",
    elem: (
      <article>
        <div className="gallery-grid">
          <Img src="https://manuelwestermeier.github.io/home-page/car-top.png" alt="Top Down Racing Menu" />
          <Img src="https://manuelwestermeier.github.io/home-page/car-top-play.png" alt="Top Down Racing Gameplay" />
        </div>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/mg/other/webgl-builds-368263">Jetzt Spielen</LinkBtn>
        </div>
      </article>
    ),
  },
  hiddenFs: {
    name: "Hidden-FS",
    elem: (
      <article>
        <p>
          Lokaler, verschlüsselter Dateicontainer. Sichert Videos, Bilder und Dokumente
          mit AES-Verschlüsselung direkt im Browser. Zugriff nur via Passwort möglich.
        </p>
        <div className="links-row">
          <LinkBtn href="https://hidden-fs.duckdns.org">App Öffnen</LinkBtn>
        </div>
        <Img alt="Hidden FS Secure Icon" src="https://hidden-fs.duckdns.org/favicon.ico" style={{ width: '64px', margin: '10px auto', display: 'block' }} />
      </article>
    ),
  },
  notenBuch: {
    name: "Digitales Notenbuch",
    elem: (
      <article>
        <p>Notenmanagement-Tool für Lehrer und Schüler zur Berechnung und Visualisierung des Leistungsstands.</p>
        <div className="gallery-grid">
          <Img alt="Notenbuch Schüleransicht" src="https://manuelwestermeier.github.io/home-page/nb-student.png" />
          <Img alt="Notenbuch Klassenansicht" src="https://manuelwestermeier.github.io/home-page/nb-class.png" />
          <Img alt="Notenbuch Übersicht" src="https://manuelwestermeier.github.io/home-page/nb-main.png" />
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
        <p>Werbefreies Online Memory-Spiel.</p>
        <Img alt="Memory Game Logo" src="https://memory-game.manuel-westermeier.de/logo.jpg" />
        <div className="links-row">
          <LinkBtn href="https://memory-game.manuel-westermeier.de/">Spiel Starten</LinkBtn>
        </div>
      </article>
    ),
  },
  vPresent: {
    name: "V-Present",
    elem: (
      <article>
        <p>Markdown-basierte Präsentationssoftware für Entwickler.</p>
        <div className="links-row">
          <LinkBtn href="https://manuelwestermeier.github.io/v-present/#/project/0">Demo Projekt</LinkBtn>
          <LinkBtn href="https://manuelwestermeier.github.io/v-present/">Startseite</LinkBtn>
        </div>
        <Img alt="V-Present Logo" src="https://manuelwestermeier.github.io/v-present/logo.jpg" />
      </article>
    ),
  },
  esp32c6OS: {
    name: "ESP32 C6 OS",
    elem: (
      <article>
        <video
          className="project-video"
          src="https://manuelwestermeier.github.io/esp32_141os.mp4"
          title="ESP32 C6 OS Demo Video"
          loop
          onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()}
          autoPlay
          muted
          playsInline
        />
        <p>
          Ein revolutionäres OS für 1€-Hardware (ESP32) mit 1,41" Display und
          Ein-Knopf-Steuerung (Gesten). Features: Multi-User, Verschlüsselung,
          Server-Side Rendering Protokoll, JS-Framework und persistenter Speicher.
        </p>
        <Img className="img" src="https://manuelwestermeier.github.io/esp32_141os.jpg" alt="ESP32 C6 Hardware Setup" />
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/mw-141-os">Source Code</LinkBtn>
        </div>
      </article>
    ),
  },
  quatchapp: {
    name: "Quatsch App (Messenger)",
    elem: (
      <article>
        <p>Full-Stack Realtime Messenger mit Gruppen, Kontakten und Invite-System.</p>
        <div className="gallery-grid">
          <Img src="https://manuelwestermeier.github.io/home-page/Chatt.jpg" alt="Quatsch App Chat View" />
          <Img src="https://manuelwestermeier.github.io/home-page/Contacts.jpg" alt="Quatsch App Kontakte" />
          <Img src="https://manuelwestermeier.github.io/home-page/Invite.jpg" alt="Quatsch App Einladung" />
        </div>
        <p className="note">Auf Anfrage testbar</p>
      </article>
    ),
  },
  conntacts: {
    name: "Business Contacts",
    elem: (
      <article>
        <p>Plattform zur Vermittlung von Freelancern weltweit.</p>
        <div className="gallery-grid">
          <Img src="https://manuelwestermeier.github.io/home-page/c-data.png" alt="Business Contacts Datenansicht" />
          <Img src="https://manuelwestermeier.github.io/home-page/c-search.png" alt="Business Contacts Suche" />
          <Img src="https://manuelwestermeier.github.io/home-page/c-form.png" alt="Business Contacts Formular" />
        </div>
        <p className="note">Auf Anfrage testbar</p>
      </article>
    ),
  },
  browser: {
    name: "Browser V1 (Electron)",
    elem: (
      <article>
        <p>Electron-basierter Browser mit Tabs, Extensions und dynamischen Themes.</p>
        <div className="gallery-grid">
          <Img src="https://manuelwestermeier.github.io/home-page/browser-1.png" alt="Browser V1 Screenshot" />
          <Img src="https://manuelwestermeier.github.io/img/Browser2.jpg" alt="Browser V1 Dark Mode" />
        </div>
      </article>
    ),
  },
  desktopAppFramkeWork: {
    name: "Next-Gen-Exe Framework",
    elem: (
      <article>
        <p>Hybrid App Framework: Frontend in HTML/CSS/JS, High-Performance Backend in C++.</p>
        <div className="links-row">
          <LinkBtn href="https://github.com/manuelWestermeier/next-gen-exe">Source Code</LinkBtn>
        </div>
        <div className="iframe-container">
          <Iframe src="https://manuelwestermeier.github.io/next-gen-exe/" title="Framework Dokumentation" />
        </div>
      </article>
    ),
  },
  LHRP: {
    name: "LHRP Protocol",
    elem: (
      <article>
        <p><strong>Lightweight Hierarchical Routing Protocol:</strong> Entwickelt für ESP-Mikrocontroller Mesh-Netzwerke. Bietet Verschlüsselung und baumbasiertes Routing.</p>
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/LHRP">GitHub</LinkBtn>
          <br />
          <LinkBtn href="https://wv.jugend-forscht.de/media/2025/project_117500/description/description_2026-01-26_12-47-46.pdf">Jugend Forscht Arbeit (PDF)</LinkBtn>
        </div>
      </article>
    )
  },
  wsnet: {
    name: "WSNET Ecosystem",
    elem: (
      <article>
        <p><strong>WSNET Framework:</strong> Full Stack Framework für bidirektionale Echtzeit-Kommunikation.</p>
        <LinkBtn href="https://github.com/ManuelWestermeier/WSNET_Framework">Framework Code</LinkBtn>

        <hr className="divider" />

        <p><strong>WSNET Starter:</strong> Boilerplate mit React, Vite, Bootstrap & Node.js (Auth & Routing inklusive).</p>
        <LinkBtn href="https://github.com/ManuelWestermeier/WSNET_STARTER">Starter Template</LinkBtn>
      </article>
    ),
  },
  wop: {
    name: "Wahrheit oder Pflicht",
    elem: (
      <article>
        <p>Klassische Party-App ohne Werbung.</p>
        <div className="gallery-grid">
          <Img src="https://manuelwestermeier.github.io/home-page/wop-create.png" alt="Wahrheit oder Pflicht Erstellen" />
          <Img src="https://manuelwestermeier.github.io/home-page/wop-ask.png" alt="Wahrheit oder Pflicht Frage" />
          <Img src="https://manuelwestermeier.github.io/home-page/wop-users.png" alt="Wahrheit oder Pflicht Spieler" />
        </div>
      </article>
    ),
  },
};