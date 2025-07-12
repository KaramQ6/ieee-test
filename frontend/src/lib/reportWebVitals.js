// Web Vitals reporting for performance monitoring
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Default performance monitoring
export default function reportWebVitals() {
  const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';
  
  function sendToAnalytics(metric) {
    const body = JSON.stringify(metric);
    
    // Use sendBeacon if available, fallback to fetch
    if (navigator.sendBeacon) {
      navigator.sendBeacon(vitalsUrl, body);
    } else {
      fetch(vitalsUrl, { body, method: 'POST', keepalive: true });
    }
  }

  try {
    reportWebVitals(sendToAnalytics);
  } catch (err) {
    console.warn('Web Vitals reporting failed:', err);
  }
}
