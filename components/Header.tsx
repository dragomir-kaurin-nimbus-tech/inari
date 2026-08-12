import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="container nav">
        <Link href="/" className="logo" aria-label="Inari Design — početna">
          INARI
        </Link>
        <nav aria-label="Glavna navigacija">
          <a href="#about">O nama</a>
          <a href="#services">Usluge</a>
          <a href="#projects">Projekti</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
