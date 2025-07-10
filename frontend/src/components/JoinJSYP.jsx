import React from 'react';

const JoinJSYP = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a001f] via-[#15002e] to-[#1a0033] flex items-center justify-center text-white overflow-hidden px-4 py-20">

      {/* تأثير خلفية شعاعي خفيف */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,#6a00ff33_0%,#000000_100%)] blur-2xl opacity-20" />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Join JSYP
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Are you ready to shape the future of innovation and leadership? <br />
          The Jordan Student & Young Professionals (JSYP) program empowers students like you to grow, lead, and connect.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://jsyp.jordan.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            JSYP Site
          </a>

          <a
            href="https://ieee.surveysparrow.com/s/jsyp2025/tt-EZ-kM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinJSYP;