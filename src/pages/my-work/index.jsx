import React, { useEffect } from "react";
import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiElectron,
  SiNodedotjs,
  SiCloudflare,
  SiArduino,
  SiCplusplus,
  SiUnity,
  SiGithub,
  SiNetlify,
  SiGit,
  SiLinux,
  SiPython,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaServer,
  FaMicrochip,
  FaGamepad,
  FaMusic,
  FaCloud,
  FaCode,
  FaWrench,
  FaNetworkWired,
  FaWifi,
  FaRobot,
  FaEye,
  FaLock,
  FaKey,
  FaShieldAlt,
  FaCubes,
} from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";

const techStack = [
  {
    category: "Frontend & GUIs",
    color: "#00c8ff",
    items: [
      {
        name: "React / Vite",
        desc: "Web-Apps & SPAs mit JSX",
        href: "https://react.dev",
        Icon: SiReact,
      },
      {
        name: "HTML / CSS / JS",
        desc: "Fundamentals & Vanilla Web",
        href: "",
        Icon: SiHtml5,
      },
      {
        name: "Desktop & GUIs",
        desc: "Cross-Platform mit Electron",
        href: "https://www.electronjs.org",
        Icon: SiElectron,
      },
    ],
  },
  {
    category: "Backend & Web",
    color: "#10b981",
    items: [
      {
        name: "Node.js / Express",
        desc: "REST APIs & Serverlogik",
        href: "https://nodejs.org",
        Icon: SiNodedotjs,
      },
      {
        name: "WSNET Framework",
        desc: "Eigenes WebSocket-Protokoll",
        href: "https://github.com/ManuelWestermeier/WSNET_Framework/",
        Icon: FaServer,
      },
      {
        name: "Hosting & Domains",
        desc: "Strato, Cloudflare, DNS-Mgmt",
        href: "https://www.cloudflare.com",
        Icon: SiCloudflare,
      },
    ],
  },
  {
    category: "Networking",
    color: "#3b82f6",
    items: [
      {
        name: "WebRTC & WebSockets",
        desc: "Echtzeit-Kommunikation",
        href: "",
        Icon: FaNetworkWired,
      },
      {
        name: "TCP / UDP",
        desc: "Grundlegende Netzwerkprotokolle",
        href: "",
        Icon: FaServer,
      },
      {
        name: "WiFi & RF24",
        desc: "Drahtlose Datenübertragung",
        href: "",
        Icon: FaWifi,
      },
    ],
  },
  {
    category: "KI & Computer Vision",
    color: "#8b5cf6",
    items: [
      {
        name: "Python",
        desc: "Datenverarbeitung & KI-Basis",
        href: "",
        Icon: SiPython,
      },
      {
        name: "YOLO & Vision",
        desc: "Object Detection & Tracking",
        href: "",
        Icon: FaEye,
      },
      {
        name: "Machine Learning",
        desc: "Klassifizierung & Realtime KI",
        href: "",
        Icon: FaRobot,
      },
    ],
  },
  {
    category: "Security & Crypto",
    color: "#ef4444",
    items: [
      {
        name: "Kryptographie",
        desc: "AES, RSA, ECC & Hashes",
        href: "",
        Icon: FaLock,
      },
      {
        name: "Post-Quantum & Sigs",
        desc: "Zukunftssichere Signaturen",
        href: "",
        Icon: FaKey,
      },
      {
        name: "Protokollsicherheit",
        desc: "Sichere Datenübertragung",
        href: "",
        Icon: FaShieldAlt,
      },
    ],
  },
  {
    category: "Hardware & Embedded",
    color: "#f59e0b",
    items: [
      {
        name: "ESP32 / Arduino",
        desc: "Mikrocontroller-Programmierung",
        href: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/",
        Icon: SiArduino,
      },
      {
        name: "C / C++",
        desc: "Low-Level & Performance Code",
        href: "",
        Icon: SiCplusplus,
      },
      {
        name: "Assembly & Circuits",
        desc: "CPU-Architektur & Schaltkreise",
        href: "",
        Icon: FaMicrochip,
      },
    ],
  },
  {
    category: "Game Dev",
    color: "#6366f1",
    items: [
      {
        name: "Unity (C#)",
        desc: "2D / 3D Spieleentwicklung",
        href: "https://unity.com",
        Icon: SiUnity,
      },
      {
        name: "Visual Studio",
        desc: "C# / C++ Entwicklung",
        href: "https://visualstudio.microsoft.com",
        Icon: VscVscode,
      },
      {
        name: "@-script",
        desc: "Eigene Programmiersprache",
        href: "https://github.com/ManuelWestermeier/at-script",
        Icon: FaCode,
      },
    ],
  },
  {
    category: "DevOps & Open Source",
    color: "#14b8a6",
    items: [
      {
        name: "Git / GitHub",
        desc: "Versionskontrolle & CI",
        href: "https://github.com/manuelWestermeier/",
        Icon: SiGit,
      },
      {
        name: "Library Development",
        desc: "Open Source Software & Architektur",
        href: "",
        Icon: FaCubes,
      },
      {
        name: "Deployments",
        desc: "Netlify, Render, GitHub Pages",
        href: "https://www.netlify.com",
        Icon: SiNetlify,
      },
    ],
  },
  {
    category: "Audio",
    color: "#ec4899",
    items: [
      {
        name: "Sounddesign",
        desc: "Effekte für Spiele & Medien",
        href: "https://www.youtube.com/@TAGESSCHATTEN?sub_confirmation=1",
        Icon: GiSoundWaves,
      },
      {
        name: "Musikproduktion",
        desc: "Beats, Soundscapes, YouTube",
        href: "https://www.youtube.com/@TAGESSCHATTEN/videos",
        Icon: FaMusic,
      },
      {
        name: "FL Studio",
        desc: "Schneiden, Mixen & Mastering",
        href: "https://www.youtube.com/@TAGESSCHATTEN/videos",
        Icon: () => (
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 8.89001V18.5M12.5 8.89001V5.57656C12.5 5.36922 12.5 5.26554 12.5347 5.17733C12.5653 5.09943 12.615 5.03047 12.6792 4.97678C12.752 4.91597 12.8503 4.88318 13.047 4.81761L17.447 3.35095C17.8025 3.23245 17.9803 3.17319 18.1218 3.20872C18.2456 3.23982 18.3529 3.31713 18.4216 3.42479C18.5 3.54779 18.5 3.73516 18.5 4.10989V7.42335C18.5 7.63069 18.5 7.73436 18.4653 7.82258C18.4347 7.90048 18.385 7.96943 18.3208 8.02313C18.248 8.08394 18.1497 8.11672 17.953 8.18229L13.553 9.64896C13.1975 9.76746 13.0197 9.82671 12.8782 9.79119C12.7544 9.76009 12.6471 9.68278 12.5784 9.57512C12.5 9.45212 12.5 9.26475 12.5 8.89001ZM12.5 18.5C12.5 19.8807 10.933 21 9 21C7.067 21 5.5 19.8807 5.5 18.5C5.5 17.1192 7.067 16 9 16C10.933 16 12.5 17.1192 12.5 18.5Z"
              stroke="#ccc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ],
  },
];

export default function MyWork() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

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
          padding: "clamp(44px,8vw,60px) var(--px) clamp(52px,9vw,80px)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <span className="section-label">Fähigkeiten & Technologien</span>
          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.9rem, 6vw, 3.5rem)",
              marginTop: "14px",
              marginBottom: "18px",
            }}
          >
            Meine <span className="gradient-text">Werkzeuge</span>
          </h1>
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.7,
              fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
              maxWidth: "480px",
            }}
          >
            Ein breites Technologie-Stack — von Frontend bis Embedded, von
            Spieleentwicklung bis Sounddesign. Neue Technologien eigne ich mir
            schnell an.
          </p>
        </div>
      </div>

      {/* Tech Cards */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "clamp(40px,7vw,60px) var(--px) clamp(60px,9vw,100px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(14px, 2.5vw, 24px)",
          }}
        >
          {techStack.map(({ category, color, items }, i) => (
            <div
              key={category}
              className="glass reveal"
              style={{
                padding: "clamp(20px, 3vw, 28px)",
                transitionDelay: `${i * 0.07}s`,
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: color,
                    boxShadow: `0 0 10px ${color}80`,
                    flexShrink: 0,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color,
                  }}
                >
                  {category}
                </h3>
              </div>

              {/* Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {items.map(({ name, desc, href, Icon }) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          minWidth: 0,
                          overflow: "hidden",
                        }}
                      >
                        {/* Tech icon */}
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "26px",
                            height: "26px",
                            borderRadius: "6px",
                            background: `${color}12`,
                            border: `1px solid ${color}25`,
                            color,
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={14} />
                        </span>
                        <p
                          style={{
                            fontFamily: "'Syne',sans-serif",
                            fontWeight: 600,
                            fontSize: "clamp(0.84rem, 2vw, 0.9rem)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {name}
                        </p>
                      </div>
                      {href && (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--muted)",
                            fontSize: "0.75rem",
                            transition: "color 0.2s",
                            flexShrink: 0,
                            minHeight: "24px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = color)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--muted)")
                          }
                        >
                          <FiArrowUpRight />
                        </a>
                      )}
                    </div>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: "clamp(0.78rem, 1.8vw, 0.82rem)",
                        paddingLeft: "34px",
                      }}
                    >
                      {desc}
                    </p>
                    <div
                      style={{
                        height: "1px",
                        background: `linear-gradient(90deg, ${color}30 0%, transparent 100%)`,
                        borderRadius: "1px",
                        marginTop: "6px",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note - Normales Rendering ohne speziellen Kasten */}
        <div
          className="reveal"
          style={{
            marginTop: "clamp(40px, 6vw, 60px)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--text, #e2e8f0)", // Fallback für hellen Text, falls die Variable fehlt
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              lineHeight: 1.6,
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            In diesem Zusammenhang möchte ich betonen, dass ich mir neue Technologien rasch und problemlos aneignen kann.
          </p>
        </div>
      </div>
    </div>
  );
}