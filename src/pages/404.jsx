import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function PageNotFound() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='flex bg-image'>
            <h1>
                404 PageNotFound
            </h1>
            <p>
                {pathname}
            </p>
            <Link to="/" replace>
                Zurück
            </Link>
        </section>
    )
}

export default PageNotFound