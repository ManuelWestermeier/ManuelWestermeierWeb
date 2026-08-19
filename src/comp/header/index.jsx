import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/my-work", label: "Fähigkeiten" },
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

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled || open ? "rgba(17,17,17,0.88)" : "transparent",
        backdropFilter: scrolled || open ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || open ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 var(--px)",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "28px",
              height: "28px",
              flexShrink: 0,
            }}
          >
            <img
              src="/logo-512.png"
              alt="MW"
              style={{
                position: "relative",
                width: "28px",
                height: "28px",
                objectFit: "cover",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                display: "block",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "0.92rem",
              color: "var(--text)",
            }}
          >
            Manuel Westermeier
          </span>
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="nav-link"
                style={{
                  color: location.pathname === to ? "var(--accent)" : undefined,
                  position: "relative",
                }}
              >
                {label}
                {location.pathname === to && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "100%",
                      height: "1px",
                      background: "var(--accent)",
                    }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary"
              style={{
                padding: "8px 20px",
                fontSize: "0.72rem",
                minHeight: "36px",
              }}
            >
              Anfragen
            </Link>
          </nav>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menu schliessen" : "Menu offnen"}
            aria-expanded={open}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "flex-end",
              minWidth: "44px",
              minHeight: "44px",
              justifyContent: "center",
            }}
          >
            {[
              {
                w: "22px",
                t: open ? "rotate(45deg) translate(0px, 7px)" : "none",
              },
              { w: "14px", opacity: open ? 0 : 1 },
              {
                w: "22px",
                t: open ? "rotate(-45deg) translate(0px, -7px)" : "none",
              },
            ].map((s, i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: "1.5px",
                  background: "var(--text)",
                  transition: "all 0.3s ease",
                  width: s.w,
                  transform: s.t,
                  opacity: s.opacity ?? 1,
                }}
              />
            ))}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && open && (
        <div
          style={{
            background: "rgba(17,17,17,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border)",
            padding: "20px var(--px) 28px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            animation: "fadeIn 0.2s ease forwards",
          }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "0.92rem",
                color:
                  location.pathname === to ? "var(--accent)" : "var(--text)",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {label}
              <span
                style={{
                  color: "var(--muted)",
                  fontSize: "0.8rem",
                }}
              >
                {location.pathname === to ? "→" : ""}
              </span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary"
            style={{
              marginTop: "16px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            Anfragen
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
