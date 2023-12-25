import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project '>
    <div className='project-top-section'>
      <h3 className='box'>{project.name}</h3>
      <p className='project__description'>{project.description}</p>
    </div>
    {(project.sourceCode || project.livePreview || project.stack) && (
      <div className='projects-bottom-bar'>
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item box'>
              {item}
            </li>
          ))}
        </ul>
        <div className='project-buttons'>
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon socials-icon social-icon-git'
            >
              <GitHubIcon />
            </a>
          )}
          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
              className='link link--icon socials-icon social-icon-preview'
            >
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>
    )}
  </div>
)

export default ProjectContainer
