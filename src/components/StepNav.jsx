import React from "react";
import Icon from "./Icon";

/* Zwei kleine Glas-Knöpfe für Abschnitte, die beim Scrollen
   ungewohnt laufen (seitlich, gruppenweise). Der Zustand
   (disabled) wird vom Abschnitt direkt über die Refs gesetzt. */
export default function StepNav({ onPrev, onNext, prevRef, nextRef, label, className = "" }) {
  return (
    <div className={`step ${className}`} role="group" aria-label={label}>
      <button type="button" className="step__btn glass" onClick={onPrev} ref={prevRef} aria-label="Zurück">
        <Icon name="chev-l" size={18} />
      </button>
      <button type="button" className="step__btn glass" onClick={onNext} ref={nextRef} aria-label="Weiter">
        <Icon name="chev-r" size={18} />
      </button>
    </div>
  );
}
