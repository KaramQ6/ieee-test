import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Linkedin, User } from 'lucide-react';
import { officers } from '../data/mockData';

const Officers = () => {
  return (
    <section id="officers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our
            <span className="text-[#00468B] ml-3">Officers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated leaders driving innovation and excellence in our IEEE community
          </p>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers.map((officer, index) => (
            <Card key={officer.id} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-[#00468B] to-[#FFB800] flex items-center justify-center">
                    <User className="h-24 w-24 text-white opacity-50" />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <p className="text-sm leading-relaxed">{officer.description}</p>
                      <div className="flex justify-center space-x-4 mt-4">
                        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00468B] transition-colors duration-300">
                    {officer.name}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className="bg-[#FFB800] text-black font-semibold hover:bg-[#e6a600] transition-colors duration-300"
                  >
                    {officer.role}
                  </Badge>
                  
                  {/* Contact Info - Visible on hover */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </span>
                      <span className="flex items-center">
                        <Linkedin className="h-3 w-3 mr-1" />
                        LinkedIn
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#00468B] to-[#FFB800] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              We're always looking for passionate students to help lead our community
            </p>
            <button className="bg-white text-[#00468B] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Learn About Leadership Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officers;