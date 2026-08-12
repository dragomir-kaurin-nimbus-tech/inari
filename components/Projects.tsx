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
    href: "https://www.djeneralpivara.rs/",
    src: "/img/djeneral.jpg",
    alt: "Đeneral — logo i brending",
    title: "Đeneral",
    category: "Logo i brending",
  },
  {
    href: "https://www.megaplast.shop/",
    src: "/img/megaplast.jpg",
    alt: "Megaplast - izrada kataloga i pakovanja",
    title: "Megaplast",
    category: "Katalog i pakovanje",
  },
  {
    href: "https://www.fkzeleznicarindjija.rs/",
    src: "/img/zeleznicar.jpg",
    alt: "FK Železničar — društvene mreže i vizuelni identitet",
    title: "FK Železničar",
    category: "Društvene mreže i vizuelni identitet",
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <span className="subtitle">PROJEKTI</span>
        <h2 id="projects-heading">Naši radovi</h2>
        <div className="projects-grid">
          {projects.map((project) => {
            const external = project.href.startsWith("http");
            return (
              <a
                key={project.title}
                href={project.href}
                className="project"
                aria-label={`${project.title} — ${project.category}`}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
