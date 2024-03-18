import ModoEscuro from '../ModoEscuro'
import './Header.css'

const LayoutHeader = () => {
    return (
    <header id='headerid' className="header">
        <ul className='container-nav'>
        <a href='#layout-main'>Inicio</a>
        <a href='#section-sobre'>Sobre mim</a>
        <a href='#section-projetos'>Projetos</a>
        <a href='#section-contato'>Contato</a>
        </ul>
        <ModoEscuro/>
    </header>
    )
}

export default LayoutHeader