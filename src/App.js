import React from 'react';

import Home from './pages/Home';
import Projects from './pages/ProjectGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
