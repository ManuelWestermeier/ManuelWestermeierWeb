import React, { useEffect, useState } from 'react';
import Header from './comp/header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Footer from './comp/footer';
import PageNotFound from './pages/404';
import MyWork from './pages/my-work';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Impressum from './pages/impressum';
import Datenschutz from './pages/datenschutz';

function App() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <>
      <Header />
      <div
        className={transitionStage}
        onAnimationEnd={e => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
          else {
            setTimeout(() => {
              e.target.classList.remove("fadeIn")
            }, 100)
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path='/' element={<Home />} />
          <Route path='/my-work' element={<MyWork />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/datenschutz' element={<Datenschutz />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App