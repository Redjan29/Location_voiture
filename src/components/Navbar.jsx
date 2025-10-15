// Removed unused Link import to avoid requiring react-router-dom when not used.
export default function Navbar() {
  return (
    <header className="container nav">
      <a href="/" className="logo">Location-Voitures</a>
      <nav>
        <a href="#fleet">Flotte</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
