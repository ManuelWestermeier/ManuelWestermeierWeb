import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconMail, IconPhone, IconGitHub } from "../../comp/icons";

const contactItems = [
  {
    icon: IconMail,
    label: "E-Mail",
    value: "info@manuel-westermeier.de",
    href: "mailto:info@manuel-westermeier.de",
    color: "#00c8ff",
  },
  {
    icon: IconPhone,
    label: "Telefon",
    value: "+49 1525 6427 900",
    href: "tel:+4915256427900",
    color: "#10b981",
  },
  {
    icon: IconGitHub,
    label: "GitHub",
    value: "github.com/ManuelWestermeier",
    href: "https://github.com/ManuelWestermeier",
    color: "#6366f1",
  },
];

export default function Contact() {
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
      <div className="hero-bg" style={{ padding: "clamp(44px,8vw,60px) var(--px) clamp(52px,9vw,72px)" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <span className="section-label">Kontakt</span>
          <h1 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: "clamp(1.9rem, 6vw, 3.2rem)",
            marginTop: "12px", marginBottom: "16px",
            lineHeight: 1.08,
          }}>
            Lassen Sie uns<br /><span className="gradient-text">zusammenarbeiten</span>
          </h1>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>
            Schnelle Antwortzeiten, faire und verhandelbare Preise.
            Ich freue mich auf Ihre Anfrage.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "clamp(36px,7vw,56px) var(--px) clamp(56px,9vw,80px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
          {contactItems.map(({ icon: IconComp, label, value, href, color }, i) => (
            <a
              key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="contact-card-icon" style={{
                width: "44px", height: "44px", borderRadius: "11px",
                background: `${color}14`, border: `1px solid ${color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, color,
              }}>
                <IconComp size={20} />
              </div>
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "var(--muted)", marginBottom: "2px" }}>{label}</p>
                <p className="contact-card-value">{value}</p>
              </div>
              <span style={{ color: "var(--muted)", flexShrink: 0, fontSize: "0.9rem" }}>→</span>
            </a>
          ))}
        </div>

        {/* ChiemWeb Banner */}
        <div className="chiemweb-banner reveal">
          <img
            src="https://chiemweb.de/logo-512.jpg" alt="ChiemWeb"
            style={{ width: "56px", height: "56px", borderRadius: "12px", margin: "0 auto 14px", display: "block", border: "2px solid rgba(0,200,255,0.3)", objectFit: "cover" }}
          />
          <span className="section-label" style={{ display: "block", marginBottom: "8px" }}>Website-Kauf</span>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.15rem, 3.5vw, 1.65rem)", marginBottom: "12px" }}>
            Professionelle Website gesucht?
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "22px", lineHeight: 1.7, fontSize: "clamp(0.82rem, 2vw, 0.88rem)", maxWidth: "360px", margin: "0 auto 22px" }}>
            Für Unternehmen empfehle ich{" "}
            <strong style={{ color: "var(--ink)" }}>ChiemWeb.de</strong> —
            moderne Websites zu fairen Preisen aus dem Chiemgau.
          </p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <a href="https://chiemweb.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
              ChiemWeb.de entdecken ↗
            </a>
          </div>
        </div>

        {/* Availability */}
        <div className="reveal" style={{
          marginTop: "24px", padding: "16px 20px",
          background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.18)",
          borderRadius: "13px", display: "flex", alignItems: "center", gap: "12px",
        }}>
          <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981", flexShrink: 0, animation: "pulseGlow 2s ease-in-out infinite" }} />
          <p style={{ color: "var(--muted)", fontSize: "clamp(0.8rem, 2vw, 0.85rem)", lineHeight: 1.6 }}>
            <strong style={{ color: "var(--ink)" }}>Verfügbar für neue Projekte.</strong>{" "}
            Anfragen werden in der Regel innerhalb von 24h beantwortet.
          </p>
        </div>
      </div>
    </div>
  );
}
