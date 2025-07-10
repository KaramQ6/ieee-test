import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OfficersPage from "./pages/OfficersPage";
import OpeningDayPage from "./pages/OpeningDayPage";

// The path is corrected to 'components' here
import AboutIEEE from "./components/AboutIEEE"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/opening-day" element={<OpeningDayPage />} />
          
          {/* This line is correct */}
          <Route path="/about-ieee" element={<AboutIEEE />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
