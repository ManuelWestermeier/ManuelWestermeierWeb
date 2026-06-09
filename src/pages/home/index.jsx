import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiArduino,
  SiUnity,
  SiGit,
  SiLinux,
  SiElectron,
  SiCloudflare,
} from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";
import WriteText from "../../comp/write-text";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.06 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Counter({ end, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const frames = 40;
          const stepValue = end / frames;
          const stepTime = duration / frames;
          let frame = 0;
          const t = setInterval(() => {
            frame++;
            if (frame >= frames) {
              setCount(end);
              clearInterval(t);
            } else setCount(Math.round(stepValue * frame));
          }, stepTime);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const techIcons = [
  { Icon: SiReact, label: "React", color: "#61dafb" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#83cd29" },
  { Icon: SiPython, label: "Python", color: "#ffd43b" },
  { Icon: SiCplusplus, label: "C++", color: "#00599c" },
  { Icon: SiArduino, label: "Arduino", color: "#00979d" },
  { Icon: SiUnity, label: "Unity", color: "#aaaaaa" },
  { Icon: SiGit, label: "Git", color: "#f05032" },
  { Icon: SiLinux, label: "Linux", color: "#fcc624" },
  { Icon: SiElectron, label: "Electron", color: "#47848f" },
  { Icon: SiCloudflare, label: "Cloudflare", color: "#f48120" },
  { Icon: FaShieldAlt, label: "Security", color: "#ef4444" },
];

const featuredProjects = [
  {
    name: "TWR-AI",
    desc: "Autonome KI-Wasserrettung — Echtzeit-Detektion und Steuerung",
    tag: "Web App",
    href: "https://twr-systems.de/",
    color: "#00d4ff",
  },
  {
    name: "Easy-Einkauf",
    desc: "Smarte kollaborative Einkaufslisten-App",
    tag: "Web App",
    href: "https://easy-einkauf.de/",
    color: "#00d4ff",
  },
  {
    name: "MW-OS ESP32",
    desc: "Mini-OS fuer ESP32 mit Touch-Display und eigenem GUI-Framework",
    tag: "Embedded",
    href: "https://github.com/ManuelWestermeier/esp-wroom-2-4-inch-os",
    color: "#f59e0b",
  },
  {
    name: "PrivusChat",
    desc: "End-to-End verschluesselter Messenger mit AES-256",
    tag: "Security",
    href: "https://privuschat.github.io/easy-messenger/",
    color: "#10b981",
  },
  {
    name: "LHRP Protocol",
    desc: "ESP Mesh-Netzwerk-Protokoll — Jugend Forscht Sieger",
    tag: "Networking",
    href: "https://github.com/ManuelWestermeier/LHRP",
    color: "#f59e0b",
  },
];

export default function Home() {
  useReveal();

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      {/* ── HERO ──────────────────────────────────── */}
      <section
        className="hero-bg grid-overlay"
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding:
            "80px var(--px) 80px " + (window.innerWidth > 500 ? "20%" : "1rem"),
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div
          className="orb anim-float-slow"
          style={{
            width: "min(360px,70vw)",
            height: "min(360px,70vw)",
            top: "-60px",
            right: "-80px",
            background: "rgba(0,212,255,0.05)",
          }}
        />
        <div
          className="orb anim-float"
          style={{
            width: "min(220px,50vw)",
            height: "min(220px,50vw)",
            bottom: "8%",
            left: "-50px",
            background: "rgba(124,58,237,0.06)",
            animationDelay: "2s",
          }}
        />

        <div
          style={{
            maxWidth: "860px",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Asymmetric hero: name left-aligned, offset right */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              lineHeight: 1.0,
              marginBottom: "0",
              animation: "textFadeIn 0.6s 0.1s ease both",
              fontSize: "var(--size-hero)",
              hyphens: "none",
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ display: "block", color: "var(--ink)" }}>
              Manuel Elias
            </span>
            <span
              style={{
                display: "block",
                color: "var(--accent)",
                fontStyle: "italic",
              }}
            >
              Westermeier
            </span>
          </h1>

          <div
            style={{
              width: "40px",
              height: "2px",
              background: "var(--accent)",
              margin: "20px 0",
              animation: "textFadeIn 0.6s 0.15s ease both",
            }}
          />

          {/* Typewriter intro */}
          <p
            style={{
              fontSize: "var(--size-body)",
              color: "var(--ink-dim)",
              maxWidth: "440px",
              lineHeight: 1.8,
              marginBottom: "32px",
              animation: "textFadeIn 0.01s 0.2s ease both",
              fontFamily: "var(--font-mono)",
            }}
          >
            <WriteText
              text="Massgefertigte Softwareloesungen — von Web-Apps bis Embedded-Systemen, Spieleentwicklung und Sounddesign."
              speed={28}
              delay={400}
              style={{ minHeight: "3.6em", display: "inline-block" }}
            />
          </p>

          <div
            className="cta-row"
            style={{ animation: "textFadeIn 0.6s 0.3s ease both" }}
          >
            <Link to="/projects" className="btn-primary">
              Projekte ansehen
            </Link>
            <Link to="/contact" className="btn-ghost">
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Stats — kleiner und subtiler */}
          <div
            style={{
              marginTop: "48px",
              animation: "textFadeIn 0.6s 0.45s ease both",
              display: "flex",
              borderTop: "1px solid rgba(0,212,255,0.1)",
              paddingTop: "20px",
              maxWidth: "380px",
              gap: "0",
            }}
          >
            {[
              { end: 300, suffix: "+", label: "Projekte" },
              { end: 4, suffix: "+", label: "Jahre" },
              { end: 20, suffix: "+", label: "Technologien" },
            ].map(({ end, suffix, label }, idx) => (
              <div key={label} className="stat-cell">
                <div className="stat-number">
                  <Counter
                    end={end}
                    duration={idx === 1 ? 1800 : 1400}
                    suffix={suffix}
                  />
                </div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.62rem",
                    marginTop: "4px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech icon row — bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "var(--px)",
            right: "var(--px)",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            opacity: 0.3,
            overflowX: "hidden",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Stack
          </span>
          <div
            style={{
              height: "1px",
              flex: 1,
              background: "rgba(0,212,255,0.15)",
            }}
          />
          {techIcons.map(({ Icon, label, color }) => (
            <span
              key={label}
              title={label}
              style={{
                color,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon size={13} />
            </span>
          ))}
        </div>
      </section>

      {/* ── UBER MICH — asymmetric layout ─────────── */}
      <section
        className="section-bg reveal"
        style={{
          padding: "clamp(60px,9vw,100px) var(--px)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
          {/* Asymmetric: text takes 55%, card-col pushed with offset */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "clamp(32px,5vw,64px)",
              alignItems: "start",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <span className="section-label">Uber mich</span>
              <h2
                style={{
                  fontSize: "var(--size-h2)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Leidenschaftlicher
                <br />
                <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
                  Entwickler
                </span>
                <br />
                aus dem Chiemgau
              </h2>
              <p
                style={{
                  color: "var(--ink-dim)",
                  lineHeight: 1.8,
                  fontSize: "var(--size-body)",
                }}
              >
                Ich bin Manuel Westermeier — Entwickler und Technikliebhaber.
                Von Web-Applikationen uber Embedded-Systeme bis hin zu
                Spieleentwicklung bringe ich Ideen zum Leben.
              </p>
              <p
                style={{
                  color: "var(--ink-dim)",
                  lineHeight: 1.8,
                  fontSize: "var(--size-body)",
                }}
              >
                Neue Technologien eigne ich mir rasch an und setze sie gezielt
                fuer performante, massgefertigte Loesungen ein.
              </p>
              <div className="cta-row">
                <Link
                  to="/my-work"
                  className="btn-primary"
                  style={{ padding: "9px 20px" }}
                >
                  Fähigkeiten
                </Link>
                <Link
                  to="/projects"
                  className="btn-ghost"
                  style={{ padding: "8px 20px" }}
                >
                  Projekte
                </Link>
              </div>
              {/* Indirect contact nudge */}
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.74rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Interesse?{" "}
                <Link
                  to="/contact"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Schreib mir →
                </Link>
              </p>
            </div>

            {/* Card column — pushed slightly right via margin-top asymmetry */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "clamp(0px, 3vw, 32px)",
              }}
            >
              <div
                className="glass"
                style={{
                  padding: "18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  position: "relative",
                }}
              >
                <div className="corner-tl" />
                <div className="corner-br" />
                <img
                  src="/logo-512.png"
                  alt="Manuel Westermeier"
                  style={{
                    width: "44px",
                    height: "44px",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "1px solid rgba(0,212,255,0.4)",
                  }}
                />
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "0.92rem",
                    }}
                  >
                    Manuel Westermeier
                  </p>
                  <p
                    style={{
                      color: "var(--accent)",
                      fontSize: "0.66rem",
                      fontFamily: "var(--font-mono)",
                      marginTop: "2px",
                    }}
                  >
                    Full-Stack Dev — Chiemgau
                  </p>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.64rem",
                      marginTop: "3px",
                      fontFamily: "var(--font-mono)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    info@manuel-westermeier.de
                  </p>
                </div>
              </div>

              {/* Tech icons grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gap: "6px",
                }}
              >
                {techIcons.map(({ Icon, label, color }) => (
                  <div
                    key={label}
                    title={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      aspectRatio: "1",
                      background: "rgba(0,212,255,0.04)",
                      border: "1px solid rgba(0,212,255,0.1)",
                      color,
                      transition: "all 0.18s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.background = color + "12";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,212,255,0.1)";
                      e.currentTarget.style.background = "rgba(0,212,255,0.04)";
                    }}
                  >
                    <Icon size={15} />
                  </div>
                ))}
              </div>

              {/* Teaser link to skills */}
              <Link
                to="/my-work"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  border: "1px solid rgba(0,212,255,0.12)",
                  background: "rgba(0,212,255,0.03)",
                  color: "var(--ink-dim)",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.12)";
                  e.currentTarget.style.color = "var(--ink-dim)";
                }}
              >
                <span>Alle Technologien</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────── */}
      <section
        style={{
          padding: "clamp(60px,9vw,100px) var(--px)",
          background: "var(--bg)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div
            className="reveal"
            style={{
              marginBottom: "36px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span className="section-label">Portfolio</span>
              <h2
                style={{
                  fontSize: "var(--size-h2)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  marginTop: "14px",
                }}
              >
                Ausgewahlte{" "}
                <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
                  Projekte
                </span>
              </h2>
            </div>
            {/* Cross-link to skills */}
            <Link
              to="/my-work"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--muted)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s",
                paddingBottom: "4px",
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
          </div>

          {/* Unequal grid for modern/unpredictable layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 200px), 1fr))",
              gap: "1px",
              background: "rgba(0,212,255,0.08)",
            }}
          >
            {featuredProjects.map(({ name, desc, tag, href, color }, i) => (
              <div
                key={name}
                className="reveal"
                style={{
                  padding: "22px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  transitionDelay: `${i * 0.06}s`,
                  background: "var(--bg)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background 0.2s ease",
                  /* Alternate top/bottom padding for uneven feel */
                  paddingTop: i % 2 === 0 ? "22px" : "34px",
                  paddingBottom: i % 2 === 0 ? "34px" : "22px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,212,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--bg)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: color,
                    opacity: 0.6,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.56rem",
                    padding: "2px 8px",
                    background: `${color}15`,
                    border: `1px solid ${color}35`,
                    color,
                    alignSelf: "flex-start",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(0.92rem, 2.2vw, 1rem)",
                  }}
                >
                  {name}
                </h3>
                <p
                  style={{
                    color: "var(--ink-dim)",
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                    flexGrow: 1,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {desc}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ansehen
                </a>
              </div>
            ))}
          </div>

          <div
            className="reveal"
            style={{
              marginTop: "28px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link to="/projects" className="btn-ghost">
              Alle Projekte →
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
      </section>

      {/* ── CONTACT TEASER ────────────────────────── */}
      <section
        className="reveal"
        style={{
          padding: "20dvh " + (window.innerWidth > 500 ? "20%" : "1rem"),
          background: "var(--bg-mid)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <span className="section-label">Kontakt</span>
          <h2
            style={{
              fontSize: "var(--size-h2)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              marginTop: "16px",
              marginBottom: "14px",
            }}
          >
            Projekt in{" "}
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Planung
            </span>
            ?
          </h2>
          <p
            style={{
              color: "var(--ink-dim)",
              lineHeight: 1.75,
              marginBottom: "28px",
              fontSize: "var(--size-body)",
              fontFamily: "var(--font-body)",
            }}
          >
            Schnelle Antwortzeiten, faire Preise, professionelle Umsetzung.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              to="/contact"
              className="btn-primary"
              style={{ padding: "12px 28px" }}
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <Link
              to="/projects"
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
              Projekte anschauen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
