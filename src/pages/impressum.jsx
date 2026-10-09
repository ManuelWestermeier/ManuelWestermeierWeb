import React from "react";
import { useSeo } from "../lib/seo";

export default function Impressum() {
  useSeo({ title: "Impressum", description: "Impressum von manuel-westermeier.de: Angaben gemäß § 5 DDG.", path: "/impressum" });

  return (
    <div className="page wrap">
      <h1 className="page__title">Impressum</h1>
      <div className="legal">
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
            E-Mail: <a href="mailto:info@manuel-westermeier.de">info@manuel-westermeier.de</a>
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

        <section>
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
            der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section>
          <h2>Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </section>

        <section>
          <h2>Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
            der schriftlichen Zustimmung des Autors.
          </p>
        </section>
      </div>
    </div>
  );
}
