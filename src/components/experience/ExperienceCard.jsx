import React from 'react';

function ExperienceCard({ experience, index }) {
  return (
    <div className="relative mb-12">
      <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
        
        <div className="w-full md:w-5/12 ml-8 md:ml-0 md:mx-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              {experience.icon}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.title}</h3>
            </div>
            <div className="mb-4">
              <p className="text-blue-600 dark:text-blue-400 font-semibold">{experience.company}</p>
              <p className="text-gray-600 dark:text-gray-400">{experience.period}</p>
              <p className="text-gray-600 dark:text-gray-400">{experience.location}</p>
            </div>
            <ul className="space-y-2">
              {experience.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;