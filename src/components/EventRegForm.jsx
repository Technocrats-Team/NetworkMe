import React, { useState } from 'react';
import axios from 'axios';


const EventRegForm = () => {
    const RegistrationForm = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [socialHandle, setSocialHandle] = useState('');
        const [error, setError] = useState('');
      
        const handleSubmit = (event) => {
          event.preventDefault();
          axios.post('/api/register', {
            name,
            email,
            socialHandle,
          })
          .then(response => {
            // Success! Do something with the response data
          })
          .catch(error => {
            setError('There was an error processing your request.');
          })
        };
    }
  return (
    <>

<form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="social-handle">Social Handle:</label>
      <input type="text" id="social-handle" value={socialHandle} onChange={(e) => setSocialHandle(e.target.value)} />

      <button type="submit">Register</button>

      {error && <p>{error}</p>}
    </form>
    </>
  )
}

export default EventRegForm