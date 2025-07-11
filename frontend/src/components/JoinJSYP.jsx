import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinJSYP = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-gradient-to-br from-[#0a001f] via-[#15002e] to-[#1a0033] text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={handleBackToHome}
                className="flex items-center text-purple-400 hover:text-white transition-colors mr-6"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </button>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                JSYP
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
                <button onClick={() => scrollToSection('mission')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Mission</button>
                <button onClick={() => scrollToSection('hackathon')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Hackathon</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eXxlbnwwfHx8cHVycGxlfDE3NTIyMDk0OTZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Futuristic city" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Jordan Students and Young Professionals
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              (JSYP)
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-300 mb-6 font-semibold">
            Innovation meets Impact.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Empowering Jordan's next generation of tech leaders through innovation, collaboration, and real-world impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollToSection('hackathon')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Hackathon
            </button>
            <a
              href="https://ieee.surveysparrow.com/s/jsyp2025/tt-EZ-kM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join Now
            </a>
          </div>
        </div>
      </section>

      {/* About JSYP Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Building Jordan's Digital Future, Together
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                JSYP is Jordan's premier community for students and young professionals passionate about technology and innovation. As part of the IEEE Jordan Section, we foster collaboration, learning, and real-world problem-solving.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Our mission is to bridge the gap between academic knowledge and industry needs, creating opportunities for Jordan's brightest minds to make a meaningful impact.
              </p>
            </div>

            {/* Right Column - Core Values */}
            <div className="space-y-6">
              {/* Community Card */}
              <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Community</h3>
                </div>
                <p className="text-gray-300">Connecting Jordan's brightest tech minds</p>
              </div>

              {/* Technology Card */}
              <div className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Technology</h3>
                </div>
                <p className="text-gray-300">Exploring cutting-edge fields like AI and IoT</p>
              </div>

              {/* Impact Card */}
              <div className="bg-gradient-to-r from-pink-800/30 to-purple-800/30 p-6 rounded-xl border border-pink-500/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Impact</h3>
                </div>
                <p className="text-gray-300">Creating tangible solutions for Jordan's challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Our Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Skill Development */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Skill Development</h3>
              <p className="text-gray-300 text-lg">Providing comprehensive workshops and training sessions to enhance technical and leadership skills.</p>
            </div>

            {/* Networking */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Networking</h3>
              <p className="text-gray-300 text-lg">Creating meaningful connections between students, professionals, and industry leaders across Jordan.</p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 text-lg">Fostering practical problem-solving through hackathons, competitions, and collaborative projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Section */}
      <section id="hackathon" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Flagship Event: JSYP Hackathon 2025
            </h2>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8">Building a Smart Jordan with AI & IoT</p>
          </div>

          {/* Hackathon Details */}
          <div className="space-y-8">
            {/* The Challenge */}
            <div className="bg-gradient-to-r from-purple-800/20 to-indigo-800/20 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm">
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full text-left flex items-center justify-between"
              >
                <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                <svg className={`w-6 h-6 text-white transition-transform ${activeAccordion === 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeAccordion === 0 && (
                <div className="mt-6 text-gray-300">
                  <p className="text-lg mb-4">Use artificial intelligence and Internet of Things to solve urban challenges</p>
                  <div className="grid md:grid-cols-5 gap-4">
                    <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 p-4 rounded-lg border border-red-500/30">
                      <h4 className="font-semibold text-white mb-2">Health</h4>
                      <p className="text-sm text-gray-300">Healthcare solutions</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-lg border border-blue-500/30">
                      <h4 className="font-semibold text-white mb-2">Education</h4>
                      <p className="text-sm text-gray-300">Learning innovations</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-white mb-2">Tourism</h4>
                      <p className="text-sm text-gray-300">Travel & culture</p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-4 rounded-lg border border-cyan-500/30">
                      <h4 className="font-semibold text-white mb-2">Water & Agriculture</h4>
                      <p className="text-sm text-gray-300">Sustainable farming</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-4 rounded-lg border border-yellow-500/30">
                      <h4 className="font-semibold text-white mb-2">Transportation</h4>
                      <p className="text-sm text-gray-300">Smart mobility</p>
                    </div>
                  </div>
                  <p className="mt-4 text-lg">Teams: 2-3 members</p>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-r from-cyan-800/20 to-blue-800/20 p-8 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full text-left flex items-center justify-between"
              >
                <h3 className="text-2xl font-bold text-white">Timeline</h3>
                <svg className={`w-6 h-6 text-white transition-transform ${activeAccordion === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeAccordion === 1 && (
                <div className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-white">Phase One</h4>
                        <p className="text-gray-300">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-white">Second Phase (Idea Formation)</h4>
                        <p className="text-gray-300">5-24 July</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-orange-500 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-white">Semi-final (Prototyping)</h4>
                        <p className="text-gray-300">27 July - 10 Aug</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-500 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-white">Final Pitch Day</h4>
                        <p className="text-gray-300">16 Aug</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Scoring Criteria */}
            <div className="bg-gradient-to-r from-pink-800/20 to-purple-800/20 p-8 rounded-xl border border-pink-500/30 backdrop-blur-sm">
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full text-left flex items-center justify-between"
              >
                <h3 className="text-2xl font-bold text-white">Scoring Criteria</h3>
                <svg className={`w-6 h-6 text-white transition-transform ${activeAccordion === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeAccordion === 2 && (
                <div className="mt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4 rounded-lg border border-purple-500/30">
                      <h4 className="font-semibold text-white mb-2">Innovation</h4>
                      <p className="text-2xl font-bold text-pink-400">25 points</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-4 rounded-lg border border-blue-500/30">
                      <h4 className="font-semibold text-white mb-2">Impact</h4>
                      <p className="text-2xl font-bold text-cyan-400">20 points</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-4 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-white mb-2">Feasibility</h4>
                      <p className="text-2xl font-bold text-green-400">15 points</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-4 rounded-lg border border-orange-500/30">
                      <h4 className="font-semibold text-white mb-2">Use of AI and IoT</h4>
                      <p className="text-2xl font-bold text-orange-400">20 points</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-white mb-2">Scalability & Sustainability</h4>
                      <p className="text-2xl font-bold text-indigo-400">15 points</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-4 rounded-lg border border-yellow-500/30">
                      <h4 className="font-semibold text-white mb-2">Presentation Quality</h4>
                      <p className="text-2xl font-bold text-yellow-400">5 points</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 p-4 rounded-lg border border-yellow-500/30">
                    <h4 className="font-semibold text-white mb-2">Practical Implementation (Bonus)</h4>
                    <p className="text-2xl font-bold text-yellow-400">25 points</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://ieee.surveysparrow.com/s/jsyp2025/tt-EZ-kM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join us at the conference 
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Any Questions?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Let's discuss your ideas and get ready to innovate!
            </p>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-xl border border-gray-600 backdrop-blur-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Open Discussion</h3>
              <p className="text-gray-300 mb-6">
                We encourage sharing thoughts, ideas, and questions. Connect with us through our social media channels or email to start the conversation.
              </p>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="mailto:contact@jsyp.jordan.ieee.org" className="text-purple-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="https://twitter.com/JSYPJordan" className="text-purple-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/jsyp-jordan" className="text-purple-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Ready to build the future of Jordan? Let's make it happen together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinJSYP;