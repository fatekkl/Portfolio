import './ModoEscuro.css'


const ModoEscuro = () => {

    const classhandle = () => {

    const headerid = document.querySelector('#headerid')

    const layoutmain = document.querySelector('#layout-main')

    const textlayout = document.querySelector('#txtlayout')

   const sectionprojetos = document.querySelector('#section-projetos')
   
    const section2 = document.querySelector('#section-sobre')

    const botaodark = document.querySelector('#label')

        headerid.classList.toggle('dark')
        botaodark.classList.toggle('dark')
        layoutmain.classList.toggle('dark')
        textlayout.classList.toggle('dark')
        section2.classList.toggle('dark')
        sectionprojetos.classList.toggle('dark')
    }

    const textimghandling =  () => {
        const checkbox = document.querySelector('#checkinput')
        const mainh1 = document.querySelector('#h1html')
        const gitimg = document.querySelector('#gitimg')
        const instaimg = document.querySelector('#instaimg')
        const linkedinimg = document.querySelector('#linkedinimg')

        if (checkbox.checked == true){
            mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 🦊'
            gitimg.setAttribute('src','/assets/githubdark.png')
            instaimg.setAttribute('src','/assets/instagramdark.png')
            linkedinimg.setAttribute('src', '/assets/linkedindark.png')
        } else {
            mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 👾'
            gitimg.setAttribute('src','/assets/github.png')
            instaimg.setAttribute('src','/assets/instagram.png')
            linkedinimg.setAttribute('src', '/assets/linkedin.png')
        }


    }



    function callfn() {
        classhandle();
        textimghandling();
    }

    return (
        <div className='div-modoescuro'>
        <input onChange={callfn}  className='inputclass' type='checkbox' id='checkinput'/>
        <label className='labelclasse' htmlFor='checkinput'id='label'>
        <div className="ball"></div>
        </label>
        </div>
    )
}

export default ModoEscuro