import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      style={{
        paddingTop: "60px",
        minHeight: "100dvh",
        background: "var(--bg)",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* Hero */}
      <div
        className="hero-bg"
        style={{
          padding: "clamp(44px,8vw,60px) var(--px) clamp(52px,9vw,72px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GlowBlob color="var(--hue-contact)" size={400} top="-100px" right="-60px" />
        <div style={{ maxWidth: "560px", margin: "0 auto", position: "relative" }}>
          <span className="section-label" style={{ "--label-color": "var(--hue-contact)" }}>Kontakt</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(1.9rem, 6vw, 3rem)",
              marginTop: "12px",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Lassen Sie uns
            <br />
            <span style={{ color: "var(--accent)" }}>zusammenarbeiten</span>
          </h1>
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.7,
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
            }}
          >
            Schnelle Antwortzeiten, faire und verhandelbare Preise. Ich freue
            mich auf Ihre Anfrage.
          </p>
        </div>
      </div>

      {/* Contact rows */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "clamp(36px,7vw,56px) var(--px) clamp(56px,9vw,80px)",
        }}
      >
        <div className="tile-grid" style={{ marginBottom: "40px" }}>
          {contactItems.map(({ icon: IconComp, label, value, href, color }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={
                href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="contact-card reveal"
              style={{ "--tile-accent": color, transitionDelay: `${i * 0.08}s` }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color,
                }}
              >
                <IconComp size={19} />
              </div>
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    marginBottom: "2px",
                  }}
                >
                  {label}
                </p>
                <p className="contact-card-value">{value}</p>
              </div>
              <span
                style={{
                  color: "var(--muted)",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}
              >
                →
              </span>
            </a>
          ))}
        </div>

        {/* ChiemWeb Banner */}
        {window.cw ? (
          <div className="chiemweb-banner reveal">
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

        {/* Availability */}
        <div
          className="reveal"
          style={{
            marginTop: "24px",
            padding: "16px 20px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--accent)",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              color: "var(--muted)",
              fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
              lineHeight: 1.6,
              fontFamily: "var(--font-body)",
              fontWeight: 300,
            }}
          >
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              Verfügbar für neue Projekte.
            </strong>{" "}
            Anfragen werden in der Regel innerhalb von 24h beantwortet.
          </p>
        </div>
      </div>
    </div>
  );
}
