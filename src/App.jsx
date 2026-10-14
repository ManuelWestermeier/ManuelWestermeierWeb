import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlassFilter from "./components/GlassFilter";
import Home from "./pages/home";

/* Unterseiten erst laden, wenn sie gebraucht werden */
const Projects = lazy(() => import("./pages/projects"));
const Wettbewerbe = lazy(() => import("./pages/wettbewerbe"));
const MyWork = lazy(() => import("./pages/my-work"));
const Contact = lazy(() => import("./pages/contact"));
const Impressum = lazy(() => import("./pages/impressum"));
const Datenschutz = lazy(() => import("./pages/datenschutz"));
const PageNotFound = lazy(() => import("./pages/404"));

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip">Zum Inhalt springen</a>
      <GlassFilter />
      <Header />
      <main id="main" key={pathname} className="page-enter">
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/wettbewerbe" element={<Wettbewerbe />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
