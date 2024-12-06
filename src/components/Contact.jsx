import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-600 dark:text-blue-400" size={24} />,
      title: 'Email',
      value: 'tamilvendhanips2003@gmail.com',
      link: 'mailto:tamilvendhanips2003@gmail.com'
    },
    {
      icon: <FaPhone className="text-blue-600 dark:text-blue-400" size={24} />,
      title: 'Phone',
      value: '+91 89408 26859',
      link: 'tel:+918940826859'
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" size={24} />,
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Feel free to reach out to me for any questions or opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo contactInfo={contactInfo} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;