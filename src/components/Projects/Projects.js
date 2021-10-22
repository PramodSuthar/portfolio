import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (

    <section id='projects' className='section projects'>
      <h2 className='title'>Projects</h2>
      <div className='section-project sds'>
        <span className='projects__grid box'>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </span>
      </div>
    </section>

  )
}

export default Projects
