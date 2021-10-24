import Fade from 'react-reveal/Fade'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <Fade up>
      <p className='footer__link'>
        Made with ❤️
      </p>
    </Fade>

    <hr />
    <Fade up>
      <p className='footer__link'>
        © Pramod Suthar
      </p>
    </Fade>

  </footer>
)

export default Footer
