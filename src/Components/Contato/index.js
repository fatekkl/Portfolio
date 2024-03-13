import './Contato.css'


const Contato = () => {

    function copy2(event) {
        navigator.clipboard.writeText("(11) 98753-9647")
        event.target.textContent = "COPIADO COM SUCESSO!"
        event.target.style.color = "#1AFB47"
        setTimeout(() => {
            event.target.textContent = "(11) 98753-9647"
            event.target.style.color = "#2B2E4A"
        }, 400)
    }

    function copy(event) {
        navigator.clipboard.writeText("mathtml.1105@gmail.com")
        event.target.textContent = "COPIADO COM SUCESSO!"
        event.target.style.color = "#1AFB47"
        setTimeout(() => {
            event.target.textContent = "mathtml.1105@gmail.com"
            event.target.style.color = "#2B2E4A"
        }, 400)

    }

    return (
        <section className='container-contato'>
            <h1 id='contatoh1' className='h1contato'>Contato</h1>
            <div className='container-div-img'>
                <img id='contatoimg' alt='email' src='/assets/contato.png' />
            </div>
            <div className='container-copys'>
                <h2 id='contatoh2' className='h2contato'>Fale comigo clicando no texto abaixo!</h2>
                <div className='clickcopy'>
                    <div className='icon'>
                        <img alt='email' src='./assets/email.png' />
                    </div>
                    <span onClick={copy}>mathtml.1105@gmail.com</span>
                </div>
                <div className='clickcopy'>
                    <div className='icon'>
                        <img alt='email' src='./assets/whatsappbadge.png' />
                    </div>
                    <span onClick={copy2}>{"(11) 98753-9647"}</span>
                </div>
            </div>
        </section>
    )
}


export default Contato