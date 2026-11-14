/* Vorrendern für Suchmaschinen: Nach dem Build wird jede Route einmal in
   Edge/Chrome (headless) gerendert und das fertige HTML nach docs/<route>/
   geschrieben. Crawler sehen so sofort Inhalt, Titel und Meta-Daten; im
   Browser übernimmt React danach wie gewohnt. Fehlt der Browser, bleibt die
   Seite einfach eine normale Single-Page-App. */
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROUTES = ["/", "/projects", "/wettbewerbe", "/my-work", "/contact", "/impressum", "/datenschutz"];
const OUT = "docs";
const PORT = 4173;
const BROWSERS = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];
const browser = BROWSERS.find((b) => existsSync(b));
if (!browser) {
  console.warn("prerender: kein Chrome/Edge gefunden – übersprungen.");
  process.exit(0);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const preview = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], { stdio: "ignore", shell: true });
const debugPort = 9400 + Math.floor(Math.random() * 400);
const profile = join(process.env.TEMP || "/tmp", `prerender-${debugPort}`);
const chrome = spawn(browser, ["--headless=new", `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profile}`, "--disable-gpu", "about:blank"], { stdio: "ignore" });

const cleanup = () => {
  chrome.kill();
  preview.kill();
};

try {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(`http://localhost:${PORT}/`)).ok) break;
    } catch {}
    await sleep(250);
  }

  let ws;
  for (let i = 0; i < 60; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${debugPort}/json`)).json();
      ws = new WebSocket(list.find((t) => t.type === "page").webSocketDebuggerUrl);
      await new Promise((r, j) => ((ws.onopen = r), (ws.onerror = j)));
      break;
    } catch {
      await sleep(250);
    }
  }
  let id = 0;
  const pending = new Map();
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) pending.get(m.id)(m.result ?? m.error), pending.delete(m.id);
  };
  const send = (method, params = {}) => new Promise((r) => (pending.set(++id, r), ws.send(JSON.stringify({ id, method, params }))));
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });

  for (const route of ROUTES) {
    await send("Page.navigate", { url: `http://localhost:${PORT}${route}` });
    await sleep(2500);
    const res = await send("Runtime.evaluate", {
      expression: `(() => {
        /* Laufzeitzustand nicht einfrieren: Einblendungen, Lite-Klasse, Canvas */
        document.documentElement.classList.remove("lite", "snap-y");
        document.querySelectorAll(".rise.in").forEach((e) => e.classList.remove("in"));
        document.querySelectorAll("canvas").forEach((c) => c.remove());
        document.querySelectorAll("[style]").forEach((e) => { if (!e.closest("svg")) e.removeAttribute("style"); });
        return "<!doctype html>\\n" + document.documentElement.outerHTML;
      })()`,
      returnByValue: true,
    });
    const html = res.result?.value;
    if (!html || !html.includes('id="root"')) {
      console.warn(`prerender: ${route} leer – übersprungen`);
      continue;
    }
    const dir = route === "/" ? OUT : join(OUT, route);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
    console.log(`prerender: ${route} (${Math.round(html.length / 1024)} KB)`);
  }
  ws.close();
} finally {
  cleanup();
}
process.exit(0);
