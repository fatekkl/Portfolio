import './Main.css'

const LayoutPrincipal = () => {

    return (
        
        <main id='layout-main' className="Layout">
            <section id='txtlayout' className="LayoutTextos">
                <h1 id='h1html'>Web<br /> <strong>Developer</strong>💧</h1>
                <span>Oi, eu sou o Matheus. 👋</span>
                <p>Seja muito bem-vindo ao meu portfólio, um espaço dedicado a compartilhar minha trajetória acadêmica e profissional, onde você terá acesso a informações detalhadas sobre diversos aspectos que compõem minha jornada. Explore os diferentes campos abaixo para descobrir mais sobre os projetos que realizei, as tecnologias que domino, minhas habilidades interpessoais e um vislumbre mais pessoal sobre quem sou.</p>
            </section>
            <div className="container-botao">
                <a href="https://www.linkedin.com/in/fatekkl/" target='_blank' rel='noopener noreferrer'>
                    <img id='linkedinimg' src="/assets/linkedin.png" alt="ImagemLinkedIn" />LinkedIn
                </a>
                <a href="https://github.com/fatekkl" target="_blank" rel='noopener noreferrer'>
                    <img id='gitimg' src="/assets/github.png" alt="ImagemGithub" />Github
                </a>
                <a href="https://drive.google.com/file/d/11Jogiptnz3uYLmApWsm1sEVw7634axIU/view?usp=sharing" target="_blank" rel='noopener noreferrer'>
                    <img id='doc' src="/assets/pdf.png" alt="imagemdoc" />Currículo
                </a>
            </div>
            <div className='container-techs'>
            <h1>Stacks</h1> 
                <img alt='badge' src="./assets/reactbadge.png" />
                <img alt='badge' src='./assets/jsbadge.png' />
                <img alt='badge' src='./assets/nodebadge.png' />
                <img alt='badge' src='./assets/gitbadge.png' />
                <img alt='badge' src='./assets/cssbadge.png' />
                <img alt='badge' src='./assets/htmlbadge.png' />
            </div>
        </main>



    )
}

export default LayoutPrincipal

