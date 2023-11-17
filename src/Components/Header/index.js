import ModoEscuro from '../ModoEscuro'
import './Header.css'

const LayoutHeader = () => {

    return (
    <header id='headerid' className="header">
        <nav className="Navegacao">
        <h2>Inicio</h2>
        <h2>Sobre</h2>
        <h2>Projetos</h2>
        <ModoEscuro/>
        </nav>
    </header>
    )
}

export default LayoutHeader