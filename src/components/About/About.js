import Fade from 'react-reveal/Fade'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume } = about

  return (

    <div className='about center'>
      {name && (
        <Fade up>
          <h1 className='hi-main'>
            Hi, I am <span className='about__name'>{name}.</span>
          </h1>
        </Fade>
      )}
      <Fade up>
        <span className='about__desc'>{description && description}</span>
      </Fade>
    </div>
  )
}

export default About
