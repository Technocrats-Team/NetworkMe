import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AttendeeForm = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <div>
      <h1>Attendee Form</h1>
      <Formik
        initialValues={{
          name: "",
          occupation: "",
          socialMedia: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />

            <label htmlFor="occupation">Occupation</label>
            <Field type="text" id="occupation" name="occupation" />
            <ErrorMessage name="occupation" />

            <label htmlFor="socialMedia">Social Media</label>
            <Field type="text" id="socialMedia" name="socialMedia" />
            <ErrorMessage name="socialMedia" />

            <label htmlFor="photo">Profile Photo</label>
            <div>
              <label htmlFor="defaultPhoto1">
                <input
                  type="radio"
                  id="defaultPhoto1"
                  name="photo"
                  value="https://example.com/photo1.png"
                  onChange={() =>
                    setFieldValue("photo", "https://example.com/photo1.png")
                  }
                />
                Default Photo 1
              </label>
            </div>
            <div>
              <label htmlFor="defaultPhoto2">
                <input
                  type="radio"
                  id="defaultPhoto2"
                  name="photo"
                  value="https://example.com/photo2.png"
                  onChange={() =>
                    setFieldValue("photo", "https://example.com/photo2.png")
                  }
                />
                Default Photo 2
              </label>
            </div>
            <div>
              <label htmlFor="customPhoto">
                <input
                  type="radio"
                  id="customPhoto"
                  name="photo"
                  value={photo ? URL.createObjectURL(photo) : ""}
                  onChange={() => setFieldValue("photo", photo)}
                />
                Custom Photo
              </label>
            </div>
            <div>
              <input
                type="file"
                id="uploadPhoto"
                name="uploadPhoto"
                onChange={handlePhotoChange}
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AttendeeForm;
