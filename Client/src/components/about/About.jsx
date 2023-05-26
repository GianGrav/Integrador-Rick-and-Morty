import style from './About.module.css';

const About = () => {
    return (
        <div className={style.about}>
            <h2 className={style.hola}>Mas sobre mi</h2>
            <h4 className={style.hola}>Full Stack Developer</h4>
            <a href=""><h3 className={style.hola}>Gmail</h3></a>
            <a href="https://www.linkedin.com/in/giancarlo-gravagna-19269926a/"><h3 className={style.hola}>Linkedin</h3></a>
            <a href="https://github.com/GianGrav"><h3 className={style.hola}>Github</h3></a>
        </div>
    )
}


export default About;