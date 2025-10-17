import { useState, useCallback } from 'react';

export default function CarCard({ car }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = useCallback(() => setFlipped(v => !v), []);
  const onKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  }, [toggle]);

  return (
    <article className="car-card">
      {/* Zone image interactive */}
      <button
        type="button"
        className={`flip ${flipped ? 'is-flipped' : ''}`}
        onClick={toggle}
        onKeyDown={onKeyDown}
        aria-pressed={flipped}
        aria-label={flipped ? "Voir l'extérieur" : "Voir l'intérieur"}
      >
        <div className="flip-inner">
          <img
            className="flip-face flip-front"
            src={car.imageExterior}
            alt={`${car.brand} ${car.model} — extérieur`}
            loading="lazy"
          />
          <img
            className="flip-face flip-back"
            src={car.imageInterior || car.imageExterior}
            alt={`${car.brand} ${car.model} — intérieur`}
            loading="lazy"
          />
        </div>
        <span className="flip-hint">{flipped ? "Extérieur ←" : "Intérieur →"}</span>
      </button>

      {/* Infos */}
      <h3>{car.brand} {car.model}</h3>
      <div className="car-prices">
        <p><strong>{car.priceDay}€ / jour</strong></p>
        <p>{car.priceWeekend}€ / weekend</p>
      </div>
    </article>
  );
}
