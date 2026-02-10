import React from "react";

function Datenschutz() {
  return (
    <div className="bg-image" style={{ margin: "20px" }}>
      <div className="markdown prose w-full break-words dark:prose-invert dark">
        <h1>Datenschutzerklärung</h1>

        <p>
          Diese Website ist ein privates, nicht-kommerzielles Projekt zur
          Präsentation von Software-, Web- und Medienprojekten. Der Schutz Ihrer
          Daten ist uns wichtig - daher beachten wir die Vorgaben der
          Datenschutz-Grundverordnung (DSGVO).
        </p>

        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Manuel Westermeier
          <br />
          Seehauserstraße 13
          <br />
          83324 Ruhpolding
          <br />
          E-Mail: admin@manuel-westermeier.de
        </p>

        <h2>2. Keine Tracker oder Cookies</h2>
        <p>
          Auf dieser Website werden keinerlei Cookies, Analyse-Tools,
          Tracking-Dienste oder Werbe-Technologien verwendet.
          <br />
          Es erfolgt keine Auswertung Ihres Nutzerverhaltens.
        </p>

        <h2>3. Hosting & Domain</h2>
        <p>
          Diese Website wird über{" "}
          <a href="https://pages.github.com" target="_blank">
            GitHub Pages
          </a>{" "}
          bereitgestellt, einem statischen Hosting-Dienst von GitHub Inc. Wir
          nutzen ausschließlich das Hosting-Angebot, haben jedoch keinen
          Einfluss auf etwaige serverseitige Protokollierungen durch GitHub.
          GitHub ist verantwortlich für die technische Bereitstellung und
          Sicherheit des Hostings.
        </p>
        <p>
          Die Domain <strong>manuel-westermeier.de</strong> wird über{" "}
          <a href="https://www.duckdns.org/" target="_blank">
            Starto.de
          </a>{" "}
          verwaltet. Auch dieser Dienst speichert möglicherweise Zugriffsdaten
          (z.&nbsp;B. IP-Adressen), auf die wir keinen Zugriff haben.
        </p>

        <h2>4. Erhobene Daten</h2>
        <p>
          Beim Aufruf dieser Website werden durch GitHub Pages ggf. automatisch
          technische Informationen erfasst (z.&nbsp;B. IP-Adresse, Browsertyp,
          Datum und Uhrzeit). Diese Daten dienen der Systemsicherheit und
          -stabilität und werden nicht von uns ausgewertet.
        </p>

        <h2>5. Kontaktaufnahme</h2>
        <p>
          Wenn Sie mit mir Kontakt aufnehmen (z.&nbsp;B. per E-Mail), werden
          Ihre Angaben zur Bearbeitung der Anfrage verwendet. Es erfolgt keine
          Weitergabe an Dritte.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft über die von uns gespeicherten
          personenbezogenen Daten sowie auf Berichtigung, Löschung oder
          Einschränkung der Verarbeitung.
        </p>

        <h2>7. Stand der Erklärung</h2>
        <p>
          Diese Datenschutzerklärung wurde zuletzt aktualisiert am
          03. Juli 2025. Änderungen behalten wir uns vor.
        </p>
      </div>
    </div>
  );
}

export default Datenschutz;
