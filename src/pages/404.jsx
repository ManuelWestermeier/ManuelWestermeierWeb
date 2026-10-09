import React from "react";
import { Link } from "react-router-dom";
import { useSeo } from "../lib/seo";

export default function PageNotFound() {
  useSeo({ title: "Nicht gefunden", description: "Diese Seite gibt es nicht.", path: "/404", noindex: true });

  return (
    <div className="page wrap nf">
      <h1 className="page__title">
        404<span className="dim">. Diese Seite gibt es nicht.</span>
      </h1>
      <Link to="/" className="pill pill--solid">
        Zur Startseite <span className="arr">↗</span>
      </Link>
    </div>
  );
}
