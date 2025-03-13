import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import WriteText from '../write-text'

function Header() {
    return (
        <header className='flex'>
            <h2>
                <Link to="/">
                    <WriteText text='Manuel Westermeier' timeToNextChar={20} />
                </Link>
            </h2>
            <div style={{ gap: "10px" }} className='flex'>
                <Link to="/my-work">
                    Meine Arbeit
                </Link>
                <Link to="/projects">
                    Meine Projekte
                </Link>
                <Link to="/contact">
                    Kontakt
                </Link>
            </div>
        </header>
    )
}

export default Header