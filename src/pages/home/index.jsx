import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let n = 0;
        const step = Math.max(1, Math.ceil(end / 50));
        const t = setInterval(() => {
          n += step;
          if (n >= end) { setCount(end); clearInterval(t); }
          else setCount(n);
        }, 25);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const skills = ["React", "Node.js", "C/C++", "ESP32", "Unity", "Electron", "TypeScript", "WebSockets", "AES", "C#", "Git", "Linux"];

const featuredProjects = [
  { key: "a", name: "Easy-Einkauf", desc: "Smarte Einkaufslisten-App", tag: "Web App", href: "https://app.easy-einkauf.de/", color: "#00c8ff" },
  { key: "b", name: "MW-OS (ESP32)", desc: "Mini-OS für ESP32 mit Touch-Display", tag: "Embedded", href: "https://github.com/ManuelWestermeier/esp-wroom-2-4-inch-os", color: "#6366f1" },
  { key: "c", name: "PrivusChat", desc: "Sicherer Messenger mit AES-Verschlüsselung", tag: "Security", href: "https://privuschat.github.io/easy-messenger/", color: "#10b981" },
  { key: "d", name: "LHRP Protocol", desc: "ESP Mesh-Netzwerk — Jugend Forscht", tag: "Networking", href: "https://github.com/ManuelWestermeier/LHRP", color: "#f59e0b" },
];

