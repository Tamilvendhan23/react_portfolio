import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import ContactFormInput from './ContactFormInput';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:tamilvendhanips2003@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ContactFormInput
        label="Name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <ContactFormInput
        label="Email"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <ContactFormInput
        label="Message"
        type="textarea"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        <FaEnvelope /> Send Message
      </button>
    </form>
  );
}

export default ContactForm;