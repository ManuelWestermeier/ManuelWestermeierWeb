import React, { useEffect, useState } from "react";
import { data } from "./data";

function Projects() {
  const [reposLength, setReposLength] = useState(180);
  const [openKey, setOpenKey] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://api.github.com/users/manuelwestermeier")
      .then((res) => res.json())
      .then((d) => { setReposLength(d.public_repos || 180); })
      .catch(() => {});

    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const dataKeys = Object.keys(data);

  return (
    <div style={{ paddingTop: "100px", minHeight: "100dvh", background: "var(--bg)", overflowX: "hidden", width: "100%" }}>
      {/* Hero */}
      <div className="hero-bg" style={{ padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span className="section-label">Portfolio</span>
          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginTop: "16px",
              marginBottom: "20px",
            }}
          >
            Meine <span className="gradient-text">Projekte</span>
          </h1>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto 24px" }}>
            {dataKeys.length} ausgewählte Projekte — von Web-Apps bis Embedded-Systemen.
            Weitere{" "}
            <strong style={{ color: "var(--ink)" }}>{reposLength}+</strong>{" "}
            Projekte auf GitHub.
          </p>
          <a
            href="https://github.com/ManuelWestermeier?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub Repos ansehen ↗
          </a>
        </div>
      </div>

      {/* Projects Accordion */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {dataKeys.map((key, i) => {
            const isOpen = openKey === key;
            return (
              <div
                key={key}
                className="reveal"
                style={{
                  background: "var(--bg-card)",
                  border: `1px solid ${isOpen ? "rgba(0,200,255,0.35)" : "rgba(0,200,255,0.1)"}`,
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease",
                  backdropFilter: "blur(10px)",
                  transitionDelay: `${Math.min(i, 10) * 0.03}s`,
                }}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenKey(isOpen ? null : key)}
                  style={{
                    width: "100%",
                    padding: "18px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--ink)",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.7rem",
                        color: "var(--muted)",
                        minWidth: "28px",
                        textAlign: "right",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", textAlign: "left" }}>
                      {data[key].name}
                    </h2>
                  </div>
                  <span
                    style={{
                      color: isOpen ? "var(--accent)" : "var(--muted)",
                      fontSize: "1.1rem",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Expandable Content */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 24px",
                      borderTop: "1px solid rgba(0,200,255,0.1)",
                      paddingTop: "20px",
                      color: "var(--muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      animation: "textFadeIn 0.3s ease forwards",
                    }}
                  >
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
