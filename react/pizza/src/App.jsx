import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Menu from './components/menu/Menu'
import Deals from './components/deals/Deals'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
