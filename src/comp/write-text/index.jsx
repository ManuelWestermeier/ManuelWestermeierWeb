import React, { useEffect, useState, useRef } from "react";
import "./index.css";

function WriteText({
  text = "",
  speed = 55,
  delay = 0,
  className = "",
  style: style = {},
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    indexRef.current = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (indexRef.current >= text.length) {
          clearInterval(interval);
          setDone(true);
          return;
        }
        const char = text[indexRef.current];
        indexRef.current++;
        setDisplayed((prev) => prev + char);
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <span className={`write-text ${className}`} style={style}>
      {displayed}
      {!done && <span className="write-cursor">|</span>}
    </span>
  );
}

export default WriteText;
