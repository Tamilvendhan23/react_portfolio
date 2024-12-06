import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroImage from './hero/HeroImage';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;