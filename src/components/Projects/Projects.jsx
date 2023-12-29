/* eslint-disable import/order */
import { Fade } from 'react-awesome-reveal'
import uniqid from 'uniqid'
import Carousel from 'react-material-ui-carousel'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const isDesktop = window.innerWidth > 500

const Projects = () => {
  if (!projects.length) return null

  const projectsArray = () => (
    <span className='projects-grid box'>
      {isDesktop ? (
        projects.map((project) => (
          <Fade direction='up' triggerOnce='true'>
            <ProjectContainer key={uniqid()} project={project} />
          </Fade>
        ))
      ) : (
        <Carousel
          navButtonsAlwaysVisible
          PrevIcon={<NavigateBeforeIcon />}
          NextIcon={<NavigateNextIcon />}
          height='500px'
        >
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </Carousel>
      )}
    </span>
  )

  return (
    <section id='projects' className='section projects'>
      <Fade direction='up' triggerOnce='true'>
        <h1 className='section-title'>Projects</h1>
      </Fade>
      <div className='section-project sds'>{projectsArray()}</div>
    </section>
  )
}

export default Projects
