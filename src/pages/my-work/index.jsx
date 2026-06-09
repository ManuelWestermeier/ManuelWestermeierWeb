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
import { FiArrowUpRight } from "react-icons/fi";

const techStack = [
  {
    category: "Frontend & GUIs",
    color: "#00d4ff",
    items: [
      { name: "React / Vite", desc: "Web-Apps & SPAs mit JSX", href: "https://react.dev", Icon: SiReact },
      { name: "HTML / CSS / JS", desc: "Fundamentals & Vanilla Web", href: "", Icon: SiHtml5 },
      { name: "TypeScript", desc: "Typsicheres JavaScript", href: "https://typescriptlang.org", Icon: SiTypescript },
      { name: "Electron", desc: "Cross-Platform Desktop Apps", href: "https://www.electronjs.org", Icon: SiElectron },
    ],
  },
  {
    category: "Backend & Web",
    color: "#10b981",
    items: [
      { name: "Node.js / Express", desc: "REST APIs & Serverlogik", href: "https://nodejs.org", Icon: SiNodedotjs },
      { name: "WebSockets / WSNET", desc: "Eigenes Echtzeit-Protokoll", href: "", Icon: FaNetworkWired },
      { name: "Cloudflare", desc: "Hosting, Domains, DNS", href: "https://www.cloudflare.com", Icon: SiCloudflare },
      { name: "Netlify / Render", desc: "Deployment & CI/CD", href: "https://www.netlify.com", Icon: SiNetlify },
    ],
  },
  {
    category: "Networking",
    color: "#3b82f6",
    items: [
      { name: "WebRTC", desc: "P2P Echtzeit-Kommunikation", href: "", Icon: SiWebrtc },
      { name: "TCP / UDP", desc: "Low-Level Netzwerkprotokolle", href: "", Icon: FaServer },
      { name: "WiFi & RF24", desc: "Drahtlose Datenuebertragung", href: "", Icon: FaWifi },
    ],
  },
  {
    category: "KI & Computer Vision",
    color: "#8b5cf6",
    items: [
      { name: "Python", desc: "Datenverarbeitung & KI-Basis", href: "", Icon: SiPython },
      { name: "YOLO & Vision", desc: "Object Detection & Tracking", href: "", Icon: FaEye },
      { name: "Machine Learning", desc: "Klassifizierung & Realtime KI", href: "", Icon: FaRobot },
    ],
  },
  {
    category: "Security & Krypto",
    color: "#ef4444",
    items: [
      { name: "AES / RSA / ECC", desc: "Symmetrisch & asymmetrisch", href: "", Icon: FaLock },
      { name: "Post-Quantum", desc: "Zukunftssichere Signaturen", href: "", Icon: FaKey },
      { name: "Protokollsicherheit", desc: "Sichere Datenuebertragung", href: "", Icon: FaShieldAlt },
      { name: "OpenSSL", desc: "Zertifikate & TLS", href: "", Icon: SiOpenssl },
    ],
  },
  {
    category: "Hardware & Embedded",
    color: "#f59e0b",
    items: [
      { name: "ESP32 / Arduino", desc: "Mikrocontroller-Programmierung", href: "", Icon: SiArduino },
      { name: "C / C++", desc: "Low-Level & Performance Code", href: "", Icon: SiCplusplus },
      { name: "Assembly", desc: "CPU-Architektur & Register", href: "", Icon: FaMicrochip },
      { name: "Schaltkreise", desc: "Elektronik & PCB-Design", href: "", Icon: GiCircuitry },
    ],
  },
  {
    category: "Game Dev",
    color: "#6366f1",
    items: [
      { name: "Unity (C#)", desc: "2D / 3D Spieleentwicklung", href: "https://unity.com", Icon: SiUnity },
      { name: "Visual Studio", desc: "C# / C++ Entwicklung", href: "", Icon: VscVscode },
      { name: "@-script", desc: "Eigene Programmiersprache", href: "https://github.com/ManuelWestermeier/at-script", Icon: FaCode },
    ],
  },
  {
    category: "DevOps & Open Source",
    color: "#14b8a6",
    items: [
      { name: "Git / GitHub", desc: "Versionskontrolle & CI", href: "https://github.com/manuelWestermeier/", Icon: SiGit },
      { name: "Linux / Windows", desc: "Cross-Platform Entwicklung", href: "", Icon: SiLinux },
      { name: "Library Dev", desc: "Open Source & Architektur", href: "", Icon: FaCubes },
    ],
  },
  {
    category: "Audio",
    color: "#ec4899",
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
      <div className="hero-bg" style={{ padding: "clamp(44px,8vw,64px) var(--px) clamp(48px,8vw,72px)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span className="section-label">Fähigkeiten & Technologien</span>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "var(--size-hero)",
            marginTop: "18px", marginBottom: "18px",
          }}>
            Meine <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Werkzeuge</span>
          </h1>
          <div style={{ width: "40px", height: "2px", background: "var(--accent)", marginBottom: "18px" }} />
          <p style={{ color: "var(--ink-dim)", lineHeight: 1.75, fontSize: "var(--size-body)", maxWidth: "460px", fontFamily: "var(--font-body)" }}>
            Breites Tech-Stack — von Frontend bis Embedded, Spieleentwicklung
            und Sounddesign. Neue Technologien eigne ich mir schnell an.
          </p>
          {/* Cross-link: Fähigkeiten → Projekte */}
          <div style={{ marginTop: "24px", display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/projects" className="btn-primary" style={{ padding: "9px 20px" }}>
              Projekte ansehen →
            </Link>
            <Link to="/contact" style={{
              fontFamily: "var(--font-mono)", fontSize: "0.68rem",
              color: "var(--muted)", textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              Projekt anfragen →
            </Link>
          </div>
        </div>
      </div>

      {/* Tech Cards */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(36px,6vw,56px) var(--px) clamp(56px,9vw,90px)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 270px), 1fr))",
          gap: "1px",
          background: "rgba(0,212,255,0.06)",
        }}>
          {techStack.map(({ category, color, items }, i) => (
            <div key={category} className="reveal" style={{
              padding: "clamp(18px,2.8vw,26px)",
              transitionDelay: `${i * 0.05}s`,
              background: "var(--bg)",
              position: "relative",
              /* Stagger vertical offset for unpredictable feel */
              marginTop: i % 3 === 1 ? "clamp(0px, 2vw, 20px)" : "0",
            }}>
              {/* Accent top border */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: color, opacity: 0.5 }} />

              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                <div style={{ width: "5px", height: "5px", background: color, flexShrink: 0, boxShadow: `0 0 6px ${color}` }} />
                <h3 style={{
                  fontFamily: "var(--font-mono)", fontWeight: 700,
                  fontSize: "var(--size-label)", letterSpacing: "0.14em",
                  textTransform: "uppercase", color,
                }}>
                  {category}
                </h3>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {items.map(({ name, desc, href, Icon }) => (
                  <div key={name} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "9px", minWidth: 0 }}>
                        <span style={{
                          display: "flex", alignItems: "center", justifyContent: "center",
                          width: "26px", height: "26px",
                          background: `${color}10`,
                          border: `1px solid ${color}20`,
                          color, flexShrink: 0,
                        }}>
                          <Icon size={13} />
                        </span>
                        <p style={{
                          fontFamily: "var(--font-display)", fontWeight: 700,
                          fontSize: "clamp(0.82rem, 2vw, 0.88rem)",
                          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                        }}>
                          {name}
                        </p>
                      </div>
                      {href && (
                        <a href={href} target="_blank" rel="noopener noreferrer"
                          style={{ color: "var(--muted)", fontSize: "0.78rem", transition: "color 0.18s", flexShrink: 0, display: "flex", alignItems: "center" }}
                          onMouseEnter={e => e.currentTarget.style.color = color}
                          onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                        >
                          <FiArrowUpRight />
                        </a>
                      )}
                    </div>
                    <p style={{ color: "var(--muted)", fontSize: "0.72rem", paddingLeft: "35px", fontFamily: "var(--font-mono)" }}>
                      {desc}
                    </p>
                    <div style={{ height: "1px", background: `${color}15`, marginTop: "3px" }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote card */}
        <div className="reveal" style={{ marginTop: "clamp(36px,5vw,52px)", padding: "28px 32px", border: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,212,255,0.03)", position: "relative" }}>
          <div className="corner-tl" />
          <div className="corner-br" />
          <p style={{ color: "var(--ink-dim)", fontSize: "var(--size-body)", lineHeight: 1.75, maxWidth: "660px", fontFamily: "var(--font-mono)" }}>
            Neue Technologien eigne ich mir rasch und problemlos an — das ist meine wichtigste Fähigkeit.
          </p>
        </div>

        {/* Cross-links: Fähigkeiten → Projekte & Kontakt */}
        <div className="reveal" style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <Link to="/projects" className="btn-ghost">Projekte ansehen →</Link>
          <Link to="/contact" style={{
            fontFamily: "var(--font-mono)", fontSize: "0.68rem",
            color: "var(--muted)", textDecoration: "none",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
          >
            Projekt starten →
          </Link>
        </div>
      </div>
    </div>
  );
}
