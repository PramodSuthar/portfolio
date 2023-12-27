import React from 'react'
import './Introduction.css'
import { Fade } from 'react-awesome-reveal'
import { about } from '../../portfolio'
import AnimateText from '../Animations/AnimateText'

const Introduction = () => (
  <div className='introduction'>
    <AnimateText
      className='introduction-base'
      text='Welcome to my Portfolio!'
      el='div'
    />
    <Fade direction='up' triggerOnce='true'>
      <div className='introduction-content'>{about.about}</div>
    </Fade>
  </div>
)

export default Introduction
