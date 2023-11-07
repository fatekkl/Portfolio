import './Main.css'

const LayoutPrincipal = () => {

    return (
    <main id='layout-main' className="Layout">
        <section id='txtlayout' className="LayoutTextos">
            <h1 id='h1html'>Front-End<br/> <strong>Developer</strong>💧</h1>
            <span>Oi, eu sou o Matheus. 👋</span>
            <p>Busco uma oportunidade de estágio para aplicar minhas habilidades e conhecimentos em tecnologias como Node.js, React.js, JavaScript, HTML e CSS. Tenho experiência em desenvolvimento utilizando HTML/CSS/JavaScript para criar aplicações web interativas e funcionais.  Minha proficiência em JavaScript me permite implementar recursos avançados, enquanto minhas habilidades em HTML e CSS garantem  a criação de interfaces atraentes e responsivas. Estou ansioso para contribuir e aprender em um ambiente de trabalho real, aproveitando  meu conjunto de habilidades para auxiliar no desenvolvimento de soluções web inovadoras, visando adquirir mais conhecimento durante meu período de estágio.</p>
        <div className="LinksBotao">
            <a href="https://www.linkedin.com/in/fatekkl/" target='_blank' rel='noopener noreferrer'>
                <img id='linkedinimg' src="/assets/linkedin.png" alt="ImagemLinkedIn"/>LinkedIn⠀
            </a>
            <a  href="https://github.com/fatekkl"  target="_blank" rel='noopener noreferrer'>
                <img id='gitimg' src="/assets/github.png" alt="ImagemGithub"/>Github⠀⠀⠀
            </a>
            <a href="https://www.instagram.com/matheuskdask/"  target="_blank" rel='noopener noreferrer'>
                <img id='instaimg' src="/assets/instagram.png" alt="ImagemInstagram"/>Instagram
            </a>
        </div>
        </section>
    </main>


 )
}

export default LayoutPrincipal

