import { useContext, useState } from 'react'
import Fade from 'react-reveal/Fade'
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'


const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <Fade up>
        <h2 className='section__title section-skills'>Skills</h2>
      </Fade>
      <ul className='skills__list'>
        <Fade up>
          {skills.map((skill) => (
            <Fade up>
              <li key={uniqid()} className='skills__list-item btn-skill btn btn--plain'>
                {skill}
              </li>
            </Fade>
          ))}
        </Fade>
      </ul>
    </section>
  )
}

export default Skills
