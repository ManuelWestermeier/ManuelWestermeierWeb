import { useEffect } from "react";

const ORIGIN = "https://manuel-westermeier.de";

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/* Titel, Beschreibung, Canonical, OG/Twitter und optional JSON-LD pro Route. */
export function useSeo({ title, description, path, jsonLd, noindex = false }) {
  useEffect(() => {
    const full = title ? `${title} · Manuel Westermeier` : "Manuel Westermeier";
    const url = ORIGIN + (path || "/");
    document.title = full;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex,follow" : "index,follow");
    setMeta("property", "og:title", full);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", full);
    setMeta("name", "twitter:description", description);

    let canon = document.head.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = url;

    let script;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.route = "1";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => script?.remove();
  }, [title, description, path, jsonLd, noindex]);
}
