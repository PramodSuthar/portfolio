import React from 'react'
import { createRoot } from 'react-dom'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
