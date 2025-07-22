import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import ContactFormInput from './ContactFormInput';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('Fullname', formData.name);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('Message', formData.message);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzajJ0ItALUkAkQgQtD6xRh9p2c-XNqQf6mdFfppsEZOZjznzqvLevvSccImiSopIYD/exec',
        {
          method: 'POST',
          body: formDataToSend
        }
      );

      const result = await response.json();
      if (result.result === 'success') {
        setSuccessMessage('✅ Thank you! Your message has been sent successfully.');
        setTimeout(() => setSuccessMessage(''), 3000); // Auto-hide after 3 seconds
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('❌ Error submitting form. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Loading Spinner & Submit Button */}
      <button
        type="submit"
        className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
        ) : (
          <>
            <FaPaperPlane /> Send Message
          </>
        )}
      </button>

      {/* Success Message */}
      {successMessage && (
        <p className="text-green-500 text-center font-semibold mt-3">{successMessage}</p>
      )}
    </form>
  );
}

export default ContactForm;
