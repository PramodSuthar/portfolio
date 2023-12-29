import { Fade } from 'react-awesome-reveal'
import { about } from '../../portfolio'
import Slider from '../Slider/Slider'
import './About.css'
import Ghost from '../Ghost/Ghost'

const About = () => {
  const { name } = about

  return (
    <>
      <Ghost />

      <div className='about-section about center'>
        {name && (
          <Fade direction='up' triggerOnce='true'>
            <h1 className='hi-main'>
              <Slider />
              <span>
                , I&apos;m <span className='about__name'>{name}.</span>
              </span>
            </h1>
          </Fade>
        )}
      </div>
    </>
  )
}

export default About
