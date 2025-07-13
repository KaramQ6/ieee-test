import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Linkedin, ArrowLeft, InstagramIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { officers } from '../data/mockData';

const Officers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00468B] to-[#FFB800] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center mb-6 text-white hover:text-blue-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Officers</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            Meet the dedicated leaders driving innovation and excellence in our IEEE community
          </p>
        </div>
      </div>

      {/* Officers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers.map((officer) => (
            <Card
              key={officer.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{officer.name}</h3>
                      <Badge className="mb-4 bg-[#FFB800] text-black font-semibold">
                        {officer.title}
                      </Badge>
                      <p className="text-sm leading-relaxed mb-4">{officer.bio}</p>
                      <div className="flex justify-center space-x-4">
                        <a
                          href={`mailto:${officer.email}`}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                        <a
                          href={officer.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                          </a>
                          <a
                          href={officer.insta}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <InstagramIcon className="h-4 w-4" />
                        </a>
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
                    {officer.title}
                  </Badge>

                  {/* Desktop Contact Info */}
                  <div className="mt-4 hidden md:block">
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <a
                        href={`mailto:${officer.email}`}
                        className="flex items-center hover:text-[#00468B]"
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </a>
                      <a
                        href={officer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-[#00468B]"
                      >
                        <Linkedin className="h-3 w-3 mr-1" />
                        LinkedIn
                      </a>
                      <a
                        href={officer.insta}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-[#00468B]"
                      >
                        <InstagramIcon className="h-3 w-3 mr-1" />
                        IG
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#00468B] to-[#FFB800] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Leadership Team?</h3>
            <p className="text-lg mb-6 opacity-90">
              We're always looking for passionate students to help lead our community and drive innovation
            </p>
            <button className="bg-white text-[#00468B] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
              Learn About Leadership Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Officers;