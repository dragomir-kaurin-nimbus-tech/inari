import Image from "next/image";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container about">
        <div className="about-text">
          <span className="subtitle">O MENI</span>
          <h2 id="about-heading">
            Kreiram vizuelna
            <br />
            rešenja koja ostavljaju
            <br />
            utisak.
          </h2>
          <p>
            Pomažem kompanijama da kroz kvalitetan dizajn izgrade prepoznatljiv
            vizuelni identitet. Tokom tog perioda učestvovao sam u realizaciji
            preko 50 projekata za male biznise i velike kompanije.
            <br />
            <br />
            Moj rad obuhvata kompletan proces – od kreiranja logotipa, brendinga
            i digitalnih vizuala, preko pripreme materijala za štampu malih i
            velikih formata, do dizajna i izrade modernih web sajtova i web
            aplikacija.
            <br />
            <br />
            Verujem da dobar dizajn nije samo lep izgled, već alat koji gradi
            poverenje, prepoznatljivost i doprinosi rastu svakog brenda.
          </p>
        </div>
        <div className="about-image">
          <Image
            src="/img/id-card.png"
            alt="Inari Design — vizuelni identitet i brending portfolio"
            width={700}
            height={500}
            sizes="(max-width: 900px) 90vw, 700px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
