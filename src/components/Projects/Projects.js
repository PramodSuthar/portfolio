import Fade from 'react-reveal/Fade'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (

    <section id='projects' className='section projects'>
      <Fade up>
        <h1 className='title'>Projects</h1>
      </Fade>
      <div className='section-project sds'>
        <span className='projects__grid box'>
          {projects.map((project) => (
            <Fade up>
              <ProjectContainer key={uniqid()} project={project} />
            </Fade>
          ))}
        </span>
      </div>
    </section>

  )
}

export default Projects
