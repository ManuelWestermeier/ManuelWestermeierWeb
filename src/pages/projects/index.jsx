import React, { useEffect, useState } from "react";
import { data } from "./data";
import WriteText from "../../comp/write-text";

function Projects() {
  const [reposLength, setReposLength] = useState(180);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://api.github.com/users/manuelwestermeier")
      .then((res) => res.json())
      .then((data) => {
        setReposLength(data.public_repos || 180);
      })
      .catch((error) => {
        console.error("Fehler beim Holen der Repositories:", error);
      });
  }, []);

  const dataKeys = Object.keys(data);

  return (
    <section className="flex home bg-image col">
      <h1>
        <WriteText text="Projekte" />
      </h1>
      <p>
        <WriteText
          text={`${dataKeys.length} meiner wichtigsten Projekte`}
          timeToNextChar={20}
        />
      </p>

      <p>
        <WriteText
          key={reposLength != 180}
          text={`Weitere meiner ${reposLength} Projekte sind auf Github`}
          timeToNextChar={30}
        />
      </p>
      <p>
        <a href="https://github.com/ManuelWestermeier?tab=repositories">
          <WriteText text="Github Projekte" timeToNextChar={40} />
        </a>
      </p>

      <div className="projects">
        {dataKeys.map((key, i) => {
          return (
            <div className="project" key={key}>
              <h2>{data[key].name}</h2>
              {data[key].elem}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
