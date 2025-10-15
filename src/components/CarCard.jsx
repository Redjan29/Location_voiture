export default function CarCard({ car }) {
  return (
    <article className="car-card">
      <img src={car.image} alt={`${car.brand} ${car.model}`} loading="lazy" />
      <div className="car-body">
        <h3>{car.brand} {car.model}</h3>
        <p>{car.transmission} — {car.pricePerDay}€ / jour</p>
        <a
          className="btn"
          target="_blank"
          rel="noreferrer"
          href={`https://wa.me/33600000000?text=${encodeURIComponent(
            `Bonjour, je souhaite réserver ${car.brand} ${car.model} du JJ/MM au JJ/MM.`
          )}`}
        >
          Réserver via WhatsApp
        </a>
      </div>
    </article>
  );
}
