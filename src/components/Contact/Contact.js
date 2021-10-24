import Fade from 'react-reveal/Fade'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <Fade up>
        <h2 className='section__title section-skills'>Contact</h2>
      </Fade>
      <Fade up>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
      </Fade>
    </section>
  )
}

export default Contact
