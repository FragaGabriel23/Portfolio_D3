import './index.scss'
import imgTeste from '/img.png';

const ProjectCard = () => {
    return (
        <article className='cardProject'>
            <div className='cardProject__left'>
                <img src={imgTeste} alt="Print do Projeto" />
                <div className='cardProject__tags'>
                    <p>javascript</p>
                    <p>html</p>
                    <p>css</p>
                </div>
            </div>
            <div className='cardProject__right'>
                <h2>BeDigital</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipi.
                    Aenean et sem venenatis quam feugiat lla augue sap
                    ien, facilisis blandit purus id, facilisis tinci.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipi.
                    Aenean et sem venenatis quam feugiat lla augue sap
                    ien, facilisis blandit purus id, facilisis tinci.
                </p>
            </div>
        </article>
    )
}

export default ProjectCard