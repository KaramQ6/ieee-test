import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { openingDayEvent } from '../data/mockData';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-[#FFB800]">
            <div className="text-2xl md:text-3xl font-bold text-[#00468B]">{value}</div>
            <div className="text-sm text-gray-600 capitalize">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

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
      <div className="bg-gradient-to-r from-[#00468B] to-[#FFB800] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center mb-4 text-white hover:text-blue-100 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Opening Day Event
          </h1>
          <p className="text-xl opacity-90">
            Join us for the official launch of our IEEE Student Branch
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Event Details */}
          <div className="space-y-8">
            {/* Event Info Card */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00468B]">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {openingDayEvent.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-[#FFB800]" />
                    <div>
                      <p className="font-semibold text-gray-900">{formattedDate}</p>
                      <p className="text-sm text-gray-600">Event Date</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#FFB800]" />
                    <div>
                      <p className="font-semibold text-gray-900">{openingDayEvent.time}</p>
                      <p className="text-sm text-gray-600">Start Time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <MapPin className="h-5 w-5 text-[#FFB800]" />
                    <div>
                      <p className="font-semibold text-gray-900">{openingDayEvent.location}</p>
                      <p className="text-sm text-gray-600">Venue</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registration Card */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-[#00468B] to-[#FFB800] text-white">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-4">Reserve Your Spot</h3>
                <p className="mb-6 opacity-90">
                  Don't miss out on this exciting opportunity to be part of our IEEE community
                </p>
                <Button className="bg-white text-[#00468B] hover:bg-gray-100 font-bold px-8 py-3">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Countdown and Agenda */}
          <div className="space-y-8">
            {/* Countdown Timer */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00468B] text-center">
                  Event Countdown
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <CountdownTimer targetDate={eventDateTime} />
                <p className="text-center text-gray-600 mt-4">
                  Until the big day arrives!
                </p>
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00468B]">Event Agenda</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {openingDayEvent.agenda.map((item, index) => (
                    <div key={index} className="border-l-4 border-[#FFB800] pl-4 pb-4">
                      <div className="flex items-start space-x-3">
                        <Badge variant="outline" className="text-[#00468B] border-[#00468B] font-semibold">
                          {item.time}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-gray-900 mt-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <Card className="shadow-lg border-0 bg-gray-100">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-[#00468B] mb-4">
                Ready to Join the IEEE Family?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                This opening day event is just the beginning of an amazing journey in technology and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00468B] hover:bg-[#003d7a] text-white px-8 py-3">
                  Learn More About IEEE
                </Button>
                <Button variant="outline" className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-black px-8 py-3">
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