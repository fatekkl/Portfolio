import './Main.css'

const LayoutPrincipal = () => {

    return (
    <main className="Layout">
        <section className="LayoutTextos">
            <h1>FrontEnd <br/> <strong> Developer </strong> 👾</h1>
            <span>Oi, Eu sou o Matheus. 👋</span>
            <p>Busco uma oportunidade de estágio para aplicar minhas habilidades e conhecimentos em tecnologias como Node.js, React.js, JavaScript, HTML e CSS. Tenho experiência em desenvolvimento utilizando HTML/CSS/JavaScript para criar aplicações web interativas e funcionais.  Minha proficiência em JavaScript me permite implementar recursos avançados, enquanto minhas habilidades em HTML e CSS garantem  a criação de interfaces atraentes e responsivas. Estou ansioso para contribuir e aprender em um ambiente de trabalho real, aproveitando  meu conjunto de habilidades para auxiliar no desenvolvimento de soluções web inovadoras,visando adquirir mais conhecimento durante meu período de estágio.</p>
        
        <div className="LinksBotao">
            <a href="https://www.linkedin.com/in/matheus-de-oliveira-ba5074280/" target='_blank' rel='noopener noreferrer'>
                <img src="/assets/linkedin.png" alt="ImagemLinkedIn"/>LinkedIn
            </a>
            <a  href="https://github.com/fatekkl"  target="_blank" rel='noopener noreferrer'>
                <img src="/assets/github.png" alt="ImagemGithub"/> Github
            </a>
            <a href="https://www.instagram.com/matheuskdask/"  target="_blank" rel='noopener noreferrer'>
                <img src="/assets/instagram.png" alt="ImagemInstagram"/>Instagram
            </a>
        </div>
        </section>
    {/* <img className="SetaIMG" src="./assets/seta.png" alt="seta"/> */}
    </main>


 )
}

export default LayoutPrincipal

