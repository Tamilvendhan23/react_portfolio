import React from 'react';
import ProjectCard from './projects/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Blood Donation Website',
      description: 'Developed a responsive platform for blood donation, implementing user registration and donor matching features.',
      link: 'https://tamilvendhan23.github.io/blood-drop/',
      github: 'https://github.com/tamilvendhan23/blood-drop',
      image: 'https://source.unsplash.com/random/800x600?blood,medical',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
    },
    {
      title: '30 Days AWS Cloud Challenge',
      description: 'Completed a comprehensive 30-day challenge with hands-on experience in AWS, deploying serverless solutions.',
      image: 'https://source.unsplash.com/random/800x600?cloud,technology',
      tech: ['AWS EC2', 'S3', 'Lambda']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;