import React from "react";

function Impressum() {
  return (
    <main
      style={{
        padding: "80px var(--px)",
        maxWidth: "800px",
        margin: "0 auto",
        minHeight: "100dvh",
      }}
    >
      <h1>Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Manuel Westermeier<br />
          Seehauserstraße 13<br />
          83324 Ruhpolding<br />
          Deutschland
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4915256427900">+49 152 56427900</a><br />
          E-Mail:{" "}
          <a href="mailto:info@manuel-westermeier.de">
            info@manuel-westermeier.de
          </a>
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Manuel Westermeier<br />
          Seehauserstraße 13<br />
          83324 Ruhpolding
        </p>
      </section>

      <hr />

      <section>
        <h2>Haftungsausschluss</h2>

        <h3>Haftung für Inhalte</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
          § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich.
        </p>

        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>

        <h3>Urheberrecht</h3>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </main>
  );
}

export default Impressum;