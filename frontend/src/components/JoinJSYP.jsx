import React, { memo } from 'react';
import { ExternalLink, ArrowRight, Users, Zap, Target } from 'lucide-react';

// Feature card component
const FeatureCard = memo(({ icon: Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
    <div className="flex items-center justify-center mb-4">
      <Icon className="h-8 w-8 text-purple-400" aria-hidden="true" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

/**
 * A comprehensive landing page for JSYP (Jordan Students and Young Professionals).
 * Features optimized performance, accessibility, and responsive design.
 */
const JoinJSYP = () => {
  const features = [
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded students and professionals across Jordan"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Participate in cutting-edge tech projects and research initiatives"
    },
    {
      icon: Target,
      title: "Impact",
      description: "Create meaningful solutions that benefit society and technology"
    }
  ];

  return (
    <div 
      className="bg-gradient-to-br from-[#0a001f] via-[#15002e] to-[#1a0033] text-white min-h-screen flex flex-col items-center justify-center text-center p-4"
      role="main"
      aria-labelledby="jsyp-heading"
    >
      {/* Hero Section */}
      <header className="mb-16">
        <h1 
          id="jsyp-heading"
          className="text-4xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom duration-1000"
        >
          Jordan Students and Young Professionals
          <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mt-2">
            (JSYP)
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-cyan-300 mb-4 font-semibold animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          Innovation meets Impact.
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
          Empowering Jordan's next generation of tech leaders through innovation, collaboration, and real-world impact.
          Join a vibrant community of students and professionals driving technological advancement.
        </p>
      </header>

      {/* Features Section */}
      <section className="mb-16 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-1200">
        <a
          href="https://jsyp.jordan.ieee.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50 group inline-flex items-center justify-center"
          aria-describedby="external-link-description"
        >
          Visit Official Website
          <ExternalLink 
            className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
            aria-hidden="true" 
          />
        </a>

        <button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-transparent border-2 border-purple-400 hover:bg-purple-400 text-purple-400 hover:text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50 group inline-flex items-center justify-center"
        >
          Get in Touch
          <ArrowRight 
            className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
            aria-hidden="true" 
          />
        </button>
      </div>

      {/* Hidden description for screen readers */}
      <p id="external-link-description" className="sr-only">
        Opens JSYP official website in a new tab
      </p>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default memo(JoinJSYP);
