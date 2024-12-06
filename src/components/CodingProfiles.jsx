import React from 'react';
import { FaCode, FaHackerrank, FaLaptopCode } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';

function CodingProfiles() {
  const profiles = [
    {
      name: 'GeeksforGeeks',
      icon: <SiGeeksforgeeks size={40} />,
      link: 'https://auth.geeksforgeeks.org/user/tamilvendhan23',
      problems: '200+ Problems',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode size={40} />,
      link: 'https://leetcode.com/tamilvendhan23/',
      problems: '150+ Problems',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'HackerRank',
      icon: <FaHackerrank size={40} />,
      link: 'https://www.hackerrank.com/tamilvendhan23',
      problems: '300+ Problems',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Coding Ninjas',
      icon: <FaLaptopCode size={40} />,
      link: 'https://www.codingninjas.com/studio/profile/tamilvendhan23',
      problems: '100+ Problems',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'SkillRack',
      icon: <FaCode size={40} />,
      link: 'https://www.skillrack.com/profile/tamilvendhan23',
      problems: '50+ Problems',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">Coding Profiles</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Check out my problem-solving journey across various coding platforms
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className={`bg-gradient-to-r ${profile.color} p-6 flex items-center justify-center`}>
                  <span className="text-white">{profile.icon}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{profile.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{profile.problems}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;