import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project, index }) {
  return (
    <div
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 h-full flex flex-col"
      style={{
        animation: `fade-in 0.5s ease-out forwards ${index * 0.2}s`,
        opacity: 0
      }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        {project.link ? (
          <iframe
            src={project.link}
            title={`${project.title} Preview`}
            className="w-full h-full"
            style={{ border: 'none' }}
            loading="lazy"
          />
        ) : (
          <img
            src={project.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600'}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              <FaGithub size={18} />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
          )}

          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              <FaExternalLinkAlt size={18} />
              <span className="text-sm sm:text-base">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;