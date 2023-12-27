import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './AnimateText.css'

const AnimateText = ({ text, el: Wrapper = 'p', className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })
  const textArray = Array.isArray(text) ? text : [text]

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  }

  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {textArray.map((line) => (
          <span className='block'>
            {line.split(' ').map((word) => (
              <span className='inline-block'>
                {word.split('').map((char) => (
                  <motion.span
                    className='inline-block'
                    variants={defaultAnimations}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className='inline-block'>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}

export default AnimateText
