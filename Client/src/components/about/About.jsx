import style from './About.module.css';

const About = () => {
    return (
        <div className={style.about}>
            <h2 className={style.hola}>My Info</h2>
            <h4 className={style.hola}>Full Stack Devloper!!</h4>
            <p className={style.p}><a href="https://mailto:giancarlogravagnatrabajo@gmail.com" target='_blank'><h3 className={style.hola}>Gmail</h3></a></p>
            <p className={style.p}><a href="https://www.linkedin.com/in/giancarlo-gravagna-19269926a/" target='_blank'><h3 className={style.hola}>Linkedin</h3></a></p>
            <p className={style.p}><a href="https://github.com/GianGrav?tab=repositories" target='_blank'><h3 className={style.hola}>Github</h3></a></p>
        </div>
    )
}


export default About;