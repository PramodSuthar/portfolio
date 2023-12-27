import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title, firstName, lastName } = header

  return (
    <header className='header end' id='home'>
      <h2 className='header-name'>
        {homepage ? (
          <a className='header-flex link' href={homepage}>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </a>
        ) : (
          title
        )}
      </h2>
      <Navbar />
    </header>
  )
}

export default Header
