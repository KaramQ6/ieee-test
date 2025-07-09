import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

import { Badge } from './ui/badge';

import { Button } from './ui/button';

import { Calendar, Clock, MapPin, Users, ArrowLeft, Star } from 'lucide-react';

import { Link } from 'react-router-dom';

import { openingDayEvent } from '../data/mockData';

import EventCountdown from '../components/EventCountdown';


const OpeningDay = () => {

  // هنا حوّل الوقت من "10:00 AM" لصيغة 24 ساعة بدون AM/PM

  const convertTo24Hour = (timeStr) => {

    // timeStr متوقع تكون مثلاً "10:00 AM" أو "02:30 PM"

    const [time, modifier] = timeStr.split(' ');

    let [hours, minutes] = time.split(':');

    if (modifier === 'PM' && hours !== '12') {

      hours = String(parseInt(hours, 10) + 12);

    }

    if (modifier === 'AM' && hours === '12') {

      hours = '00';

    }

    return `${hours.padStart(2, '0')}:${minutes}:00`;

  };


  const time24 = convertTo24Hour(openingDayEvent.time);

  const eventDateTime = `${openingDayEvent.date}T${time24}`;


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

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Opening Day Event

          </h1>

          <p className="text-xl md:text-2xl opacity-90">

            Join us for the official launch of our IEEE Student Branch

          </p>

        </div>

      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column - Event Details */}

          <div className="space-y-8">

            {/* Event Info Card */}

            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">

              <CardHeader>

                <CardTitle className="text-2xl text-[#00468B] flex items-center">

                  <Calendar className="h-6 w-6 mr-2" />

                  Event Details

                </CardTitle>

              </CardHeader>

              <CardContent className="space-y-6">

                <p className="text-gray-700 leading-relaxed">

                  {openingDayEvent.description}

                </p>


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


            {/* Registration Card */}

            <Card className="shadow-lg border-0 bg-gradient-to-r from-[#00468B] to-[#FFB800] text-white">

              <CardContent className="p-8 text-center">

                <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />

                <h3 className="text-xl font-bold mb-4">Reserve Your Spot</h3>

                <p className="mb-6 opacity-90">

                  Don't miss out on this exciting opportunity to be part of our IEEE community

                </p>

                <Button className="bg-white text-[#00468B] hover:bg-gray-100 font-bold px-8 py-3 hover:scale-105 transition-transform duration-300">

                  Register Now

                </Button>

              </CardContent>

            </Card>

          </div>


          {/* Right Column - Countdown */}

          <div className="space-y-8">

            {/* Countdown Timer */}

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

        </div>


        {/* باقي الكود بدون تغيير... */}

      </div>

    </div>

  );

};


export default OpeningDay;