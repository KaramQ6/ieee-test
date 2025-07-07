import React from 'react';
import Navbar from '../components/Navbar';
import Officers from '../components/Officers';
import Footer from '../components/Footer';

const OfficersPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Officers />
      <Footer />
    </div>
  );
};

export default OfficersPage;