import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import bridge from '@vkontakte/vk-bridge';


if (typeof bridge.send !== 'function' && bridge.default) {
    bridge.default.send("VKWebAppInit");
} else {
    bridge.send("VKWebAppInit");
}
    
    createRoot(document.getElementById('root')).render(
      
        <HashRouter>
           <App />
        </HashRouter>
       
         
       
      
    );

  