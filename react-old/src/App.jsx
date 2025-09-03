import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactUs from './pages/ContactMainpage'; 
import AboutUs from './components/AboutUs';
import BookNow from './pages/BookNow';
import FloatingContacts from './pages/FloatingContacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path='/BookNow' element={<BookNow />} />
      
      </Routes>
      
      <FloatingContacts />
    </BrowserRouter>
  );
}

export default App;
