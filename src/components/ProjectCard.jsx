import React from "react";
import { Link } from "react-router-dom";
import { useTilt } from "../lib/hooks";

export default function ProjectCard({ p }) {
  const ref = useTilt(5);
  const img = p.poster || p.images[0];

  return (
    <Link to={`/projects#${p.id}`} className="pcard glass tilt" ref={ref}>
      <span className="pcard__media">
        {img ? (
          <img src={img} alt="" loading="lazy" decoding="async" width="800" height="500" />
        ) : (
          <span className="pcard__mono" aria-hidden="true">{p.name.slice(0, 2)}</span>
        )}
      </span>
      <span className="pcard__body">
        <span className="meta">{p.kind}</span>
        <span className="pcard__name">{p.name}</span>
        <span className="dim pcard__line">{p.line}</span>
      </span>
    </Link>
  );
}
