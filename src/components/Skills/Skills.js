import { useContext, useState } from 'react'
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'
import { ThemeContext } from '../../contexts/theme'


const Skills = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn-skill btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
