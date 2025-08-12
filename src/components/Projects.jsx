import React, { useState, useRef, useEffect } from 'react';
import '../styles.css';
import ProjectCard from './projects/ProjectCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Projects() {
  const projects = [
    {
      title: 'Blood Donation Website',
      description: 'Developed a responsive platform for blood donation, implementing user registration and donor matching features.',
      link: 'https://tamilvendhan23.github.io/blood-drop/',
      github: 'https://github.com/tamilvendhan23/blood-drop',
      image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
    },
    {
      title: 'E-commerce Website',
      description: 'Developed a responsive e-commerce website with user authentication, product listing, and cart functionality.',
      link: 'https://m-ini-e-commerce.vercel.app',
      github: 'https://github.com/Tamilvendhan23/MIni_E-commerce',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Firebase', 'MongoDB', 'Node.js', 'Express.js', 'JWT']
    },
    {
      title: 'Task Scheduler',
      description: 'Designed to help users manage their daily tasks and goals efficiently. Features intelligent reminders and import/export functionality.',
      link: 'https://tasker1-pink.vercel.app',
      github: 'https://github.com/Tamilvendhan23/Schedule-Task-Manager',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Messenger Web App (Realtime)',
      description: 'MERN-based real-time chat app with authentication, online user tracking, and global state management.',
      link: '',
      github: '',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Tailwind CSS', 'DaisyUI', 'JWT', 'Zustand']
    },
    {
      title: 'Crop Recommendation System (ML)',
      description: 'ML-based system that predicts the best crop to grow based on soil nutrients and climate parameters.',
      link: '',
      github: '',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Random Forest']
    }
  ];

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToProject = (index) => {
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

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center mb-6 sm:mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="relative">
          {currentIndex > 0 && (
            <button 
              onClick={() => scrollToProject(currentIndex - 1)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Previous project"
            >
              <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-white" />
            </button>
          )}
          
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 gap-4"
          >
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className={`flex-shrink-0 ${isMobile ? 'w-[calc(100%-2rem)]' : 'w-[calc(50%-1rem)]'} px-2`}
                style={{ scrollSnapAlign: 'start' }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          
          {currentIndex < projects.length - 1 && (
            <button 
              onClick={() => scrollToProject(currentIndex + 1)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Next project"
            >
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-white" />
            </button>
          )}
          
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-blue-600 dark:bg-blue-400 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;