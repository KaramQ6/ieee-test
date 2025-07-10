import React from 'react';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <Footer />
    </div>
  );
};

export default HomePage;