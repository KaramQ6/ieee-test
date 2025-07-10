import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import OfficersPage from "./pages/OfficersPage";
import OpeningDay from "./components/OpeningDay";
import AboutIEEE from "./components/AboutIEEE";
import JoinJSYP from "./pages/JoinJSYP"; // <-- 1. Import the new page

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar appears on all pages */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/opening-day" element={<OpeningDay />} />
          <Route path="/about-ieee" element={<AboutIEEE />} />
          <Route path="/join-jsyp" element={<JoinJSYP />} /> {/* <-- 2. Add the new route */}
        </Routes>
      </main>
      <Footer /> {/* Footer appears on all pages */}
    </BrowserRouter>
  );
}

export default App;
