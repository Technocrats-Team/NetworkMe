import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Photo , github } from "../assets";
import UserCard from './UserCard';
import OrganizerCard from './OrganizerCard';

const EventPage = (props) => {

  const [ event, setEvent] = useState({});

  useEffect(() => {
    axios.get('https://network-me-a73dd-default-rtdb.firebaseio.com/event/-NQrbDDOjXZM1ns7shbR.json')
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return (
    <>


      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[800px]">
          <h2 className="text-2xl font-bold mb-4">{event.eventName}</h2>
          <p className="text-gray-600 text-sm mb-2">Date: September 1, 2022</p>
          {/* <p class="text-gray-600 text-sm mb-4">Time: 6:00 PM - 9:00 PM</p> */}
          <p className="text-gray-800 leading-relaxed mb-4">
           {event.eventDescription}
          </p>
          {/* <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Register Now</button> */}
        </div>
      </div>
      <h1 className="text-2xl sponser">Sponsers</h1>
      <div className='flex justify-center items-center flex-wrap basis-2/6 gap-3'>
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
      </div>
<div className='flex justify-center items-center flex-wrap basis-2/6 gap-3'>
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      <OrganizerCard  />
      </div>
    </>
  );
};

export default EventPage;
