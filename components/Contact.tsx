import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container contact">
        <div>
          <span className="subtitle">KONTAKT</span>
          <h2 id="contact-heading">
            Hajde da napravimo
            <br />
            nešto posebno.
          </h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
