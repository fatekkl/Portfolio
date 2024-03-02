import './Contato.css'


const Contato = () => {
    return (
        <section className='container-contato'>
            <h1>Contato</h1>
            <div className='container-div-img'>
                <img alt='email' src='./assets/Contato.png' />
            </div>
            <div className='container-copys'>
                <h2>Fale comigo clicando abaixo!</h2>
                <div className='clickcopy'>
                    <div className='icon'>
                        <img alt='email' src='./assets/email.png'/>
                    </div>
                    <span>mathtml.1105@gmail.com</span>
                </div>
                <div className='clickcopy'>
                    <div className='icon'>
                        <img alt='email' src='./assets/email.png'/>
                    </div>
                    <span>mathtml.1105@gmail.com</span>
                </div>
            </div>
        </section>
    )
}


export default Contato