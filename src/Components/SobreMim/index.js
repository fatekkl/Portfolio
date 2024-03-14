import './SobreMim.css'

const SobreMim = () => {
    return (
        <section id='section-sobre' className="Secao2">
            <div className="SobreMim">
                <h1>Mais sobre mim</h1>
                <p>Meu nome é Matheus, tenho 17 anos e comecei meus estudos em programação no início de 2022. Inicialmente, foquei na lógica e, em certo ponto, estudei o básico de Front-End. Assim que senti progresso suficiente, aprendi sobre React.js e Node.js. Decidi aprender Node para criar aplicações completas sem depender de outra pessoa. Atualmente, continuo estudando Node e me aprofundando em conceitos da computação. Pretendo continuar aprendendo e explorar outras linguagens e frameworks.
                </p>
                <h2>O que estou estudando?</h2>
                <p> Atualmente, continuo estudando Node e me aprofundando em conceitos da computação. Pretendo continuar aprendendo e explorar outras linguagens e frameworks.
                </p>
            </div>
            <div className='sobre-img'>
                <img src='./assets/fotominha.png' alt='Minha Foto' />
            </div>
        </section>
    )
}

export default SobreMim