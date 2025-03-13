import React from 'react'

function Impressum() {
    return (
        <div className='bg-image' style={{ margin: "20px" }}>
            <h1>Impressum</h1>
            <h2>Website</h2>
            <p>
                Dieses Impressum gilt für
                alle Angebote unter der Domain https://manuel-westermeier.netlify.app/
                inklusive aller Subdomains (Unterseiten).
            </p>
            <b>
                Angaben gemäß § 5 TMG
            </b>
            <p>
                Manuel Westermeier
                <br />
                13 Seehauserstraße
                <br />
                Ruhpolding
                <br />
                Telefon: +4915256427900
                <br />
                E-Mail: manuel.westermeier111@gmail.com
            </p>
            <p>
                Haftungshinweis:
            </p>
            <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
        </div>
    )
}

export default Impressum