import React from "react";
import { useRise } from "../../lib/hooks";
import { useSeo } from "../../lib/seo";

const stack = [
  ["Embedded", [["ESP32 / Arduino", "Mikrocontroller"], ["C / C++", "Low-Level, Performance"], ["Assembly", "Register, CPU-Architektur"], ["Schaltungen", "Elektronik, PCB"]]],
  ["Netzwerk", [["LHRP", "eigenes Mesh-Routing"], ["WebSockets / WSNET", "eigenes Echtzeit-Framework"], ["WebRTC", "Peer-to-Peer"], ["TCP / UDP", "Protokolle"], ["WiFi, RF24", "Funk"]]],
  ["KI und Vision", [["Python", "Daten, Training"], ["YOLO", "Objekterkennung, Tracking"], ["Machine Learning", "Klassifizierung in Echtzeit"]]],
  ["Sicherheit", [["AES, RSA, ECC", "symmetrisch und asymmetrisch"], ["Post-Quantum", "Signaturen"], ["OpenSSL", "Zertifikate, TLS"]]],
  ["Web", [["React / Vite", "Single-Page-Apps"], ["TypeScript", ""], ["Node.js / Express", "APIs, Server"], ["Cloudflare, Netlify", "Hosting, DNS, Deployment"]]],
  ["Desktop", [["Electron", "plattformübergreifend"], ["Next-Gen-Exe", "eigenes Web-plus-C++-Framework"]]],
  ["Spiele", [["Unity (C#)", "2D und 3D"], ["@-script", "eigene Programmiersprache"]]],
  ["Audio", [["Sounddesign", "Effekte für Spiele und Medien"], ["Musikproduktion", "auf YouTube als TAGESSCHATTEN"]]],
];

export default function MyWork() {
  useSeo({
    title: "Stack",
    description:
      "Technologien von Manuel Westermeier: ESP32, C/C++, eigene Netzwerkprotokolle, Python und YOLO, Kryptografie, React, Node.js, Unity und Sounddesign.",
    path: "/my-work",
  });
  useRise();

  return (
    <div className="page wrap">
      <h1 className="page__title rise">
        Womit ich arbeite<span className="dim">, von der Platine bis zum Server.</span>
      </h1>

      <div className="stack">
        {stack.map(([cat, items], i) => (
          <section key={cat} className="stack__row rise" style={{ "--d": `${(i % 3) * 0.05}s` }} aria-label={cat}>
            <h2 className="stack__cat">{cat}</h2>
            <ul className="stack__items">
              {items.map(([name, desc]) => (
                <li key={name}>
                  <span className="stack__name">{name}</span>
                  {desc && <span className="dim stack__desc">{desc}</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
