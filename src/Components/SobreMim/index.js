import "./SobreMim.css";

const SobreMim = () => {
  return (
    <section id="section-sobre" className="Secao2">
      <div className="SobreMim">
        <h1>Mais sobre mim</h1>
        <p>
          Meu nome é Matheus, tenho 18 anos e comecei meus estudos em
          programação no início de 2022. Quando comecei, meu primeiro contato
          foi com Python e tenho certo conhecimento sobre a linguagem, porém
          depois me foquei em JavaScript tanto para FrontEnd quanto para
          BackEnd.
        </p>
        <h2>O que faço atualmente?</h2>
        <p>
          Atualmente, tenho me dedicado ao estudo de conceitos da computação e
          lógica, tais como algoritmos. Além disso, venho aprofundando meus
          conhecimentos em outras linguagens, como Java, TypeScript e,
          principalmente, Kotlin. Essa jornada de estudos me levou a explorar
          também o campo dos bancos de dados(MySQL, SQLite e MongoDB), e recentemente tenho me dedicado
          ao aprendizado de conteúdos relacionados à computação em nuvem(Google Cloud, Azure e AWS),
          buscando compreender o funcionamento de aplicações em grande escala.
        </p>
      </div>
      <div className="sobre-img">
        <img src="./assets/fotominha.png" alt="Minha Foto" />
      </div>
    </section>
  );
};

export default SobreMim;
