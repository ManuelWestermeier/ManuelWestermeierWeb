import React from "react";
import Icon from "../../components/Icon";
import { useRise, useTilt } from "../../lib/hooks";
import { useSeo } from "../../lib/seo";

const ways = [
  { icon: "mail", label: "E-Mail", value: "info@manuel-westermeier.de", href: "mailto:info@manuel-westermeier.de" },
  { icon: "phone", label: "Telefon", value: "+49 1525 6427 900", href: "tel:+4915256427900" },
  { icon: "github", label: "GitHub", value: "ManuelWestermeier", href: "https://github.com/ManuelWestermeier", ext: true },
  { icon: "youtube", label: "YouTube", value: "@TAGESSCHATTEN", href: "https://www.youtube.com/@TAGESSCHATTEN", ext: true },
];

function ChiemWeb() {
  const ref = useTilt(4);
  return (
    <a href="https://chiemweb.de" target="_blank" rel="noopener noreferrer" className="cw glass tilt rise" ref={ref} style={{ "--d": ".2s" }}>
      <span className="meta">Für Unternehmen</span>
      <span className="cw__t">Eine Website für Ihren Betrieb baut ChiemWeb aus dem Chiemgau.</span>
      <span className="ul cw__l">chiemweb.de <Icon name="arrow" size={14} /></span>
    </a>
  );
}

export default function Contact() {
  useSeo({
    title: "Kontakt",
    description: "Manuel Westermeier erreichen: info@manuel-westermeier.de, +49 1525 6427 900. Antwort meist innerhalb von 24 Stunden.",
    path: "/contact",
  });
  useRise();

  return (
    <div className="page wrap">
      <h1 className="page__title rise">
        Schreiben Sie mir<span className="dim">. Antwort meist innerhalb von 24 Stunden.</span>
      </h1>

      <ul className="ways">
        {ways.map((w, i) => (
          <li key={w.label} className="rise" style={{ "--d": `${i * 0.06}s` }}>
            <a href={w.href} className="ways__a" {...(w.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              <span className="meta ways__l">
                <Icon name={w.icon} size={16} />
                {w.label}
              </span>
              <span className="ways__v">{w.value}</span>
              <Icon name="arrow" size={20} className="ways__arr" />
            </a>
          </li>
        ))}
      </ul>

      {window.cw && <ChiemWeb />}
    </div>
  );
}
