import React from "react";

function Datenschutz() {
  return (
    <main
      style={{
        padding: "80px var(--px)",
        maxWidth: "800px",
        margin: "0 auto",
        minHeight: "100dvh",
      }}
    >
      <h1>Datenschutzerklärung</h1>

      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. In dieser
        Datenschutzerklärung informieren wir Sie über Art, Umfang und Zweck der
        Verarbeitung personenbezogener Daten gemäß der
        Datenschutz-Grundverordnung (DSGVO).
      </p>

      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          Manuel Westermeier
          <br />
          Seehauserstraße 13
          <br />
          83324 Ruhpolding
          <br />
          Deutschland
          <br />
          E-Mail:{" "}
          <a href="mailto:info@manuel-westermeier.de">
            info@manuel-westermeier.de
          </a>
        </p>
      </section>

      <section>
        <h2>2. Hosting und Content Delivery Network (CDN)</h2>
        <p>
          Diese Website wird über den Dienstleister Cloudflare Inc., 101
          Townsend St, San Francisco, CA 94107, USA bereitgestellt. Die
          Auslieferung erfolgt über ein Content Delivery Network (CDN), um eine
          sichere und schnelle Bereitstellung der Website zu gewährleisten.
        </p>

        <p>Dabei können folgende Daten verarbeitet werden:</p>

        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Browsertyp und Browserversion</li>
          <li>Betriebssystem</li>
        </ul>

        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an einer sicheren und effizienten
          Bereitstellung der Website).
        </p>

        <p>
          Mit dem Anbieter wurde ein Vertrag zur Auftragsverarbeitung gemäß Art.
          28 DSGVO abgeschlossen. Cloudflare ist zudem nach dem EU-U.S. Data
          Privacy Framework zertifiziert.
        </p>
      </section>

      <section>
        <h2>3. Domain-Verwaltung</h2>
        <p>
          Die Domain dieser Website wird über die Strato AG,
          Otto-Ostrowski-Straße 7, 10249 Berlin, Deutschland verwaltet.
        </p>

        <p>
          Im Rahmen der technischen Bereitstellung können technische
          Verbindungsdaten verarbeitet werden.
        </p>
      </section>

      <section>
        <h2>4. Cookies und Tracking</h2>
        <p>
          Auf dieser Website werden keine Cookies, Tracking-Tools oder
          Analyse-Software eingesetzt. Es erfolgt keine Profilbildung und keine
          Auswertung des Nutzerverhaltens.
        </p>
      </section>

      <section>
        <h2>5. Server-Logfiles</h2>
        <p>
          Der Hosting-Provider erhebt automatisch Informationen in sogenannten
          Server-Logfiles. Diese enthalten beispielsweise:
        </p>

        <ul>
          <li>IP-Adresse</li>
          <li>Browsertyp</li>
          <li>Betriebssystem</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
        </ul>

        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          zur Gewährleistung der Sicherheit und Stabilität der Website sowie zur
          Missbrauchsvermeidung.
        </p>

        <p>
          Die Logfiles werden spätestens nach 7 Tagen automatisch gelöscht,
          sofern keine sicherheitsrelevanten Ereignisse eine längere Speicherung
          erforderlich machen.
        </p>
      </section>

      <section>
        <h2>6. Rechte der betroffenen Personen</h2>
        <p>
          Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
          personenbezogenen Daten:
        </p>

        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>

        <p>
          Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben
          genannte E-Mail-Adresse.
        </p>

        <p>
          Sie haben außerdem das Recht, sich bei einer
          Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
          personenbezogenen Daten zu beschweren (Art. 77 DSGVO).
        </p>
      </section>

      <section>
        <h2>7. Aktualität dieser Datenschutzerklärung</h2>
        <p>Stand: März 2026</p>
      </section>
    </main>
  );
}

export default Datenschutz;
