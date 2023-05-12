import style from './About.module.css';

const About = () => {
    return (
        <div className={style.about}>
            <h2 className={style.hola}>Mas sobre mi</h2>
            <h4 className={style.hola}>en proceso de ser programador</h4>
            <p className={style.p}><a href=""><h3 className={style.hola}>Gmail</h3></a></p>
            <p className={style.p}><a href=""><h3 className={style.hola}>Linkedin</h3></a></p>
            <p className={style.p}><a href=""><h3 className={style.hola}>Github</h3></a></p>
            <p className={style.p}><a href=""><h3 className={style.hola}>Instagram</h3></a></p>
            <br />
            <img className={style.ph} src="yo.jpg" alt="" />

        </div>
    )
}


export default About;