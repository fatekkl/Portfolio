import "./Footer.css"


const Footer = () => {
    return (
        <footer>
            <img className="dev-img" src="./assets/dev.png" alt="dev"/>
            <div className="container-h1">
                <h1>2024 © Matheus Oliveira. Todos os direitos reservados.</h1>
            </div>
            <div className="div-socials">
                <h1>Social</h1>
                <div id="footer-social" className="div-social-img">
                    <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/fatekkl/" ><img id='linkedinimg' alt="linkedin" src="/assets/linkedin.png" /><p>Linkedin</p></a>
                    <a target="_blank" rel='noopener noreferrer' href="https://github.com/fatekkl" ><img id='gitimg' alt="github" src="/assets/github.png" /><p>Github</p></a>
                    <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/matheuskdask"><img id='instaimg' alt="instagram" src="/assets/instagram.png" /><p>Instagram</p></a>
                </div>
            </div>
        </footer>
    )
}


export default Footer