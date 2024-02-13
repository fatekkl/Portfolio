import ModoEscuro from '../ModoEscuro'
import './Header.css'

const LayoutHeader = () => {

    return (
    <header id='headerid' className="header">
        <ul className="Navegacao">
        <li>Inicio</li>
        <li>Sobre</li>
        <li>Projetos</li>
        </ul>
        <ModoEscuro/>
    </header>
    )
}

export default LayoutHeader