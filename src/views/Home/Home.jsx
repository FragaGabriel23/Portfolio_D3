import ProjectCard from '../../components/Projects/ProjectCard'
import './index.scss'

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
                        <li><a href="">contato</a></li>
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
            </section>
        </>
    )
}

export default Home