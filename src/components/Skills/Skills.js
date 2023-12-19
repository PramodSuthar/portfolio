import { Fade } from 'react-awesome-reveal'
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <Fade direction='up' triggerOnce='true'>
        <h2 className='section-title section-skills'>Skills</h2>
      </Fade>
      <ul className='skills__list'>
        <Fade direction='up' triggerOnce='true'>
          {skills.map((skill) => (
            <Fade direction='up' triggerOnce='true'>
              <li
                key={uniqid()}
                className='skills__list-item btn-skill btn btn--plain'
              >
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
