import React from "react";

const JoinJSYP = () => {
  return (
    <section className="min-h-screen bg-indigo-950 text-white flex flex-col items-center justify-center px-4 py-20 text-center">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Jordan Students and Young Professionals (JSYP)
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl mb-4">Innovation meets Impact.</p>

      {/* Description */}
      <p className="text-lg text-gray-300 max-w-2xl mb-8">
        Empowering Jordan's next generation of tech leaders.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="https://jsyp.jordan.ieee.org"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-indigo-950 font-bold px-8 py-4 text-lg rounded-full hover:bg-gray-200 hover:scale-105 transition-transform"
        >
          JSYP Site
        </a>

        <a
          href="https://ieee.surveysparrow.com/s/jsyp2025/tt-EZ-kM"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black font-bold px-8 py-4 text-lg rounded-full hover:bg-yellow-300 hover:scale-105 transition-transform"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default JoinJSYP;