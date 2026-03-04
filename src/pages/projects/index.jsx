import React, { useEffect, useRef, useState } from "react";
import { data } from "./data";

function Projects() {
  const [reposLength, setReposLength] = useState(180);
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://api.github.com/users/manuelwestermeier")
      .then((r) => r.json())
      .then((d) => setReposLength(d.public_repos || 180))
      .catch(() => {});

    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.04 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function toggleProject(key) {
    const isOpen = openKey === key;
    setOpenKey(isOpen ? null : key);
    if (!isOpen) {
      // scroll to item after state update (small delay for DOM paint)
      setTimeout(() => {
        const el = itemRefs.current[key];
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 60);
    }
  }

  const dataKeys = Object.keys(data);

  return (
    <div style={{ paddingTop: "100px", minHeight: "100dvh", background: "var(--bg)", overflowX: "hidden", width: "100%" }}>
      {/* Hero */}
      <div className="hero-bg" style={{ padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span className="section-label">Portfolio</span>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "14px", marginBottom: "18px" }}>
            Meine <span className="gradient-text">Projekte</span>
          </h1>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "0.92rem", maxWidth: "480px", marginBottom: "22px" }}>
            {dataKeys.length} ausgewählte Projekte — von Web-Apps bis Embedded-Systemen.
            Weitere <strong style={{ color: "var(--ink)" }}>{reposLength}+</strong> Projekte auf GitHub.
          </p>
          <a href="https://github.com/ManuelWestermeier?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            GitHub Repos ansehen ↗
          </a>
        </div>
      </div>

      {/* Accordion */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {dataKeys.map((key, i) => {
            const isOpen = openKey === key;
            return (
              <div
                key={key}
                ref={(el) => (itemRefs.current[key] = el)}
                className="reveal"
                style={{
                  background: "var(--bg-card)",
                  border: `1px solid ${isOpen ? "rgba(0,200,255,0.38)" : "rgba(0,200,255,0.1)"}`,
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  backdropFilter: "blur(10px)",
                  transitionDelay: `${Math.min(i, 12) * 0.025}s`,
                  boxShadow: isOpen ? "0 0 28px rgba(0,200,255,0.1)" : "none",
                }}
              >
                <button
                  onClick={() => toggleProject(key)}
                  style={{
                    width: "100%", padding: "17px 22px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    background: "none", border: "none", cursor: "pointer", color: "var(--ink)", gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--muted)", minWidth: "24px", textAlign: "right", flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.98rem", textAlign: "left" }}>
                      {data[key].name}
                    </h2>
                  </div>
                  <span style={{
                    color: isOpen ? "var(--accent)" : "var(--muted)",
                    fontSize: "1.2rem", lineHeight: 1,
                    transition: "transform 0.3s ease, color 0.3s ease",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    flexShrink: 0, display: "inline-block",
                  }}>+</span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: "0 22px 22px", paddingTop: "18px",
                    borderTop: "1px solid rgba(0,200,255,0.1)",
                    color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7,
                    animation: "textFadeIn 0.3s ease forwards",
                  }}>
                    {data[key].elem}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
