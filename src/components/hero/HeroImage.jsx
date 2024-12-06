import React from 'react';

function HeroImage() {
  return (

<div className="md:w-1/2 mt-12 md:mt-0">
{/* <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80"> for full circle */}
<div className="relative">
  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src="https://avatars.githubusercontent.com/tamilvendhan23"
      alt="Profile"
      className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white"
    />
  </div>
</div>
</div>
  );
}

export default HeroImage;