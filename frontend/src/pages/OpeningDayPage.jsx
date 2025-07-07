import React from 'react';
import Navbar from '../components/Navbar';
import OpeningDay from '../components/OpeningDay';
import Footer from '../components/Footer';

const OpeningDayPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <OpeningDay />
      <Footer />
    </div>
  );
};

export default OpeningDayPage;