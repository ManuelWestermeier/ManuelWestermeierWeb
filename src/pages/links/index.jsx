import React from "react";
import { useSeo } from "../../lib/seo";
import "./links.css";

const main = [
  { name: "TWR", line: "KI-Wasserrettung · Jugend forscht", href: "https://twr-systems.de/", img: "/imag/live/twr-render-front.webp" },
  { name: "Schneckenalarm", line: "3D-Spiel im Browser, jetzt spielen", href: "https://schneckenalarm.chiemweb.de/", img: "/imag/live/schnecke-poster.webp" },
  { name: "Easy-Einkauf", line: "Einkaufslisten in Echtzeit teilen", href: "https://easy-einkauf.de/", img: "/imag/live/easy-einkauf.webp" },
  { name: "ChiemWeb", line: "Websites für den Chiemgau", href: "https://chiemweb.de/", img: "/imag/live/chiemweb.webp" },
  { name: "HectoBase OS", line: "Eigenes Betriebssystem vom USB-Stick", href: "https://os.hectobase.com/", img: "/imag/live/hectobase-laptop.webp" },
  { name: "küin", line: "KI baut deine Website", href: "https://xn--kin-hoa.de/", img: "/imag/live/kuein.webp" },
];

const more = [
  { name: "MW-OS für ESP32", href: "https://github.com/ManuelWestermeier/esp-wroom-2-4-inch-os#readme" },
  { name: "ESP32-Display kaufen (Affiliate)", href: "https://s.click.aliexpress.com/e/_c4aZCg3T" },
  { name: "Hidden-FS", href: "https://hidden-fs.manuel-westermeier.de/" },
  { name: "PrivusChat", href: "https://privuschat.github.io/easy-messenger/" },
  { name: "Memory-Spiel", href: "https://memory-game.manuel-westermeier.de/" },
  { name: "Notenbuch", href: "https://noten-buch.netlify.app" },
];

const social = [
  { name: "Website", href: "https://manuel-westermeier.de/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/manuel-westermeier/" },
  { name: "GitHub", href: "https://github.com/ManuelWestermeier" },
  { name: "YouTube", href: "https://www.youtube.com/@manuel-westermeier" },
  { name: "TikTok", href: "https://www.tiktok.com/@pdev111" },
  { name: "Musik", href: "https://www.youtube.com/@TAGESSCHATTEN" },
];

export default function Links() {
  useSeo({ title: "Links", description: "Alle Projekte und Kanäle von Manuel Westermeier.", path: "/links", noindex: true });
  return (
    <div className="lk">
      <header className="lk__head">
        <img src="/manuel.webp" alt="" width="88" height="88" />
        <h1>Manuel Westermeier</h1>
        <p>Betriebssysteme, KI-Wasserrettung und Websites aus dem Chiemgau.</p>
      </header>

      <ul className="lk__grid">
        {main.map((l) => (
          <li key={l.name}>
            <a href={l.href} target="_blank" rel="noopener" className="lk__card">
              <img src={l.img} alt="" loading="lazy" />
              <span className="lk__txt"><strong>{l.name}</strong><small>{l.line}</small></span>
              <span className="lk__arr" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>

      <h2 className="lk__h">Weitere Projekte</h2>
      <ul className="lk__list">
        {more.map((l) => (
          <li key={l.name}><a href={l.href} target="_blank" rel="noopener">{l.name}<span aria-hidden="true">↗</span></a></li>
        ))}
      </ul>

      <nav className="lk__social" aria-label="Kanäle">
        {social.map((l) => <a key={l.name} href={l.href} target="_blank" rel="noopener">{l.name}</a>)}
      </nav>
      <p className="lk__foot">manuel-westermeier.de</p>
    </div>
  );
}
