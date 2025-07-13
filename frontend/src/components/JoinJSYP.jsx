import React from 'react';

/**
 * A simple landing page for JSYP.
 * It displays the JSYP title, a short description, and a button that links to the official website.
 */
const JoinJSYP = () => {
  return (
    // Main container using Flexbox to center content vertically and horizontally.
    // It takes up the full viewport height and has a dark gradient background.
    <div className="bg-gradient-to-br from-[#0a001f] via-[#15002e] to-[#1a0033] text-white min-h-screen flex flex-col items-center justify-center text-center p-4">

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Jordan Students and Young Professionals
        {/* The (JSYP) part with a gradient color */}
        <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mt-2">
          (JSYP)
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-cyan-300 mb-4 font-semibold">
        Innovation meets Impact.
      </p>

      {/* Mission Statement */}
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
        Empowering Jordan's next generation of tech leaders through innovation, collaboration, and real-world impact.
      </p>

      {/* Link styled as a button to the official JSYP website. */}
      {/* It opens in a new tab for a better user experience. */}
      <a
        href="https://jsyp.jordan.ieee.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
      >
        Visit Official Website
      </a>
    </div>
  );
};

export default JoinJSYP;
