import { Fade } from 'react-awesome-reveal'
import './Education.css'

const Education = () => (
  <div>
    <div className='main-div' id='education'>
      <div className='education-container'>
        <Fade direction='up' triggerOnce='true'>
          <h1 className='section-title'>Education</h1>
        </Fade>
        <div className='education-div'>
          <hr className='hr-blank' />
          <Fade direction='up' triggerOnce='true'>
            <h4 className='edu-sec-txt txt'>
              2019-2021 &nbsp; I.T. Programming Analyst | College Lasalle
            </h4>
          </Fade>
          <hr className='hr-blank' />
          <Fade direction='up' triggerOnce='true'>
            <h4 className='edu-sec-txt txt'>
              2016-2019 &nbsp; Bachelors in Computer Science | Gujarat
              Technological University
            </h4>
          </Fade>
          <hr className='hr-blank' />
          <Fade direction='up' triggerOnce='true'>
            <h4 className='edu-sec-txt txt'>
              2012-2015 &nbsp; Diploma in Computer Science | Gujarat
              Technological University
            </h4>
          </Fade>
          <hr className='hr-blank' />
        </div>
      </div>
    </div>
  </div>
)

export default Education
