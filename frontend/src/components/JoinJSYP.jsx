import React from 'react';
import { Button } from '../components/ui/button'; // Ensure this path is correct

const JoinJSYP = () => {
  return (
    // --- The changes are in this line ---
    <section className="min-h-screen bg-indigo-950 text-white flex flex-col items-center justify-center px-4 py-20 text-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Join JSYP
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl max-w-2xl mb-10 opacity-90">
        Are you ready to shape the future of innovation and leadership? The Jordan Student & Young Professionals (JSYP) program empowers students like you to grow, lead, and connect.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6">
        <Button
          asChild
          className="bg-white text-indigo-950 font-bold px-8 py-4 text-lg rounded-full hover:bg-gray-200 hover:scale-105 transition-transform"
        >
          <a href="https://jsyp.jordan.ieee.org" target="_blank" rel="noopener noreferrer">
            JSYP Site
          </a>
        </Button>

        <Button
          asChild
          className="bg-ieee-yellow text-black font-bold px-8 py-4 text-lg rounded-full hover:bg-yellow-400 hover:scale-105 transition-transform"
        >
          <a href="https://ieee.surveysparrow.com/s/jsyp2025/tt-EZ-kM" target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </Button>
      </div>
      
    </section>
  );
};

export default JoinJSYP;