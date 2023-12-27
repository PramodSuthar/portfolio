import React from 'react'
import './Introduction.css'
import { about } from '../../portfolio'
import AnimateText from '../Animations/AnimateText'

const Introduction = () => (
  <div className='introduction'>
    <AnimateText
      className='introduction-base'
      text='Welcome to my Portfolio!'
      el='div'
    />
    <div className='introduction-content'>{about.about}</div>
  </div>
)

export default Introduction
