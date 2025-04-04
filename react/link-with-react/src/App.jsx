import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from './components/service/service.jsx';
import Contact from './components/contact/Contact.jsx';
import About from './components/about/About.jsx';
import Navbar from './components/navbar/Navbar.jsx';
function App() {
  return (
    <>
      
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
     
     
     
       
    </>
  )
}

export default App;