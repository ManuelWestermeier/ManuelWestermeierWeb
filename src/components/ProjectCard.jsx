import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Trophy from "./Trophy";
import { useTilt } from "../lib/hooks";

/* Offene Projektkachel: Bild im schwarzen Rahmen, Text frei darunter */
export default function ProjectCard({ p, i }) {
  const ref = useTilt(4);
  const img = p.images[0] || p.poster;
  const award = p.award?.split(" · ")[0];

  return (
    <Link to={`/projects#${p.id}`} className="pcard tilt" ref={ref} draggable="false">
      <span className="pcard__media">
        {img ? (
          <img src={img} alt="" loading="lazy" decoding="async" width="800" height="500" draggable="false" />
        ) : (
          <span className="pcard__mono" aria-hidden="true">{p.name.slice(0, 2)}</span>
        )}
      </span>
      <span className="pcard__body">
        <span className="meta pcard__kind">
          {String(i + 1).padStart(2, "0")} · {p.kind}
        </span>
        <span className="pcard__name">
          {p.name}
          <Icon name="arrow" size={18} className="pcard__arr" />
        </span>
        <span className="dim pcard__line">{p.line}</span>
        {award && (
          <span className="pcard__award">
            <Trophy prize={award} size={16} />
            {award}
          </span>
        )}
      </span>
    </Link>
  );
}
