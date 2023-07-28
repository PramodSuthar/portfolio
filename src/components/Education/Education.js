import Fade from 'react-reveal/Fade'
import uniqid from 'uniqid'
import { coursework } from '../../portfolio'
import './Education.css'

const Education = () => (
  <div>
    <div className='main-div' id='education'>
      <div className='c1 d-inline-flex p-2 container justify-content-around wrap'>
        <div className='p-2'>
          <Fade up>
            <h1 className='edu-sec-txt'>Education</h1>
          </Fade>
        </div>
        <div className='p-2'>
          <hr className='hr-blank' />
          <Fade up>
            <h4 className='edu-sec-txt txt'>
              2019-2021 &nbsp; I.T. Programming Analyst | College Lasalle
            </h4>
          </Fade>
          <hr className='hr-blank' />
          <Fade up>
            <h4 className='edu-sec-txt txt'>
              2016-2019 &nbsp; B.S. in Computer Science | Gujarat Technological
              University
            </h4>
          </Fade>
          <hr className='hr-blank' />
          <Fade up>
            <h4 className='edu-sec-txt txt'>
              2012-2015 &nbsp; Diploma in Computer Science | Gujarat
              Technological University
            </h4>
          </Fade>
          <hr className='hr-blank' />
        </div>
      </div>
    </div>

    <div className='course-div' id='coursework'>
      <div className='c1 d-inline-flex p-2 container justify-content-around wrap'>
        <div className='p-2'>
          <Fade up>
            <h1 className='course-div'>Coursework</h1>
          </Fade>
        </div>

        <div className='p-2'>
          {coursework.map((course) => (
            <h3
              key={uniqid()}
              className='course-div-list skills__list-item  m-4 '
            >
              <Fade up>{course}</Fade>
            </h3>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Education
