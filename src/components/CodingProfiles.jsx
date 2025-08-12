import React, { useRef, useState, useEffect } from 'react';
import { FaCode, FaHackerrank, FaLaptopCode } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function CodingProfiles() {
  const profiles = [
    {
      name: 'GeeksforGeeks',
      icon: <SiGeeksforgeeks size={40} />,
      link: 'https://auth.geeksforgeeks.org/user/tamilvendhan23',
      problems: '250+ Problems',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode size={40} />,
      link: 'https://leetcode.com/tamilvendhan23/',
      problems: '250+ Problems',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'HackerRank',
      icon: <FaHackerrank size={40} />,
      link: 'https://www.hackerrank.com/tamilvendhan23',
      problems: '100+ Problems',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Coding Ninjas',
      icon: <FaLaptopCode size={40} />,
      link: 'https://www.naukri.com/code360/profile/tamilvendhan',
      problems: '780+ Problems',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'SkillRack',
      icon: <FaCode size={40} />,
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=408198&key=949a69f6a00a9678fedad145aa2293613372538a',
      problems: '980+ Problems',
      color: 'from-blue-400 to-blue-600'
    }
  ]; 

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollTo = (index) => {
    if (containerRef.current) {
      const scrollAmount = index * containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const containerWidth = containerRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / containerWidth);
      setCurrentIndex(newIndex);
    }
  };

  // For mobile: one profile per page, for desktop: 3 profiles per page
  const itemsPerPage = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(profiles.length / itemsPerPage);

  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">Coding Profiles</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Check out my problem-solving journey across various coding platforms
        </p>

        <div className="relative">
          {/* Left Arrow - hidden on first page */}
          {currentIndex > 0 && (
            <button 
              onClick={() => scrollTo(currentIndex - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Previous profiles"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
            </button>
          )}

          {/* Profiles Container */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* For mobile: map each profile individually */}
            {isMobile ? (
              profiles.map((profile, index) => (
                <div 
                  key={profile.name} 
                  className="flex-shrink-0 w-full px-2"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <motion.a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 h-full mx-auto max-w-xs">
                      <div className={`bg-gradient-to-r ${profile.color} p-6 flex items-center justify-center`}>
                        <span className="text-white">{profile.icon}</span>
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2 dark:text-white">{profile.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{profile.problems}</p>
                      </div>
                    </div>
                  </motion.a>
                </div>
              ))
            ) : (
              /* For desktop: group 3 profiles per page */
              Array.from({ length: totalSlides }).map((_, groupIndex) => {
                const group = profiles.slice(groupIndex * 3, groupIndex * 3 + 3);
                return (
                  <div 
                    key={groupIndex} 
                    className="flex-shrink-0 w-full flex justify-center gap-8 px-2"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    {group.map((profile, index) => (
                      <motion.a
                        key={profile.name}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-xs flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 h-full">
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
                    {/* Fill empty spaces if needed */}
                    {group.length < 3 && Array(3 - group.length).fill(0).map((_, i) => (
                      <div key={`empty-${i}`} className="flex-1" aria-hidden="true"></div>
                    ))}
                  </div>
                );
              })
            )}
          </div>

          {/* Right Arrow - hidden on last page */}
          {currentIndex < totalSlides - 1 && (
            <button 
              onClick={() => scrollTo(currentIndex + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Next profiles"
            >
              <FiChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
            </button>
          )}

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index 
                    ? 'bg-blue-600 dark:bg-blue-400' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;