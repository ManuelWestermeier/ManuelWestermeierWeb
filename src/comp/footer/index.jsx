import React from "react";
import { Link } from "react-router-dom";
import { IconGitHub, IconYouTube, IconUnity } from "../icons";

const socials = [
  { href: "https://github.com/ManuelWestermeier/", label: "GitHub", Icon: IconGitHub },
  { href: "https://www.youtube.com/@TAGESSCHATTEN?sub_confirmation=1", label: "YouTube", Icon: IconYouTube },
  { href: "https://play.unity.com/en/user/66818d56-98e8-499c-8fca-b3eb98a886c7", label: "Unity", Icon: IconUnity },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "clamp(40px,7vw,56px) var(--px) clamp(24px,5vw,36px)",
      background: "var(--bg)",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
          gap: "clamp(24px,4vw,36px)",
          marginBottom: "clamp(28px,5vw,44px)",
        }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src="/logo-512.png" alt="MW" style={{ width: "28px", height: "28px", objectFit: "cover", flexShrink: 0, border: "1px solid var(--border)", borderRadius: "4px" }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "0.92rem" }}>
                Manuel Westermeier
              </span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.65, maxWidth: "220px", fontFamily: "var(--font-body)" }}>
              Full-Stack Dev &amp; Sounddesigner<br />Chiemgau, Bayern
            </p>
            <div style={{ display: "flex", gap: "6px" }}>
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "34px", height: "34px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    color: "var(--muted)",
                    transition: "all 0.18s ease",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "4px" }}>
              Navigation
            </p>
            {[
              { to: "/my-work", label: "Fahigkeiten" },
              { to: "/projects", label: "Projekte" },
              { to: "/contact", label: "Kontakt" },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className="nav-link" style={{ fontSize: "0.84rem", width: "fit-content" }}>{label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "4px" }}>
              Rechtliches
            </p>
            <Link to="/impressum" className="nav-link" style={{ fontSize: "0.84rem", width: "fit-content" }}>Impressum</Link>
            <Link to="/datenschutz" className="nav-link" style={{ fontSize: "0.84rem", width: "fit-content" }}>Datenschutz</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "18px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "6px",
        }}>
          <p style={{ color: "var(--muted)", fontSize: "0.76rem", fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} Manuel Westermeier
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.76rem", fontFamily: "var(--font-body)" }}>
            Erstellt von Manuel Westermeier
          </p>
        </div>
      </div>
    </footer>
  );
}
