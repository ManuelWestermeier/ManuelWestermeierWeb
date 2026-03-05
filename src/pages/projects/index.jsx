import React, { useEffect, useRef, useState } from "react";
import { data } from "./data";

function Projects() {
  const [reposLength, setReposLength] = useState(180);
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  useEffect(() => {
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
      setTimeout(() => {
        const el = itemRefs.current[key];
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 76;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 60);
    }
  }

  const dataKeys = Object.keys(data);

  return (
    <div style={{ paddingTop: "60px", minHeight: "100dvh", background: "var(--bg)", overflowX: "hidden", width: "100%" }}>
      {/* Hero */}
      <div className="hero-bg" style={{ padding: "clamp(44px,8vw,60px) var(--px) clamp(52px,9vw,80px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span className="section-label">Portfolio</span>
          <h1 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: "clamp(1.9rem, 6vw, 3.5rem)",
            marginTop: "12px", marginBottom: "16px",
          }}>
            Meine <span className="gradient-text">Projekte</span>
          </h1>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "clamp(0.85rem, 2vw, 0.92rem)", maxWidth: "480px", marginBottom: "20px" }}>
            {dataKeys.length} ausgewählte Projekte — von Web-Apps bis Embedded-Systemen.
            Weitere <strong style={{ color: "var(--ink)" }}>{reposLength}+</strong> Projekte auf GitHub.
          </p>
          <a href="https://github.com/ManuelWestermeier?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            GitHub Repos ansehen ↗
          </a>
        </div>
      </div>

      {/* Accordion */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(28px,5vw,48px) var(--px) clamp(60px,9vw,100px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                  borderRadius: "12px",
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
                    width: "100%",
                    padding: "clamp(14px,2.5vw,17px) clamp(14px,3vw,22px)",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    background: "none", border: "none", cursor: "pointer", color: "var(--ink)",
                    gap: "12px", textAlign: "left",
                    minHeight: "52px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem",
                      color: "var(--muted)", minWidth: "22px", textAlign: "right", flexShrink: 0,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 style={{
                      fontFamily: "'Syne',sans-serif", fontWeight: 700,
                      fontSize: "clamp(0.88rem, 2.2vw, 0.98rem)",
                      textAlign: "left", minWidth: 0,
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {data[key].name}
                    </h2>
                  </div>
                  <span style={{
                    color: isOpen ? "var(--accent)" : "var(--muted)",
                    fontSize: "1.1rem", lineHeight: 1,
                    transition: "transform 0.3s ease, color 0.3s ease",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    flexShrink: 0, display: "inline-block",
                  }}>+</span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: "0 clamp(14px,3vw,22px) clamp(16px,3vw,22px)",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(0,200,255,0.1)",
                    color: "var(--muted)", fontSize: "clamp(0.82rem, 2vw, 0.88rem)", lineHeight: 1.7,
                    animation: "textFadeIn 0.3s ease forwards",
                    overflowX: "hidden",
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