export default function Home() {
  useReveal();

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>

      {/* ── HERO ─────────────────────────── */}
      <section className="hero-bg grid-overlay" style={{
        minHeight: "100dvh",
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        padding: "80px var(--px) 70px",
        position: "relative", overflow: "hidden",
        boxSizing: "border-box",
      }}>
        {/* Orbs — clipped so they never cause overflow */}
        <div className="orb anim-float-slow" style={{
          width: "min(350px, 80vw)", height: "min(350px, 80vw)",
          top: "-40px", right: "-60px",
          background: "rgba(0,200,255,0.06)",
        }} />
        <div className="orb anim-float" style={{
          width: "min(220px, 60vw)", height: "min(220px, 60vw)",
          bottom: "8%", left: "-40px",
          background: "rgba(99,102,241,0.07)", animationDelay: "2s",
        }} />

        <div style={{ maxWidth: "740px", width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Label */}
          <div className="section-label" style={{ marginBottom: "14px", animation: "textFadeIn 0.5s ease both" }}>
            Full-Stack Entwickler · Sounddesigner
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            lineHeight: 1.08,
            marginBottom: "18px",
            animation: "textFadeIn 0.6s 0.1s ease both",
            fontSize: "clamp(2.4rem, 10vw, 5rem)",
            hyphens: "none",
            wordBreak: "keep-all",
          }}>
            <span className="gradient-text" style={{ display: "block" }}>Manuel</span>
            <span style={{ color: "var(--ink)", display: "block" }}>Westermeier</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
            color: "var(--muted)", maxWidth: "460px",
            lineHeight: 1.7, marginBottom: "28px",
            animation: "textFadeIn 0.6s 0.2s ease both",
          }}>
            Maßgeschneiderte Softwarelösungen — von Web-Apps bis Embedded-Systemen,
            Spielen und Sounddesign.
          </p>

          {/* CTAs */}
          <div className="cta-row" style={{ animation: "textFadeIn 0.6s 0.3s ease both" }}>
            <Link to="/projects" className="btn-primary">Projekte ansehen →</Link>
            <Link to="/contact" className="btn-ghost">Kontakt aufnehmen</Link>
          </div>

          {/* Stats */}
          <div className="stats-row" style={{
            marginTop: "48px",
            animation: "textFadeIn 0.6s 0.45s ease both",
          }}>
            {[
              { end: 300, suffix: "+", label: "Projekte" },
              { end: 3, suffix: "+", label: "Jahre Erfahrung" },
              { end: 20, suffix: "+", label: "Technologien" },
            ].map(({ end, suffix, label }, idx) => (
              <div key={label} className="stat-cell">
                <div className="stat-number">
                  <Counter end={end} suffix={suffix} />
                </div>
                <p style={{ color: "var(--muted)", fontSize: "clamp(0.68rem, 1.6vw, 0.78rem)", marginTop: "5px", letterSpacing: "0.03em" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator — hide on tiny screens */}
        <div className="anim-float" style={{
          position: "absolute", bottom: "20px", left: "var(--px)",
          display: "flex", alignItems: "center", gap: "8px", opacity: 0.4,
        }}>
          <div style={{ width: "18px", height: "30px", border: "1.5px solid var(--muted)", borderRadius: "9px", display: "flex", justifyContent: "center", paddingTop: "4px" }}>
            <div style={{ width: "2.5px", height: "5px", background: "var(--accent)", borderRadius: "2px", animation: "float 2s ease-in-out infinite" }} />
          </div>
          <p style={{ fontSize: "0.58rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Scroll</p>
        </div>
      </section>

      {/* ── ÜBER MICH ────────────────────── */}
      <section className="section-bg reveal" style={{ padding: "clamp(56px,8vw,80px) var(--px)", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "clamp(28px, 5vw, 48px)",
            alignItems: "center",
          }}>
            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span className="section-label">Über mich</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 2.6rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, lineHeight: 1.15 }}>
                Leidenschaftlicher<br /><span className="gradient-text">Entwickler</span><br />aus dem Chiemgau
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>
                Ich bin Manuel Westermeier — Full-Stack Entwickler, Sounddesigner und
                Technikliebhaber. Von Web-Applikationen über Embedded-Systeme bis hin zu
                Spieleentwicklung bringe ich Ideen zum Leben.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>
                Neue Technologien eigne ich mir rasch an und setze sie gezielt für
                performante, maßgeschneiderte Lösungen ein.
              </p>
              <div className="cta-row">
                <Link to="/my-work" className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>Skills ansehen</Link>
                <Link to="/contact" className="btn-ghost" style={{ padding: "9px 20px", fontSize: "0.85rem" }}>Kontakt</Link>
              </div>
            </div>

            {/* Skills + Avatar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {skills.map((s) => <span key={s} className="skill-chip">{s}</span>)}
              </div>
              <div className="glass" style={{ padding: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src="/logo-512.png" alt="Manuel Westermeier"
                  style={{ width: "42px", height: "42px", borderRadius: "50%", border: "2px solid rgba(0,200,255,0.4)", objectFit: "cover", flexShrink: 0 }}
                />
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.88rem" }}>Manuel Westermeier</p>
                  <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontFamily: "'JetBrains Mono',monospace" }}>Entwickler · Chiemgau</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.68rem", marginTop: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>info@manuel-westermeier.de</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────── */}
      <section style={{ padding: "clamp(56px,8vw,80px) var(--px)", background: "var(--bg)", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="reveal" style={{ marginBottom: "32px" }}>
            <span className="section-label">Portfolio</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 2.6rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, marginTop: "10px" }}>
              Ausgewählte <span className="gradient-text">Projekte</span>
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "400px", marginTop: "8px", fontSize: "clamp(0.82rem, 2vw, 0.88rem)" }}>
              Über 300 realisierte Projekte — eine Auswahl der wichtigsten.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 210px), 1fr))",
            gap: "12px",
          }}>
            {featuredProjects.map(({ key, name, desc, tag, href, color }, i) => (
              <div key={key} className="project-card reveal" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px", transitionDelay: `${i * 0.07}s` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem",
                    padding: "3px 9px",
                    background: `${color}18`, border: `1px solid ${color}40`,
                    borderRadius: "100px", color,
                    whiteSpace: "nowrap", flexShrink: 0,
                  }}>{tag}</span>
                  <span style={{ color: "var(--muted)", fontSize: "0.88rem", flexShrink: 0 }}>↗</span>
                </div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.96rem" }}>{name}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.6, flexGrow: 1 }}>{desc}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className="project-link" style={{ width: "fit-content", fontSize: "0.72rem" }}>Ansehen →</a>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: "28px" }}>
            <Link to="/projects" className="btn-ghost">Alle Projekte ansehen →</Link>
          </div>
        </div>
      </section>

      {/* ── CHIEMWEB CTA ─────────────────── */}
      <section className="section-bg" style={{ padding: "clamp(56px,8vw,80px) var(--px)", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto", width: "100%" }}>
          <div className="chiemweb-banner reveal">
            <img
              src="/chiemweb-logo-512.jpg" alt="ChiemWeb Logo"
              style={{ width: "52px", height: "52px", borderRadius: "12px", margin: "0 auto 14px", display: "block", objectFit: "cover", border: "2px solid rgba(0,200,255,0.3)" }}
              className="anim-orbit"
            />
            <span className="section-label" style={{ display: "block", marginBottom: "8px" }}>Professionelle Webentwicklung</span>
            <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, marginBottom: "12px" }}>
              Brauchen Sie eine <span className="gradient-text">Website</span>?
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "380px", margin: "0 auto 22px", lineHeight: 1.7, fontSize: "clamp(0.82rem, 2vw, 0.88rem)" }}>
              Für professionelle Webprojekte empfehle ich <strong style={{ color: "var(--ink)" }}>ChiemWeb.de</strong> — moderne Websites zu fairen Preisen aus dem Chiemgau.
            </p>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <a href="https://chiemweb.de" target="_blank" rel="noopener noreferrer" className="btn-primary">ChiemWeb.de besuchen ↗</a>
              <Link to="/contact" className="btn-ghost">Direkt anfragen</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT TEASER ───────────────── */}
      <section className="reveal" style={{ padding: "clamp(56px,8vw,80px) var(--px)", background: "var(--bg)", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <span className="section-label">Kontakt</span>
          <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 2.6rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, marginTop: "10px", marginBottom: "14px" }}>
            Projekt in <span className="gradient-text">Planung</span>?
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "26px", fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>
            Schnelle Antwortzeiten, faire Preise, professionelle Umsetzung.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: "12px 28px", fontSize: "0.9rem" }}>
            Jetzt Kontakt aufnehmen →
          </Link>
        </div>
      </section>

    </div>
  );
}
