const services = [
  {
    title: "Branding",
    description:
      "Logotipi, vizuelni identitet, pakovanja i kompletna strategija brenda.",
  },
  {
    title: "Web Design",
    description: "Moderni i responsivni web sajtovi koji prodaju.",
  },
  {
    title: "Social Media",
    description: "Kreativni vizuali za Instagram, Facebook i LinkedIn, kao i vođenje društvenih mreža.",
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="container">
        <span className="subtitle">USLUGE</span>
        <h2 id="services-heading">Šta nudimo</h2>
        <div className="services">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
