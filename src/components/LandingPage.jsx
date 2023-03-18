import react from 'react'
import FeaturePage from '../components/FeaturePage.jsx'
import Navbar from '../components/Navbar'

import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import EventPage from './EventPage.jsx'
import AttendeeForm from './AttendeeForm.jsx'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <FeaturePage />
    <EventPage />
    <Testimonials />
    <Footer />
    <AttendeeForm />

    </>
  )
}

export default LandingPage