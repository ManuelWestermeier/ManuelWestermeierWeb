import React from "react";

function Impressum() {
  return (
    <div className="bg-image" style={{ margin: "20px" }}>
      <h1>Impressum</h1>
      <p>Dies ist eine private, nicht-kommerzielle Portfolio-Webseite von:</p>
      <h2>Website</h2>
      <p>
        Dieses Impressum gilt für alle Angebote unter der Domain
        https://manuel-westermeier.duckdns.org/.
      </p>
      <b>Angaben gemäß § 5 TMG</b>
      <p>
        Manuel Westermeier
        <br />
        13 Seehauserstraße
        <br />
        Ruhpolding
        <br />
        Telefon: +4915256427900
        <br />
        E-Mail: manuel.westermeier@gmx.de
      </p>
      <p>Haftungshinweis:</p>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
        für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
        sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <p>
        Diese Seite dient ausschließlich der Präsentation privater Projekte im
        Bereich Webentwicklung, Software, Sounddesign und Musikproduktion. Es
        handelt sich nicht um ein kommerzielles Angebot im Sinne des § 5 TMG.
      </p>
    </div>
  );
}

export default Impressum;
