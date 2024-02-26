import "./ProjetoIndividual.css"


const ProjetoIndividual = (props) => {



    return (
        <div className='project'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <div className='mini-container'>
                {props.techs.map((tech , index) => {
                    return <img key={index} alt='badge' src={tech} />
                })}
            </div>
            <div className='button-container'>
                <a target='_blank' rel='noopener noreferrer' href={props.link} className='preview-button'><img alt='linksymbol' src='./assets/linklogo.png' />Preview</a>
                <a target='_blank' rel='noopener noreferrer' href={props.repo} className='repo-button'><img id='gitimg' alt='github' src='./assets/github.png' />Code</a>
            </div>
        </div>
    )
}




export default ProjetoIndividual