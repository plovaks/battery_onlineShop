import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import Catalog from './pages/CatalogPage/Catalog'
import BatteryPage from './pages/BatteryPage/BatteryPage'
function App() {
  

  return (
    <>
      <HomePage/>
      <AboutPage/>
      <Catalog/>
    </>
  )
}

export default App
