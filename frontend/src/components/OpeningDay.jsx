import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { openingDayEvent } from '../data/mockData';
import EventCountdown from '../components/EventCountdown';

const OpeningDay = () => {
  const eventDateTime = `${openingDayEvent.date}T${openingDayEvent.time}`;
  const formattedDate = new Date(openingDayEvent.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00468B] to-[#FFB800] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center mb-6 text-white hover:text-blue-100 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Opening Day Event</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Join us for the official launch of our IEEE Student Branch
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Event Details + Countdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Event Details Card */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-[#00468B] flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{openingDayEvent.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-[#FFB800]" />
                  <div>
                    <p className="font-semibold text-gray-900">{formattedDate}</p>
                    <p className="text-sm text-gray-600">Event Date</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="h-5 w-5 text-[#FFB800]" />
                  <div>
                    <p className="font-semibold text-gray-900">{openingDayEvent.time}</p>
                    <p className="text-sm text-gray-600">Start Time</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg md:col-span-2">
                  <MapPin className="h-5 w-5 text-[#FFB800]" />
                  <div>
                    <p className="font-semibold text-gray-900">{openingDayEvent.location}</p>
                    <p className="text-sm text-gray-600">Venue</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Countdown Timer Card */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-[#00468B] text-center">
                Event Countdown
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <EventCountdown targetDate={eventDateTime} />
              <p className="text-center text-gray-600 mt-6 text-lg">
                Until the big day arrives!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Section */}
        <div className="mt-20">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-3xl text-[#00468B] text-center mb-4">
                Event Schedule
              </CardTitle>
              <p className="text-center text-gray-600">
                A comprehensive program designed to introduce you to the IEEE community
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {openingDayEvent.schedule.map((session, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#FFB800] pl-6 pb-6 hover:bg-gray-50 transition-colors duration-300 rounded-r-lg"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <Badge variant="outline" className="text-[#00468B] border-[#00468B] font-semibold mb-2 md:mb-0">
                        {session.time}
                      </Badge>
                      <div className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2">Speaker:</span>
                        <span className="font-semibold">{session.speaker}</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{session.session}</h4>
                    <p className="text-gray-600">{session.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsors */}
        <div className="mt-20">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-3xl text-[#00468B] text-center mb-4">
                Our Partners & Sponsors
              </CardTitle>
              <p className="text-center text-gray-600">
                Supporting organizations that make this event possible
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {openingDayEvent.sponsors.map((sponsor, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-[#FFB800]">
                      <div className="flex items-center justify-center mb-4">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-w-full h-16 object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{sponsor.name}</h4>
                      <Badge className={`${sponsor.tier === 'Gold' ? 'bg-[#FFB800] text-black' : 'bg-gray-200 text-gray-800'}`}>
                        {sponsor.tier} Sponsor
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-gray-50 to-blue-50">
            <CardContent className="p-12">
              <Star className="h-12 w-12 text-[#FFB800] mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-[#00468B] mb-4">
                Ready to Join the IEEE Family?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                This opening day event is just the beginning of an amazing journey in technology and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00468B] hover:bg-[#003d7a] text-white px-8 py-3 hover:scale-105 transition-transform duration-300">
                  Learn More About IEEE
                </Button>
                <Button variant="outline" className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-black px-8 py-3 hover:scale-105 transition-transform duration-300">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OpeningDay;