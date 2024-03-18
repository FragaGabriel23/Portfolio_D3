import './index.scss'

const Home = () => {
    return (
        <header className='header'>
            <div className="header__logo">
                <p>DNC</p>
            </div>
            <main className='header__main'>

                <ul className='header__navBar'>
                    <li><a href="">home</a></li>
                    <li><a href="">projetos</a></li>
                    <li><a href="">sobre mim</a></li>
                    <li><a href="">contato</a></li>
                </ul>

                <div className='header__text'>
                    <h1> front-end.web(developer) </h1>
                </div>

            </main>
        </header>
    )
}

export default Home