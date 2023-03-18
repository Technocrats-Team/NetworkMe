import react from 'react'
import FeaturePage from '../components/FeaturePage.jsx'
import Navbar from '../components/Navbar'

import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <FeaturePage />
    <Testimonials />
    <Footer />

    </>
  )
}

export default LandingPage