import React from 'react';

function SkillCategory({ category }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className={`bg-gradient-to-r ${category.color} p-4 flex items-center gap-3`}>
        <span className="text-white">{category.icon}</span>
        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCategory;