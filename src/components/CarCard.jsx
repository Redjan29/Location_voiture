export default function CarCard({ car }) {
  return (
    <article className="car-card">
      {car.image && (
        <img src={car.image} alt={`${car.brand} ${car.model}`} loading="lazy" />
      )}
      <h3>{car.brand} {car.model}</h3>
      <div className="car-prices">
        <p><strong>{car.priceDay}€ / jour</strong></p>
        <p>{car.priceWeekend ? `${car.priceWeekend}€ / weekend` : ''}</p>
      </div>
    </article>
  );
}
