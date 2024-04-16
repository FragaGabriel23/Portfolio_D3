import './index.scss'

const ProjectCard = ({ Project }) => {
    return (
        < article className='cardProject' >
            <div className='cardProject__left'>
                <a href={Project.link} target='_blank'>
                    <img src={Project.img} alt="Print do Projeto" />
                </a>
                <div className='cardProject__tags'>
                    {Project.tools.map((tool, i) => (<p key={i}>{tool}</p>))}
                </div>
            </div>
            <div className='cardProject__right'>
                <h2>{Project.title}</h2>
                <p>{Project.description}</p>
            </div>
        </article >
    )
}

export default ProjectCard