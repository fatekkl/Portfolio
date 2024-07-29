import "./ProjetoIndividual.css"


const ProjetoIndividual = (props) => {

    if (props.preview === 'false'){
        const button = document.querySelector('.repo-button')

        button.style = 'display: none'
    }

    return (
        <div className='project'>
            <h1>{props.title}</h1>
            <div>
                <p>{props.desc}</p>
                <div className='mini-container'>
                    {props.techs.map((tech, index) => {
                        return <img key={index} alt='badge' src={tech} />
                    })}
                </div>
            </div>
            <div className='button-container'>
                <a target='_blank' rel='noopener noreferrer' href={props.repo} className='repo-button'><img id='gitimg' alt='github' src='./assets/github.png' />Link</a>
            </div>
        </div>
    )
}




export default ProjetoIndividual