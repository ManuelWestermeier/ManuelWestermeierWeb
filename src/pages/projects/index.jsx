import React, { useEffect, useState } from 'react'
import { data } from './data'
import WriteText from '../../comp/write-text'

function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const dataKeys = Object.keys(data)

    return (
        <section className='flex home bg-image col'>
            <h1>
                <WriteText text='Projekte' />
            </h1>
            <p>
                <WriteText text='9 meiner wichtigsten Projekte' timeToNextChar={20} />
            </p>
            <div className='projects'>
                {dataKeys.map((key, i) => {
                    return <div className="project" key={key}>
                        <h2>
                            {data[key].name}
                        </h2>
                        {data[key].elem}
                    </div>
                })}
            </div>
        </section>
    )
}

export default Projects