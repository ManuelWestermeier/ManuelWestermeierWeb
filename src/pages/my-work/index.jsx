import React, { useEffect } from "react";

const techStack = [
  {
    category: "Frontend",
    color: "#00c8ff",
    items: [
      { name: "React / Vite", desc: "Web-Apps & SPAs mit JSX", href: "https://react.dev" },
      { name: "HTML / CSS / JS", desc: "Fundamentals & Vanilla Web", href: "" },
      { name: "Electron", desc: "Cross-Platform Desktop Apps", href: "https://www.electronjs.org" },
    ],
  },
  {
    category: "Backend",
    color: "#10b981",
    items: [
      { name: "Node.js / Express", desc: "REST APIs & Serverlogik", href: "https://nodejs.org" },
      { name: "WSNET Framework", desc: "Eigenes WebSocket-Protokoll", href: "https://github.com/ManuelWestermeier/WSNET_Framework/" },
      { name: "Strato / Cloudflare", desc: "Hosting & DNS-Management", href: "https://www.cloudflare.com" },
    ],
  },
  {
    category: "Embedded",
    color: "#f59e0b",
    items: [
      { name: "ESP32 / Arduino", desc: "Mikrocontroller-Programmierung", href: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/" },
      { name: "C / C++", desc: "Low-Level & Performance Code", href: "" },
      { name: "PlatformIO", desc: "Embedded Build-System", href: "" },
    ],
  },
  {
    category: "Game Dev",
    color: "#6366f1",
    items: [
      { name: "Unity (C#)", desc: "2D / 3D Spieleentwicklung", href: "https://unity.com" },
      { name: "Visual Studio", desc: "C# / C++ GUI-Entwicklung", href: "https://visualstudio.microsoft.com" },
      { name: "@-script", desc: "Eigene Programmiersprache", href: "https://github.com/ManuelWestermeier/at-script" },
    ],
  },
  {
    category: "Audio",
    color: "#ec4899",
    items: [
      { name: "Sounddesign", desc: "Effekte für Spiele & Medien", href: "https://www.youtube.com/@TAGESSCHATTEN?sub_confirmation=1" },
      { name: "Musikproduktion", desc: "Beats, Soundscapes, YouTube", href: "https://www.youtube.com/@TAGESSCHATTEN/videos" },
    ],
  },
  {
    category: "DevOps",
    color: "#14b8a6",
    items: [
      { name: "Git / GitHub", desc: "Versionskontrolle & CI", href: "https://github.com/manuelWestermeier/" },
      { name: "Netlify / Render", desc: "Static Hosting & Deployment", href: "https://www.netlify.com" },
      { name: "GitHub Pages / Cloudflare", desc: "Static & Dynamic Site Hosting", href: "https://pages.github.com/" },
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
                <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: color, boxShadow: `0 0 10px ${color}80`, flexShrink: 0 }} />
                <h3 style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color,
                }}>
                  {category}
                </h3>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {items.map(({ name, desc, href }) => (
                  <div key={name} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "clamp(0.84rem, 2vw, 0.9rem)", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }}>{name}</p>
                      {href && (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--muted)", fontSize: "0.75rem", transition: "color 0.2s", flexShrink: 0, minHeight: "24px", display: "flex", alignItems: "center" }}
                          onMouseEnter={e => e.currentTarget.style.color = color}
                          onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                        >
                          ↗
                        </a>
                      )}
                    </div>
                    <p style={{ color: "var(--muted)", fontSize: "clamp(0.78rem, 1.8vw, 0.82rem)" }}>{desc}</p>
                    <div style={{ height: "2px", background: `linear-gradient(90deg, ${color}40 0%, transparent 100%)`, borderRadius: "1px", marginTop: "5px" }} />
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
