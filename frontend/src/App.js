import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OfficersPage from "./pages/OfficersPage";
import OpeningDay from "./components/OpeningDay";
import AboutIEEE from "./components/AboutIEEE";

// Corrected the import path to point to the 'components' folder
import JoinJSYP from "./components/JoinJSYP"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/opening-day" element={<OpeningDay />} />
          <Route path="/about-ieee" element={<AboutIEEE />} />
          <Route path="/join-jsyp" element={<JoinJSYP />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
