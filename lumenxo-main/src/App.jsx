import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactUs from './pages/ContactMainpage';
import AboutUs from './components/AboutUs';
import BookNow from './pages/BookNow';
import FloatingContacts from './pages/FloatingContacts';
import Careers from './pages/careers';
import CallbackModal from './components/CallbackModal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApplyNow from "./pages/ApplyNow"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/BookNow" element={<BookNow />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/ApplyNow" element={<ApplyNow />} />
      </Routes>

      <FloatingContacts />
      <CallbackModal /> 
    </BrowserRouter>
  );
}

export default App;
