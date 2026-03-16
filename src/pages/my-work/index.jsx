import React, { useEffect } from "react";
import {
  SiReact, SiHtml5, SiJavascript, SiTypescript, SiElectron,
  SiNodedotjs, SiCloudflare, SiArduino, SiCplusplus,
  SiUnity, SiGithub, SiNetlify, SiGit, SiLinux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaServer, FaMicrochip, FaGamepad, FaMusic, FaCloud, FaCode, FaWrench } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";

const techStack = [
  {
    category: "Frontend",
    color: "#00c8ff",
    items: [
      { name: "React / Vite", desc: "Web-Apps & SPAs mit JSX", href: "https://react.dev", Icon: SiReact },
      { name: "HTML / CSS / JS", desc: "Fundamentals & Vanilla Web", href: "", Icon: SiHtml5 },
      { name: "Electron", desc: "Cross-Platform Desktop Apps", href: "https://www.electronjs.org", Icon: SiElectron },
    ],
  },
  {
    category: "Backend",
    color: "#10b981",
    items: [
      { name: "Node.js / Express", desc: "REST APIs & Serverlogik", href: "https://nodejs.org", Icon: SiNodedotjs },
      { name: "WSNET Framework", desc: "Eigenes WebSocket-Protokoll", href: "https://github.com/ManuelWestermeier/WSNET_Framework/", Icon: FaServer },
      { name: "Strato / Cloudflare", desc: "Hosting & DNS-Management", href: "https://www.cloudflare.com", Icon: SiCloudflare },
    ],
  },
  {
    category: "Embedded",
    color: "#f59e0b",
    items: [
      { name: "ESP32 / Arduino", desc: "Mikrocontroller-Programmierung", href: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/", Icon: SiArduino },
      { name: "C / C++", desc: "Low-Level & Performance Code", href: "", Icon: SiCplusplus },
      { name: "PlatformIO", desc: "Embedded Build-System", href: "", Icon: FaWrench },
    ],
  },
  {
    category: "Game Dev",
    color: "#6366f1",
    items: [
      { name: "Unity (C#)", desc: "2D / 3D Spieleentwicklung", href: "https://unity.com", Icon: SiUnity },
      { name: "Visual Studio", desc: "C# / C++ GUI-Entwicklung", href: "https://visualstudio.microsoft.com", Icon: VscVscode },
      { name: "@-script", desc: "Eigene Programmiersprache", href: "https://github.com/ManuelWestermeier/at-script", Icon: FaCode },
    ],
  },
  {
    category: "Audio",
    color: "#ec4899",
    items: [
      { name: "Sounddesign", desc: "Effekte für Spiele & Medien", href: "https://www.youtube.com/@TAGESSCHATTEN?sub_confirmation=1", Icon: GiSoundWaves },
      { name: "Musikproduktion", desc: "Beats, Soundscapes, YouTube", href: "https://www.youtube.com/@TAGESSCHATTEN/videos", Icon: FaMusic },
    ],
  },
  {
    category: "DevOps",
    color: "#14b8a6",
    items: [
      { name: "Git / GitHub", desc: "Versionskontrolle & CI", href: "https://github.com/manuelWestermeier/", Icon: SiGit },
      { name: "Netlify / Render", desc: "Static Hosting & Deployment", href: "https://www.netlify.com", Icon: SiNetlify },
      { name: "GitHub Pages / Cloudflare", desc: "Static & Dynamic Site Hosting", href: "https://pages.github.com/", Icon: SiGithub },
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
          <span className="section-label">Skills & Technologien</span>
          <h1 style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.9rem, 6vw, 3.5rem)",
            marginTop: "14px",
            marginBottom: "18px",
          }}>
            Meine <span className="gradient-text">Werkzeuge</span>
          </h1>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "clamp(0.85rem, 2vw, 0.95rem)", maxWidth: "480px" }}>
            Ein breites Technologie-Stack — von Frontend bis Embedded, von Spieleentwicklung
            bis Sounddesign. Neue Technologien eigne ich mir schnell an.
          </p>
        </div>
      </div>

      {/* Tech Cards */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(40px,7vw,60px) var(--px) clamp(60px,9vw,100px)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(14px, 2.5vw, 24px)",
        }}>
          {techStack.map(({ category, color, items }, i) => (
            <div
              key={category}
              className="glass reveal"
              style={{ padding: "clamp(20px, 3vw, 28px)", transitionDelay: `${i * 0.07}s` }}
            >
              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <div style={{
                  width: "9px", height: "9px", borderRadius: "50%",
                  background: color, boxShadow: `0 0 10px ${color}80`, flexShrink: 0,
                }} />
                <h3 style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 700,
                  fontSize: "0.8rem", letterSpacing: "0.1em",
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
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0, overflow: "hidden" }}>
                        {/* Tech icon */}
                        <span style={{
                          display: "flex", alignItems: "center", justifyContent: "center",
                          width: "26px", height: "26px", borderRadius: "6px",
                          background: `${color}12`, border: `1px solid ${color}25`,
                          color, flexShrink: 0,
                        }}>
                          <Icon size={14} />
                        </span>
                        <p style={{
                          fontFamily: "'Syne',sans-serif", fontWeight: 600,
                          fontSize: "clamp(0.84rem, 2vw, 0.9rem)",
                          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                        }}>
                          {name}
                        </p>
                      </div>
                      {href && (
                        <a
                          href={href} target="_blank" rel="noopener noreferrer"
                          style={{
                            color: "var(--muted)", fontSize: "0.75rem",
                            transition: "color 0.2s", flexShrink: 0,
                            minHeight: "24px", display: "flex", alignItems: "center",
                          }}
                          onMouseEnter={e => e.currentTarget.style.color = color}
                          onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                        >
                          <FiArrowUpRight />
                        </a>
                      )}
                    </div>
                    <p style={{ color: "var(--muted)", fontSize: "clamp(0.78rem, 1.8vw, 0.82rem)", paddingLeft: "34px" }}>{desc}</p>
                    <div style={{ height: "1px", background: `linear-gradient(90deg, ${color}30 0%, transparent 100%)`, borderRadius: "1px", marginTop: "6px" }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="reveal" style={{
          marginTop: "clamp(36px,6vw,56px)",
          padding: "clamp(18px,3vw,24px) clamp(16px,3vw,32px)",
          background: "rgba(0,200,255,0.05)",
          border: "1px solid rgba(0,200,255,0.15)",
          borderRadius: "16px",
          textAlign: "center",
        }}>
          <p style={{ color: "var(--muted)", fontSize: "clamp(0.82rem, 2vw, 0.9rem)", lineHeight: 1.7, fontStyle: "italic" }}>
            „In diesem Zusammenhang möchte ich betonen, dass ich mir neue Technologien
            <span style={{ color: "var(--accent)", fontStyle: "normal", fontWeight: 600 }}> rasch und problemlos </span>
            aneignen kann."
          </p>
        </div>
      </div>
    </div>
  );
}
