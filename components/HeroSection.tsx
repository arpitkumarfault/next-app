'use client';

import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/arpitimg.jpg" // Using the imported image
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority // Ensures the image is preloaded
        className="absolute inset-0 -z-10"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl">
          Hello, I'm
          <span className="block text-indigo-400">Charles Anderson</span>
          and this is My Resume
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Frontend Developer | React Enthusiast | UI/UX Designer
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
          Explore My Work
        </button>
      </div>
    </div>
  );
}
