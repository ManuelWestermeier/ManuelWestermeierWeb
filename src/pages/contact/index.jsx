import React, { useEffect } from "react";
import { IconMail, IconPhone, IconGitHub } from "../../comp/icons";
import GlowBlob from "../../comp/glow-blob";

const contactItems = [
  {
    icon: IconMail,
    label: "E-Mail",
    value: "info@manuel-westermeier.de",
    href: "mailto:info@manuel-westermeier.de",
    color: "var(--accent-bright)",
  },
  {
    icon: IconPhone,
    label: "Telefon",
    value: "+49 1525 6427 900",
    href: "tel:+4915256427900",
    color: "var(--hue-projects)",
  },
  {
    icon: IconGitHub,
    label: "GitHub",
    value: "github.com/ManuelWestermeier",
    href: "https://github.com/ManuelWestermeier",
    color: "var(--hue-about)",
  },
];

export default function Contact() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="section-contact"
      style={{
        paddingTop: "60px",
        minHeight: "100dvh",
        overflowX: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      <GlowBlob color="var(--hue-contact)" size={440} top="0" right="-140px" />
      <GlowBlob color="var(--hue-about)" size={300} bottom="10%" left="-100px" slow />

      <div
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "clamp(56px,10vw,96px) var(--px) clamp(56px,9vw,90px)",
          position: "relative",
        }}
      >
        <div className="about-grid" style={{ display: "grid", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
          {/* Left: pitch */}
          <div>
            <span className="section-label" style={{ "--label-color": "var(--hue-contact)" }}>
              Kontakt
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5.5vw, 3.2rem)",
                marginTop: "14px",
                marginBottom: "18px",
                lineHeight: 1.1,
              }}
            >
              <span className="hero-name-line1" style={{ display: "block" }}>
                Lassen Sie uns
              </span>
              <span
                className="hero-name-line2"
                style={{ display: "block", color: "var(--hue-contact)" }}
              >
                zusammenarbeiten
              </span>
            </h1>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.75,
                fontSize: "var(--size-body)",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                maxWidth: "420px",
                marginBottom: "22px",
              }}
            >
              Schnelle Antwortzeiten, faire und verhandelbare Preise. Ich freue
              mich auf Ihre Anfrage.
            </p>

            <div
              className="reveal"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "9px 16px",
                border: "1px solid var(--border)",
                borderRadius: "999px",
                marginBottom: "26px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--hue-contact)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: "var(--muted)",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  Verfügbar
                </strong>{" "}
                — Antwort meist binnen 24h
              </span>
            </div>

            <div className="cta-row">
              <a href="mailto:info@manuel-westermeier.de" className="btn-primary">
                E-Mail schreiben
              </a>
              <a href="tel:+4915256427900" className="btn-ghost">
                Anrufen
              </a>
            </div>
          </div>

          {/* Right: consolidated contact card */}
          <div
            className="tile reveal"
            style={{ "--tile-accent": "var(--hue-contact)", padding: "10px" }}
          >
            {contactItems.map(({ icon: IconComp, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px 12px",
                  borderTop: "1px solid var(--border)",
                  textDecoration: "none",
                  transition: "background 0.18s ease",
                }}
                className="contact-row"
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color,
                  }}
                >
                  <IconComp size={18} />
                </div>
                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      fontSize: "0.74rem",
                      color: "var(--muted)",
                      marginBottom: "2px",
                    }}
                  >
                    {label}
                  </p>
                  <p className="contact-card-value">{value}</p>
                </div>
                <span style={{ color: "var(--muted)", flexShrink: 0, fontSize: "0.9rem" }}>
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ChiemWeb Banner */}
        {window.cw ? (
          <div
            className="chiemweb-banner reveal"
            style={{ marginTop: "clamp(48px,8vw,72px)" }}
          >
            <img
              src="/chiemweb-logo-512.jpg"
              alt="ChiemWeb"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "var(--radius)",
                margin: "0 auto 14px",
                display: "block",
                border: "1px solid var(--border)",
                objectFit: "cover",
              }}
            />
            <span
              className="section-label"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Website-Kauf
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(1.15rem, 3.5vw, 1.5rem)",
                marginBottom: "12px",
              }}
            >
              Professionelle Website gesucht?
            </h2>
            <p
              style={{
                color: "var(--muted)",
                marginBottom: "22px",
                lineHeight: 1.7,
                fontSize: "clamp(0.82rem, 2vw, 0.88rem)",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                maxWidth: "360px",
                margin: "0 auto 22px",
              }}
            >
              Für Unternehmen empfehle ich{" "}
              <strong style={{ color: "var(--text)" }}>ChiemWeb.de</strong> —
              moderne Websites zu fairen Preisen aus dem Chiemgau.
            </p>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <a
                href="https://chiemweb.de"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                ChiemWeb.de entdecken ↗
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
