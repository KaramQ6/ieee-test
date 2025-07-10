import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // استورد الـ Navbar
import Footer from "./components/Footer"; // إذا عندك Footer ضيفه كمان

import HomePage from "./pages/HomePage";
import OfficersPage from "./pages/OfficersPage";
import OpeningDay from "./components/OpeningDay"; 
import AboutIEEE from "./components/AboutIEEE"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* صار يظهر بكل الصفحات */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/officers" element={<OfficersPage />} />
        <Route path="/opening-day" element={<OpeningDay />} />
        <Route path="/about-ieee" element={<AboutIEEE />} />
      </Routes>
      {/* <Footer /> ممكن تضيف الفوتر كمان تحت */}
    </BrowserRouter>
  );
}

export default App;