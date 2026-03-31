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

function Img({ className, alt, title, ...otherProps }) {
  const resolvedTitle =
    title || (alt ? `${alt} – Bild vergrößern` : "Bild vergrößern");

  return (
    <div
      className={`img-wrapper ${className || ""}`}
      onClick={(e) => {
        const target = e.target.closest("img");
        if (target) target.classList.toggle("max");
      }}
      role="button"
      tabIndex={0}
      aria-label={alt ? `${alt} vergrößern` : "Bild vergrößern"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          const target = e.currentTarget.querySelector("img");
          if (target) target.classList.toggle("max");
        }
      }}
    >
      <img
        loading="lazy"
        decoding="async"
        title={resolvedTitle}
        alt={alt || "Projektbild"}
        {...otherProps}
      />
    </div>
  );
}

function Iframe(props) {
  return (
    <iframe
      {...props}
      title={props.title || "Projekt-Demo"}
      style={{ borderRadius: "10px", width: "100%", border: "none" }}
      loading="lazy"
    />
  );
}

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
    name: "TWR – Turbo Wasserrettung",
    elem: (
      <article>
        <p>
          Ein KI-gestütztes Wasserrettungssystem, das gefährdete Personen per
          Kamera erkennt und ein autonomes Rettungsboot gezielt zur Person
          schickt. Das Boot bringt eine Schwimmhilfe und unterstützt die sichere
          Rückführung an Land oder an Bord.
        </p>
        <p>
          Ausgezeichnet mit dem <strong>1. Preis</strong> beim{" "}
          <strong>Jugend forscht</strong>-Regionalwettbewerb.
        </p>
        <p>
          Gemeinsam mit Alexander Zuchenko entstand ein komplettes, sicheres
          System mit über 20.000 Zeilen Code, 30.000 Trainingsbildern,
          verschlüsselten Protokollen und intensiver Entwicklungsarbeit.
        </p>
        <div className="links-row">
          <LinkBtn href="https://twr-systems.de/">Mehr erfahren</LinkBtn>
        </div>
        <video
          src={
            assets[
              "https://web.manuel-westermeier.de/home-page/TWR-VideoLQ.mp4"
            ]
          }
          title="Turbo Wasserrettung – autonomes Rettungsboot in Aktion"
          autoPlay
          loop
          muted
          playsInline
        />
      </article>
    ),
  },

  easyEinakuf: {
    name: "Easy-Einkauf",
    elem: (
      <article>
        <p>
          Die smarte Einkaufslisten-App für schnelle Planung, klare Abläufe und
          einen deutlich entspannteren Einkauf im Alltag.
        </p>
        <div className="links-row">
          <LinkBtn href="https://easy-einkauf.de/">App testen</LinkBtn>
        </div>
        <Img
          src="/imag/list-page.jpg"
          alt="Easy-Einkauf App mit übersichtlicher Listenansicht"
          title="Easy-Einkauf: moderne Listenansicht für effizientes Einkaufen"
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
          Ein vollwertiges Mini-Betriebssystem für ESP32-Mikrocontroller mit
          Touch-Display, moderner Oberfläche und praxisnahen Funktionen.
        </p>
        <Img
          src="/imag/os/home.jpg"
          alt="MW-OS Startbildschirm auf ESP32 mit Touch-Display"
          title="MW-OS Startbildschirm für ESP32-Mini-Computer"
        />
        <ul className="feature-list">
          <li>- Hardwarekosten unter 5 Euro</li>
          <li>- Mehr als 22.000 Zeilen Code</li>
          <li>- SD-Karten-Support, Accounts und Verschlüsselung</li>
          <li>- Apps, Browser und virtuelle Tastatur</li>
          <li>- Eigener App-Manager und moderne Benutzeroberfläche</li>
          <li>- WLAN-Konnektivität</li>
        </ul>
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/esp-wroom-2-4-inch-os">
            GitHub-Repository
          </LinkBtn>
          <LinkBtn href="https://www.tiktok.com/@pdev111">TikTok-Demo</LinkBtn>
          <p>
            <b>Jugend forscht – Sonderpreis für Ressourceneffizienz</b>:{" "}
            <LinkBtn href="https://wv.jugend-forscht.de/media/2025/project_120063/description/description_2026-01-26_22-41-07.pdf">
              Projektarbeit als PDF
            </LinkBtn>
          </p>
        </div>
        <div className="gallery-grid">
          <Img
            src="/imag/os/paint.jpg"
            alt="MW-OS Zeichenprogramm auf dem Touch-Display"
            title="MW-OS Paint-App für ESP32"
          />
          <Img
            src="/imag/os/login.jpg"
            alt="MW-OS Login-Bildschirm mit Benutzeranmeldung"
            title="MW-OS Login-Screen"
          />
          <Img
            src="/imag/os/fs.jpg"
            alt="MW-OS Dateimanager mit Dateisystem-Ansicht"
            title="MW-OS Dateisystem-Explorer"
          />
          <Img
            src="/imag/os/settings.jpg"
            alt="MW-OS Systemeinstellungen mit Konfigurationsoptionen"
            title="MW-OS Einstellungen"
          />
          <Img
            src="/imag/os/designer.jpg"
            alt="MW-OS Oberflächen-Designer für App-Layouts"
            title="MW-OS UI-Designer"
          />
          <Img
            src="/imag/os/wlan.jpg"
            alt="MW-OS WLAN-Scanner zur Netzwerksuche"
            title="MW-OS WLAN-Scanner"
          />
          <Img
            src="/imag/os/keyboard.jpg"
            alt="MW-OS virtuelle Bildschirmtastatur"
            title="MW-OS virtuelle Tastatur"
          />
        </div>
      </article>
    ),
  },

  browserV3: {
    name: "MW-Browser V3",
    elem: (
      <article>
        <p>
          Ein innovativer Webbrowser mit Swipe-Navigation und Multi-Tab-Workflow
          für besonders schnelles Surfen und Wechseln zwischen Inhalten.
        </p>
        <Img
          src="/imag/mw-browser.jpg"
          alt="MW-Browser V3 Benutzeroberfläche mit modernem Tab-Design"
          title="MW-Browser V3 mit Swipe-Multitab-Funktion"
        />
      </article>
    ),
  },

  privusChat: {
    name: "PrivusChat",
    elem: (
      <article>
        <p>
          Ein sicherer Messenger mit starkem Fokus auf Datenschutz,
          verschlüsselte Kommunikation und eine schlanke Benutzeroberfläche.
        </p>
        <p>
          Implementiert symmetrische Verschlüsselung auf AES-Basis für eine
          besonders geschützte Nachrichtenübertragung.
        </p>
        <div className="links-row">
          <LinkBtn href="https://privuschat.github.io/easy-messenger/">
            Live-Demo
          </LinkBtn>
          <LinkBtn href="https://github.com/ManuelWestermeier/easy-messenger">
            Quellcode
          </LinkBtn>
        </div>
        <div className="gallery-grid">
          <Img
            src="/imag/privuschat1.jpg"
            alt="PrivusChat Login-Oberfläche für sichere Anmeldung"
            title="PrivusChat Login"
          />
          <Img
            src="/imag/privuschat2.jpg"
            alt="PrivusChat Chatfenster mit verschlüsselter Kommunikation"
            title="PrivusChat Chat-Ansicht"
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
            alt="3D-Rennspiel Car Game mit Strecke und Fahrzeug"
            title="Car Game 3D Gameplay"
          />
          <Img
            src={
              assets[
                "https://web.manuel-westermeier.de/home-page/car-game-back.png"
              ]
            }
            alt="3D-Rennspiel Car Game mit Rückansicht des Autos"
            title="Car Game Rückansicht"
          />
        </div>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/en/games/c07e7711-8f85-4b24-8091-6cebc8543cae/singemulti-player-car-game">
            Jetzt spielen
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
          alt="2D Bird Game mit atmosphärischer Spielwelt"
          title="Bird Game 2D mit stimmungsvoller Grafik"
        />
        <p>
          Ein atmosphärisches 2D-Erkundungsspiel mit ruhiger Stimmung und
          fokussiertem Gameplay.
        </p>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/en/games/e6fb7edc-ba03-48ea-ba03-e7e3d5e4094f/bird-game-manuel111">
            Jetzt spielen
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
            alt="Jump and Drive Fahrzeugmodus mit Auto"
            title="Jump and Drive Fahrzeugmodus"
          />
          <Img
            src={assets["https://web.manuel-westermeier.de/Player.png"]}
            alt="Jump and Drive Charaktermodus mit spielbarem Charakter"
            title="Jump and Drive Charaktermodus"
          />
        </div>
        <p>
          Ein kreativer Genre-Mix, der klassisches Jump-and-Run-Gameplay mit
          Rennspiel-Mechaniken nahtlos verbindet.
        </p>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/en/games/fe032d11-f973-4ba8-ad86-a89fe01f9047/webgl-build-jump-and-drive">
            Jetzt spielen
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
            alt="Top-Down-Car-Game Hauptmenü mit Spielauswahl"
            title="Car Game Top-Down Hauptmenü"
          />
          <Img
            src={
              assets[
                "https://web.manuel-westermeier.de/home-page/car-top-play.png"
              ]
            }
            alt="Top-Down-Car-Game mit aktivem Gameplay auf der Strecke"
            title="Car Game Top-Down Gameplay"
          />
        </div>
        <div className="links-row">
          <LinkBtn href="https://play.unity.com/mg/other/webgl-builds-368263">
            Jetzt spielen
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
          Ein lokaler, verschlüsselter Dateicontainer zum sicheren Speichern von
          Videos, Bildern und Dokumenten direkt im Browser. Der Zugriff ist nur
          mit Passwort möglich.
        </p>
        <div className="links-row">
          <LinkBtn href="https://hidden-fs.manuel-westermeier.de/">
            App öffnen
          </LinkBtn>
        </div>
        <Img
          alt="Hidden-FS Logo für sicheren Dateicontainer"
          src="/imag/hidden-fs-favicon.jpg"
          title="Hidden-FS App-Logo"
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
          Ein modernes Notenmanagement-Tool für Lehrkräfte und Schüler zur
          übersichtlichen Berechnung, Auswertung und Visualisierung von
          Leistungen.
        </p>
        <div className="gallery-grid">
          <Img
            alt="Digitales Notenbuch Dashboard für Schüler"
            src={
              assets[
                "https://web.manuel-westermeier.de/home-page/nb-student.png"
              ]
            }
            title="Digitales Notenbuch Schüleransicht"
          />
          <Img
            alt="Digitales Notenbuch Klassenübersicht"
            src={
              assets["https://web.manuel-westermeier.de/home-page/nb-class.png"]
            }
            title="Digitales Notenbuch Klassenansicht"
          />
          <Img
            alt="Digitales Notenbuch Hauptmenü mit Funktionen"
            src={
              assets["https://web.manuel-westermeier.de/home-page/nb-main.png"]
            }
            title="Digitales Notenbuch Hauptmenü"
          />
        </div>
        <div className="links-row">
          <LinkBtn href="https://noten-buch.netlify.app">App öffnen</LinkBtn>
        </div>
      </article>
    ),
  },

  memoryGame: {
    name: "Memory Game",
    elem: (
      <article>
        <p>
          Ein responsives, werbefreies Online-Memory für kurze Spielrunden auf
          Desktop und Mobilgeräten.
        </p>
        <Img
          alt="Memory Game Logo und Titelbild"
          src="/imag/memory-logo.jpg"
          title="Memory Game Startbildschirm"
        />
        <div className="links-row">
          <LinkBtn href="https://memory-game.manuel-westermeier.de/">
            Spiel starten
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
          Eine effiziente, Markdown-basierte Präsentationssoftware für
          Entwickler, die Inhalte schnell und flexibel in moderne Slides
          verwandelt.
        </p>
        <div className="links-row">
          <LinkBtn href="https://web.manuel-westermeier.de/v-present/">
            Startseite
          </LinkBtn>
          <LinkBtn href="https://web.manuel-westermeier.de/v-present/#/project/0">
            Demo-Projekt
          </LinkBtn>
        </div>
        <Img
          alt="V-Present Software Logo"
          src="/imag/vpresent-logo.jpg"
          title="V-Present Präsentationssoftware"
        />
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
          title="ESP32 C6 OS – Demo-Video des Mikrocontroller-Betriebssystems"
          loop
          onClick={(e) =>
            e.target.paused ? e.target.play() : e.target.pause()
          }
          autoPlay
          muted
          playsInline
        />
        <p>
          Ein kompaktes Betriebssystem für günstige ESP32-Hardware mit 1,41"-
          Display, Ein-Knopf-Steuerung, Multi-User-Funktionen, Verschlüsselung,
          persistentem Speicher und einem eigenen JavaScript-basierten
          Framework.
        </p>
        <Img
          className="img"
          src={assets["https://web.manuel-westermeier.de/esp32_141os.jpg"]}
          alt="ESP32 C6 Hardware-Setup mit Display und Betriebssystem"
          title="ESP32 C6 OS Hardware-Setup"
        />
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/mw-141-os">
            Quellcode
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
          Ein Full-Stack-Realtime-Messenger mit Gruppen, Kontaktverwaltung und
          einem integrierten Invite-System für schnelle Zusammenarbeit.
        </p>
        <div className="gallery-grid">
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/Chatt.jpg"]
            }
            alt="Quatsch App Chatverlauf in Echtzeit"
            title="Quatsch App Chatansicht"
          />
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/Contacts.jpg"]
            }
            alt="Quatsch App Kontaktliste und Verwaltung"
            title="Quatsch App Kontaktverwaltung"
          />
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/Invite.jpg"]
            }
            alt="Quatsch App Einladungsfunktion für neue Kontakte"
            title="Quatsch App Einladungen"
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
        <p>
          Eine Plattform zur weltweiten Vermittlung von Freelancern mit Suche,
          Profilen und direkter Anfragefunktion.
        </p>
        <div className="gallery-grid">
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/c-data.png"]
            }
            alt="Business Contacts Entwicklerprofil mit Leistungsdaten"
            title="Business Contacts Profilansicht"
          />
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/c-search.png"]
            }
            alt="Business Contacts Suchfunktion für Freelancer und Experten"
            title="Business Contacts Suche"
          />
          <Img
            src={
              assets["https://web.manuel-westermeier.de/home-page/c-form.png"]
            }
            alt="Business Contacts Kontaktformular für Projektanfragen"
            title="Business Contacts Anfrageformular"
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
          Ein Electron-basierter Desktop-Browser mit Tabs, Extensions und
          dynamischen Themes für ein anpassbares Nutzererlebnis.
        </p>
        <div className="gallery-grid">
          <Img
            src={
              assets[
                "https://web.manuel-westermeier.de/home-page/browser-1.png"
              ]
            }
            alt="Browser V1 mit hellem Standard-Design"
            title="Browser V1 Standard-Theme"
          />
          <Img
            src={assets["https://web.manuel-westermeier.de/img/Browser2.jpg"]}
            alt="Browser V1 mit dunklem Design"
            title="Browser V1 Dark Mode"
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
          Ein Hybrid-App-Framework mit Frontend in modernen Webtechnologien und
          einem performanten C++-Backend für Desktop-Anwendungen.
        </p>
        <div className="links-row">
          <LinkBtn href="https://github.com/manuelWestermeier/next-gen-exe">
            Quellcode
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
          <strong>Lightweight Hierarchical Routing Protocol</strong> für
          ESP-basierte Mesh-Netzwerke mit effizientem, baumbasiertem Routing und
          integrierter Verschlüsselung.
        </p>
        <Img
          src="/imag/lhrp.jpg"
          alt="LHRP Protocol für ESP-Mesh-Netzwerke"
          title="LHRP Kommunikationsprotokoll"
        />
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/LHRP">
            GitHub
          </LinkBtn>
          <LinkBtn href="https://wv.jugend-forscht.de/media/2025/project_117500/description/description_2026-01-26_12-47-46.pdf">
            Jugend-forscht-Arbeit (PDF)
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
          <strong>WSNET Framework:</strong> Ein Full-Stack-Framework für
          schnelle, bidirektionale Echtzeit-Kommunikation.
        </p>
        <div className="links-row">
          <LinkBtn href="https://github.com/ManuelWestermeier/WSNET_Framework">
            Framework-Code
          </LinkBtn>
        </div>
        <hr className="divider" />
        <p>
          <strong>WSNET NPM:</strong> Ein praktisches Starter-Template für den
          schnellen Einstieg.
        </p>
        <div className="links-row">
          <LinkBtn href="https://www.npmjs.com/package/wsnet-server">
            Starter-Template
          </LinkBtn>
        </div>
      </article>
    ),
  },
};
