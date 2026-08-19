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
import SignalTrace from "../../comp/signal-trace";
import GlowBlob from "../../comp/glow-blob";

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
  { Icon: SiReact, label: "React" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiCplusplus, label: "C++" },
  { Icon: SiArduino, label: "Arduino" },
  { Icon: SiUnity, label: "Unity" },
  { Icon: SiGit, label: "Git" },
  { Icon: SiLinux, label: "Linux" },
  { Icon: SiElectron, label: "Electron" },
  { Icon: SiCloudflare, label: "Cloudflare" },
  { Icon: FaShieldAlt, label: "Security" },
];

const featuredProjects = [
  {
    name: "TWR-AI",
    desc: "Autonome KI-Wasserrettung — Echtzeit-Detektion und Steuerung",
    tag: "Web App",
    href: "https://twr-systems.de/",
    color: "var(--hue-projects)",
  },
  {
    name: "Easy-Einkauf",
    desc: "Smarte kollaborative Einkaufslisten-App",
    tag: "Web App",
    href: "https://easy-einkauf.de/",
    color: "var(--accent)",
  },
  {
    name: "MW-OS ESP32",
    desc: "Mini-OS fuer ESP32 mit Touch-Display und eigenem GUI-Framework",
    tag: "Embedded",
    href: "https://github.com/ManuelWestermeier/esp-wroom-2-4-inch-os",
    color: "var(--hue-about)",
  },
  {
    name: "PrivusChat",
    desc: "End-to-End verschluesselter Messenger mit AES-256",
    tag: "Security",
    href: "https://privuschat.github.io/easy-messenger/",
    color: "var(--hue-contact)",
  },
  {
    name: "LHRP Protocol",
    desc: "ESP Mesh-Netzwerk-Protokoll — Jugend Forscht Sieger",
    tag: "Networking",
    href: "https://github.com/ManuelWestermeier/LHRP",
    color: "var(--hue-projects)",
  },
];

