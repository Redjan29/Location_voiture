import './styles/globals.css';
import { manualCars, automaticCars } from './data/cars';
import CarCard from './components/CarCard';

export default function App() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Location de voiture courte durée — Région Parisienne</h1>
        <p>
          Service de location courte durée en région parisienne — flotte variée,
          options manuelles et automatiques, assurance incluse.
        </p>
        <div className="actions">
          <a
            className="btn btn-primary"
            href="https://wa.me/33600000000?text=Bonjour,%20je%20souhaite%20réserver%20une%20voiture."
            target="_blank"
            rel="noreferrer"
          >
            Réserver via WhatsApp
          </a>
          <a className="btn" href="#fleet">
            Voir la flotte
          </a>
        </div>
      </section>

      {/* Section véhicules manuels */}
      <section id="fleet">
        <h2>Véhicules Manuels</h2>
        <div className="grid-cars">
          {manualCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* Section véhicules automatiques */}
      <section id="auto" style={{ marginTop: '60px' }}>
        <h2>Véhicules Automatiques</h2>
        <div className="grid-cars">
          {automaticCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* --- Conditions d’assurance --- */}
<section className="section">
  <h2>Conditions d’assurance</h2>

  <div className="alert alert-danger">
    <span className="alert-icon">🛡️</span>
    Assurance incluse dans le prix. Franchise 250€ pour dégât simple &lt;2000€.
    Franchise 1000€ si dégâts &gt;2000€.
  </div>

  <p className="muted">Les prix peuvent varier selon saisons et durée de location.</p>
</section>

{/* --- Limites de kilométrage --- */}
<section className="section">
  <h2>Limites de kilométrage</h2>

  <div className="limit-grid">
    <div className="limit-card">
      <span className="limit-badge">⚠️</span>
      <h3>200 km / jour</h3>
      <p>Forfait standard : 200 km autorisés par jour.</p>
    </div>

    <div className="limit-card">
      <span className="limit-badge">∞</span>
      <h3>Km illimité (option)</h3>
      <p>Option Km illimité disponible en supplément.</p>
    </div>
  </div>
</section>

{/* --- Contact & Réservation --- */}
<section className="section contact-section">
  <h2>Contact & Réservation</h2>

  <div className="contact-grid">
    <div>
      <h3>WhatsApp</h3>
      <p><strong>+33 6 12 19 30 50</strong></p>
      <p>Réponse rapide pour réservations et questions.</p>
    </div>

    <div>
      <h3>Localisation</h3>
      <p>Région parisienne</p>
      <p>Livraison possible selon options.</p>
    </div>
  </div>
</section>

{/* --- Prêt à Rouler ? --- */}
<section className="section ready-section">
  <h2>Prêt à Rouler ?</h2>
  <p className="ready-text">
    Découvrez notre flotte variée (compactes, familiales, premium),
    profitez de nos tarifs clairs avec assurance incluse et options
    kilométriques flexibles. Votre prochaine aventure vous attend !
  </p>

  <div className="ready-actions">
    <a
      href="https://wa.me/33612193050?text=Bonjour,%20je%20souhaite%20réserver%20une%20voiture."
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary"
    >
      Réserver maintenant
    </a>
    <a href="#devis" className="btn btn-outline">
      Demander un devis
    </a>
  </div>
</section>


    </main>
  );
}
