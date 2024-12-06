import React from 'react';
import SkillCategory from './skills/SkillCategory';
import { skillCategories } from '../data/skillsData';

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive set of technical skills I've developed through academic studies,
          personal projects, and hands-on experience.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;