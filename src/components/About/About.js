/* eslint-disable react/self-closing-comp */
import { Fade } from 'react-awesome-reveal'
import { about } from '../../portfolio'
import Slider from '../Slider/Slider'
import './About.css'

const About = () => {
  const { name, description } = about

  return (
    <div>
      <div className='ghost-start'>
        <div className='ghost-container'>
          <div className='ghost'>
            <div className='body-ghost'>
              <div className='face'>
                <div className='eyes'></div>
                <div className='mouth'></div>
              </div>
              <div className='bottom'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='wave'></div>
              </div>
            </div>
            <div className='shadow'></div>
          </div>
        </div>
      </div>
      <div className='about center '>
        <div className='about-section'>
          {name && (
            <Fade direction='up' triggerOnce='true'>
              <h1 className='hi-main'>
                <Slider />,
                <div className='intro-main'>
                  I&apos;m <span className='about__name'>{name}.</span>
                </div>
              </h1>
            </Fade>
          )}
        </div>
        <Fade direction='up' triggerOnce='true'>
          <div className='about__desc'>
            <span>{description}</span>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default About
