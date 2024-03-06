import './Contato.css'


const Contato = () => {

    function copy (event)  {
        const target = event.target.textContent
        const prevTarget = event.target.textContent
        navigator.clipboard.writeText(target)
        event.target.textContent = "COPIADO COM SUCESSO!"
        event.target.style.color = "#1AFB47"
        setTimeout(() => {
            event.target.textContent = prevTarget
            event.target.style.color = "#fafafa"
        }, 400)

    }

    return (
        <section className='container-contato'>
            <h1>Contato</h1>
            <div className='container-div-img'>
                <img alt='envelope' src='./assets/Contato.png' />
            </div>
            <div className='container-copys'>
                <h2>Fale comigo clicando no texto abaixo!</h2>
                <div className='clickcopy'>
                    <div className='icon'>
                        <img alt='email' src='./assets/envelope.png' />
                    </div>
                    <span onClick={copy}>mathtml.1105@gmail.com</span>
                </div>
                <div className='clickcopy'>
                    <div className='icon'>
                        <img alt='envelope' src='./assets/envelope.png' />
                    </div>
                    <span onClick={copy}>mathtml.1105@gmail.com</span>
                </div>
            </div>
        </section>
    )
}


export default Contato