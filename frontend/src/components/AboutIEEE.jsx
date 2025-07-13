import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, BookOpen, Users, Zap, Award, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Video Card Component for reusability
const VideoCard = ({ title, description, url }) => (
  <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-xl text-[#00468B]">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-4">{description}</p>
      <Button asChild variant="outline">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Watch Video
        </a>
      </Button>
    </CardContent>
  </Card>
);

const AboutIEEE = () => {
  const ieeeJoinLink = 'https://www.ieee.org/membership/join/index.html';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00468B] to-[#FFB800] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center mb-6 text-white hover:text-blue-100 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About IEEE</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            The world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* What is IEEE Section */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-3xl text-[#00468B]">What is IEEE?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Institute of Electrical and Electronics Engineers (IEEE) is an international non-profit professional organization aimed at promoting technological innovation and development for the benefit of humanity. It is one of the largest organizations in the world specializing in electrical and electronic engineering, information technology (IT), and communications.
            </p>
            <p>
              Founded in 1963 from the merger of the Institute of Radio Engineers (IRE) and the American Institute of Electrical Engineers (AIEE), IEEE now has over 420,000 members in more than 160 countries.
            </p>
          </CardContent>
        </Card>

        {/* Key Areas Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#00468B] mb-8 text-center">Fields of Specialization</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {['Cyber Security', 'Computer Science', 'Computing & Software', 'Communications', 'Networking', 'Robotics', 'Artificial Intelligence', 'Electrical Engineering'].map((field) => (
              <div key={field} className="p-4 bg-white rounded-lg shadow-md">
                <p className="font-semibold text-gray-800">{field}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Importance in IT Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#00468B] mb-8 text-center">The Importance of IEEE in IT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="h-8 w-8 text-[#FFB800]" />, title: 'Standards Development', description: 'IEEE creates foundational standards like IEEE 802.11 (Wi-Fi), ensuring interoperability between devices worldwide.' },
              { icon: <BookOpen className="h-8 w-8 text-[#FFB800]" />, title: 'Research & Development', description: 'Publishes hundreds of thousands of research papers, serving as a primary reference for IT professionals.' },
              { icon: <Users className="h-8 w-8 text-[#FFB800]" />, title: 'Conferences & Networking', description: 'Organizes global conferences for sharing ideas and connecting with industry leaders and companies.' },
              { icon: <Award className="h-8 w-8 text-[#FFB800]" />, title: 'Education & Certifications', description: 'Offers advanced educational programs and globally recognized certifications to enhance professional skills.' },
            ].map((item) => (
              <Card key={item.title} className="text-center p-6 shadow-lg border-0">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#00468B] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Learn More Videos Section */}
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#00468B] mb-8 text-center">Learn More About IEEE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <VideoCard 
                    title="IEEE Introduction"
                    description="An overview of the IEEE, highlighting its mission as the world's largest professional association for advancing technology, its global reach, and the benefits of membership like networking, workshops, and scholarships."
                    url="https://youtu.be/msCpKC7yhhU?si=5pXRC5pkquYfgJW9"
                />
                <VideoCard 
                    title="What is IEEE - ماهي منظمة IEEE العالمية"
                    description="This video explains what IEEE is, its non-profit nature, its mission to advance technology for humanity, and its key activities including research publication, conferences, and developing standards."
                    url="https://youtu.be/7LTttej4i3A?si=5UgeCfoAxBE0DRM2"
                />
            </div>
        </div>

        {/* Join and Contact Section */}
        <div className="mt-16">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-[#00468B] to-[#FFB800] text-white">
            <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Ready to Join the Future of Technology?</h3>
                <p className="mb-6 opacity-90">
                  If you're interested in IEEE, go ahead and join us. Become part of a global community of innovators.
                </p>
                <Button asChild className="bg-white text-[#00468B] hover:bg-gray-100 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                  <a href={ieeeJoinLink} target="_blank" rel="noopener noreferrer">
                    Join IEEE Now
                  </a>
                </Button>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-white/30 pl-0 md:pl-8 pt-6 md:pt-0">
                 <h4 className="text-xl font-bold mb-4 flex items-center"><Phone className="h-5 w-5 mr-3"/>For More Information, Contact Us</h4>
                 <div className="space-y-2 text-lg">
                    <p>0799193812</p>
                    <p>0792300271</p>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutIEEE;
