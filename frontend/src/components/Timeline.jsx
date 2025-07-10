import React from 'react';
import { Card, CardContent } from './ui/card';
import { ieeeTimeline } from '../data/mockData';

const Timeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            IEEE
            <span className="text-[#00468B] ml-3">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of innovation and technological advancement spanning over a century
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00468B] to-[#FFB800] transform -translate-y-1/2 z-0"></div>

          {/* Timeline Items */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-4">
            {ieeeTimeline.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                {/* Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300 ${
                  index === ieeeTimeline.length - 1 
                    ? 'bg-[#FFB800] text-black' 
                    : 'bg-[#00468B] text-white'
                }`}>
                  <span className="font-bold text-sm">{item.year}</span>
                </div>

                {/* Content Card */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 hover:scale-105 transform transition-transform">
                  <CardContent className="p-6">
                    <h3 className={`text-lg font-bold mb-2 ${
                      index === ieeeTimeline.length - 1 
                        ? 'text-[#FFB800]' 
                        : 'text-[#00468B]'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#00468B] to-[#FFB800] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Be Part of Our Legacy
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join us in continuing IEEE's tradition of advancing technology for humanity
            </p>
            {/* --- التعديل هنا --- */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfV2xN2Yr11wZEkkRmhJ_MEwpSiTS0XpKNx0FACsZg8rt9YzQ/viewform?usp=header"
              target="_blank" // لفتح الرابط في تبويب جديد
              rel="noopener noreferrer" // لأسباب أمنية عند استخدام target="_blank"
              className="bg-white text-[#00468B] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform inline-block" // أضفت inline-block ليعمل transform
            >
              Start Your Journey
            </a>
            {/* --- نهاية التعديل --- */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
