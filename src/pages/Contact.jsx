import React, { useState } from "react";
import { AnimatedText } from "../components/AnimatedText";
import { dataBase } from "../firebase/fireBase";
import "./Contact.css";

export const Contact = () => {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dataBase.collection("contactMessages").add(formData);
      setFormSubmitted(true);
      setFormData(initialFormState);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="animated">
        <AnimatedText
          text="Contact Us"
          className="lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
      </div>

      {formSubmitted && (
        <div className="success-message">
          Thank you for reaching out! We'll get back to you as soon as possible.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
