import Image from "next/image";

const logos = [
  { src: "/img/reference/A-G-BAU-LOGO.png", alt: "A-G Bau" },
  { src: "/img/reference/fk-zeleznicar-logo.png", alt: "FK Železničar" },
  { src: "/img/reference/Fratelli.png", alt: "Fratelli" },
  { src: "/img/reference/zion-logo.png", alt: "Zion" },
  { src: "/img/reference/zuti-marketi.png", alt: "Žuti marketi" },
];

export function Clients() {
  const track = [...logos, ...logos];

  return (
    <section className="clients" aria-label="Klijenti">
      <div className="track">
        {track.map((logo, index) => (
          <Image
            key={`${logo.src}-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={50}
          />
        ))}
      </div>
    </section>
  );
}
