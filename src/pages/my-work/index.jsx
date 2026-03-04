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
      { name: "GitHub Pages", desc: "Static Site Hosting", href: "https://pages.github.com/" },
    ],
  },
];

export default function MyWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: "100px", minHeight: "100dvh", background: "var(--bg)" }}>
      {/* Hero */}
      <div
        className="hero-bg"
        style={{
          padding: "60px 24px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span className="section-label">Skills & Technologien</span>
          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginTop: "16px",
              marginBottom: "20px",
            }}
          >
            Meine <span className="gradient-text">Werkzeuge</span>
          </h1>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto" }}>
            Ein breites Technologie-Stack — von Frontend bis Embedded, von Spieleentwicklung
            bis Sounddesign. Neue Technologien eigne ich mir schnell an.
          </p>
        </div>
      </div>

      {/* Tech Cards */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "24px" }}>
          {techStack.map(({ category, color, items }, i) => (
            <div
              key={category}
              className="glass reveal"
              style={{
                padding: "28px",
                transitionDelay: `${i * 0.07}s`,
              }}
            >
              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: color, boxShadow: `0 0 10px ${color}80` }} />
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color,
                  }}
                >
                  {category}
                </h3>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {items.map(({ name, desc, href }) => (
                  <div key={name} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>{name}</p>
                      {href && (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--muted)", fontSize: "0.75rem", transition: "color 0.2s" }}
                          onMouseEnter={e => e.currentTarget.style.color = color}
                          onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                        >
                          ↗
                        </a>
                      )}
                    </div>
                    <p style={{ color: "var(--muted)", fontSize: "0.82rem" }}>{desc}</p>
                    <div style={{ height: "2px", background: `linear-gradient(90deg, ${color}40 0%, transparent 100%)`, borderRadius: "1px", marginTop: "6px" }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="reveal"
          style={{
            marginTop: "56px",
            padding: "24px 32px",
            background: "rgba(0,200,255,0.05)",
            border: "1px solid rgba(0,200,255,0.15)",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, fontStyle: "italic" }}>
            „In diesem Zusammenhang möchte ich betonen, dass ich mir neue Technologien
            <span style={{ color: "var(--accent)", fontStyle: "normal", fontWeight: 600 }}> rasch und problemlos </span>
            aneignen kann."
          </p>
        </div>
      </div>
    </div>
  );
}
