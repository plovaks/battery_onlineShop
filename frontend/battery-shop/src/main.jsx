import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import bridge from '@vkontakte/vk-bridge'
import './index.css'
import App from './App.jsx'

bridge.send("VKWebAppInit");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/battery_onlineShop'>
      <App />
    </BrowserRouter>
   
  </StrictMode>,
)
