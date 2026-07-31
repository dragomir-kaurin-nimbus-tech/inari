import Image from "next/image";

const projects = [
  {
    href: "#contact",
    src: "/img/gozba.jpg",
    alt: "Gozba — logo dizajn projekat za Inari Design",
    title: "Gozba",
    category: "Logo dizajn",
  },
  {
    href: "#contact",
    src: "/img/project2.jpg",
    alt: "UNCLE G — vizuelni identitet",
    title: "UNCLE G",
    category: "Vizuelni identitet",
  },
  {
    href: "#contact",
    src: "/img/project3.jpg",
    alt: "Studio Shawarma — brending projekat",
    title: "Studio Shawarma",
    category: "Brending",
  },
  {
    href: "#contact",
    src: "/img/project4.jpg",
    alt: "PLOD — packaging dizajn",
    title: "PLOD",
    category: "Packaging",
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <span className="subtitle">PROJEKTI</span>
        <h2 id="projects-heading">Odabrani radovi</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="project"
              aria-label={`${project.title} — ${project.category}`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 900px) 90vw, 45vw"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
