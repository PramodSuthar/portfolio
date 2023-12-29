import { Fade } from 'react-awesome-reveal'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <Fade direction='up' triggerOnce='true'>
        <h2 className='section-title section-skills'>Contact</h2>
      </Fade>
      <Fade direction='up' triggerOnce='true'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline email-me'>
            Send me an Email!
          </span>
        </a>
      </Fade>
    </section>
  )
}

export default Contact
