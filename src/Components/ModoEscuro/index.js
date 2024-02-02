import './ModoEscuro.css'

import { useState, useEffect } from 'react'

const ModoEscuro = () => {
    const [isCheck, setisCheck] = useState('off')
    localStorage.getItem("Check") ? localStorage.getItem("Check") : localStorage.setItem("Check" , isCheck)
    const strg = localStorage.getItem("Check")

    useEffect(() => {
        const checkbox = document.querySelector('#checkinput')

        const classhandle = () => {

            const headerid = document.querySelector('#headerid')
    
            const layoutmain = document.querySelector('#layout-main')
    
            const textlayout = document.querySelector('#txtlayout')
    
            const sectionprojetos = document.querySelector('#section-projetos')
    
            const section2 = document.querySelector('#section-sobre')
    
            const botaodark = document.querySelector('#label')
    
            const projects = document.querySelectorAll('.projects')
    
            const mainh1 = document.querySelector('#h1html')
            const gitimg = document.querySelectorAll('#gitimg')
            const instaimg = document.querySelector('#instaimg')
            const linkedinimg = document.querySelector('#linkedinimg')
    
            const array = [
                headerid,
                layoutmain,
                textlayout,
                sectionprojetos,
                section2,
                botaodark,
            ]
    
            if (isCheck === "on") {
                
                array.forEach((item) => {
                    item.classList.toggle("dark")
                   
                })
    
                mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 🔥'
                instaimg.setAttribute('src', '/assets/instagramdark.png')
                linkedinimg.setAttribute('src', '/assets/linkedindark.png')
                gitimg.forEach((imagem) => {
                    imagem.setAttribute('src', '/assets/githubdark.png')
                })
    
                
            } else {
    
                array.forEach((item) => {
                    item.classList.toggle("dark")
                   
                })
    
                mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 💧'
                instaimg.setAttribute('src', '/assets/instagram.png')
                linkedinimg.setAttribute('src', '/assets/linkedin.png')
                gitimg.forEach((imagem) => {
                    imagem.setAttribute('src', '/assets/github.png')
                })
            }
    
            projects.forEach((item) => {
                item.classList.toggle("dark")
            })
    
    
        }

        if (isCheck === "on") {
            setisCheck(strg)
            checkbox.checked = true
            classhandle()
        } else {
            setisCheck(strg)
            checkbox.checked = false
            classhandle()
        }


    }, [isCheck , strg])


    // const classhandle = () => {

    //     const headerid = document.querySelector('#headerid')

    //     const layoutmain = document.querySelector('#layout-main')

    //     const textlayout = document.querySelector('#txtlayout')

    //     const sectionprojetos = document.querySelector('#section-projetos')

    //     const section2 = document.querySelector('#section-sobre')

    //     const botaodark = document.querySelector('#label')

    //     const projects = document.querySelectorAll('.projects')

    //     const mainh1 = document.querySelector('#h1html')
    //     const gitimg = document.querySelectorAll('#gitimg')
    //     const instaimg = document.querySelector('#instaimg')
    //     const linkedinimg = document.querySelector('#linkedinimg')

    //     const array = [
    //         headerid,
    //         layoutmain,
    //         textlayout,
    //         sectionprojetos,
    //         section2,
    //         botaodark,
    //     ]

    //     if (isCheck === "on") {
            
    //         array.forEach((item) => {
    //             item.classList.toggle("dark")
               
    //         })

    //         mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 🔥'
    //         instaimg.setAttribute('src', '/assets/instagramdark.png')
    //         linkedinimg.setAttribute('src', '/assets/linkedindark.png')
    //         gitimg.forEach((imagem) => {
    //             imagem.setAttribute('src', '/assets/githubdark.png')
    //         })

            
    //     } else {

    //         array.forEach((item) => {
    //             item.classList.toggle("dark")
               
    //         })

    //         mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 💧'
    //         instaimg.setAttribute('src', '/assets/instagram.png')
    //         linkedinimg.setAttribute('src', '/assets/linkedin.png')
    //         gitimg.forEach((imagem) => {
    //             imagem.setAttribute('src', '/assets/github.png')
    //         })
    //     }

    //     projects.forEach((item) => {
    //         item.classList.toggle("dark")
    //     })


    // }


    // const textimghandling = (onoroff) => {
    //     const mainh1 = document.querySelector('#h1html')
    //     const gitimg = document.querySelectorAll('#gitimg')
    //     const instaimg = document.querySelector('#instaimg')
    //     const linkedinimg = document.querySelector('#linkedinimg')

    //     if (onoroff === "on") {
    //         mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 🔥'
    //         instaimg.setAttribute('src', '/assets/instagramdark.png')
    //         linkedinimg.setAttribute('src', '/assets/linkedindark.png')
    //         gitimg.forEach((imagem) => {
    //             imagem.setAttribute('src', '/assets/githubdark.png')
    //         })
    //     } else {
    //         mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 💧'
    //         instaimg.setAttribute('src', '/assets/instagram.png')
    //         linkedinimg.setAttribute('src', '/assets/linkedin.png')
    //         gitimg.forEach((imagem) => {
    //             imagem.setAttribute('src', '/assets/github.png')
    //         })
    //     }
    // }

    function setStrg() {
        if (isCheck === "off") {
            setisCheck("on")
            localStorage.setItem("Check" , "on")
        } else {
            setisCheck("off")
            localStorage.setItem("Check" , "off")
            

        }

    }


    return (
        <div className='div-modoescuro'>
            <input onClick={setStrg} className='inputclass' type='checkbox' id='checkinput' />
            <label className='labelclasse' htmlFor='checkinput' id='label'>
                <div className="ball"></div>
            </label>
        </div>
    )


}

export default ModoEscuro


// const textimghandling = (onoroff) => {
//     const mainh1 = document.querySelector('#h1html')
//     const gitimg = document.querySelectorAll('#gitimg')
//     const instaimg = document.querySelector('#instaimg')
//     const linkedinimg = document.querySelector('#linkedinimg')

//     if (onoroff === "on") {
//         mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 🔥'
//         instaimg.setAttribute('src', '/assets/instagramdark.png')
//         linkedinimg.setAttribute('src', '/assets/linkedindark.png')
//         gitimg.forEach((imagem) => {
//             imagem.setAttribute('src', '/assets/githubdark.png')
//         })
//     } else {
//         mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 💧'
//         instaimg.setAttribute('src', '/assets/instagram.png')
//         linkedinimg.setAttribute('src', '/assets/linkedin.png')
//         gitimg.forEach((imagem) => {
//             imagem.setAttribute('src', '/assets/github.png')
//         })
//     }
// }