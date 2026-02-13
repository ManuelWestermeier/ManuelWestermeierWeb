import React, { useEffect } from "react";
import WriteText from "../../comp/write-text";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex home bg-image col">
      <h1>
        <WriteText text="Kontakt" />
      </h1>

      <p>E-Mail:</p>
      <p>
        <a href="mailto:info@manuel-westermeier.de">
          info@manuel-westermeier.de
        </a>
      </p>

      <p>Telefon:</p>
      <p className="flex gap">
        <a href="tel:+4915256427900">+49 1525 6427 900</a>
      </p>

      <p style={{ marginTop: "20dvh", padding: "10dvmin", fontSize: "0.7rem" }}>
        Ich stehe Ihnen jederzeit für Ihre Projekte, Websites und Apps zur Verfügung.
        <br />
        Ihre Anfragen werden stets schnell beantwortet, und die Preise sind fair und verhandelbar.
      </p>
    </section>
  );
}

export default Contact;
