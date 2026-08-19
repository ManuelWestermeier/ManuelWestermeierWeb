import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SiReact, SiHtml5, SiJavascript, SiTypescript, SiElectron,
  SiNodedotjs, SiCloudflare, SiArduino, SiCplusplus, SiUnity,
  SiGithub, SiNetlify, SiGit, SiLinux, SiPython, SiWebrtc, SiOpenssl
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaServer, FaMicrochip, FaGamepad, FaMusic, FaCloud, FaCode,
  FaWrench, FaNetworkWired, FaWifi, FaRobot, FaEye, FaLock,
  FaKey, FaShieldAlt, FaCubes, FaWindows,
} from "react-icons/fa";
import { GiSoundWaves, GiCircuitry } from "react-icons/gi";
import GlowBlob from "../../comp/glow-blob";
import SkillsBoard from "../../comp/skills-board";

const techStack = [
  {
    category: "Frontend & GUIs",
    color: "var(--accent-bright)",
    items: [
      { name: "React / Vite", desc: "Web-Apps & SPAs mit JSX", href: "https://react.dev", Icon: SiReact },
      { name: "HTML / CSS / JS", desc: "Fundamentals & Vanilla Web", href: "", Icon: SiHtml5 },
      { name: "TypeScript", desc: "Typsicheres JavaScript", href: "https://typescriptlang.org", Icon: SiTypescript },
      { name: "Electron", desc: "Cross-Platform Desktop Apps", href: "https://www.electronjs.org", Icon: SiElectron },
    ],
  },
  {
    category: "Backend & Web",
    color: "var(--hue-projects)",
    items: [
      { name: "Node.js / Express", desc: "REST APIs & Serverlogik", href: "https://nodejs.org", Icon: SiNodedotjs },
      { name: "WebSockets / WSNET", desc: "Eigenes Echtzeit-Protokoll", href: "", Icon: FaNetworkWired },
      { name: "Cloudflare", desc: "Hosting, Domains, DNS", href: "https://www.cloudflare.com", Icon: SiCloudflare },
      { name: "Netlify / Render", desc: "Deployment & CI/CD", href: "https://www.netlify.com", Icon: SiNetlify },
    ],
  },
  {
    category: "Networking",
    color: "var(--accent-bright)",
    items: [
      { name: "WebRTC", desc: "P2P Echtzeit-Kommunikation", href: "", Icon: SiWebrtc },
      { name: "TCP / UDP", desc: "Low-Level Netzwerkprotokolle", href: "", Icon: FaServer },
      { name: "WiFi & RF24", desc: "Drahtlose Datenuebertragung", href: "", Icon: FaWifi },
    ],
  },
  {
    category: "KI & Computer Vision",
    color: "var(--hue-about)",
    items: [
      { name: "Python", desc: "Datenverarbeitung & KI-Basis", href: "", Icon: SiPython },
      { name: "YOLO & Vision", desc: "Object Detection & Tracking", href: "", Icon: FaEye },
      { name: "Machine Learning", desc: "Klassifizierung & Realtime KI", href: "", Icon: FaRobot },
    ],
  },
  {
    category: "Security & Krypto",
    color: "var(--hue-contact)",
    items: [
      { name: "AES / RSA / ECC", desc: "Symmetrisch & asymmetrisch", href: "", Icon: FaLock },
      { name: "Post-Quantum", desc: "Zukunftssichere Signaturen", href: "", Icon: FaKey },
      { name: "Protokollsicherheit", desc: "Sichere Datenuebertragung", href: "", Icon: FaShieldAlt },
      { name: "OpenSSL", desc: "Zertifikate & TLS", href: "", Icon: SiOpenssl },
    ],
  },
  {
    category: "Hardware & Embedded",
    color: "var(--hue-projects)",
    items: [
      { name: "ESP32 / Arduino", desc: "Mikrocontroller-Programmierung", href: "", Icon: SiArduino },
      { name: "C / C++", desc: "Low-Level & Performance Code", href: "", Icon: SiCplusplus },
      { name: "Assembly", desc: "CPU-Architektur & Register", href: "", Icon: FaMicrochip },
      { name: "Schaltkreise", desc: "Elektronik & PCB-Design", href: "", Icon: GiCircuitry },
    ],
  },
  {
    category: "Game Dev",
    color: "var(--hue-about)",
    items: [
      { name: "Unity (C#)", desc: "2D / 3D Spieleentwicklung", href: "https://unity.com", Icon: SiUnity },
      { name: "Visual Studio", desc: "C# / C++ Entwicklung", href: "", Icon: VscVscode },
      { name: "@-script", desc: "Eigene Programmiersprache", href: "https://github.com/ManuelWestermeier/at-script", Icon: FaCode },
    ],
  },
  {
    category: "DevOps & Open Source",
    color: "var(--accent-bright)",
    items: [
      { name: "Git / GitHub", desc: "Versionskontrolle & CI", href: "https://github.com/manuelWestermeier/", Icon: SiGit },
      { name: "Linux / Windows", desc: "Cross-Platform Entwicklung", href: "", Icon: SiLinux },
      { name: "Library Dev", desc: "Open Source & Architektur", href: "", Icon: FaCubes },
    ],
  },
  {
    category: "Audio",
    color: "var(--hue-contact)",
    items: [
      { name: "Sounddesign", desc: "Effekte fuer Spiele & Medien", href: "https://www.youtube.com/@TAGESSCHATTEN?sub_confirmation=1", Icon: GiSoundWaves },
      { name: "Musikproduktion", desc: "Beats, Soundscapes, YouTube", href: "https://www.youtube.com/@TAGESSCHATTEN/videos", Icon: FaMusic },
    ],
  },
];

