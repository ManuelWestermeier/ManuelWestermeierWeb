import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlassFilter from "./components/GlassFilter";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Wettbewerbe from "./pages/wettbewerbe";
import MyWork from "./pages/my-work";
import Contact from "./pages/contact";
import Impressum from "./pages/impressum";
import Datenschutz from "./pages/datenschutz";
import PageNotFound from "./pages/404";

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
      </main>
      <Footer />
    </>
  );
}
