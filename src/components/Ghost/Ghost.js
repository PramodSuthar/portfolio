import React from 'react'
import './Ghost.css'

const Ghost = () => (
  <div className='ghost-start'>
    <div className='ghost-container'>
      <div className='ghost'>
        <div className='body-ghost'>
          <div className='face'>
            <div className='eyes' />
            <div className='mouth' />
          </div>
          <div className='bottom'>
            <div className='circle' />
            <div className='circle' />
            <div className='circle' />
            <div className='wave' />
          </div>
        </div>
        <div className='shadow' />
      </div>
    </div>
  </div>
)

export default Ghost
