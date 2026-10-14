import autoprefixer from "autoprefixer";

/* Ältere Browser (Chrome < 108, Safari < 15.4, Firefox < 101) kennen
   svh/dvh/lvh nicht und verwerfen die ganze Deklaration – dann fallen
   gepinnte Abschnitte in sich zusammen und alles liegt übereinander.
   Vor jede solche Deklaration kommt eine Kopie mit vh als Rückfall. */
const viewportFallback = () => ({
  postcssPlugin: "viewport-units-fallback",
  Declaration(decl) {
    if (!/\d(s|d|l)vh\b/.test(decl.value)) return;
    const prev = decl.prev();
    const value = decl.value.replace(/(\d)(s|d|l)vh\b/g, "$1vh");
    if (prev && prev.type === "decl" && prev.prop === decl.prop && prev.value === value) return;
    decl.cloneBefore({ value });
  },
});
viewportFallback.postcss = true;

export default {
  plugins: [viewportFallback(), autoprefixer()],
};
