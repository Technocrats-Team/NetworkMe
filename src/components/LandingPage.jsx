import React from 'react'
import Feature from './components/Feature'
import Navbar from './components/Navbar'

import Testimonials from './components/Testimonials'
import Hero from './components/Hero'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Feature />
    <Testimonials />
    <Footer />

    </>
  )
}

export default LandingPage