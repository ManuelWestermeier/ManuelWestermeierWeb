import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const nav = [
  { to: "/projects", label: "Projekte" },
  { to: "/wettbewerbe", label: "Wettbewerbe" },
  { to: "/my-work", label: "Stack" },
  { to: "/contact", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  /* Beim Runterscrollen ausblenden, beim Hochscrollen zurück. */
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > last + 4);
      if (y < last - 4 || y < 160) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`hdr${open ? " hdr--open" : ""}${hidden && !open ? " hdr--hidden" : ""}`}>
      <div className="hdr__bar glass">
        <Link to="/" className="hdr__brand" aria-label="Manuel Westermeier, Startseite">
          Manuel <b>Westermeier</b>
        </Link>

        <nav className="hdr__nav" aria-label="Hauptnavigation">
          {nav.map(({ to, label }) => (
            <NavLink key={to} to={to} className="hdr__link">
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="hdr__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <div className="hdr__sheet" id="mobile-nav" aria-hidden={!open}>
          <div>
            <nav aria-label="Mobile Navigation">
              {nav.map(({ to, label }) => (
                <NavLink key={to} to={to} tabIndex={open ? 0 : -1}>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
