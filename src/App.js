import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from "./pages/home/Home.js";
import Services from './pages/Services';

const App = () => {
  return (
    <>
     <Router>
     <Routes>
     <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>
     </Routes>
     </Router>
    </>
  )
}

export default App