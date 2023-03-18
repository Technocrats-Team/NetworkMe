import React from 'react';
import { Formik, Field, FieldArray } from 'formik';

const EventRegistrationForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Event Registration Form</h1>
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
          <form onSubmit={handleSubmit}>
            <label>
              Event Name:
              <Field type="text" name="eventName" />
            </label>
            <label>
              Event Date:
              <Field type="date" name="eventDate" />
            </label>
            <label>
              Event Location:
              <Field type="text" name="eventLocation" />
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