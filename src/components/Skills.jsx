import React, { useRef, useState, useEffect } from 'react';
import SkillCategory from './skills/SkillCategory';
import { skillCategories } from '../data/skillsData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Skills() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Default to 2 items
  const totalSlides = Math.ceil(skillCategories.length / itemsPerPage);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Mobile
        setItemsPerPage(1);
      } else { // Tablet and desktop
        setItemsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  // Update total slides when itemsPerPage changes
  useEffect(() => {
    setCurrentIndex(0);
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: 'auto' });
    }
  }, [itemsPerPage]);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          A comprehensive set of technical skills I've developed through academic studies,
          personal projects, and hands-on experience.
        </p>

        <div className="relative">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button 
              onClick={() => scrollTo(currentIndex - 1)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Previous skills"
            >
              <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-white" />
            </button>
          )}

          {/* Skills Container */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-2 sm:px-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Group skills based on itemsPerPage */}
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex} 
                className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2"
                style={{ scrollSnapAlign: 'start' }}
              >
                {skillCategories
                  .slice(slideIndex * itemsPerPage, slideIndex * itemsPerPage + itemsPerPage)
                  .map((category) => (
                    <SkillCategory key={category.title} category={category} />
                  ))}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {currentIndex < totalSlides - 1 && (
            <button 
              onClick={() => scrollTo(currentIndex + 1)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Next skills"
            >
              <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-white" />
            </button>
          )}

          {/* Dots Navigation */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    currentIndex === index 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;