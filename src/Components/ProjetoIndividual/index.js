import "ProjetoIndividual.css"


const ProjetoIndividual = (props) => {
    return (
        <div className='project'>
            <h1>CRUD</h1>
            <p>CRUD é uma sigla para Create, Read, Update e Delete. Foi um projeto que desenvolvi com o intuito de aprender mais sobre APIs, Protocolo HTTP, Assincronicidade e os conceitos básicos de orientação a objetos.</p>
            <div className='mini-container'>
                <img alt='react' src="./assets/reactbadge.png" />
                <img alt='node' src="./assets/nodebadge.png" />
                <img alt='git' src="./assets/gitbadge.png" />
                <img alt='js' src="./assets/jsbadge.png" />
            </div>
            <div className='button-container'>
                <a href='vercel' className='preview-button'><img alt='vercel' src='./assets/vercelbadge.png' />Preview</a>
                <a href='vercel' className='repo-button'><img id='gitimg' alt='github' src='./assets/github.png' />Code</a>
            </div>

        </div>
    )
}




export default ProjetoIndividual