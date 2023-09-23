import './ModoEscuro.css'


const ModoEscuro = () => {

    const classhandle = () => {

    const headerid = document.querySelector('#headerid')

    const layoutmain = document.querySelector('#layout-main')

    const textlayout = document.querySelector('#txtlayout')

   {/*const sectionprojetos = document.querySelector('#section-projetos')*/}
   
   {/* const section2 = document.querySelector('#section-sobre') */}

    const botaodark = document.querySelector('#label')

        headerid.classList.toggle('dark')
        botaodark.classList.toggle('dark')
        layoutmain.classList.toggle('dark')
        textlayout.classList.toggle('dark')
    }

    return (
        <div className='div-modoescuro'>
        <input onChange={classhandle} className='inputclass' type='checkbox' id='checkinput'/>
        <label className='labelclasse' htmlFor='checkinput'id='label'>
        <div className="ball"></div>
        </label>
        </div>
    )
}

export default ModoEscuro