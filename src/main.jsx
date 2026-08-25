import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'
import initScrollReveal from './utils/scrollReveal'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// Initialize scroll reveal after hydration
if (typeof window !== 'undefined') {
  setTimeout(() => {
    try { initScrollReveal() } catch (e) { /* ignore */ }
  }, 120)
  // ensure reveal runs after any late renders
  setTimeout(() => {
    try { initScrollReveal() } catch (e) { /* ignore */ }
  }, 700)
}
