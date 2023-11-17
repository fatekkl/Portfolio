import './Projetos.css'


function Projetos () {
    
    return (
        <section id='section-projetos' className='container-section'>
            <div className='container-techs'>
                <img alt='badge' src='./assets/reactbadge.png'/>
                <img alt='badge' src='./assets/jsbadge.png'/>
                <img alt='badge' src='./assets/nodebadge.png'/>
                <img alt='badge' src='./assets/gitbadge.png'/>
                <img alt='badge' src='./assets/cssbadge.png'/>
                <img alt='badge' src='./assets/htmlbadge.png'/>
            </div>
                <div className='container-projects'>
                    <div className='projects'>
                        <h1>CRUD</h1>
                        <p>TodoList criada com uma API REST/React</p>
                        <div className='container-img'>
                            <a className='img-link' href='https://github.com/fatekkl/TodoList' target='_blank'rel='noopener noreferrer'><img src='/assets/github.png' alt='ImagemGithub'/></a>
                            <a className='img-link' href='' target='_blank'rel='noopener noreferrer'><img src='/assets/vercelbadge.png' width={35} alt='ImagemDownload'/></a>
                        </div>
                    </div>
                    <div className='projects'>
                        <h1>Pomodoro</h1>
                        <p>Pomodoro desenvolvido em JS simples</p>
                        <div className='container-img'>
                            <a className='img-link' href='https://github.com/fatekkl/Pomodoro-Alura' target='_blank'rel='noopener noreferrer'><img src='/assets/github.png' alt='ImagemGithub'/></a>
                            <a className='img-link' href='https://pomodoro-alura.vercel.app' target='_blank'rel='noopener noreferrer'><img  width={35} alt='ImagemVercel' src='/assets/vercelbadge.png'/></a>
                        </div>
                    </div>
                    <div className='projects'>
                        <h1>Organograma</h1>
                        <p>Organograma desenvolvido em React</p>
                        <div className='container-img'>
                            <a className='img-link' href='https://github.com/fatekkl/TodoList' target='_blank'rel='noopener noreferrer'><img src='/assets/github.png' alt='ImagemGithub'/></a>
                            <a className='img-link' href='' target='_blank'rel='noopener noreferrer'><img src='/assets/vercelbadge.png' width={35} alt='ImagemDownload'/></a>
                        </div>
                    </div>
                    <div className='projects'>
                        <h1>Projeto 4</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                        <div className='container-img'>
                            <a className='img-link' href='https://github.com/fatekkl/TodoList' target='_blank'rel='noopener noreferrer'><img src='/assets/github.png' alt='ImagemGithub'/></a>
                        </div>
                    </div>
                    <div className='projects'>
                        <h1>Projeto 5</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                        <div className='container-img'>
                            <a className='img-link' href='https://github.com/fatekkl/TodoList' target='_blank'rel='noopener noreferrer'><img src='/assets/github.png' alt='ImagemGithub'/></a>
                        </div>
                    </div>
                    <div className='projects'>
                        <h1>Projeto 6</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                        <div className='container-img'>
                            <a className='img-link' href='https://github.com/fatekkl/TodoList' target='_blank'rel='noopener noreferrer'><img src='/assets/github.png' alt='ImagemGithub'/></a>
                            {/* <a className='img-link' href='' target='_blank'rel='noopener noreferrer'><img src='/assets/github.png' alt='ImagemGithub'/></a> */}
                        </div>
                    </div>
                </div>            
        </section>
    )
}

export default Projetos