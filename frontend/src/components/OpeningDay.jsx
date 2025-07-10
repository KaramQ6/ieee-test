import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { openingDayEvent } from '../data/mockData';
import EventCountdown from '../components/EventCountdown';

const OpeningDay = () => {
  const eventDateTime = `${openingDayEvent.date}T10:00:00`;

  const formattedDate = new Date(openingDayEvent.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Styled to match Officers page */}
      <div className="bg-gradient-to-r from-[#00468B] to-[#FFB800] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center mb-6 text-white hover:text-blue-100 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Opening Day Event</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            Join us for the official launch of our IEEE Student Branch
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Event Details and Countdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-[#FFB800]" />
                  <div>
                    <p className="font-semibold text-gray-900">{formattedDate}</p>
                    <p className="text-sm text-gray-600">Event Date</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
                  <Clock className="h-5 w-5 text-[#FFB800]" />
                  <div>
                    <p className="font-semibold text-gray-900">10:00 AM</p>
                    <p className="text-sm text-gray-600">Start Time</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg md:col-span-2">
                  <MapPin className="h-5 w-5 text-[#FFB800]" />
                  <div>
                    <p className="font-semibold text-gray-900">{openingDayEvent.location}</p>
                    <p className="text-sm text-gray-600">Venue</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Countdown Card */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-[#00468B] text-center">Event Countdown</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <EventCountdown targetDate={eventDateTime} />
              <p className="text-center text-gray-600 mt-6 text-lg">Until the big day arrives!</p>
            </CardContent>
          </Card>
        </div>

        {/* Event Schedule Timeline */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#00468B] mb-8 text-center">Event Schedule</h2>
          <div className="space-y-6">
            {openingDayEvent.schedule.map((item, index) => (
              <Card key={index} className="border-l-4 border-[#FFB800] bg-white shadow-md">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2 text-[#00468B]" />
                    {item.time}
                  </div>
                  <h3 className="text-xl font-semibold text-[#00468B]">{item.session}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mic className="h-4 w-4 mr-2 text-[#FFB800]" />
                    {item.speaker}
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Registration Call to Action */}
        <div className="mt-16">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-[#00468B] to-[#FFB800] text-white">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Reserve Your Spot</h3>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                Don't miss out on this exciting opportunity to be part of our IEEE community.
              </p>
              <Button className="bg-white text-[#00468B] hover:bg-gray-100 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                Register Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OpeningDay;
