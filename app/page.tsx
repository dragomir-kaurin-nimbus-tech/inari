import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Clients />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
