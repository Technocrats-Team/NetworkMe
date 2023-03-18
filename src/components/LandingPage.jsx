import react , {useState} from 'react'
import FeaturePage from '../components/FeaturePage.jsx'
import Navbar from '../components/Navbar'

import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import EventPage from './EventPage.jsx'
import AttendeeForm from './AttendeeForm.jsx'
import {auth , provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const LandingPage = () => {
  const [value , setValue] = useState();
  const handleClick =() => {
    signInWithPopup(auth , provider).then((data) => {
       setValue(data.user.email)
       console.log(value)
    }
    )
  }
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