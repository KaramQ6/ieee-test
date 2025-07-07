import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OfficersPage from "./pages/OfficersPage";
import OpeningDayPage from "./pages/OpeningDayPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/opening-day" element={<OpeningDayPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;