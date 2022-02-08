import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list nav-list-toggle'
      >
        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#education'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              Education
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#coursework'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              coursework
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              Skills
            </a>
          </li>
        ) : null}

        {/* {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              Resume
            </a>
          </li>
        ) : null} */}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              Contact
            </a>
          </li>
        ) : null}

        <button type='button' className='btn--icon nav__list-item'>
          <a
            className='btn-navbar-social'
            href='https://www.twitter.com/Prmd96'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon />
          </a>
        </button>
        <button type='button' className='btn--icon nav__list-item '>
          <a
            className='btn-navbar-social'
            href='https://www.github.com/PramodSuthar'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
          </a>
        </button>

        <button type='button' className=' btn--icon nav__list-item'>
          <a
            className='btn-navbar-social'
            href='https://www.linkedin.com/in/pramodsuthar/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </a>
        </button>
      </ul>
      <button
        type='button'
        onClick={toggleTheme}
        className=' btn--icon nav__theme nav__list-item'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger nav__list-item btn-toggle '
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
