import React from 'react'
import LandingPage from './components/LandingPage'
import EventRegistrationForm from './components/EventRegistrationForm'
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventPage from './components/EventPage';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<EventRegistrationForm />} />
         <Route path="/event" element={<EventPage/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App