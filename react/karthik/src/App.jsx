
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Components from './components/components/Component'
import Hero from './components/hero/Hero'
import Card from './components/card/Card'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Card />} />
        <Route path="/contact" element={<Footer />} />
        
      </Routes>
      </Router>
      
    </>
  )
}

export default App
