import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OfficersPage from "./pages/OfficersPage";
import OpeningDayPage from "./pages/OpeningDayPage";

// 1. التصحيح: استيراد المكون بالاسم الصحيح
import AboutIEEE from "./pages/AboutIEEE"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/opening-day" element={<OpeningDayPage />} />
          
          {/* 2. التصحيح: استخدام المكون بالاسم الصحيح */}
          <Route path="/about-ieee" element={<AboutIEEE />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
