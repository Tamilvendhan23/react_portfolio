import React from 'react'; // Required for JSX
import { FaCode, FaCloud, FaDatabase, FaTools } from 'react-icons/fa';

export const skillCategories = [
  {
    icon: <FaCode size={24} />, // JSX syntax
    title: 'Programming Languages',
    skills: ['Python', 'C', 'Java', 'JavaScript', 'HTML', 'CSS', 'React'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: <FaCloud size={24} />,
    title: 'Cloud Technologies',
    skills: ['AWS EC2', 'S3', 'Lambda'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: <FaDatabase size={24} />,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
    color: 'from-green-400 to-green-600',
  },
  {
    icon: <FaTools size={24} />,
    title: 'Other Tools',
    skills: ['Git', 'GitHub', 'Linux', 'Canva'],
    color: 'from-orange-400 to-orange-600',
  },
];
