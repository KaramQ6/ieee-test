import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Officers from '../components/Officers';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Officers />
      <Footer />
    </div>
  );
};

export default HomePage;