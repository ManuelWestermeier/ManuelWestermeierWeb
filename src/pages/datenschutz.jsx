import React from "react";

function Datenschutz() {
  return (
    <div className="bg-image" style={{ padding: "20px" }}>
      <div className="markdown prose w-full break-words dark:prose-invert">
        <h1>Datenschutzerklärung</h1>

        <p>
          Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten gemäß der Datenschutz-Grundverordnung (DSGVO).
        </p>

        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Manuel Westermeier
          <br />
          Seehauserstraße 13
          <br />
          83324 Ruhpolding
          <br />
          E-Mail: info@manuel-westermeier.de
        </p>

        <h2>2. Hosting & Content Delivery Network</h2>
        <p>
          Wir hosten diese Website bei Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA.
        </p>
        <p>
          Die Auslieferung der Website erfolgt über das Content Delivery Network (CDN) von Cloudflare. Dabei werden technische Verbindungsdaten verarbeitet, insbesondere:
        </p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren, stabilen und effizienten Bereitstellung der Website).
        </p>
        <p>
          Mit Cloudflare wurde ein Vertrag zur Auftragsverarbeitung abgeschlossen. Cloudflare ist nach dem EU-U.S. Data Privacy Framework zertifiziert.
        </p>

        <h2>3. Domain-Verwaltung</h2>
        <p>
          Die Domain wird über die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin, Deutschland verwaltet.
        </p>
        <p>
          Im Rahmen der technischen Bereitstellung kann es zur Verarbeitung technischer Verbindungsdaten kommen.
        </p>

        <h2>4. Keine Cookies & kein Tracking</h2>
        <p>
          Auf dieser Website werden keine Cookies, Tracking-Tools, Analyse-Software oder Social-Media-Plugins eingesetzt. Es erfolgt keine Profilbildung.
        </p>

        <h2>5. Server-Logfiles</h2>
        <p>
          Der Hosting-Provider erhebt automatisch Informationen in sogenannten Server-Logfiles (z. B. IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs).
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung der Sicherheit, Stabilität und Missbrauchsvermeidung.
        </p>
        <p>
          Die Logfiles werden nach spätestens 7 Tagen automatisch gelöscht, sofern keine sicherheitsrelevanten Ereignisse eine längere Speicherung erforderlich machen.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
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
          Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung per E-Mail an die oben genannte Adresse.
        </p>
        <p>
          Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO).
        </p>

        <h2>7. Stand</h2>
        <p>Stand: Februar 2026</p>
      </div>
    </div>
  );
}

export default Datenschutz;
