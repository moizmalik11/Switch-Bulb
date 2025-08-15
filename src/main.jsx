import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import BulbSwitch from './BulbSwitch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BulbSwitch/>
      </StrictMode>,
)
console.log("BulbSwitch component rendered successfully.");