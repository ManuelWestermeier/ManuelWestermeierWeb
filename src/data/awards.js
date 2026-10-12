const JF_BAYERN_TWR =
  "https://www.jugend-forscht-bayern.de/landeswettbewerb-bayern/landeswettbewerb-jugend-forscht/gewinner-und-gewinnerinnen-2026/das-sind-die-gewinner-2026/anzeigen/twr-ki-gestuetzte-rettung-von-ertrinkenden/";

/* Neueste zuerst. */
export const awards = [
  {
    id: "yes-2026",
    date: "2026-10-01",
    from: "2026-09-30",
    contest: "YES! Young Economic Solutions",
    round: "Bundesfinale",
    place: "Futurium Berlin",
    short: "Bundessieg YES!",
    prize: "Bundessieg",
    project: "EnergieFlow",
    team: "Team des Annette-Kolb-Gymnasiums",
    note: "Mieter planen gemeinsam PV-Anlagen auf ihrem Dach: Wirtschaftlichkeit, Verträge, Abstimmung mit dem Vermieter.",
    partner: "OFFIS Institut für Informatik · Prof. Dr. Sebastian Lehnhoff",
    links: [{ label: "Projektseite YES!", href: "https://www.young-economic-solutions.org/annette-kolb-gymnasium/" }],
    major: true,
  },
  {
    id: "jfb-2026-twr",
    short: "Sonderpreis Fraunhofer",
    date: "2026-02-26",
    contest: "Jugend forscht",
    round: "Landeswettbewerb Bayern",
    field: "Arbeitswelt",
    prize: "Sonderpreis Fraunhofer Talents",
    project: "TWR | KI-gestützte Rettung von Ertrinkenden",
    team: "mit Alexander Zhuchenko",
    links: [{ label: "Gewinnerseite Jugend forscht Bayern", href: JF_BAYERN_TWR }],
  },
  {
    id: "jf-2025-os",
    short: "Sonderpreis ESP32 OS",
    date: "2025-11-23",
    contest: "Jugend forscht",
    round: "Regionalwettbewerb Rosenheim",
    field: "Mathematik/Informatik",
    prize: "Sonderpreis Ressourceneffizienz und Zirkularität",
    project: "ESP32 Mini OS",
    links: [
      { label: "Arbeit (PDF)", href: "https://wv.jugend-forscht.de/media/2025/project_120063/description/description_2026-01-26_22-41-07.pdf" },
      { label: "Quellcode", href: "https://github.com/ManuelWestermeier/esp-wroom-2-4-inch-os" },
    ],
  },
  {
    id: "jf-2025-lhrp",
    short: "3. Preis LHRP",
    date: "2025-05-02",
    contest: "Jugend forscht",
    round: "Regionalwettbewerb Rosenheim",
    field: "Mathematik/Informatik",
    prize: "3. Preis",
    project: "LHRP – Lightweight Hierarchical Routing Protocol",
    links: [
      { label: "Arbeit (PDF)", href: "https://wv.jugend-forscht.de/media/2025/project_117500/description/description_2026-01-26_12-47-46.pdf" },
      { label: "Quellcode", href: "https://github.com/ManuelWestermeier/LHRP" },
    ],
  },
  {
    id: "jf-2025-twr",
    short: "Regionalsieg TWR",
    date: "2025-04-15",
    contest: "Jugend forscht",
    round: "Regionalwettbewerb Rosenheim",
    field: "Arbeitswelt",
    prize: "Regionalsieg · 1. Preis Arbeitswelt",
    project: "TWR | KI-gestützte Rettung von Ertrinkenden",
    team: "mit Alexander Zhuchenko",
    links: [{ label: "twr-systems.de", href: "https://twr-systems.de/" }],
    major: true,
  },
  {
    id: "jf-2024-mw",
    short: "3. Preis MW",
    date: "2024-11-24",
    contest: "Jugend forscht",
    round: "Regionalwettbewerb Rosenheim",
    field: "Mathematik/Informatik",
    prize: "3. Preis",
    project: "MW – Dezentrales Netzwerk- und Kommunikationsprotokoll",
  },
];

export const next = {
  contest: "Jugend forscht",
  field: "Arbeitswelt",
  project: "TWR | KI-gestützte Rettung von Ertrinkenden",
  team: "Alexander Zhuchenko, Manuel Westermeier",
  lead: "Baywatch, aber futuristisch.",
  text: "Eine KI erkennt Ertrinkende per Kamera, von Land oder vom Schiff aus. Ein kleines autonomes Rettungsboot fährt zielgenau zur Person, bringt eine Schwimmboje und zieht sie zurück an Land oder an Bord.",
  href: "https://twr-systems.de/",
};

const MONTHS = ["Jan", "Feb", "März", "Apr", "Mai", "Juni", "Juli", "Aug", "Sep", "Okt", "Nov", "Dez"];

export function fmtDate(d) {
  const [y, m, day] = d.split("-");
  if (!m) return y;
  return `${Number(day)}. ${MONTHS[Number(m) - 1]} ${y}`;
}

export const year = (d) => d.slice(0, 4);

/* „30. Sep – 1. Okt 2026“ für mehrtägige Runden, sonst ein Datum. */
export function fmtRange(a) {
  if (!a.from) return fmtDate(a.date);
  const end = fmtDate(a.date);
  if (a.from.slice(0, 7) === a.date.slice(0, 7)) return `${Number(a.from.slice(8))}.–${end}`;
  const start = fmtDate(a.from);
  return a.from.slice(0, 4) === a.date.slice(0, 4) ? `${start.slice(0, -5)} – ${end}` : `${start} – ${end}`;
}

/* Mittag, damit Zeitzonen den Tag nicht verschieben. */
export const time = (d) => new Date(`${d}T12:00:00`).getTime();
