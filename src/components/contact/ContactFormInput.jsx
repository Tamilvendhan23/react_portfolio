import React from 'react';

function ContactFormInput({ label, type, id, name, value, onChange, required }) {
  const isTextArea = type === 'textarea';
  const Component = isTextArea ? 'textarea' : 'input';
  
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <Component
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={isTextArea ? "4" : undefined}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-colors duration-300"
      />
    </div>
  );
}

export default ContactFormInput;