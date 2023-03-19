import React from 'react';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  
   <HashRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
         </Routes>
      </div>
    </HashRouter>
  
  );
}

export default App;
