import ProjectCard from '../../components/Projects/ProjectCard'
import Foto from '/foto.jpeg'
import './index.scss'
import { iconTools1, iconTools2, iconTools3, iconTools4 } from '../../assets/Icons/Tools';
import { gmailIcon, githubIcon, figmaIcon, dribbbleIcon, linkedinIcon } from '../../assets/Icons/Contact';


const Home = () => {
    return (
        <>
            <header id='Home' className='header'>
                <div className="header__logo">
                    <p>DNC</p>
                </div>
                <main className='header__main'>
                    <ul className='header__navBar'>
                        <li><a href="#Home">home</a></li>
                        <li><a href="#Projects">projetos</a></li>
                        <li><a href="#About">sobre mim</a></li>
                        <li><a href="#Contact">contato</a></li>
                    </ul>
                    <div className='header__text'>
                        <h1> front-end.web(developer) </h1>
                    </div>
                </main>
            </header>
            <section id='Projects' className="projects">
                <div className="projects__title">
                    <h1>Projetos</h1>
                    <hr />
                </div>
                <div className="projects__container">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </section>
            <section id='About' className='about'>
                <div className="about__title">
                    <h1>Sobre mim</h1>
                    <hr />
                </div>
                <article className="about__presentation">
                    <img src={Foto} alt="Foto" />
                    <aside>
                        <h1>Gabriel Fraga</h1>
                        <p>
                            Olá! Sou especializado em criar experiências digitais memoráveis, garantindo atenção aos detalhes desde os layouts até a otimização do desempenho. Com experiência em desenvolvimento, estou preparado para enfrentar desafios e contribuir para projetos inovadores. Vamos trabalhar juntos?
                        </p>
                        <div className='about__contact'>
                            <a href="https://www.linkedin.com/in/gabriel-fraga-1a8099109/" target='_blank'>LINKEDIN</a>
                            <a href="https://github.com/FragaGabriel23/" target='_blank'>GITHUB</a>
                            <a href="mailto:gabrielfraga2308@gmail.com" target='_blank'>EMAIL</a>
                        </div>
                    </aside>
                </article>
                <article className="about__tools">
                    <div className="about__cardTools">
                        <div className="about__iconContainer">
                            <img src={iconTools1} alt="" />
                        </div>
                        <hr />
                        <div className="about__textContainer">
                            <h2>Interface & Design</h2>
                            <p>Briefing, wireframe, UX, UI and branding.</p>
                        </div>
                    </div>
                    <div className="about__cardTools">
                        <div className="about__iconContainer">
                            <img src={iconTools2} alt="" />
                        </div>
                        <hr />
                        <div className="about__textContainer">
                            <h2>html & css</h2>
                            <p>Responsive websites with fast loading.</p>
                        </div>
                    </div>
                    <div className="about__cardTools">
                        <div className="about__iconContainer">
                            <img src={iconTools3} alt="" />
                        </div>
                        <hr />
                        <div className="about__textContainer">
                            <h2>Node.js</h2>
                            <p>Build your system with node.js.</p>
                        </div>
                    </div>
                    <div className="about__cardTools">
                        <div className="about__iconContainer">
                            <img src={iconTools4} alt="" />
                        </div>
                        <hr />
                        <div className="about__textContainer">
                            <h2>React.js</h2>
                            <p>Create your e-commerce or blog with React.js.</p>
                        </div>
                    </div>
                </article>
                <article className="about__experience">
                    <div className="about__experienceCard">
                        <hr />
                        <div className="about__experienceList">
                            <ul>
                                <li><b>I've had experiences with</b></li>
                                <li>Firebase Database</li>
                                <li>MySQL Database</li>
                                <li>GIT, GitHub, Bitbucket</li>
                                <li>Coding PHP</li>
                                <li>Figma, Adobe XD, Sketch</li>
                                <li>CSS Preprocessors</li>
                                <li>Digital Marketing</li>
                                <li>Coding Python (Django)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about__experienceCard">
                        <hr />
                        <div className="about__experienceList">
                            <ul>
                                <li><b>I have years of experience with</b></li>
                                <li>Coding HTML5</li>
                                <li>Coding CSS3</li>
                                <li>Coding WordPress</li>
                                <li>Coding JavaScript</li>
                                <li>Using Elementor</li>
                                <li>Using Adobe Package</li>
                                <li>Creating Brand and Logo</li>
                                <li>Creating User Interface</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about__experienceCard">
                        <hr />
                        <div className="about__experienceList">
                            <ul>
                                <li><b>I work and study about</b></li>
                                <li>Coding React.js</li>
                                <li>Coding CSS3</li>
                                <li>Coding JavaScript</li>
                                <li>Coding TypeScript</li>
                                <li>Studying Node.js basics</li>
                                <li>Studying API RESTful</li>
                                <li>Studying User Experience</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <footer id='Contact' className='contact'>
                    <div className="contact__title">
                        <h1>Contato</h1>
                    </div>
                    <div className="contact__icons">
                        <a href="https://www.figma.com/@GabrielFragaDEV" target='_blank'>
                            <img src={figmaIcon} alt="Figma Icone" />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-fraga-1a8099109/" target='_blank'>
                            <img src={linkedinIcon} alt="Linkedin Icone" />
                        </a>
                        <a href="mailto:gabrielfraga2308@gmail.com" target='_blank'>
                            <img src={gmailIcon} alt="Gmail Icone" />
                        </a>
                        <a href="https://github.com/FragaGabriel23/" target='_blank'>
                            <img src={githubIcon} alt="Github Icone" />
                        </a>
                        <a href="https://dribbble.com/FragaGabriel23" target='_blank'>
                            <img src={dribbbleIcon} alt="dribbble Icone" />
                        </a>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Home