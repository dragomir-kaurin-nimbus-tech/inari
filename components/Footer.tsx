import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="container footer">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.tagline}
        </p>
        <div>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href="#about">O meni</a>
          <a href="#contact">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
