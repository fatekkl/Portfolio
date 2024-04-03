import ProjetoIndividual from '../ProjetoIndividual'
import './Projetos.css'



function Projetos() {

    const paths = {
        react: "./assets/reactbadge.png",
        js: "./assets/jsbadge.png",
        node: "./assets/nodebadge.png",
        git: "./assets/gitbadge.png",
        css: "./assets/cssbadge.png",
        html: "./assets/htmlbadge.png",
        php: "./assets/phpbadge.png"
    }
    return (
        <section id='section-projetos' className='container-section'>
            <div className='background-box'><span>Conheça <strong>meus</strong> projetos<strong>.</strong></span></div>
            <div className='container-projects'>
                <ProjetoIndividual title="CRUD" desc="CRUD é uma sigla para Create, Read, Update e Delete. Foi um projeto que desenvolvi com o intuito de aprender mais sobre APIs, Protocolo HTTP, Assincronicidade e os conceitos básicos de orientação a objetos."techs={[paths.react, paths.git, paths.node, paths.js]} link="" repo="https://github.com/fatekkl/TodoList" />
                <ProjetoIndividual title="E-Commerce" desc="M&D Closet, foi um freelance que fiz para uma loja de roupas local, com isso tive que interagir com o gateway de pagamento da Asaas e sua API, além disso também interagi com a transportadora a cada pedido que é feito." techs={[paths.html , paths.css , paths.php]} link="https://closetmed.com.br/" repo="https://github.com/fatekkl/Portfolio"/>
                <ProjetoIndividual title="Lorem Ipsum" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare enim accumsan, condimentum tortor nec, ultrices eros. Donec sit amet posuere quam. Pellentesque id meturcu" techs={[paths.node , paths.js , paths.git]}/>
                <ProjetoIndividual title="Lorem Ipsum" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare enim accumsan, condimentum tortor nec, ultrices eros. Donec sit amet posuere quam. Pellentesque id meturcu" techs={[paths.node , paths.js , paths.git]}/>
            </div>
        </section>

    )
}

export default Projetos