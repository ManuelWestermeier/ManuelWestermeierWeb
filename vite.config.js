import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "docs",
    /* Auch ältere Geräte (iOS 12/13, Chrome ~70) sollen die Seite sauber
       darstellen: esbuild übersetzt ?. / ?? und schreibt z. B. inset aus. */
    target: ["es2019", "chrome70", "edge79", "firefox68", "safari12"],
    cssTarget: ["chrome70", "edge79", "firefox68", "safari12"],
  },
});
