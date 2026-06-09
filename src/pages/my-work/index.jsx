import React, { useEffect } from "react";
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
import { TbBrandCpp } from "react-icons/tb";

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
      <div className="hero-bg" style={{ padding: "clamp(44px,8vw,60px) var(--px) clamp(52px,9vw,80px)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span className="section-label">Fahigkeiten & Technologien</span>
          <h1 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: "clamp(1.9rem, 6vw, 3.5rem)",
            marginTop: "20px", marginBottom: "20px",
          }}>
            Meine <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Werkzeuge</span>
          </h1>
          <div style={{ width: "50px", height: "2px", background: "var(--accent)", marginBottom: "20px" }} />
          <p style={{ color: "var(--ink-dim)", lineHeight: 1.75, fontSize: "clamp(0.85rem, 2vw, 0.95rem)", maxWidth: "480px" }}>
            Breites Tech-Stack — von Frontend bis Embedded, Spieleentwicklung
            und Sounddesign. Neue Technologien aneigne ich mir schnell.
          </p>
        </div>
      </div>

      {/* Tech Cards */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(40px,7vw,60px) var(--px) clamp(60px,9vw,100px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "1px", background: "rgba(0,212,255,0.06)" }}>
          {techStack.map(({ category, color, items }, i) => (
            <div key={category} className="reveal" style={{
              padding: "clamp(20px,3vw,28px)",
              transitionDelay: `${i * 0.05}s`,
              background: "var(--bg)",
              position: "relative",
            }}>
              {/* Accent top border */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: color, opacity: 0.5 }} />

              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "6px", height: "6px", background: color, flexShrink: 0, boxShadow: `0 0 8px ${color}` }} />
                <h3 style={{
                  fontFamily: "'JetBrains Mono',monospace", fontWeight: 700,
                  fontSize: "0.68rem", letterSpacing: "0.14em",
                  textTransform: "uppercase", color,
                }}>
                  {category}
                </h3>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {items.map(({ name, desc, href, Icon }) => (
                  <div key={name} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
                        <span style={{
                          display: "flex", alignItems: "center", justifyContent: "center",
                          width: "28px", height: "28px",
                          background: `${color}10`,
                          border: `1px solid ${color}20`,
                          color, flexShrink: 0,
                        }}>
                          <Icon size={14} />
                        </span>
                        <p style={{
                          fontFamily: "'Syne',sans-serif", fontWeight: 700,
                          fontSize: "clamp(0.84rem, 2vw, 0.9rem)",
                          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                        }}>
                          {name}
                        </p>
                      </div>
                      {href && (
                        <a href={href} target="_blank" rel="noopener noreferrer"
                          style={{ color: "var(--muted)", fontSize: "0.8rem", transition: "color 0.18s", flexShrink: 0, display: "flex", alignItems: "center" }}
                          onMouseEnter={e => e.currentTarget.style.color = color}
                          onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                        >
                          <FiArrowUpRight />
                        </a>
                      )}
                    </div>
                    <p style={{ color: "var(--muted)", fontSize: "0.76rem", paddingLeft: "38px", fontFamily: "'JetBrains Mono',monospace" }}>
                      {desc}
                    </p>
                    <div style={{ height: "1px", background: `${color}18`, marginTop: "4px" }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: "clamp(40px,6vw,60px)", padding: "32px", border: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,212,255,0.03)", position: "relative" }}>
          <div className="corner-tl" />
          <div className="corner-br" />
          <p style={{ color: "var(--ink-dim)", fontSize: "clamp(0.9rem, 2vw, 1rem)", lineHeight: 1.7, maxWidth: "700px", fontFamily: "'JetBrains Mono',monospace" }}>
            Neue Technologien eigne ich mir rasch und problemlos an — das ist meine wichtigste Fahigkeit.
          </p>
        </div>
      </div>
    </div>
  );
}
