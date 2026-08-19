import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GlowBlob from "../comp/glow-blob";

export default function PageNotFound() {
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div
      className="hero-bg"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "var(--px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlowBlob color="var(--hue-contact)" size={420} top="10%" left="-100px" />
      <GlowBlob color="var(--hue-about)" size={340} bottom="0" right="-80px" slow />
      <div style={{ position: "relative" }}>
        {/* Big 404 */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(6rem, 20vw, 12rem)",
            lineHeight: 1,
            color: "var(--surface)",
            userSelect: "none",
            letterSpacing: "-0.02em",
          }}
        >
          404
        </p>

        <div style={{ marginTop: "-20px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>Seite nicht gefunden</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.5rem, 4vw, 2.3rem)", marginBottom: "12px" }}>
            Diese Seite <span style={{ color: "var(--accent)" }}>existiert nicht</span>
          </h1>
          <p style={{ color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem", fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Der Pfad <code style={{ fontFamily: "var(--font-body)", color: "var(--accent)", background: "var(--surface)", padding: "2px 8px", borderRadius: "4px" }}>{pathname}</code> wurde nicht gefunden.
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
