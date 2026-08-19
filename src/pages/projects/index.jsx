import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";

const COLORS = ["var(--accent-bright)", "var(--hue-projects)"];
const colorFor = (i) => COLORS[i % COLORS.length];

function Projects() {
  const [reposLength, setReposLength] = useState(180);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef({});
  const contentRef = useRef(null);

  const dataKeys = Object.keys(data);

  useEffect(() => {
    setReposLength(281);
  }, []);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    function update() {
      const rootRect = root.getBoundingClientRect();
      let current = 0;
      dataKeys.forEach((key, i) => {
        const el = sectionRefs.current[key];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top - rootRect.top <= rootRect.height * 0.4) current = i;
      });
      setActiveIndex(current);
    }

    update();
    let raf = null;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        update();
        raf = null;
      });
    }
    root.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataKeys.length]);

  function goTo(i) {
    sectionRefs.current[dataKeys[i]]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      style={{
        height: "100dvh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        paddingTop: "60px",
        boxSizing: "border-box",
        background: "var(--bg)",
      }}
    >
      {/* Slim title bar */}
      <div
        style={{
          padding: "10px var(--px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          borderBottom: "1px solid var(--border)",
          flexShrink: 0,
        }}
      >
        <span className="section-label" style={{ "--label-color": colorFor(activeIndex) }}>
          Portfolio · {String(activeIndex + 1).padStart(2, "0")} / {String(dataKeys.length).padStart(2, "0")}
        </span>
        <p style={{ color: "var(--muted)", fontSize: "0.76rem", fontFamily: "var(--font-body)" }}>
          <strong style={{ color: "var(--text)" }}>{reposLength}+</strong> weitere auf{" "}
          <a
            href="https://github.com/ManuelWestermeier?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-bright)" }}
          >
            GitHub
          </a>
        </p>
      </div>

      {/* Side nav + fullscreen scroll-snap slides */}
      <div className="projects-layout" style={{ display: "flex", flex: 1, minHeight: 0, overflow: "hidden" }}>
        <nav className="projects-nav">
          {dataKeys.map((key, i) => {
            const color = colorFor(i);
            const isActive = activeIndex === i;
            return (
              <button
                key={key}
                onClick={() => goTo(i)}
                className="projects-nav-item"
                style={{
                  "--nav-color": color,
                  background: isActive ? "var(--surface-hover)" : "transparent",
                  borderLeftColor: isActive ? color : "transparent",
                  color: isActive ? color : "var(--muted)",
                  fontWeight: isActive ? 500 : 300,
                }}
              >
                <span style={{ fontSize: "0.68rem", opacity: 0.7, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{data[key].name}</span>
              </button>
            );
          })}
        </nav>

        <div ref={contentRef} className="projects-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
          {dataKeys.map((key, i) => {
            const color = colorFor(i);
            return (
              <section
                key={key}
                ref={(el) => (sectionRefs.current[key] = el)}
                className="project-slide"
                style={{ "--slide-accent": color }}
              >
                <span className="project-slide-watermark" style={{ color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="project-slide-inner">
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color }}>
                      {String(i + 1).padStart(2, "0")} / {String(dataKeys.length).padStart(2, "0")}
                    </span>
                    <div style={{ height: "1px", flex: 1, background: "var(--border)" }} />
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 300,
                      fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)",
                      color,
                      marginBottom: "20px",
                    }}
                  >
                    {data[key].name}
                  </h2>
                  <div
                    style={{
                      color: "var(--muted)",
                      fontSize: "clamp(0.88rem, 2vw, 0.96rem)",
                      lineHeight: 1.75,
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                    }}
                  >
                    {data[key].elem}
                  </div>
                </div>
              </section>
            );
          })}

          {/* Closing slide — cross-links */}
          <section className="project-slide project-slide-end">
            <div className="project-slide-inner" style={{ textAlign: "center", margin: "0 auto" }}>
              <span className="section-label" style={{ "--label-color": "var(--accent-bright)", justifyContent: "center" }}>
                Das war's
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  margin: "18px 0 26px",
                }}
              >
                Ähnliches Projekt gewünscht?
              </h2>
              <div className="cta-row" style={{ justifyContent: "center" }}>
                <Link to="/contact" className="btn-primary">
                  Kontakt aufnehmen
                </Link>
                <Link to="/my-work" className="btn-ghost">
                  Fähigkeiten ansehen
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Projects;
