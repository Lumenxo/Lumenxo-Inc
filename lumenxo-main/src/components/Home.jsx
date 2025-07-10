import React from 'react'
import Navbar from '../pages/Navbar'
import Content1 from '../pages/Content1'
import Content2 from '../pages/Content2'
import Content3 from '../pages/Content3'
import Content4 from '../pages/Content4'
import Footer from '../pages/footer'
import ContactUs from '../components/ContactUs'
import Content5 from '../pages/Content5'
import Content6 from '../pages/Content6'
import Testimonial from '../pages/testimonialsection'

import Content8 from '../pages/content8.jsx'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Content1/>
      <Content3/>
       
       <Content5/>
       
      <Content2/>
     <Content6/>
    
      <Content4/>
      <Content8/>
      <Testimonial/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
