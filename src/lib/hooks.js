import { useEffect, useRef } from "react";

const mq = (q) => typeof window !== "undefined" && window.matchMedia(q).matches;

export const reducedMotion = () => mq("(prefers-reduced-motion: reduce)");
export const finePointer = () => mq("(hover: hover) and (pointer: fine)");

/* svh, wo vorhanden – sonst vh (ältere Browser verwerfen svh komplett) */
export const svh = typeof CSS !== "undefined" && CSS.supports && CSS.supports("height", "1svh") ? "svh" : "vh";

/* Sichtbarkeit beobachten; ohne IntersectionObserver gilt alles als sichtbar,
   statt dass ein Fehler die ganze Seite abreißt. Gibt disconnect zurück. */
export function observeVisible(el, cb, options) {
  if (typeof IntersectionObserver === "undefined") {
    cb(true, el);
    return () => {};
  }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => cb(e.isIntersecting, e.target)), options);
  io.observe(el);
  return () => io.disconnect();
}

/* Größenänderungen beobachten; ohne ResizeObserver über window.resize. */
export function observeResize(el, cb) {
  if (typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver(() => cb());
    ro.observe(el);
    return () => ro.disconnect();
  }
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
}

/* „Lite“: Touch-Geräte und schwache Hardware. Dort keine Blur-Filter,
   gedrosselte Canvas-Animation. Wird einmal beim Start gesetzt. */
export const isLite = () => document.documentElement.classList.contains("lite");

export function detectLite() {
  const nav = navigator;
  const weak = (nav.deviceMemory && nav.deviceMemory <= 4) || (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4);
  const lite = mq("(pointer: coarse)") || weak || reducedMotion();
  document.documentElement.classList.toggle("lite", !!lite);
}

/* Blendet .rise-Elemente einmalig ein. */
export function useRise(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll(".rise:not(.in)");
    if (reducedMotion() || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/* 3D-Neigung + Spiegelposition. Nur mit Maus, nie auf Touch. */
export function useTilt(max = 7) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !finePointer() || reducedMotion()) return;
    let raf = 0;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.classList.add("is-active");
        el.style.transform = `perspective(1100px) rotateX(${(0.5 - y) * max * 2}deg) rotateY(${(x - 0.5) * max * 2}deg)`;
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
      });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      el.classList.remove("is-active");
      el.style.transform = "";
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [max]);
  return ref;
}

/* Ruft onProgress(p 0–1) auf, solange das Element im Viewport ist.
   Kein Schreiben von CSS-Variablen: Der Callback setzt transform/opacity
   direkt, damit nur der Compositor arbeitet. */
export function useScrollProgress(onProgress) {
  const ref = useRef(null);
  const cb = useRef(onProgress);
  cb.current = onProgress;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let active = false;
    let last = -1;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height - vh;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : r.top < vh ? 1 : 0;
      if (Math.abs(p - last) < 0.0005) return;
      last = p;
      cb.current?.(p, r);
    };
    const onScroll = () => {
      if (active && !raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      last = -1;
      onScroll();
    };
    const unobserve = observeVisible(el, (v) => {
      active = v;
      if (active) onResize();
    });
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      unobserve();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return ref;
}

/* true-Callback, wenn das Element sichtbar wird; false beim Verlassen. */
export function useVisible(onChange, rootMargin = "0px") {
  const ref = useRef(null);
  const cb = useRef(onChange);
  cb.current = onChange;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeVisible(el, (v) => cb.current(v), { rootMargin });
  }, [rootMargin]);
  return ref;
}

/* Weiches Scrollen mit eigener Kurve – in jedem Browser gleich und immer smooth.
   Bricht ab, sobald man selbst scrollt (Rad, Touch, Tasten). */
let anim = 0;
export function smoothScrollTo(y) {
  cancelAnimationFrame(anim);
  const from = window.scrollY;
  const to = Math.max(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight));
  const d = to - from;
  if (Math.abs(d) < 1) return;
  const dur = Math.min(1400, 500 + Math.abs(d) * 0.35);
  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const t0 = performance.now();
  const stop = () => {
    cancelAnimationFrame(anim);
    off();
  };
  const off = () => {
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
  };
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);
  const step = (now) => {
    const x = Math.min(1, (now - t0) / dur);
    window.scrollTo(0, from + d * ease(x));
    if (x < 1) anim = requestAnimationFrame(step);
    else off();
  };
  anim = requestAnimationFrame(step);
}

/* Scrollt so, dass ein useScrollProgress-Abschnitt den Fortschritt p erreicht. */
export function scrollToProgress(el, p) {
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  const total = el.offsetHeight - window.innerHeight;
  smoothScrollTo(top + Math.min(1, Math.max(0, p)) * total);
}

/* Scrollt zum Anfang des nächsten Abschnitts nach el. */
export function scrollPast(el) {
  if (!el) return;
  smoothScrollTo(el.getBoundingClientRect().bottom + window.scrollY);
}
