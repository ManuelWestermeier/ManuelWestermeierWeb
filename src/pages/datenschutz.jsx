import React from "react";

function Datenschutz() {
  return (
    <div className="bg-image" style={{ padding: "20px" }}>
      <div className="markdown prose w-full break-words dark:prose-invert dark">
        <h1>Datenschutzerklärung</h1>

        <p>
          Der Schutz Ihrer Daten ist uns wichtig. Nachfolgend informieren wir Sie über den Umgang mit Ihren Daten gemäß der Datenschutz-Grundverordnung (DSGVO).
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

        <h2>2. Hosting & Content Delivery Network (Cloudflare)</h2>
        <p>
          Wir hosten diese Website bei <strong>Cloudflare Inc.</strong> (Cloudflare Pages), 101 Townsend St, San Francisco, CA 94107, USA.
        </p>
        <p>
          Um die Website sicher und schnell auszuliefern, wird der Datenverkehr über das Netzwerk von Cloudflare geleitet (Content Delivery Network). Dabei werden technische Verbindungsdaten (z. B. IP-Adresse) verarbeitet, um Angriffe abzuwehren und die Verfügbarkeit der Website sicherzustellen.
        </p>
        <p>
          Rechtsgrundlage hierfür ist unser berechtigtes Interesse an einer sicheren und fehlerfreien Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).
          Cloudflare verarbeitet Daten auch in den USA. Wir weisen darauf hin, dass Cloudflare unter dem Data Privacy Framework (DPF) zertifiziert ist oder Standardvertragsklauseln verwendet, um ein angemessenes Datenschutzniveau zu gewährleisten.
        </p>

        <h2>3. Domain-Verwaltung</h2>
        <p>
          Die Domain <strong>manuel-westermeier.de</strong> wird über{" "}
          <a href="https://strato.de/" target="_blank" rel="noopener noreferrer">
            Strato AG
          </a>{" "}
          verwaltet. Strato speichert lediglich Domain-spezifische Daten. Der Webspace selbst liegt bei Cloudflare (siehe oben).
        </p>

        <h2>4. Keine Cookies & kein Tracking</h2>
        <p>
          Auf dieser Website werden <strong>keine Cookies</strong>, Analyse-Tools (wie Google Analytics), Tracking-Dienste oder Social-Media-Plugins eingesetzt. Es erfolgt keine Profilbildung oder Auswertung Ihres Nutzerverhaltens.
        </p>

        <h2>5. Server-Logfiles</h2>
        <p>
          Beim Aufruf der Website erfasst der Provider (Cloudflare) automatisch Informationen, die Ihr Browser übermittelt, und speichert diese in sogenannten Server-Logfiles. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL (die zuvor besuchte Seite)</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Sicherheit und Stabilität der Website).
        </p>

        <h2>6. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
        </p>

        <h2>8. Stand</h2>
        <p>
          Stand: Juli 2025
        </p>
      </div>
    </div>
  );
}

export default Datenschutz;