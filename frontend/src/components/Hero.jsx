import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Users, Calendar, Award } from 'lucide-react';
import { branchInfo } from '../data/mockData';

const Hero = () => {
  const handleJoinUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#00468B] via-[#0056A3] to-[#FFB800] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#FFB800] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              IEEE
              <span className="block text-transparent bg-gradient-to-r from-[#FFB800] to-[#FFC940] bg-clip-text">
                Jadara University
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium">
              Student Branch
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <p className="text-2xl md:text-3xl font-semibold text-[#FFB800] mb-4">
              {branchInfo.tagline}
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {branchInfo.mission}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
            <Button
              onClick={handleJoinUs}
              size="lg"
              className="bg-[#FFB800] hover:bg-[#e6a600] text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, value: branchInfo.membersCount, label: "Active Members" },
              { icon: Calendar, value: branchInfo.activitiesCount, label: "Annual Events" },
              { icon: Award, value: branchInfo.established, label: "Established" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom duration-1000`}
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-[#FFB800]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;