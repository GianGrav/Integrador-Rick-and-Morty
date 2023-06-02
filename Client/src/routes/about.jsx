import yo from '../utils/yo.jpg'
import style from './about.module.css'

const About = () => {
    return (
        <div className={style.about}>

            <a href="https://www.linkedin.com/in/giancarlo-gravagna-19269926a/" target="_blank" rel="noreferrer" class={style.buttonLinkedin}><button>Linkedin</button></a>
            <a href="https://github.com/GianGrav" target="_blank" rel="noreferrer" class={style.buttonGithub}><button>GitHub</button></a>
            <img className={style.portrait} src={yo} alt='Foto del autor del proyecto: Carlos Rojas' />

            <div className={style.container}>
                <div className={style.box}>
                    <span className={style.title}>Giancarlo Gravagna</span>
                    <div>
                        <strong>RICK Y MORTY APP</strong>
                        <p>Proyecto Integrador</p>
                        <span></span> <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;




// <div className={style.about}>

// <a href="https://www.linkedin.com/in/giancarlo-gravagna-19269926a/" target="_blank" rel="noreferrer" class={style.buttonLinkedin}><button>Linkedin</button></a>
// <a href="https://github.com/GianGrav" target="_blank" rel="noreferrer" class={style.buttonGithub}><button>GitHub</button></a>
// <img className={style.portrait} src={yo} alt='Foto del autor del proyecto: Carlos Rojas' />

// <div className={style.container}>
//     <div className={style.box}>
//         <span className={style.title}>Giancarlo Gravagna</span>
//         <div>
//             <strong>RICK Y MORTY APP</strong>
//             <p>Proyecto Integrador</p>
//             <span></span> <span></span>
//         </div>
//     </div>
// </div>
// </div>
