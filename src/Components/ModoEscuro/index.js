// import './ModoEscuro.css'

// import { useState, useEffect } from 'react'

// const ModoEscuro = () => {
//     let [isCheck, setisCheck] = useState('off')

//     useEffect(() => {

//     }, [])

//     const storage = localStorage.getItem('isCheck') ? localStorage.getItem('isCheck') : localStorage.setItem('isCheck', isCheck)

//     useEffect(() => {
//         const checkbox = document.querySelector('#checkinput')
//         if (storage === "on") {
//             checkbox.checked = true
//         } if (storage === "off") {
//             checkbox.checked = false
//         }

//     }, [storage])


//     const classhandle = () => {

//         const headerid = document.querySelector('#headerid')
//         const layoutmain = document.querySelector('#layout-main')
//         const textlayout = document.querySelector('#txtlayout')
//         const sectionprojetos = document.querySelector('#section-projetos')
//         const section2 = document.querySelector('#section-sobre')
//         const botaodark = document.querySelector('#label')
//         const projects = document.querySelectorAll('.projects')



//         if (storage === "off") {
//             const array = [
//                 headerid,
//                 layoutmain,
//                 textlayout,
//                 sectionprojetos,
//                 section2,
//                 botaodark,
//             ]

//             for (let index = 0; index < array.length; index++) {
//                 const element = array[index];
//                 element.classList.add('dark')
//                 console.log(`o ${element} ficou escuro`)
//             }

//             projects.forEach(element => {
//                 element.classList.add('dark')
//             });

//         } else {
//             const array = [
//                 headerid,
//                 layoutmain,
//                 textlayout,
//                 sectionprojetos,
//                 section2,
//                 botaodark,

//             ]

//             for (let index = 0; index < array.length; index++) {
//                 const element = array[index];
//                 element.classList.remove('dark')
//                 console.log(`o ${element} ficou claro`)
//             }

//             projects.forEach((element) => {
//                 element.classList.remove('dark')
//             })
//         }



//     }


//     const textimghandling = () => {
//         const mainh1 = document.querySelector('#h1html')
//         const gitimg = document.querySelectorAll('#gitimg')
//         const instaimg = document.querySelector('#instaimg')
//         const linkedinimg = document.querySelector('#linkedinimg')

//         if (storage === "on") {
//             mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 🔥'
//             instaimg.setAttribute('src', '/assets/instagramdark.png')
//             linkedinimg.setAttribute('src', '/assets/linkedindark.png')
//             gitimg.forEach((imagem) => {
//                 imagem.setAttribute('src', '/assets/githubdark.png')
//             })
//         } else {
//             mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 💧'
//             instaimg.setAttribute('src', '/assets/instagram.png')
//             linkedinimg.setAttribute('src', '/assets/linkedin.png')
//             gitimg.forEach((imagem) => {
//                 imagem.setAttribute('src', '/assets/github.png')
//             })
//         }
//     }

//     function callfn() {
//         const checkbox = document.querySelector('#checkinput')
//         setisCheck(() => {
//             if (checkbox.checked === true) {
//                 setisCheck(() => {
//                     isCheck = 'on'
//                     localStorage.setItem('isCheck', isCheck)
//                 })
//             } else {
//                 setisCheck(() => {
//                     isCheck = 'off'
//                     localStorage.setItem('isCheck', isCheck)
//                 })
//             }
//         })
//         classhandle()
//     }


//     return (
//         <div className='div-modoescuro'>
//             <input onChange={callfn} className='inputclass' type='checkbox' id='checkinput' />
//             <label className='labelclasse' htmlFor='checkinput' id='label'>
//                 <div className="ball"></div>
//             </label>
//         </div>
//     )


// }

// export default ModoEscuro

import './ModoEscuro.css';
import { useState, useEffect } from 'react';

const ModoEscuro = () => {
    let [isCheck, setisCheck] = useState(localStorage.getItem('isCheck') === 'on');

    useEffect(() => {
        if (isCheck === "on") {
            classhandle()
            textimghandling()
        } else {
            classhandle()
            textimghandling()
        }
    }, []);

    useEffect(() => {
        const checkbox = document.querySelector('#checkinput');
        if (localStorage.getItem('isCheck') === 'on') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    }, []);

    const classhandle = () => {
                const checkbox = document.querySelector("#checkinput")
                const headerid = document.querySelector('#headerid')
                const layoutmain = document.querySelector('#layout-main')
                const textlayout = document.querySelector('#txtlayout')
                const sectionprojetos = document.querySelector('#section-projetos')
                const section2 = document.querySelector('#section-sobre')
                const botaodark = document.querySelector('#label')
                const projects = document.querySelectorAll('.projects')
        
        
        
                if (checkbox.checked === true) {
                    const array = [
                        headerid,
                        layoutmain,
                        textlayout,
                        sectionprojetos,
                        section2,
                        botaodark,
                    ]
        
                    for (let index = 0; index < array.length; index++) {
                        const element = array[index];
                        element.classList.add('dark')
                        console.log(`o ${element} ficou escuro`)
                    }
        
                    projects.forEach(element => {
                        element.classList.add('dark')
                    });
        
                } else {
                    const array = [
                        headerid,
                        layoutmain,
                        textlayout,
                        sectionprojetos,
                        section2,
                        botaodark,
        
                    ]
        
                    for (let index = 0; index < array.length; index++) {
                        const element = array[index];
                        element.classList.remove('dark')
                        console.log(`o ${element} ficou claro`)
                    }
        
                    projects.forEach((element) => {
                        element.classList.remove('dark')
                    })
                }
    };

    const textimghandling = () => {
                const checkbox = document.querySelector("#checkinput")
                const mainh1 = document.querySelector('#h1html')
                const gitimg = document.querySelectorAll('#gitimg')
                const instaimg = document.querySelector('#instaimg')
                const linkedinimg = document.querySelector('#linkedinimg')
        
                if (checkbox.checked === true) {
                    mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 🔥'
                    instaimg.setAttribute('src', '/assets/instagramdark.png')
                    linkedinimg.setAttribute('src', '/assets/linkedindark.png')
                    gitimg.forEach((imagem) => {
                        imagem.setAttribute('src', '/assets/githubdark.png')
                    })
                } else {
                    mainh1.innerHTML = 'Front-End<br/> <strong> Developer </strong> 💧'
                    instaimg.setAttribute('src', '/assets/instagram.png')
                    linkedinimg.setAttribute('src', '/assets/linkedin.png')
                    gitimg.forEach((imagem) => {
                        imagem.setAttribute('src', '/assets/github.png')
                    })
                }
    };

    function callfn() {
        const checkbox = document.querySelector('#checkinput');
        setisCheck(() => {
            const isCheck = checkbox.checked ? 'on' : 'off';
            localStorage.setItem('isCheck', isCheck);
            return checkbox.checked;
        });
        classhandle();
        textimghandling();
    }

    return (
        <div className='div-modoescuro'>
            <input onChange={callfn} className='inputclass' type='checkbox' id='checkinput' />
            <label className='labelclasse' htmlFor='checkinput' id='label'>
                <div className="ball"></div>
            </label>
        </div>
    );
};

export default ModoEscuro;