export default function MyWork() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: "60px", minHeight: "100dvh", background: "var(--bg)", overflowX: "hidden", width: "100%" }}>

      {/* Hero */}
      <div className="hero-bg" style={{ padding: "clamp(44px,8vw,64px) var(--px) clamp(48px,8vw,72px)", position: "relative", overflow: "hidden" }}>
        <GlowBlob color="var(--hue-hero)" size={400} top="-100px" right="-80px" />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
          <span className="section-label">Fähigkeiten & Technologien</span>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 300,
            fontSize: "var(--size-hero)",
            marginTop: "18px", marginBottom: "18px",
          }}>
            Meine <span style={{ color: "var(--accent-bright)" }}>Werkzeuge</span>
          </h1>
          <div style={{ width: "48px", height: "2px", background: "var(--accent)", marginBottom: "18px", borderRadius: "2px" }} />
          <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "var(--size-body)", maxWidth: "460px", fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Breites Tech-Stack — von Frontend bis Embedded, Spieleentwicklung
            und Sounddesign. Neue Technologien eigne ich mir schnell an.
          </p>
          {/* Cross-link: Fähigkeiten → Projekte */}
          <div style={{ marginTop: "24px", display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/projects" className="btn-primary" style={{ padding: "10px 22px" }}>
              Projekte ansehen →
            </Link>
            <Link to="/contact" style={{
              fontFamily: "var(--font-body)", fontSize: "0.76rem",
              color: "var(--muted)", textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent-bright)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              Projekt anfragen →
            </Link>
          </div>
        </div>
      </div>

      {/* Tech stack — compressed, sharp-cornered board */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(36px,6vw,56px) var(--px) clamp(56px,9vw,90px)" }}>
        <p style={{ color: "var(--muted)", fontSize: "0.76rem", fontFamily: "var(--font-body)", marginBottom: "14px" }}>
          Wird die Seite nicht bewegt/gehovert, laufen die Skills als Ticker durch.
        </p>
        <SkillsBoard groups={techStack} />

        {/* Bottom quote panel — single one-off panel */}
        <div className="tile reveal" style={{ marginTop: "clamp(36px,5vw,52px)" }}>
          <p style={{ color: "var(--muted)", fontSize: "var(--size-body)", lineHeight: 1.75, maxWidth: "660px", fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Neue Technologien eigne ich mir rasch und problemlos an — das ist meine wichtigste Fähigkeit.
          </p>
        </div>

        {/* Cross-links: Fähigkeiten → Projekte & Kontakt */}
        <div className="reveal" style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <Link to="/projects" className="btn-ghost">Projekte ansehen →</Link>
          <Link to="/contact" style={{
            fontFamily: "var(--font-body)", fontSize: "0.76rem",
            color: "var(--muted)", textDecoration: "none",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent-bright)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
          >
            Projekt starten →
          </Link>
        </div>
      </div>
    </div>
  );
}
