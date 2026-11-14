const JF_BAYERN_TWR =
  "https://www.jugend-forscht-bayern.de/landeswettbewerb-bayern/landeswettbewerb-jugend-forscht/gewinner-und-gewinnerinnen-2026/das-sind-die-gewinner-2026/anzeigen/twr-ki-gestuetzte-rettung-von-ertrinkenden/";

/* Neueste zuerst. `path` verbindet Stationen desselben Projekts zu einem Weg,
   `label` ersetzt das Datum, wo nur der Zeitraum bekannt ist. */
export const awards = [
  {
    id: "ets-2026",
    path: "twr",
    short: "Sonderpreis Fraunhofer",
    what: "TWR · Talent School",
    date: "2026-10-25",
    from: "2026-10-22",
    contest: "Fraunhofer Talents",
    round: "European Talent School 2026",
    place: "Bildungshaus Batschuns, Vorarlberg",
    prize: "Sonderpreis Fraunhofer Talents",
    project: "TWR | KI-gestützte Rettung von Ertrinkenden",
    team: "mit Alexander Zhuchenko",
    note: "Eingelöst mit Präsentation von TWR.",
    major: true,
  },
  {
    id: "yes-2026",
    path: "yes",
    short: "Bundessieg YES!",
    what: "EnergieFlow",
    date: "2026-10-01",
    from: "2026-09-30",
    contest: "YES! Young Economic Solutions",
    round: "Bundesfinale",
    place: "Futurium Berlin",
    prize: "Bundessieg",
    project: "EnergieFlow",
    team: "Team des Annette-Kolb-Gymnasiums",
    note: "Mieter planen gemeinsam PV-Anlagen auf ihrem Dach.",
    links: [{ label: "Projektseite YES!", href: "https://www.young-economic-solutions.org/annette-kolb-gymnasium/" }],
    major: true,
  },
  {
    id: "yes-2026-sw",
    path: "yes",
    short: "1. Preis Süd-West",
    what: "EnergieFlow",
    date: "2026-07-01",
    contest: "YES! Young Economic Solutions",
    round: "Regionalfinale Süd-West",
    place: "ZEW – Leibniz-Zentrum für Europäische Wirtschaftsforschung, Mannheim",
    prize: "1. Preis",
    project: "EnergieFlow",
    team: "Team des Annette-Kolb-Gymnasiums",
    note: "Damit weiter ins Bundesfinale.",
    major: true,
  },
  {
    id: "bilress-2026",
    path: "os",
    short: "Preisträgertreffen",
    what: "ESP32 OS · Berlin",
    date: "2026-09-29",
    from: "2026-09-28",
    contest: "BilRess · Netzwerk Bildung für Ressourcenschonung",
    round: "Treffen der Preisträger Jugend forscht in Berlin",
    place: "Bundesumweltministerium, Berlin",
    prize: "Preisträgertreffen",
    project: "ESP32 Mini OS",
    note: "Projekt als Poster im Ministerium ausgestellt.",
    event: true,
  },
  {
    id: "qaware",
    short: "Schülerstipendium",
    what: "QAware",
    date: "2026-08-01",
    label: "Seit Sommer 2026",
    contest: "QAware",
    round: "Schülerstipendium",
    prize: "Schülerstipendium",
    project: "Bis zum Abitur am Annette-Kolb-Gymnasium",
    major: true,
  },
  {
    id: "jfb-2026-twr",
    path: "twr",
    short: "Landeswettbewerb",
    what: "TWR",
    date: "2026-04-15",
    label: "April 2026",
    contest: "Jugend forscht",
    round: "Landeswettbewerb Bayern",
    place: "München",
    field: "Arbeitswelt",
    prize: "Teilnahme Landeswettbewerb",
    project: "TWR | KI-gestützte Rettung von Ertrinkenden",
    team: "mit Alexander Zhuchenko",
    links: [{ label: "Jugend forscht Bayern", href: JF_BAYERN_TWR }],
    event: true,
  },
  {
    id: "jf-2026-twr",
    path: "twr",
    short: "Regionalsieg · 1. Preis",
    what: "TWR",
    date: "2026-02-26",
    label: "Februar 2026",
    contest: "Jugend forscht",
    round: "Regionalwettbewerb Rosenheim",
    field: "Arbeitswelt",
    prize: "Regionalsieg · 1. Preis",
    project: "TWR | KI-gestützte Rettung von Ertrinkenden",
    team: "mit Alexander Zhuchenko",
    links: [{ label: "twr-systems.de", href: "https://twr-systems.de/" }],
    major: true,
  },
  {
    id: "jf-2026-os",
    path: "os",
    short: "Sonderpreis Ressourcen",
    what: "ESP32 OS",
    date: "2026-02-26",
    label: "Februar 2026",
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
    id: "jf-2026-lhrp",
    short: "3. Preis",
    what: "LHRP",
    date: "2026-02-26",
    label: "Februar 2026",
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
    id: "jf-2024-mw",
    short: "3. Preis",
    what: "MW-Protokoll",
    date: "2024-11-24",
    contest: "Jugend forscht",
    round: "Regionalwettbewerb Rosenheim",
    field: "Mathematik/Informatik",
    prize: "3. Preis",
    project: "MW – Dezentrales Netzwerk- und Kommunikationsprotokoll",
  },
];

/* Wege: ein Projekt über mehrere Runden */
export const paths = [
  { id: "twr", name: "TWR", line: "Vom Regionalsieg zur European Talent School", team: "Im Team mit Alexander Zhuchenko" },
  { id: "os", name: "ESP32 Mini OS", line: "Vom Sonderpreis ins Bundesumweltministerium" },
  { id: "yes", name: "EnergieFlow", line: "Vom Regionalfinale in Mannheim zum Bundessieg in Berlin", team: "Im Team des Annette-Kolb-Gymnasiums" },
];

const MONTHS = ["Jan", "Feb", "März", "Apr", "Mai", "Juni", "Juli", "Aug", "Sep", "Okt", "Nov", "Dez"];

export function fmtDate(d) {
  const [y, m, day] = d.split("-");
  if (!m) return y;
  return `${Number(day)}. ${MONTHS[Number(m) - 1]} ${y}`;
}

export const year = (d) => d.slice(0, 4);

/* „30. Sep – 1. Okt 2026“ für mehrtägige Runden, sonst ein Datum. */
export function fmtRange(a) {
  if (a.label) return a.label;
  if (!a.from) return fmtDate(a.date);
  const end = fmtDate(a.date);
  if (a.from.slice(0, 7) === a.date.slice(0, 7)) return `${Number(a.from.slice(8))}.–${end}`;
  const start = fmtDate(a.from);
  return a.from.slice(0, 4) === a.date.slice(0, 4) ? `${start.slice(0, -5)} – ${end}` : `${start} – ${end}`;
}

/* Mittag, damit Zeitzonen den Tag nicht verschieben. */
export const time = (d) => new Date(`${d}T12:00:00`).getTime();
