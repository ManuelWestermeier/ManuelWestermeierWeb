import React from "react";
import { Link } from "react-router-dom";

const socials = [
  { href: "https://github.com/manuelWestermeier/", label: "GitHub", icon: "⌥" },
  { href: "https://www.youtube.com/@TAGESSCHATTEN?sub_confirmation=1", label: "YouTube", icon: "▶" },
  { href: "https://play.unity.com/en/user/66818d56-98e8-499c-8fca-b3eb98a886c7", label: "Unity", icon: "◈" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,200,255,0.08)", padding: "56px 24px 36px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "36px", marginBottom: "44px" }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/logo-128.png"
                alt="MW"
                style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1.5px solid rgba(0,200,255,0.4)", objectFit: "cover", flexShrink: 0 }}
              />
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>
                Manuel Westermeier
              </span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.6, maxWidth: "220px" }}>
              Full-Stack Entwickler &amp; Sounddesigner aus dem Chiemgau.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map(({ href, label, icon }) => (
                <a
                  key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "34px", height: "34px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(0,200,255,0.07)",
                    border: "1px solid rgba(0,200,255,0.14)",
                    borderRadius: "8px", color: "var(--muted)", fontSize: "0.85rem",
                    transition: "all 0.2s ease", textDecoration: "none", flexShrink: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "rgba(0,200,255,0.38)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "rgba(0,200,255,0.14)"; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "4px" }}>
              Navigation
            </p>
            {[{ to: "/my-work", label: "Skills" }, { to: "/projects", label: "Projekte" }, { to: "/contact", label: "Kontakt" }].map(({ to, label }) => (
              <Link key={to} to={to} className="nav-link" style={{ fontSize: "0.88rem", width: "fit-content" }}>{label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "4px" }}>
              Rechtliches
            </p>
            <Link to="/impressum" className="nav-link" style={{ fontSize: "0.88rem", width: "fit-content" }}>Impressum</Link>
            <Link to="/datenschutz" className="nav-link" style={{ fontSize: "0.88rem", width: "fit-content" }}>Datenschutz</Link>
          </div>

          {/* ChiemWeb */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "4px" }}>
              Website kaufen?
            </p>
            <a
              href="https://chiemweb.de" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", background: "rgba(0,200,255,0.06)", border: "1px solid rgba(0,200,255,0.18)", borderRadius: "11px", transition: "all 0.3s ease", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,200,255,0.45)"; e.currentTarget.style.background = "rgba(0,200,255,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,200,255,0.18)"; e.currentTarget.style.background = "rgba(0,200,255,0.06)"; }}
            >
              <img src="https://chiemweb.de/logo-512.jpg" alt="ChiemWeb" style={{ width: "30px", height: "30px", borderRadius: "7px", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "var(--ink)" }}>ChiemWeb.de</p>
                <p style={{ fontSize: "0.72rem", color: "var(--muted)" }}>Professionelle Websites</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(0,200,255,0.07)", paddingTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
          <p style={{ color: "var(--muted)", fontSize: "0.78rem" }}>© {new Date().getFullYear()} Manuel Westermeier</p>
          <p style={{ color: "var(--muted)", fontSize: "0.78rem" }}>
            Built with <span style={{ color: "var(--accent)" }}>React</span> &amp; <span style={{ color: "var(--accent)" }}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
