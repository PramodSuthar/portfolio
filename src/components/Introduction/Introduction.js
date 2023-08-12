import React from 'react'
import { Fade } from 'react-awesome-reveal'
import './Introduction.css'

const Introduction = () => (
  <div className='introduction'>
    <Fade direction='up' triggerOnce='true'>
      <div>
        {/* className='introduction-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
       */}
        <span className='introduction-base'>Welcome to my portfolio! </span>
        <span className='introduction-content'>
          I am a full stack developer with a passion for creating beautiful and
          functional websites. I am currently working in a startup named
          Creator.co, which is based in Vancouver, Canada. I&apos;m a huge
          Football⚽fan and in my free time, I like to play video games🎮, watch
          movies🎦and read books📚(mostly non fiction and self improvement). If
          that&apos;s your thing too, feel free to reach out to me!
        </span>
      </div>
    </Fade>
  </div>
)

export default Introduction
