import './Main.css'

const LayoutPrincipal = () => {

    return (

        <main id='layout-main' className="Layout">
            <section id='txtlayout' className="LayoutTextos">
                <h1 id='h1html'>Web<br/> <strong>Developer</strong>🧊</h1>
                <span>Oi, eu sou o Matheus. 👋</span>
                <p>Sou um desenvolvedor web que utiliza diversas tecnologias, porém tenho foco em Node e Java, Trabalho com tecnologias como SQL, Nest, Hibernate e Cloud(Google Cloud, Azure, AWS). Sou um entusiasta de algoritmos e lógica, os quais tenho me aprofundado cada vez mais em conjunto com o paradigma de Orientação a Objetos.</p>
            </section>
            <div className="container-botao">
                <a href="https://www.linkedin.com/in/fatekkl/" target='_blank' rel='noopener noreferrer'>
                    <img id='linkedinimg' src="/assets/linkedin.png" alt="ImagemLinkedIn" />LinkedIn
                </a>
                <a href="https://github.com/fatekkl" target="_blank" rel='noopener noreferrer'>
                    <img id='gitimg' src="/assets/github.png" alt="ImagemGithub" />Github
                </a>
                <a href="https://docs.google.com/document/d/1u4CmJWvBQvKz-KQDFK2sazFaaeu9mhHgTXI2lF24ZlI/edit?usp=sharing" target="_blank" rel='noopener noreferrer'>
                    <img id='doc' src="/assets/pdf.png" alt="imagemdoc" />Currículo
                </a>
            </div>
            <div className='container-techs'>
                <img alt='badge' src="./assets/reactbadge.png" />
                <img alt='badge' src='./assets/jsbadge.png' />
                <img alt='badge' src='./assets/nodebadge.png' />
                <img alt='badge' src='./assets/gitbadge.png' />
                <img alt='badge' src='./assets/javabadge.png' />
                <img alt='badge' src='./assets/kotlinbadge.png'/>
            </div>
        </main>



    )
}

export default LayoutPrincipal

