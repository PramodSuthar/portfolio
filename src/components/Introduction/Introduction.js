import React from 'react'
import './Introduction.css'
import { about } from '../../portfolio'
import AnimateText from '../Animations/AnimateText'
import SvgAnimations from '../SvgAnimations/SvgAnimations'

const Introduction = () => (
  <div className='introduction'>
    <div>
      <AnimateText
        className='introduction-base'
        text='Welcome to my Portfolio!'
      />
      <div className='introduction-content'>{about.about}</div>
    </div>
  </div>
)

export default Introduction
