import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Photo , github } from "../assets";
import UserCard from './UserCard';
import OrganizerCard from './OrganizerCard';
import SponsorTile from './SponsorTile';

const EventPage = (props) => {

  const [ event, setEvent] = useState({});

  useEffect(() => {
    axios.get('https://network-me-a73dd-default-rtdb.firebaseio.com/event/-NQsHTaZRUapCqa2iji2.json')
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
        <div className="bg-white rounded-lg shadow-lg p-6 w-[80vw]">
          <h2 className="text-4xl font-bold mb-4">{event.eventName}</h2>
          <p className="text-gray-600 mb-2 text-2xl">{event.eventDate}</p>
          
          <p className="text-gray-800 leading-relaxed text-2xl mb-4">
           {event.eventDescription}
          </p>

          
          
        </div>
      </div>
      <h1 className="text-5xl text-center sponsor my-10">Sponsors</h1>

      <div className="flex flex-col justify-center items-center gap-5">

         {/* {event.sponsors.map((sponsor , index) => {
          <SponsorTile key={index} name={sponsor.name} socialLink={sponsor.socialLink}/>
         })} */}
        
      </div>
      <h1 className='text-center text-4xl my-10'>Organizer</h1>
      <div className='flex justify-center items-center flex-wrap basis-2/6 gap-3 w-[80vw] mx-auto'>
      <UserCard  />
      <UserCard  />
      <UserCard  />
      <UserCard  />
    
      
      </div>
      <h1 className='text-center text-4xl my-10'>Attendee</h1>
      <div className='flex justify-center items-center flex-wrap basis-2/6 gap-3 w-[80vw] mx-auto'>
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
