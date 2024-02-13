import './SobreMim.css'

const SobreMim = () => {
    return (
        <section id='section-sobre' className="Secao2">
            <div className="SobreMim">
                <h1>Mais sobre mim</h1>
                <p>Meu nome é Matheus, tenho 17 anos e nasci em Barueri, porém sempre morei em São Paulo. Desde sempre, sempre fui apaixonado por tecnologia, com interesse constante em celulares, computadores, e assim por diante. Inicialmente, criei interesse pelo desenvolvimento de jogos, porém mudei de ideia quando comecei a lidar com o Desenvolvimento Web, pelo qual criei maior curiosidade. Meu primeiro contato com a programação foi por volta dos 10 a 11 anos. Mesmo sem saber o que era, eu criava arquivos .bat no PC e os enviava para amigos, ou até mesmo alterava o HTML de algum site com o "Inspecionar Elemento" e mostrava para as pessoas. Entretanto, no fim de 2022, comecei a estudar programação de forma séria, com conteúdo gratuito na internet. Após isso, consegui acesso aos cursos da Alura, os quais até hoje utilizo. Aprendi stacks como React.js, HTML/CSS, JavaScript e Node.js. Recentemente, tenho focado meus estudos em React e Node, já que são tecnologias que utilizam a mesma linguagem e são importantes atualmente no mercado.
                </p>
            </div>
            <div className='sobre-img'>
                <img src='./assets/fotominha.png' alt='Minha Foto' />
            </div>
        </section>
    )
}

export default SobreMim