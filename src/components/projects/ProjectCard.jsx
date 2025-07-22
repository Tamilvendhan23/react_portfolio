import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project, index }) {
  return (
    <div
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
      style={{
        animation: `fade-in 0.5s ease-out forwards ${index * 0.2}s`,
        opacity: 0
      }}
    >
      {/* Full-Page Preview Without Blank Space */}
      <div className="relative w-full h-96"> 
        {project.link ? (
          <iframe
            src={project.link}
            title={`${project.title} Preview`}
            className="w-full h-full"
            style={{
              border: 'none'
            }}
          />
        ) : (
          <img
            src={project.image || 'https://source.unsplash.com/800x600/?technology,web'}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        {/* Tech Stack */}
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

        {/* Links Section */}
        <div className="flex gap-3 mt-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}

          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <FaExternalLinkAlt size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;