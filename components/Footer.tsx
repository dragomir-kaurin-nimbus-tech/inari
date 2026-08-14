import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="container footer">
        <Image
          className="footer-logo"
          src="/img/logo.png"
          alt={siteConfig.name}
          width={647}
          height={366}
        />

        <a
          className="footer-social"
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${siteConfig.name} na Instagramu`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </a>

        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
