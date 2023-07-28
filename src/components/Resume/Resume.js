import Fade from 'react-reveal/Fade'
import { FaFilePdf } from 'react-icons/fa'
import './Resume.css'
import pdf from '../../assets/Pramod_Suthar_Resume.pdf'

const Resume = () => (
  <div className='main-div' id='skill'>
    <div className='resume-flex d-inline-flex p-2 container justify-content-around wrap'>
      <div className='p-2'>
        <Fade up>
          <h1 className='resume-h1'>Resume</h1>
        </Fade>
      </div>
      <div className='p-2 c2'>
        <Fade up>
          <button type='button'>
            <a
              href={pdf}
              target='_blank'
              rel='noopener noreferrer'
              className='resume-icon'
            >
              <FaFilePdf size={70} />
            </a>
          </button>
        </Fade>
      </div>
    </div>
  </div>
)

export default Resume
