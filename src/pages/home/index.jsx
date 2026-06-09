import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  SiReact, SiTypescript, SiNodedotjs, SiPython, SiCplusplus,
  SiArduino, SiUnity, SiGit, SiLinux, SiElectron, SiCloudflare
} from "react-icons/si";
import { FaShieldAlt, FaMicrochip, FaWifi, FaGamepad, FaMusic, FaNetworkWired } from "react-icons/fa";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Counter({ end, suffix = "", duration = 1000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const frames = 50;
        const stepValue = end / frames;
        const stepTime = duration / frames;
        let frame = 0;
        const t = setInterval(() => {
          frame++;
          if (frame >= frames) { setCount(end); clearInterval(t); }
          else setCount(Math.round(stepValue * frame));
        }, stepTime);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const techIcons = [
  { Icon: SiReact, label: "React", color: "#61dafb" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#83cd29" },
  { Icon: SiPython, label: "Python", color: "#ffd43b" },
  { Icon: SiCplusplus, label: "C++", color: "#00599c" },
  { Icon: SiArduino, label: "Arduino", color: "#00979d" },
  { Icon: SiUnity, label: "Unity", color: "#aaaaaa" },
  { Icon: SiGit, label: "Git", color: "#f05032" },
  { Icon: SiLinux, label: "Linux", color: "#fcc624" },
  { Icon: SiElectron, label: "Electron", color: "#47848f" },
  { Icon: SiCloudflare, label: "Cloudflare", color: "#f48120" },
  { Icon: FaShieldAlt, label: "Security", color: "#ef4444" },
];

const featuredProjects = [
  { name: "TWR-AI", desc: "Autonome KI-Wasserrettung — Echtzeit-Detektion und Steuerung", tag: "Web App", href: "https://twr-systems.de/", color: "#00d4ff" },
  { name: "Easy-Einkauf", desc: "Smarte kollaborative Einkaufslisten-App", tag: "Web App", href: "https://easy-einkauf.de/", color: "#00d4ff" },
  { name: "MW-OS ESP32", desc: "Mini-OS fuer ESP32 mit Touch-Display und eigenem GUI-Framework", tag: "Embedded", href: "https://github.com/ManuelWestermeier/esp-wroom-2-4-inch-os", color: "#f59e0b" },
  { name: "PrivusChat", desc: "End-to-End verschluesselter Messenger mit AES-256", tag: "Security", href: "https://privuschat.github.io/easy-messenger/", color: "#10b981" },
  { name: "LHRP Protocol", desc: "ESP Mesh-Netzwerk-Protokoll — Jugend Forscht Sieger", tag: "Networking", href: "https://github.com/ManuelWestermeier/LHRP", color: "#f59e0b" },
];

export default function Home() {
  useReveal();

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      {/* HERO */}
      <section
        className="hero-bg grid-overlay"
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px var(--px) 70px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div className="orb anim-float-slow" style={{ width: "min(400px,80vw)", height: "min(400px,80vw)", top: "-80px", right: "-80px", background: "rgba(0,212,255,0.05)" }} />
        <div className="orb anim-float" style={{ width: "min(260px,60vw)", height: "min(260px,60vw)", bottom: "5%", left: "-60px", background: "rgba(124,58,237,0.06)", animationDelay: "2s" }} />

        <div style={{ maxWidth: "800px", width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: "24px", animation: "textFadeIn 0.5s ease both" }}>
            Full-Stack Entwickler — Sounddesigner
          </div>

          <h1 style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            lineHeight: 1.0,
            marginBottom: "24px",
            animation: "textFadeIn 0.6s 0.1s ease both",
            fontSize: "clamp(2.8rem, 11vw, 6rem)",
            hyphens: "none",
          }}>
            <span style={{ display: "block", color: "var(--ink)" }}>Manuel Elias</span>
            <span style={{ display: "block", color: "var(--accent)", fontStyle: "italic" }}>Westermeier</span>
          </h1>

          {/* Horizontal rule accent */}
          <div style={{ width: "60px", height: "2px", background: "var(--accent)", marginBottom: "24px", animation: "textFadeIn 0.6s 0.15s ease both" }} />

          <p style={{
            fontSize: "clamp(0.88rem, 2.2vw, 1rem)",
            color: "var(--ink-dim)",
            maxWidth: "480px",
            lineHeight: 1.75,
            marginBottom: "36px",
            animation: "textFadeIn 0.6s 0.2s ease both",
            fontFamily: "'JetBrains Mono',monospace",
          }}>
            Massgefertigte Softwareloesungen — von Web-Apps bis Embedded-Systemen,
            Spieleentwicklung und Sounddesign.
          </p>

          <div className="cta-row" style={{ animation: "textFadeIn 0.6s 0.3s ease both" }}>
            <Link to="/projects" className="btn-primary">Projekte ansehen</Link>
            <Link to="/contact" className="btn-ghost">Kontakt aufnehmen</Link>
          </div>

          {/* Stats */}
          <div style={{
            marginTop: "56px",
            animation: "textFadeIn 0.6s 0.45s ease both",
            width: "100%",
            display: "flex",
            borderTop: "1px solid rgba(0,212,255,0.1)",
            paddingTop: "28px",
            maxWidth: "520px",
          }}>
            {[
              { end: 300, suffix: "+", label: "Projekte" },
              { end: 4, suffix: "+", label: "Jahre Erfahrung" },
              { end: 20, suffix: "+", label: "Technologien" },
            ].map(({ end, suffix, label }, idx) => (
              <div key={label} className="stat-cell">
                <div className="stat-number">
                  <Counter end={end} duration={idx === 1 ? 1750 : 1500} suffix={suffix} />
                </div>
                <p style={{ color: "var(--muted)", fontSize: "0.7rem", marginTop: "6px", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'JetBrains Mono',monospace" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech icon row */}
        <div style={{
          position: "absolute",
          bottom: "24px",
          left: "var(--px)",
          right: "var(--px)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          opacity: 0.35,
          overflowX: "hidden",
        }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", whiteSpace: "nowrap", flexShrink: 0 }}>Stack</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(0,212,255,0.15)" }} />
          {techIcons.map(({ Icon, label, color }) => (
            <span key={label} title={label} style={{ color, flexShrink: 0, display: "flex", alignItems: "center" }}>
              <Icon size={14} />
            </span>
          ))}
        </div>
      </section>

      {/* UBER MICH */}
      <section className="section-bg reveal" style={{ padding: "clamp(64px,9vw,96px) var(--px)", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(32px,5vw,56px)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <span className="section-label">Uber mich</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, lineHeight: 1.0 }}>
                Leidenschaftlicher<br />
                <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Entwickler</span><br />
                aus dem Chiemgau
              </h2>
              <p style={{ color: "var(--ink-dim)", lineHeight: 1.8, fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>
                Ich bin Manuel Westermeier — Full-Stack Entwickler, Sounddesigner
                und Technikliebhaber. Von Web-Applikationen uber Embedded-Systeme
                bis hin zu Spieleentwicklung bringe ich Ideen zum Leben.
              </p>
              <p style={{ color: "var(--ink-dim)", lineHeight: 1.8, fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>
                Neue Technologien eigne ich mir rasch an und setze sie gezielt
                fuer performante, massgefertigte Loesungen ein.
              </p>
              <div className="cta-row">
                <Link to="/my-work" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.74rem" }}>Fahigkeiten</Link>
                <Link to="/contact" className="btn-ghost" style={{ padding: "9px 22px", fontSize: "0.74rem" }}>Kontakt</Link>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Profile card */}
              <div className="glass" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "14px", position: "relative" }}>
                <div className="corner-tl" />
                <div className="corner-br" />
                <img
                  src="/logo-512.png"
                  alt="Manuel Westermeier"
                  style={{ width: "48px", height: "48px", objectFit: "cover", flexShrink: 0, border: "1px solid rgba(0,212,255,0.4)" }}
                />
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "0.96rem" }}>Manuel Westermeier</p>
                  <p style={{ color: "var(--accent)", fontSize: "0.68rem", fontFamily: "'JetBrains Mono',monospace", marginTop: "2px" }}>
                    Full-Stack Dev — Chiemgau
                  </p>
                  <p style={{ color: "var(--muted)", fontSize: "0.66rem", marginTop: "3px", fontFamily: "'JetBrains Mono',monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    info@manuel-westermeier.de
                  </p>
                </div>
              </div>

              {/* Tech icons grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "8px",
              }}>
                {techIcons.map(({ Icon, label, color }) => (
                  <div key={label} title={label} style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    aspectRatio: "1",
                    background: "rgba(0,212,255,0.04)",
                    border: "1px solid rgba(0,212,255,0.1)",
                    color,
                    transition: "all 0.18s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.background = color + "12"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.1)"; e.currentTarget.style.background = "rgba(0,212,255,0.04)"; }}
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding: "clamp(64px,9vw,96px) var(--px)", background: "var(--bg)", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="reveal" style={{ marginBottom: "40px" }}>
            <span className="section-label">Portfolio</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, marginTop: "16px" }}>
              Ausgewahlte <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Projekte</span>
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "380px", marginTop: "10px", fontSize: "0.84rem", fontFamily: "'JetBrains Mono',monospace" }}>
              300+ realisierte Projekte — eine Auswahl.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: "1px", background: "rgba(0,212,255,0.08)" }}>
            {featuredProjects.map(({ name, desc, tag, href, color }, i) => (
              <div
                key={name}
                className="reveal"
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  transitionDelay: `${i * 0.06}s`,
                  background: "var(--bg)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,212,255,0.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: color, opacity: 0.6 }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.58rem",
                    padding: "3px 10px",
                    background: `${color}15`,
                    border: `1px solid ${color}35`,
                    color,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    {tag}
                  </span>
                  <span style={{ color: "var(--accent)", fontSize: "0.8rem" }}>+</span>
                </div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1rem" }}>{name}</h3>
                <p style={{ color: "var(--ink-dim)", fontSize: "0.82rem", lineHeight: 1.65, flexGrow: 1 }}>{desc}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
                  Ansehen
                </a>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: "32px" }}>
            <Link to="/projects" className="btn-ghost">Alle Projekte ansehen</Link>
          </div>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="reveal" style={{ padding: "clamp(64px,9vw,96px) var(--px)", background: "var(--bg-mid)", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <span className="section-label">Kontakt</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, marginTop: "16px", marginBottom: "16px" }}>
            Projekt in <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Planung</span>?
          </h2>
          <p style={{ color: "var(--ink-dim)", lineHeight: 1.75, marginBottom: "32px", fontSize: "0.9rem" }}>
            Schnelle Antwortzeiten, faire Preise, professionelle Umsetzung.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: "14px 32px", fontSize: "0.82rem" }}>
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}
