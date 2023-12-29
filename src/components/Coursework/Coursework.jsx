import React from 'react'
import { Fade } from 'react-awesome-reveal'
import uniqid from 'uniqid'
import { coursework } from '../../portfolio'
import './Coursework.css'

const Coursework = () => (
  <div className='course-div' id='coursework'>
    <div className='coursework-div'>
      <Fade direction='up' triggerOnce='true'>
        <h1 className='section-title'>Coursework</h1>
      </Fade>
    </div>

    <div className='coursework-div'>
      {coursework.map((course) => (
        <h3 key={uniqid()} className='course-div-list skills-list-item'>
          <Fade direction='up' triggerOnce='true'>
            {course}
          </Fade>
        </h3>
      ))}
    </div>
  </div>
)

export default Coursework
