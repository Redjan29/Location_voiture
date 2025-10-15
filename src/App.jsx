import './styles/globals.css';
import Navbar from './components/Navbar';
import CarCard from './components/CarCard';
import { cars } from './data/cars';

export default function App() {
  const manuals = cars.filter(c => c.transmission === 'Manuelle');
  const autos = cars.filter(c => c.transmission === 'Automatique');

  return (
    <>
      <Navbar />

      <main className="container">
        <section className="hero">
          <h1>Location de voiture courte durée — Région Parisienne</h1>
          <p>Réservation flexible, contact rapide via WhatsApp. Assurance incluse.</p>
          <div className="actions">
            <a className="btn btn-primary" href="#fleet">Voir la flotte</a>
            <a className="btn" target="_blank" rel="noreferrer"
               href="https://wa.me/33600000000?text=Bonjour,%20je%20souhaite%20des%20infos%20sur%20la%20location.">
              Réserver via WhatsApp
            </a>
          </div>
        </section>

        <section id="fleet">
          <h2>Véhicules Manuels</h2>
          <div className="grid-cars">
            {manuals.map(car => <CarCard key={car.id} car={car} />)}
          </div>

          <h2 style={{marginTop: '3rem'}}>Véhicules Automatiques</h2>
          <div className="grid-cars">
            {autos.map(car => <CarCard key={car.id} car={car} />)}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>WhatsApp : <a href="https://wa.me/33600000000" target="_blank" rel="noreferrer">+33 6 00 00 00 00</a></p>
          <p>Email : contact@location-voitures.fr</p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Location-Voitures</p>
      </footer>
    </>
  );
}
