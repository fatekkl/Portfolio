import './ModoEscuro.css'

import { useState, useEffect } from 'react'

const ModoEscuro = () => {
    const [isCheck, setisCheck] = useState('off')
    const strg = localStorage.getItem("Check") ? localStorage.getItem("Check") : localStorage.setItem("Check", isCheck)

    useEffect(() => {
        const checkbox = document.querySelector('#checkinput')
        const classhandle = () => {
            const headerid = document.querySelector('#headerid')
            const layoutmain = document.querySelector('#layout-main')
            const textlayout = document.querySelector('#txtlayout')
            const sectionprojetos = document.querySelector('#section-projetos')
            const section2 = document.querySelector('#section-sobre')
            const botaodark = document.querySelector('#label')
            const projects = document.querySelectorAll('.project')
            const backgrounditem = document.querySelector(".background-box")
            const social = document.querySelector("#footer-social")
            const contatoh1 = document.querySelector("#contatoh1")
            const contatoh2 = document.querySelector("#contatoh2")
            const contatobotao = document.querySelectorAll(".clickcopy")
            const containertech = document.querySelector(".container-techs")

            const array = [
                headerid,
                layoutmain,
                textlayout,
                sectionprojetos,
                section2,
                botaodark,
                backgrounditem,
                contatoh1,
                contatoh2,
                containertech,
                social,
            ]

            if (isCheck === "on") {

                array.forEach((item) => {
                    item.classList.add("dark")
                })

                contatobotao.forEach((item) => {
                    item.classList.add("dark")
                })

                projects.forEach((item) => {
                    item.classList.add("dark")
                })


            } else {

                array.forEach((item) => {
                    item.classList.remove("dark")

                })

                contatobotao.forEach((item) => {
                    item.classList.remove("dark")
                })

                projects.forEach((item) => {
                    item.classList.remove("dark")
                })
            }



        }

        const imghandle = () => {
            const contato = document.querySelector("#contatoimg")
            const mainh1 = document.querySelector('#h1html')
            const gitimg = document.querySelectorAll('#gitimg')
            const instaimg = document.querySelectorAll('#instaimg')
            const linkedinimg = document.querySelectorAll('#linkedinimg')
            const projectimg = document.querySelectorAll("#project-img")
            const doc = document.querySelector("#doc")

            if (isCheck === "on") {
                mainh1.innerHTML = 'Web<br/> <strong> Developer </strong>🍎'

                contato.setAttribute("src", "/assets/Contatodark.png")

                doc.setAttribute("src", "/assets/pdf.png")

                gitimg.forEach((imagem) => {
                    imagem.setAttribute('src', '/assets/githubdark.png')
                })

                linkedinimg.forEach((imagem) => {
                    imagem.setAttribute('src', '/assets/linkedindark.png')
                })

                projectimg.forEach((imagem) => {
                    imagem.setAttribute("src", "./assets/project-dark-img.png")
                })

                instaimg.forEach((imagem) => {
                    imagem.setAttribute('src', '/assets/instagramdark.png')
                })
            } else {
                mainh1.innerHTML = 'Web<br/> <strong> Developer </strong> 🧊'

                contato.setAttribute("src", "/assets/Contato.png")

                doc.setAttribute("src", "/assets/pdf-claro.png")

                gitimg.forEach((imagem) => {
                    imagem.setAttribute('src', '/assets/github.png')
                })

                linkedinimg.forEach((imagem) => {
                    imagem.setAttribute('src', '/assets/linkedin.png')
                })

                instaimg.forEach((imagem) => {
                    imagem.setAttribute('src', '/assets/instagram.png')
                })

                projectimg.forEach((imagem) => {
                    imagem.setAttribute("src", "./assets/project-ligth-img.png")
                })
            }


        }

        if (isCheck === "on") {
            setisCheck(strg)
            checkbox.checked = true
            classhandle()
            imghandle()
        } else {
            setisCheck(strg)
            checkbox.checked = false
            classhandle()
            imghandle()
        }


    }, [isCheck, strg])


    function setStrg() {
        if (isCheck === "off") {
            setisCheck("on")
            localStorage.setItem("Check", "on")
        } else {
            setisCheck("off")
            localStorage.setItem("Check", "off")


        }

    }

    return (
        <div className='div-modoescuro'>
            <input onClick={setStrg} className='inputclass' type='checkbox' id='checkinput' />
            <label className='labelclasse' htmlFor='checkinput' id='label'>
                <div className="ball" />
                <p className='on'>ON</p>
                <p className='off'>OFF</p>
            </label>
        </div>
    )


}

export default ModoEscuro
