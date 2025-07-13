import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

// Eagerly load critical components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load page components for code splitting
const HomePage = React.lazy(() => import("./pages/HomePage"));
const OfficersPage = React.lazy(() => import("./pages/OfficersPage"));
const OpeningDay = React.lazy(() => import("./components/OpeningDay"));
const AboutIEEE = React.lazy(() => import("./components/AboutIEEE"));
const JoinJSYP = React.lazy(() => import("./components/JoinJSYP"));

// Loading component with proper accessibility
const PageLoadingSpinner = () => (
  <div 
    className="flex items-center justify-center min-h-[50vh]"
    role="status"
    aria-label="Loading page content"
  >
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-6">
        We apologize for the inconvenience. Please try refreshing the page.
      </p>
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Try again
      </button>
      <details className="mt-4 text-left">
        <summary className="text-sm text-gray-500 cursor-pointer">Error details</summary>
        <pre className="text-xs text-gray-400 mt-2 overflow-auto">
          {error.message}
        </pre>
      </details>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        // Log error to monitoring service in production
        if (import.meta.env.PROD) {
          console.error('App Error:', error, errorInfo);
        }
      }}
    >
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow" role="main">
            <Suspense fallback={<PageLoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/officers" element={<OfficersPage />} />
                <Route path="/opening-day" element={<OpeningDay />} />
                <Route path="/about-ieee" element={<AboutIEEE />} />
                <Route path="/join-jsyp" element={<JoinJSYP />} />
                {/* 404 fallback */}
                <Route path="*" element={
                  <div className="min-h-[50vh] flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900">404</h1>
                      <p className="text-gray-600 mt-2">Page not found</p>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;