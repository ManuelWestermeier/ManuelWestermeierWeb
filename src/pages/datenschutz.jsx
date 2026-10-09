import React from "react";
import { useSeo } from "../lib/seo";

export default function Datenschutz() {
  useSeo({
    title: "Datenschutz",
    description: "Datenschutzerklärung von manuel-westermeier.de: keine Cookies, kein Tracking, lokal eingebundene Schriften.",
    path: "/datenschutz",
  });

  return (
    <div className="page wrap">
      <h1 className="page__title">Datenschutz</h1>
      <div className="legal">
        <p>
          Diese Erklärung informiert über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website gemäß
          der Datenschutz-Grundverordnung (DSGVO).
        </p>

        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            Manuel Westermeier<br />
            Seehauserstraße 13<br />
            83324 Ruhpolding<br />
            Deutschland<br />
            E-Mail: <a href="mailto:info@manuel-westermeier.de">info@manuel-westermeier.de</a>
          </p>
        </section>

        <section>
          <h2>2. Hosting und Content Delivery Network</h2>
          <p>
            Diese Website wird über Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA bereitgestellt. Die Auslieferung
            erfolgt über ein Content Delivery Network, um die Website sicher und schnell bereitzustellen. Dabei können IP-Adresse,
            Datum und Uhrzeit des Zugriffs, Browsertyp und -version sowie das Betriebssystem verarbeitet werden.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten
            Bereitstellung). Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Cloudflare ist nach
            dem EU-U.S. Data Privacy Framework zertifiziert.
          </p>
        </section>

        <section>
          <h2>3. Domain-Verwaltung</h2>
          <p>
            Die Domain wird über die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin verwaltet. Im Rahmen der technischen
            Bereitstellung können Verbindungsdaten verarbeitet werden.
          </p>
        </section>

        <section>
          <h2>4. Server-Logfiles</h2>
          <p>
            Der Hosting-Anbieter erhebt automatisch IP-Adresse, Browsertyp, Betriebssystem sowie Datum und Uhrzeit des Zugriffs.
            Die Verarbeitung erfolgt nach Art. 6 Abs. 1 lit. f DSGVO zur Sicherheit und Stabilität der Website und zur
            Missbrauchsabwehr. Die Logfiles werden spätestens nach 7 Tagen gelöscht, sofern keine sicherheitsrelevanten Ereignisse
            eine längere Speicherung erfordern.
          </p>
        </section>

        <section>
          <h2>5. Keine Cookies, kein Tracking, kein lokaler Speicher</h2>
          <p>
            Diese Website setzt keine Cookies, nutzt keine Analyse- oder Tracking-Werkzeuge und legt keine Daten im Speicher Ihres
            Browsers ab (kein Local Storage, kein Session Storage). Ein Einwilligungsbanner ist deshalb nicht erforderlich
            (§ 25 TDDDG).
          </p>
        </section>

        <section>
          <h2>6. Schriftarten und Medien</h2>
          <p>
            Die Schriften „Stack Sans Notch“ und „Stack Sans Text“ sowie alle Bilder und Videos werden direkt von diesem Server
            geladen. Es findet keine Verbindung zu Google Fonts oder anderen Drittanbietern statt.
          </p>
        </section>

        <section>
          <h2>7. Kontaktaufnahme</h2>
          <p>
            Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung der Anfrage verarbeitet
            (Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen Anfragen, sonst lit. f). Die Daten werden gelöscht, sobald sie für die
            Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section>
          <h2>8. Externe Links</h2>
          <p>
            Diese Website verlinkt auf externe Angebote (zum Beispiel GitHub, YouTube, Unity Play, Jugend forscht, YES!). Daten
            werden an diese Anbieter erst übertragen, wenn Sie einen Link anklicken. Dort gelten die Datenschutzhinweise des
            jeweiligen Anbieters.
          </p>
        </section>

        <section>
          <h2>9. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
            (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Eine formlose Nachricht an die oben genannte
            E-Mail-Adresse genügt. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO),
            etwa beim Bayerischen Landesamt für Datenschutzaufsicht.
          </p>
        </section>

        <p className="meta">Stand: Oktober 2026</p>
      </div>
    </div>
  );
}
