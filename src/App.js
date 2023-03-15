import React from 'react';
import Contact from './Components/Contact';
import Gallery from './Components/ProjectGallery';
import Home from './Components/Home';
import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
