import React from 'react';

function ContactInfo({ contactInfo }) {
  return (
    <div className="space-y-8">
      {contactInfo.map((info) => (
        <div key={info.title} className="flex items-center space-x-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full transition-colors duration-300">
            {info.icon}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white transition-colors duration-300">
              {info.title}
            </h3>
            {info.link ? (
              <a 
                href={info.link} 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {info.value}
              </a>
            ) : (
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {info.value}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;