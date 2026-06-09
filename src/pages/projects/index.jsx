import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";

function Projects() {
  const [reposLength, setReposLength] = useState(180);
  const [openKey, setOpenKey] = useState("twr");
  const itemRefs = useRef({});

  useEffect(() => {
    // keep
    // fetch("https://api.github.com/users/manuelwestermeier")
    //   .then((r) => r.json())
    //   .then((d) => setReposLength(d.public_repos || 180))
    //   .catch(() => {});
    setReposLength(281);

    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.04 },
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
    <div
      style={{
        paddingTop: "60px",
        minHeight: "100dvh",
        background: "var(--bg)",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* Hero */}
      <div
        className="hero-bg"
        style={{
          padding: "clamp(44px,8vw,64px) var(--px) clamp(48px,8vw,72px)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span className="section-label">Portfolio</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "var(--size-hero)",
              marginTop: "14px",
              marginBottom: "14px",
            }}
          >
            Meine{" "}
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Projekte
            </span>
          </h1>
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.7,
              fontSize: "var(--size-body)",
              maxWidth: "460px",
              marginBottom: "20px",
              fontFamily: "var(--font-body)",
            }}
          >
            {dataKeys.length} ausgewählte Projekte — von Web-Apps bis
            Embedded-Systemen. Weitere{" "}
            <strong style={{ color: "var(--ink)" }}>{reposLength}+</strong>{" "}
            Projekte auf GitHub.
          </p>

          {/* Cross-links: Projekte → Fähigkeiten & Kontakt */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="https://github.com/ManuelWestermeier?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
            <Link
              to="/my-work"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              Fähigkeiten ansehen →
            </Link>
            <Link
              to="/contact"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              Projekt anfragen →
            </Link>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "clamp(28px,5vw,48px) var(--px) clamp(56px,9vw,90px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
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
                  borderRadius: "0",
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
                    padding: "clamp(13px,2.5vw,16px) clamp(14px,3vw,22px)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--ink)",
                    gap: "12px",
                    textAlign: "left",
                    minHeight: "50px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        color: "var(--muted)",
                        minWidth: "20px",
                        textAlign: "right",
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(0.86rem, 2.2vw, 0.96rem)",
                        textAlign: "left",
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {data[key].name}
                    </h2>
                  </div>
                  <span
                    style={{
                      color: isOpen ? "var(--accent)" : "var(--muted)",
                      fontSize: "1.1rem",
                      lineHeight: 1,
                      transition: "transform 0.3s ease, color 0.3s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 clamp(14px,3vw,22px) clamp(16px,3vw,22px)",
                      paddingTop: "14px",
                      borderTop: "1px solid rgba(0,200,255,0.1)",
                      color: "var(--muted)",
                      fontSize: "clamp(0.82rem, 2vw, 0.88rem)",
                      lineHeight: 1.7,
                      animation: "textFadeIn 0.3s ease forwards",
                      overflowX: "hidden",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {data[key].elem}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom cross-links */}
        <div
          className="reveal"
          style={{
            marginTop: "36px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Link to="/my-work" className="btn-ghost">
            Fähigkeiten ansehen →
          </Link>
          <Link
            to="/contact"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Ähnliches Projekt gewünscht? →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
