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
      <div className='about '>
        <div className='about-section'>
          {name && (
            <Fade direction='up' triggerOnce='true'>
              <div className='intro-main hi-main'>
                <Slider />
                <div className='intro-main'>
                  , I&apos;m <span className='about-name'>{name}</span>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </div>
    </>
  )
}

export default About
