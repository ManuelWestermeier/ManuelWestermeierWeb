import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/my-work", label: "Skills" },
  { to: "/projects", label: "Projekte" },
  { to: "/contact", label: "Kontakt" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: "background 0.3s ease, border-color 0.3s ease",
      background: scrolled || open ? "rgba(5,11,23,0.94)" : "transparent",
      backdropFilter: scrolled || open ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled || open ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,200,255,0.1)" : "1px solid transparent",
    }}>
      {/* Top Bar */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 var(--px)",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <div style={{ position: "relative", width: "32px", height: "32px", flexShrink: 0 }}>
            <div style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              background: "rgba(0,200,255,0.25)", filter: "blur(6px)",
              animation: "pulseGlow 3s ease-in-out infinite",
            }} />
            <img
              src="/logo-512.png"
              alt="MW"
              style={{
                position: "relative", width: "32px", height: "32px",
                borderRadius: "50%", objectFit: "cover",
                border: "1.5px solid rgba(0,200,255,0.45)",
                display: "block",
              }}
            />
          </div>
          <span style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 700,
            fontSize: "0.92rem", letterSpacing: "-0.02em",
            color: "var(--ink)",
            display: isMobile ? "none" : "block",
          }}>
            Manuel<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="nav-link"
                style={{ color: location.pathname === to ? "var(--ink)" : undefined, position: "relative" }}
              >
                {label}
                {location.pathname === to && (
                  <span style={{
                    position: "absolute", bottom: "-4px", left: 0,
                    width: "100%", height: "2px",
                    background: "var(--accent)", borderRadius: "2px",
                  }} />
                )}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary" style={{ padding: "8px 18px", fontSize: "0.82rem", minHeight: "36px" }}>
              Anfragen
            </Link>
          </nav>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", display: "flex", flexDirection: "column",
              gap: "5px", alignItems: "flex-end",
              minWidth: "44px", minHeight: "44px", justifyContent: "center",
            }}
          >
            <span style={{
              display: "block", height: "2px", borderRadius: "2px",
              background: "var(--ink)", transition: "all 0.3s ease",
              width: "22px",
              transform: open ? "rotate(45deg) translate(0px, 7px)" : "none",
            }} />
            <span style={{
              display: "block", height: "2px", borderRadius: "2px",
              background: "var(--ink)", transition: "all 0.3s ease",
              width: "15px",
              opacity: open ? 0 : 1,
              transform: open ? "scaleX(0)" : "none",
            }} />
            <span style={{
              display: "block", height: "2px", borderRadius: "2px",
              background: "var(--ink)", transition: "all 0.3s ease",
              width: "22px",
              transform: open ? "rotate(-45deg) translate(0px, -7px)" : "none",
            }} />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && open && (
        <div style={{
          background: "rgba(5,11,23,0.98)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0,200,255,0.1)",
          padding: "20px var(--px) 28px",
          display: "flex", flexDirection: "column", gap: "4px",
          animation: "textFadeIn 0.2s ease forwards",
        }}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: "'Syne',sans-serif", fontWeight: 600,
                fontSize: "1.15rem",
                color: location.pathname === to ? "var(--accent)" : "var(--ink)",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(0,200,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}
            >
              {label}
              {location.pathname === to && <span style={{ color: "var(--accent)", fontSize: "0.8rem" }}>●</span>}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}>
            Anfragen
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
