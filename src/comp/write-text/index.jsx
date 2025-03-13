import React, { useEffect, useState } from 'react'
import "./index.css"

function WriteText({ text = "", timeToNextChar = 100, delay = 0 }) {
    const [current, setCurrent] = useState("")

    useEffect(() => {
        setTimeout(() => {

            const chars = text.split("")

            var interval = setInterval(() => {

                const nextChar = chars.shift()

                if (!nextChar) {
                    return clearInterval(interval)
                }

                setCurrent(old => old + nextChar)

            }, timeToNextChar)

        }, delay)
        return () => true
    }, [])

    return current.split("").map((char, i) => {
        const style = {
            animation: `text-fade-in ${timeToNextChar * i}ms ease-in-out`
        }

        return <span style={style} key={i}>
            {char}
        </span>
    })
}

export default WriteText