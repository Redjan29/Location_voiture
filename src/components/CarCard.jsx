export default function CarCard({ car }) {
  return (
    <article className="car-card">
      {car.image && <img src={car.image} alt={`${car.brand} ${car.model}`} loading="lazy" />}
      <h3>{car.brand} {car.model}</h3>
      <p>
        {car.priceDay}€ jour — {car.priceWeekend}€ weekend
      </p>
    </article>
  );
}
