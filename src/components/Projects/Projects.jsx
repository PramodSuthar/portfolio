import { Fade } from 'react-awesome-reveal'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const isDesktop = window.innerWidth > 768

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <Fade direction='up' triggerOnce='true'>
        <h1 className='section-title'>Projects</h1>
      </Fade>
      <div className='section-project sds'>
        <span className='projects-grid box'>
          {projects.map((project) => (
            <Fade direction='up' triggerOnce='true'>
              {isDesktop ? (
                <></>
              ) : (
                <ProjectContainer key={uniqid()} project={project} />
              )}
            </Fade>
          ))}
        </span>
      </div>
    </section>
  )
}

export default Projects
