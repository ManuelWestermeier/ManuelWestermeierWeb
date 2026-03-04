import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
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
        padding: "100px 24px 80px",
        position: "relative", overflow: "hidden",
        boxSizing: "border-box",
      }}>
        {/* Orbs */}
        <div className="orb anim-float-slow" style={{ width: "350px", height: "350px", top: "-60px", right: "-80px", background: "rgba(0,200,255,0.06)" }} />
        <div className="orb anim-float" style={{ width: "250px", height: "250px", bottom: "8%", left: "-50px", background: "rgba(99,102,241,0.07)", animationDelay: "2s" }} />

        <div style={{ maxWidth: "760px", width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Label */}
          <div className="section-label" style={{ marginBottom: "18px", animation: "textFadeIn 0.5s ease both" }}>
            Full-Stack Developer · Sound Designer
          </div>

          {/* Name — scales from small mobile to desktop */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "22px",
            animation: "textFadeIn 0.6s 0.1s ease both",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            whiteSpace: "normal",
          }}>
            <span className="gradient-text">Manuel </span>
            <span style={{ color: "var(--ink)" }}>Westermeier</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(0.88rem, 2.2vw, 1.05rem)",
            color: "var(--muted)", maxWidth: "460px",
            lineHeight: 1.7, marginBottom: "32px",
            animation: "textFadeIn 0.6s 0.2s ease both",
          }}>
            Maßgeschneiderte Softwarelösungen — von Web-Apps bis Embedded-Systemen,
            Spielen und Sounddesign.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex", gap: "12px", flexWrap: "wrap",
            animation: "textFadeIn 0.6s 0.3s ease both",
          }}>
            <Link to="/projects" className="btn-primary">Projekte ansehen →</Link>
            <Link to="/contact" className="btn-ghost">Kontakt aufnehmen</Link>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: "0",
            marginTop: "60px",
            animation: "textFadeIn 0.6s 0.45s ease both",
            borderTop: "1px solid rgba(0,200,255,0.12)",
            paddingTop: "32px",
            maxWidth: "560px",
          }}>
            {[
              { end: 300, suffix: "+", label: "Projekte" },
              { end: 5, suffix: "+ Jahre", label: "Erfahrung" },
              { end: 20, suffix: "+", label: "Technologien" },
            ].map(({ end, suffix, label }, idx) => (
              <div key={label} style={{
                flex: 1,
                paddingRight: "24px",
                borderRight: idx < 2 ? "1px solid rgba(0,200,255,0.1)" : "none",
                paddingLeft: idx > 0 ? "24px" : "0",
              }}>
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "var(--accent)", lineHeight: 1,
                }}>
                  <Counter end={end} suffix={suffix} />
                </div>
                <p style={{ color: "var(--muted)", fontSize: "0.78rem", marginTop: "6px", letterSpacing: "0.03em" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="anim-float" style={{ position: "absolute", bottom: "24px", left: "24px", display: "flex", alignItems: "center", gap: "8px", opacity: 0.4 }}>
          <div style={{ width: "20px", height: "33px", border: "1.5px solid var(--muted)", borderRadius: "10px", display: "flex", justifyContent: "center", paddingTop: "5px" }}>
            <div style={{ width: "3px", height: "6px", background: "var(--accent)", borderRadius: "2px", animation: "float 2s ease-in-out infinite" }} />
          </div>
          <p style={{ fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Scroll</p>
        </div>
      </section>

      {/* ── ÜBER MICH ────────────────────── */}
      <section className="section-bg reveal" style={{ padding: "80px 24px", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "48px", alignItems: "center" }}>
            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <span className="section-label">Über mich</span>
              <h2 style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, lineHeight: 1.15 }}>
                Leidenschaftlicher<br /><span className="gradient-text">Entwickler</span><br />aus dem Chiemgau
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                Ich bin Manuel Westermeier — Full-Stack Entwickler, Sounddesigner und
                Technikliebhaber. Von Web-Applikationen über Embedded-Systeme bis hin zu
                Spieleentwicklung bringe ich Ideen zum Leben.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                Neue Technologien eigne ich mir rasch an und setze sie gezielt für
                performante, maßgeschneiderte Lösungen ein.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Link to="/my-work" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>Skills ansehen</Link>
                <Link to="/contact" className="btn-ghost" style={{ padding: "9px 21px", fontSize: "0.85rem" }}>Kontakt</Link>
              </div>
            </div>

            {/* Skills + Avatar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {skills.map((s) => <span key={s} className="skill-chip">{s}</span>)}
              </div>
              <div className="glass" style={{ padding: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="/logo-512.png" alt="Manuel Westermeier" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "2px solid rgba(0,200,255,0.4)", objectFit: "cover", flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.88rem" }}>Manuel Westermeier</p>
                  <p style={{ color: "var(--accent)", fontSize: "0.72rem", fontFamily: "'JetBrains Mono',monospace" }}>Full-Stack Dev · Chiemgau</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.7rem", marginTop: "2px" }}>info@manuel-westermeier.de</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────── */}
      <section style={{ padding: "80px 24px", background: "var(--bg)", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="reveal" style={{ marginBottom: "40px" }}>
            <span className="section-label">Portfolio</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, marginTop: "10px" }}>
              Ausgewählte <span className="gradient-text">Projekte</span>
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "400px", marginTop: "10px", fontSize: "0.88rem" }}>
              Über 300 realisierte Projekte — eine Auswahl der wichtigsten.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: "14px" }}>
            {featuredProjects.map(({ key, name, desc, tag, href, color }, i) => (
              <div key={key} className="project-card reveal" style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "10px", transitionDelay: `${i * 0.07}s` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.67rem", padding: "3px 9px", background: `${color}18`, border: `1px solid ${color}40`, borderRadius: "100px", color }}>{tag}</span>
                  <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>↗</span>
                </div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.98rem" }}>{name}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.6, flexGrow: 1 }}>{desc}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className="project-link" style={{ width: "fit-content", fontSize: "0.74rem" }}>Ansehen →</a>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: "32px" }}>
            <Link to="/projects" className="btn-ghost">Alle Projekte ansehen →</Link>
          </div>
        </div>
      </section>

      {/* ── CHIEMWEB CTA ─────────────────── */}
      <section className="section-bg" style={{ padding: "80px 24px", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", width: "100%" }}>
          <div className="chiemweb-banner reveal">
            <img src="https://chiemweb.de/logo-512.jpg" alt="ChiemWeb Logo" style={{ width: "56px", height: "56px", borderRadius: "12px", margin: "0 auto 14px", display: "block", objectFit: "cover", border: "2px solid rgba(0,200,255,0.3)" }} className="anim-orbit" />
            <span className="section-label" style={{ display: "block", marginBottom: "8px" }}>Professionelle Webentwicklung</span>
            <h2 style={{ fontSize: "clamp(1.3rem, 3.5vw, 2.1rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, marginBottom: "12px" }}>
              Brauchen Sie eine <span className="gradient-text">Website</span>?
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "400px", margin: "0 auto 24px", lineHeight: 1.7, fontSize: "0.88rem" }}>
              Für professionelle Webprojekte empfehle ich <strong style={{ color: "var(--ink)" }}>ChiemWeb.de</strong> — moderne Websites zu fairen Preisen aus dem Chiemgau.
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://chiemweb.de" target="_blank" rel="noopener noreferrer" className="btn-primary">ChiemWeb.de besuchen ↗</a>
              <Link to="/contact" className="btn-ghost">Direkt anfragen</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT TEASER ───────────────── */}
      <section className="reveal" style={{ padding: "80px 24px", background: "var(--bg)", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <span className="section-label">Kontakt</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)", fontFamily: "'Syne',sans-serif", fontWeight: 800, marginTop: "10px", marginBottom: "14px" }}>
            Projekt in <span className="gradient-text">Planung</span>?
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "28px", fontSize: "0.9rem" }}>
            Schnelle Antwortzeiten, faire Preise, professionelle Umsetzung.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: "12px 30px", fontSize: "0.92rem" }}>
            Jetzt Kontakt aufnehmen →
          </Link>
        </div>
      </section>

    </div>
  );
}
