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

                <ProjetoIndividual title="Resend" desc="Nesse projeto freelance, eu desenvolvi um serviço de envio de emails em PHP, utilizei uma VPS(Ubuntu), tem diversas funções como operações CRUD com dominios no Resend, envio de e-mails, agendamento de emails, validação de domínio. "techs={[paths.php, paths.git, paths.linux]} repo="https://github.com/fatekkl/Resend" />

                <ProjetoIndividual title="E-Commerce" desc="Nesse projeto, eu desenvolvi um e-commerce do zero utilizando Woocommerce. Fui responsável por criar a interface seguindo o Figma, conectar o gateway de pagamento, API da transportadora e fazer o deploy em uma hospedagem da Hostinger. " techs={[paths.html , paths.css , paths.php]} repo="https://closetmed.com.br/"/>

                <ProjetoIndividual title="Automação CRM" desc="Nesse projeto freelance, eu e outro desenvolvedor fizemos a automatização dos pedidos e da gestão da empresa, hospedamos o script em um AppScript que observava as requisições feitas para API, capturava os dados e adicionava no sistema de leads com outra requisição POST" techs={[paths.node , paths.js]} repo="https://ozonsolution.com/"/>

                <ProjetoIndividual title="Monitoramento Whatsapp" desc="Nesse freelance, eu desenvolvi uma pagina web e consumi a API do Whatsapp para, autenticar usuários gerando um QRCODE e criando instâncias na Evolution, fiz um sistema de seleção de grupos do usuário autenticado e após selecionados, são enviados para o webhook que os monitora." techs={[paths.js, paths.git, paths.html, paths.css]} repo=""/>
            </div>
        </section>

    )
}

export default Projetos