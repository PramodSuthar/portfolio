import { Fade } from 'react-awesome-reveal'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <Fade direction='up' triggerOnce='true'>
      <p className='footer-link'>Made with ❤️ & React ⚛️</p>
    </Fade>

    <hr />
    <Fade direction='up' triggerOnce='true'>
      <p className='footer-link'>© Pramod Suthar</p>
    </Fade>
  </footer>
)

export default Footer
