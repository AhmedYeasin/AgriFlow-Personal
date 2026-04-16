"use client";
import React from 'react';


const HeroVideo = () => {
  // Agriculture related kichu keywords


  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-30" 
      >
        <source src="/videos/farming.mp4" type="video/mp4" />
      </video>
      
      
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20" />
    </div>
  );
};

export default HeroVideo;