export default function Home() {
  useReveal();

  return (
    <div style={{ overflowX: "clip", width: "100%" }}>
      {/* ── HERO ──────────────────────────────────── */}
      <section
        className="hero-bg"
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px var(--px) 80px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <GlowBlob color="var(--hue-hero)" size={520} top="-140px" right="-120px" />
        <GlowBlob color="var(--hue-about)" size={340} bottom="0" left="-100px" slow delay={2} />

        <div
          style={{
            maxWidth: "780px",
            width: "100%",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "0",
              fontSize: "var(--size-hero)",
              hyphens: "none",
            }}
          >
            <span
              className="hero-name-line1"
              style={{ display: "block", color: "var(--text)" }}
            >
              Manuel Elias
            </span>
            <span
              className="hero-name-line2"
              style={{
                display: "block",
                color: "var(--accent-bright)",
              }}
            >
              Westermeier
            </span>
          </h1>

          <div
            style={{
              width: "48px",
              height: "2px",
              background: "var(--accent)",
              margin: "24px 0",
              animation: "fadeIn 0.6s 0.15s ease both",
              borderRadius: "2px",
            }}
          />

          <p
            style={{
              fontSize: "var(--size-body)",
              color: "var(--muted)",
              maxWidth: "440px",
              lineHeight: 1.8,
              marginBottom: "32px",
              animation: "fadeIn 0.01s 0.2s ease both",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
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
            style={{ animation: "fadeIn 0.6s 0.3s ease both" }}
          >
            <Link to="/projects" className="btn-primary">
              Projekte ansehen
            </Link>
            <Link to="/contact" className="btn-ghost">
              Kontakt aufnehmen
            </Link>
          </div>

          <div
            style={{
              marginTop: "48px",
              animation: "fadeIn 0.6s 0.45s ease both",
              display: "flex",
              borderTop: "1px solid var(--border)",
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
                    fontSize: "0.68rem",
                    marginTop: "4px",
                    letterSpacing: "0.06em",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "56px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              opacity: 0.75,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
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
                background: "var(--border)",
              }}
            />
            {techIcons.map(({ Icon, label }) => (
              <span
                key={label}
                title={label}
                style={{
                  color: "var(--muted)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon size={14} />
              </span>
            ))}
          </div>
        </div>
      </section>

      <SignalTrace color="var(--hue-about)" />

      {/* ── UBER MICH ─────────────────────────────── */}
      <section
        className="section-about reveal"
        style={{
          padding: "clamp(60px,9vw,100px) var(--px)",
          overflow: "hidden",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <GlowBlob color="var(--hue-about)" size={380} top="10%" right="-140px" slow />

        <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%", position: "relative" }}>
          <div
            className="about-grid"
            style={{
              display: "grid",
              gap: "clamp(32px,5vw,64px)",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <span className="section-label" style={{ "--label-color": "var(--hue-about)" }}>Uber mich</span>
              <h2
                style={{
                  fontSize: "var(--size-h2)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}
              >
                Leidenschaftlicher
                <br />
                <span style={{ color: "var(--hue-about)" }}>Entwickler</span>
                <br />
                aus dem Chiemgau
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  fontSize: "var(--size-body)",
                  fontWeight: 300,
                }}
              >
                Ich bin Manuel Westermeier — Entwickler und Technikliebhaber.
                Von Web-Applikationen uber Embedded-Systeme bis hin zu
                Spieleentwicklung bringe ich Ideen zum Leben.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  fontSize: "var(--size-body)",
                  fontWeight: 300,
                }}
              >
                Neue Technologien eigne ich mir rasch an und setze sie gezielt
                fuer performante, massgefertigte Loesungen ein.
              </p>
              <div className="cta-row">
                <Link
                  to="/my-work"
                  className="btn-primary"
                  style={{ padding: "10px 22px" }}
                >
                  Fähigkeiten
                </Link>
                <Link
                  to="/projects"
                  className="btn-ghost"
                  style={{ padding: "9px 22px" }}
                >
                  Projekte
                </Link>
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                Interesse?{" "}
                <Link
                  to="/contact"
                  style={{ color: "var(--hue-about)", textDecoration: "none" }}
                >
                  Schreib mir →
                </Link>
              </p>
            </div>

            <div
              className="tile"
              style={{
                "--tile-accent": "var(--hue-about)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "12px",
                padding: "clamp(24px,3vw,32px) 20px",
              }}
            >
              <img
                src="/logo-512.png"
                alt="Manuel Westermeier"
                style={{
                  width: "56px",
                  height: "56px",
                  objectFit: "cover",
                  flexShrink: 0,
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "1rem",
                  }}
                >
                  Manuel Westermeier
                </p>
                <p
                  style={{
                    color: "var(--hue-about)",
                    fontSize: "0.76rem",
                    fontFamily: "var(--font-body)",
                    marginTop: "4px",
                  }}
                >
                  Full-Stack Dev — Chiemgau
                </p>
              </div>

              <Link
                to="/my-work"
                style={{
                  color: "var(--muted)",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  marginTop: "4px",
                }}
              >
                Alle Technologien →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SignalTrace color="var(--hue-projects)" />

      {/* ── FEATURED PROJECTS ─────────────────────── */}
      <section
        className="section-projects"
        style={{
          padding: "clamp(60px,9vw,100px) var(--px)",
          overflow: "hidden",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <GlowBlob color="var(--hue-projects)" size={420} bottom="-120px" left="-100px" />

        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", position: "relative" }}>
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
              <span className="section-label" style={{ "--label-color": "var(--hue-projects)" }}>Portfolio</span>
              <h2
                style={{
                  fontSize: "var(--size-h2)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  marginTop: "14px",
                }}
              >
                Ausgewahlte{" "}
                <span style={{ color: "var(--hue-projects)" }}>Projekte</span>
              </h2>
            </div>
            <Link
              to="/my-work"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.76rem",
                color: "var(--muted)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                paddingBottom: "4px",
              }}
            >
              Fähigkeiten ansehen →
            </Link>
          </div>

          <div className="project-marquee reveal">
            <div className="project-marquee-track">
              {[...featuredProjects, ...featuredProjects].map(
                ({ name, desc, tag, href, color }, i) => (
                  <div
                    key={`${name}-${i}`}
                    className="tile"
                    style={{
                      "--tile-accent": color,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      width: "300px",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.62rem",
                        padding: "3px 10px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border)",
                        borderRadius: "999px",
                        color,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        alignSelf: "flex-start",
                      }}
                    >
                      {tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                        fontSize: "clamp(1rem, 2.2vw, 1.1rem)",
                      }}
                    >
                      {name}
                    </h3>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                        flexGrow: 1,
                      }}
                    >
                      {desc}
                    </p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ alignSelf: "flex-start" }}
                    >
                      Ansehen
                    </a>
                  </div>
                ),
              )}
            </div>
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
                fontFamily: "var(--font-body)",
                fontSize: "0.76rem",
                color: "var(--muted)",
                textDecoration: "none",
              }}
            >
              Projekt anfragen →
            </Link>
          </div>
        </div>
      </section>

      <SignalTrace color="var(--hue-contact)" />

      {/* ── CONTACT TEASER ────────────────────────── */}
      <section
        className="reveal section-contact"
        style={{
          padding: "clamp(80px,16vw,160px) var(--px)",
          overflow: "hidden",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <GlowBlob color="var(--hue-contact)" size={460} top="-100px" left="50%" slow />

        <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
          <span className="section-label" style={{ "--label-color": "var(--hue-contact)" }}>Kontakt</span>
          <h2
            style={{
              fontSize: "var(--size-h2)",
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              marginTop: "16px",
              marginBottom: "14px",
            }}
          >
            Projekt in <span style={{ color: "var(--hue-contact)" }}>Planung</span>
            ?
          </h2>
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.75,
              marginBottom: "28px",
              fontSize: "var(--size-body)",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
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
              style={{ padding: "13px 30px" }}
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <Link
              to="/projects"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.76rem",
                color: "var(--muted)",
                textDecoration: "none",
              }}
            >
              Projekte anschauen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
