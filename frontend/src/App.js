import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OfficersPage from "./pages/OfficersPage";

// Corrected import to point to the component file in the 'components' directory
import OpeningDay from "./components/OpeningDay"; 
import AboutIEEE from "./components/AboutIEEE"; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/officers" element={<OfficersPage />} />
          
          {/* Using the correct component name 'OpeningDay' */}
          <Route path="/opening-day" element={<OpeningDay />} />
          
          <Route path="/about-ieee" element={<AboutIEEE />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
