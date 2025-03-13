import React from "react"
import "./index.css"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="flex gap center">
            <div className="flex col gap">
                <Link to="/impressum">
                    Impressum
                </Link>
                <Link to="/datenschutz">
                    Datenschutz
                </Link>
            </div>
            <div className="flex col gap">
                <Link to="/contact">
                    Kontakt
                </Link>
                <a target="_blank" href="https://github.com/manuelWestermeier/">
                    Github
                </a>
            </div>
        </footer>
    )
}

export default Footer