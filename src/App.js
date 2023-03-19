import React from 'react';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  
   <BrowserRouter>
      <Routes>
        <Route path='/my-portfolio-react' element={<Home />} />
          <Route path='/my-portfolio-react/' element={<Home />} />
          <Route path="/my-portfolio-react/projects" element={<Projects />} />
          <Route path="/my-portfolio-react/contact" element={<Contact />} />
          <Route path="/my-portfolio-react/about" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
