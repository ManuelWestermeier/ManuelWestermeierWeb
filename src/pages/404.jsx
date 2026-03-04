import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BlurText from "../comp/react-bits/blur-text";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function PageNotFound() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex bg-image">
      <h1
        style={{
          fontSize: "3rem",
          height: "5rem",
          marginTop: "30dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurText
          text="404 PageNotFound"
          delay={150}
          animateBy="chars"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
      </h1>
      <p>{pathname}</p>
      <Link to="/" replace>
        Zurück
      </Link>
    </section>
  );
}

export default PageNotFound;
