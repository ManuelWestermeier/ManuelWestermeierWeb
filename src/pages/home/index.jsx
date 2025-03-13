import React from 'react'
import "./index.css"
import WriteText from '../../comp/write-text';
import AnimCt from '../../comp/amim-ct';
import { Link } from 'react-router-dom';

function Home() {

    function scrollTo(id) {
        document.getElementById(id)
            .scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return <>
        <section className='home flex bg-image' id='page-top'>
            <h1 style={{ fontSize: "max(3dvw, 30px)" }} >
                <WriteText text='Manuel Westermeier' />
            </h1>
            <p>
                <WriteText text='Ihre Website, ihr Aushängeschild, Ihr persönlicher Erfolg.' timeToNextChar={40} />
            </p>
            <button className='flex trigger-btn' onClick={e => scrollTo("my-work")}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /></svg>
            </button>
        </section>
        <section id='my-work' className='flex'>
            <h1 style={{ fontSize: "max(2dvw, 25px)" }}>
                <AnimCt>
                    <WriteText text='Meine Arbeit' timeToNextChar={20} />
                </AnimCt>
            </h1>
            <AnimCt>
                <p>
                    <WriteText text='Mein Leistungsversprechen,' timeToNextChar={20} />
                    <br />
                    <WriteText text='ich erstelle Ihre Homepage von Anfang bis Ende.' timeToNextChar={20} />
                    <br />
                    <WriteText text='Dabei stehe ich Ihnen professionell zur Seite und' timeToNextChar={20} />
                    <br />
                    <WriteText text='ermögliche Ihnen ihren Traum von einem ' timeToNextChar={20} />
                    <br />
                    <WriteText text='perfekten und professionellen Webauftritt.' timeToNextChar={20} />
                    <br />
                    <WriteText text='Ihre Website, ihr Aushängeschild,' timeToNextChar={20} />
                    <br />
                    <WriteText text=' Ihr persönlicher Erfolg.' timeToNextChar={20} />
                    <br />
                    <WriteText text='(Full Stack Web-Programmierung)' timeToNextChar={20} />
                </p>
            </AnimCt>

            <Link to="/my-work">
                [ mehr über meine Arbeit ]
            </Link>
        </section >
        <section id='projects' className='flex bg-image home'>
            <h1 style={{ fontSize: "max(2dvw, 25px)" }}>
                <AnimCt>
                    <WriteText text='Meine Projekte' timeToNextChar={20} />
                </AnimCt>
            </h1>
            <AnimCt>
                <p>
                    <WriteText text='Auf dieser Webseite kann ich Ihnen leider nicht alle ' timeToNextChar={20} />
                    <br />
                    <WriteText text='Meine Projekte präsentieren, da es weit über 200 sind.' timeToNextChar={20} />
                    <br />
                    <WriteText text='Gerne habe ich Ihnen exemplarisch meine' timeToNextChar={20} />
                    <br />
                    <WriteText text=' wichtigsten Projekte zusammengestellt.' timeToNextChar={20} />
                </p>
            </AnimCt>

            <Link to="/projects">
                [ zu den Projekten ]
            </Link>
        </section >
        <section id='contact' className='flex'>
            <h1 style={{ fontSize: "max(2dvw, 25px)" }}>
                <AnimCt>
                    <WriteText text='Kontakt' timeToNextChar={20} />
                </AnimCt>
            </h1>

            <Link to="/contact">
                [ meine Kontaktdaten ]
            </Link>
        </section >
    </>
}

export default Home