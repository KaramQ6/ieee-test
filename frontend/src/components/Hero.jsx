import React, { memo, useCallback } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Users, Calendar, Award } from 'lucide-react';
import { branchInfo } from '../data/mockData';

// Memoized stat card component
const StatCard = memo(({ icon: Icon, value, label, index }) => (
  <div 
    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom duration-1000`}
    style={{ animationDelay: `${800 + index * 200}ms` }}
  >
    <div className="flex items-center justify-center mb-4">
      <Icon className="h-8 w-8 text-[#FFB800]" aria-hidden="true" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{value}</h3>
    <p className="text-blue-100">{label}</p>
  </div>
));

StatCard.displayName = 'StatCard';

const Hero = () => {
  // Memoized scroll handler
  const handleJoinUs = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Static stats data
  const stats = [
    { icon: Users, value: branchInfo.membersCount, label: "Active Members" },
    { icon: Calendar, value: branchInfo.activitiesCount, label: "Annual Events" },
    { icon: Award, value: branchInfo.established, label: "Established" }
  ];

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-[#00468B] via-[#0056A3] to-[#FFB800] overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background Elements with reduced motion for accessibility */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#FFB800] rounded-full blur-3xl animate-pulse delay-1000 motion-reduce:animate-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-500 motion-reduce:animate-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Main Heading */}
          <header className="mb-8 animate-in fade-in slide-in-from-bottom duration-1000 motion-reduce:animate-none">
            <h1 
              id="hero-heading" 
              className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
            >
              IEEE
              <span className="block text-transparent bg-gradient-to-r from-[#FFB800] to-[#FFC940] bg-clip-text">
                Jadara University
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium">
              Student Branch
            </p>
          </header>

          {/* Tagline */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-200 motion-reduce:animate-none">
            <p className="text-2xl md:text-3xl font-semibold text-[#FFB800] mb-4">
              {branchInfo.tagline}
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-400 motion-reduce:animate-none">
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {branchInfo.mission}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-600 motion-reduce:animate-none">
            <Button
              onClick={handleJoinUs}
              size="lg"
              className="bg-[#FFB800] hover:bg-[#e6a600] text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#FFB800]/50"
              aria-describedby="cta-description"
            >
              Join Our Community
              <ArrowRight 
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                aria-hidden="true" 
              />
            </Button>
            <p id="cta-description" className="sr-only">
              Scroll to contact section to join IEEE Jadara University Student Branch
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with accessibility */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce motion-reduce:animate-none"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse motion-reduce:animate-none"></div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);