import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { useTilt } from "../lib/hooks";

export default function ProjectCard({ p }) {
  const ref = useTilt(5);
  const img = p.images[0] || p.poster;

  return (
    <Link to={`/projects#${p.id}`} className="pcard glass tilt" ref={ref} draggable="false">
      <span className="pcard__media">
        {img ? (
          <img src={img} alt="" loading="lazy" decoding="async" width="800" height="500" draggable="false" />
        ) : (
          <span className="pcard__mono" aria-hidden="true">{p.name.slice(0, 2)}</span>
        )}
      </span>
      <span className="pcard__body">
        <span className="meta pcard__kind">
          <Icon name={p.kind} size={14} />
          {p.kind}
        </span>
        <span className="pcard__name">{p.name}</span>
        <span className="dim pcard__line">{p.line}</span>
      </span>
    </Link>
  );
}
