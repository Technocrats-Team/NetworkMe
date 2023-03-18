import React from 'react';
import { Rectangle } from '../assets';
import { Formik, Field, FieldArray } from 'formik';
import {initializeApp} from 'firebase/app';
import { getDatabase, ref, push } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyB2GxhRQGib6cRZPOEHo_EiyY2SBJJO1xM",
  authDomain: "network-me-a73dd.firebaseapp.com",
  databaseURL: "https://network-me-a73dd-default-rtdb.firebaseio.com",
  projectId: "network-me-a73dd",
  storageBucket: "network-me-a73dd.appspot.com",
  messagingSenderId: "162661134430",
  appId: "1:162661134430:web:295eefc3d6816b69eb04cf",
  measurementId: "G-TF00N4Q4L7"
};

const EventRegistrationForm = () => {
  const handleSubmit = (values) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getDatabase(firebaseApp);
    const eventsRef = ref(db, 'event');
    push(eventsRef, values); // Store the form data in the Firebase database
  };

  return (
    <div>
      <img src={Rectangle} alt="" className="w-full max-w-xs mx-auto mb-8 " />
      <Formik
        initialValues={{
          eventName: '',
          eventDate: '',
          eventLocation: '',
          eventDescription: '',
          sponsors: [{ name: '', socialLink: '' }],
          organizers: [{ name: '', socialLink: '' }],
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <label className="block mt-4">
            <span className="text-gray-700">Event Name:</span>
              <Field type="text" name="eventName" className="mt-1 block w-52 h-7 rounded-md border-[#988f8f] shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w" />
            </label>
            <label className="block mt-4">
            <span className="text-gray-700">Event Date:</span>
              <Field type="date" name="eventDate" className="mt-1 block w-52 h-7 rounded-md border-[#988f8f] shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" /> 
            </label>
            <label className='block mt-4'>
              Event Location:
              <Field type="text" name="eventLocation" className="mt-1 block w-52 h-7 rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
            <label>
              Event Description:
              <Field component="textarea" name="eventDescription" />
            </label>
            <FieldArray name="sponsors">
              {(arrayHelpers) => (
                <div>
                  <h3>Sponsors:</h3>
                  {values.sponsors.map((sponsor, index) => (
                    <div key={index}>
                      <label>
                        Name:
                        <Field
                          type="text"
                          name={`sponsors.${index}.name`}
                        />
                      </label>
                      <label>
                        Social Link:
                        <Field
                          type="text"
                          name={`sponsors.${index}.socialLink`}
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.remove(index)
                        }
                      >
                        Remove Sponsor
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({ name: '', socialLink: '' })
                    }
                  >
                    Add Sponsor
                  </button>
                </div>
              )}
            </FieldArray>
            <FieldArray name="organizers">
              {(arrayHelpers) => (
                <div>
                  <h3>Organizers:</h3>
                  {values.organizers.map((organizer, index) => (
                    <div key={index}>
                      <label>
                        Name:
                        <Field
                          type="text"
                          name={`organizers.${index}.name`}
                        />
                      </label>
                      <label>
                        Social Link:
                        <Field
                          type="text"
                          name={`organizers.${index}.socialLink`}
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.remove(index)
                        }
                      >
                        Remove Organizer
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({ name: '', socialLink: '' })
                    }
                  >
                    Add Organizer
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EventRegistrationForm;