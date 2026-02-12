import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/fonts.css'
import App from './App.jsx'
import Preloader from './components/common/Preloader'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Preloader>
        <App />
      </Preloader>      
    </BrowserRouter>    
  </StrictMode>,
)
