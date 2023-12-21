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
import SmoothScroll from './components/SmoothScroll/SmoothScroll'

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <motion.div className='progress-bar' style={{ scaleX }} />
      <SmoothScroll>
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
      </SmoothScroll>
      <ScrollToTop />
    </div>
  )
}

export default App
