import { useContext, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import LightModeIcon from '@mui/icons-material/LightMode'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import MarioMushroom from '../../assets/svgs/MarioMushroom'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme, toggleRandomTheme }] =
    useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav-list nav-list-toggle'
      >
        {contact.email ? (
          <li className='nav-list-item'>
            <a
              href='#education'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              education
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav-list-item'>
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
          <li className='nav-list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav-list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              skills
            </a>
          </li>
        ) : null}

        {/* {skills.length ? (
          <li className='nav-list-item'>
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
          <li className='nav-list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav navbar-link'
            >
              contact
            </a>
          </li>
        ) : null}

        <button type='button' className='btn--icon nav-list-item'>
          <a
            className='btn-navbar-social'
            href='https://www.twitter.com/Prmd96'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon />
          </a>
        </button>
        <button type='button' className='btn--icon nav-list-item '>
          <a
            className='btn-navbar-social'
            href='https://www.github.com/PramodSuthar'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
          </a>
        </button>

        <button type='button' className=' btn--icon nav-list-item'>
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
        className=' btn--icon nav-theme nav-list-item'
        aria-label='toggle theme'
      >
        {themeName.includes('dark') ? <LightModeIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleRandomTheme}
        aria-label='toggle random theme'
        className='btn--icon nav-theme nav-list-item'
      >
        <MarioMushroom />
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav-hamburger nav-list-item btn-toggle '
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
