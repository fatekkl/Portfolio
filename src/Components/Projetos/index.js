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
        php: "./assets/phpbadge.png",
        sqlite: "./assets/sqlitebadge.png",
        linux: "./assets/linuxbadge.png"
    }
    return (
        <section id='section-projetos' className='container-section'>
            <div className='background-box'><span>Conheça <strong>meus</strong> projetos<strong>.</strong></span></div>
            <div className='container-projects'>

                <ProjetoIndividual title="Resend" desc="Nesse projeto, eu desenvolvi um serviço de envio de emails em PHP, utilizei uma VPS(Ubuntu), tem diversas funções como operações CRUD com dominios no Resend, envio de e-mails, agendamento de emails, validação de domínio. "techs={[paths.php, paths.git, paths.linux]} link="" repo="https://github.com/fatekkl/TodoList" />

                <ProjetoIndividual title="E-Commerce" desc="Nesse projeto, foi um freelance que fiz para uma loja de roupas local, com isso tive que interagir com o gateway de pagamento da Asaas e sua API, além disso também interagi com a transportadora a cada pedido que é feito. Segui a interface requisitada pela cliente." techs={[paths.html , paths.css , paths.php]} link="https://closetmed.com.br/" repo="https://github.com/fatekkl"/>

                <ProjetoIndividual title="Automação CRM" desc="Nesse projeto freelance, eu e outro desenvolvedor fizemos a automatização dos pedidos e da gestão da empresa, cada pedido feito é enviado para o serviço de gestão com todas as informações sobre o cliente." techs={[paths.node , paths.js]} link="https://ozonsolution.com/"/>

                <ProjetoIndividual title="Node com Sequelize" desc="Nesse projeto pessoal, eu desenvolvi um sistema de classes baseado em uma escola e cursos, Utilizei Node e a biblioteca Sequelize para conectar com uma tabela sqlite, enviando, atualizando, deletando e lendo os dados." techs={[paths.node , paths.sqlite , paths.git]} link="https://github.com/fatekkl/NodeSequelize" repo="https://github.com/fatekkl/NodeSequelize"/>
            </div>
        </section>

    )
}

export default Projetos