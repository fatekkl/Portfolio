import "./Footer.css"


const Footer = () => {
    return (
        <>
            <footer>
                <div className="div-socials">
                    <h1>Social</h1>
                    <div className="div-social-img">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/fatekkl/" ><img alt="linkedin" src="/assets/linkedin.png" /><p>Linkedin</p></a>
                        <a target="_blank" rel='noopener noreferrer' href="https://github.com/fatekkl" ><img alt="github" src="/assets/github.png" /><p>Github</p></a>
                        <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/matheuskdask"><img alt="instagram" src="/assets/instagram.png" /><p>Instagram</p></a>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer