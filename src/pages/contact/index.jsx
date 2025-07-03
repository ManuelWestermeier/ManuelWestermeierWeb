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
      <p>E-Mail</p>
      <p>
        <a href="mailto:manuel.westermeier@gmx.de">
          [ manuel.westermeier@gmx.de ]
        </a>
      </p>
      <p>Tel</p>
      <p className="flex gap">
        <a href="tel:+4915256427900">[ +49 1525 6427 900 ]</a>
      </p>
    </section>
  );
}

export default Contact;
