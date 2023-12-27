import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    const isDark =
      localStorage.getItem('themeName') === 'dark' ? 'dark' : 'light'
    if (isDark) setThemeName('dark')
  }, [])

  const toggleTheme = () => {
    const name = themeName.includes('dark') ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  const toggleRandomTheme = () => {
    const themeOptions = themeName.includes('dark')
      ? ['dark', 'dark-1', 'dark-2', 'dark-3', 'dark-4']
      : ['light', 'light-1', 'light-2', 'light-3', 'light-4']

    // Retrieve the used options from local storage or initialize an empty array
    const usedOptions = JSON.parse(localStorage.getItem('usedOptions')) || []

    // If all options have been used, reshuffle the array
    if (usedOptions.length === themeOptions.length) {
      themeOptions.sort(() => Math.random() - 0.5)
      usedOptions.length = 0 // Reset used options
    }

    // Find the first unused option
    let name
    do {
      name = themeOptions.pop()
    } while (usedOptions.includes(name))

    // Update used options and the theme
    usedOptions.push(name)
    localStorage.setItem('usedOptions', JSON.stringify(usedOptions))
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider
      value={[{ themeName, toggleTheme, toggleRandomTheme }]}
    >
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
