import React from "react";
import { Link } from "react-router-dom";
import { IconGitHub, IconYouTube, IconUnity } from "../icons";

const socials = [
  { href: "https://github.com/manuelWestermeier/", label: "GitHub", Icon: IconGitHub },
  { href: "https://www.youtube.com/@TAGESSCHATTEN?sub_confirmation=1", label: "YouTube", Icon: IconYouTube },
  { href: "https://play.unity.com/en/user/66818d56-98e8-499c-8fca-b3eb98a886c7", label: "Unity", Icon: IconUnity },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(0,200,255,0.08)",
      padding: "clamp(40px,7vw,56px) var(--px) clamp(24px,5vw,36px)",
      background: "var(--bg)",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
          gap: "clamp(24px, 4vw, 36px)",
          marginBottom: "clamp(28px, 5vw, 44px)",
        }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/logo-512.png"
                alt="MW"
                style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1.5px solid rgba(0,200,255,0.4)", objectFit: "cover", flexShrink: 0 }}
              />
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.92rem" }}>
                Manuel Westermeier
              </span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.6, maxWidth: "220px" }}>
              Full-Stack Entwickler &amp; Sounddesigner aus dem Chiemgau.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "36px", height: "36px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(0,200,255,0.07)",
                    border: "1px solid rgba(0,200,255,0.14)",
                    borderRadius: "9px", color: "var(--muted)",
                    transition: "all 0.2s ease", textDecoration: "none", flexShrink: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "rgba(0,200,255,0.38)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "rgba(0,200,255,0.14)"; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "4px" }}>
              Navigation
            </p>
            {[{ to: "/my-work", label: "Skills" }, { to: "/projects", label: "Projekte" }, { to: "/contact", label: "Kontakt" }].map(({ to, label }) => (
              <Link key={to} to={to} className="nav-link" style={{ fontSize: "0.88rem", width: "fit-content" }}>{label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "4px" }}>
              Rechtliches
            </p>
            <Link to="/impressum" className="nav-link" style={{ fontSize: "0.88rem", width: "fit-content" }}>Impressum</Link>
            <Link to="/datenschutz" className="nav-link" style={{ fontSize: "0.88rem", width: "fit-content" }}>Datenschutz</Link>
          </div>

          {/* ChiemWeb */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "4px" }}>
              Website kaufen?
            </p>
            <a
              href="https://chiemweb.de" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 13px", background: "rgba(0,200,255,0.06)", border: "1px solid rgba(0,200,255,0.18)", borderRadius: "11px", transition: "all 0.3s ease", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,200,255,0.45)"; e.currentTarget.style.background = "rgba(0,200,255,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,200,255,0.18)"; e.currentTarget.style.background = "rgba(0,200,255,0.06)"; }}
            >
              <img src="/chiemweb-logo-512.jpg" alt="ChiemWeb" style={{ width: "28px", height: "28px", borderRadius: "7px", objectFit: "cover", flexShrink: 0 }} />
              <div style={{ minWidth: 0 }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.84rem", color: "var(--ink)" }}>ChiemWeb.de</p>
                <p style={{ fontSize: "0.7rem", color: "var(--muted)", whiteSpace: "nowrap" }}>Professionelle Websites</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(0,200,255,0.07)",
          paddingTop: "18px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "6px",
        }}>
          <p style={{ color: "var(--muted)", fontSize: "0.76rem" }}>© {new Date().getFullYear()} Manuel Westermeier</p>
          <p style={{ color: "var(--muted)", fontSize: "0.76rem" }}>Erstellt mit ChiemWeb</p>
        </div>
      </div>
    </footer>
  );
}
