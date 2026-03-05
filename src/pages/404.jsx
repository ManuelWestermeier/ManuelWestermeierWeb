import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div
      className="hero-bg grid-overlay"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "var(--px)",
      }}
    >
      <div style={{ position: "relative" }}>
        {/* Big 404 */}
        <p
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: "clamp(8rem, 25vw, 16rem)",
            lineHeight: 1,
            background: "linear-gradient(135deg, rgba(0,200,255,0.15) 0%, rgba(99,102,241,0.1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            userSelect: "none",
            letterSpacing: "-0.05em",
          }}
        >
          404
        </p>

        <div style={{ marginTop: "-20px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>Seite nicht gefunden</span>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "12px" }}>
            Diese Seite <span className="gradient-text">existiert nicht</span>
          </h1>
          <p style={{ color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>
            Der Pfad <code style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--accent)", background: "rgba(0,200,255,0.1)", padding: "2px 8px", borderRadius: "4px" }}>{pathname}</code> wurde nicht gefunden.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "28px", flexWrap: "wrap" }}>
            <Link to="/" replace className="btn-primary">← Zurück zur Startseite</Link>
            <Link to="/contact" className="btn-ghost">Kontakt</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
