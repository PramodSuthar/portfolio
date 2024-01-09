import { useContext } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import './App.css'
import Introduction from './components/Introduction/Introduction'
import Coursework from './components/Coursework/Coursework'

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [{ themeName }] = useContext(ThemeContext)

  const isDesktop = window.innerWidth > 768

  const mainContent = (
    <>
      <Header />
      <main>
        <About />
        <Introduction />
        <Coursework />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )

  return (
    <div id='top' className={`${themeName} app`}>
      {isDesktop ? (
        <>
          <motion.div className='progress-bar' style={{ scaleX }} />
          {mainContent}
        </>
      ) : (
        mainContent
      )}
      <ScrollToTop />
    </div>
  )
}

export default App
