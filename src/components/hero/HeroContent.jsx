import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

function HeroContent() {
  return (
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
        <span className="block text-blue-600 dark:text-blue-400">Tamilvendhan M </span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
        IT Student & Web Developer
      </p>
      <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
        Passionate about creating innovative solutions through code. 
        Skilled in Web Development, AWS, and Problem-Solving with 800+ problems solved.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <a
          href="mailto:tamilvendhanips2003@gmail.com"
          className="flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          <FaEnvelope /> Contact Me
        </a>
        <a
          href="/TamilvendhanM_Resume.pdf"
          download
          className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
        >
          <FaDownload /> Download CV
        </a>
        <div className="flex gap-4">
          <a
            href="https://github.com/tamilvendhan23"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 dark:bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/tamilvendhan23"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 dark:bg-blue-600 text-white p-3 rounded-full hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;