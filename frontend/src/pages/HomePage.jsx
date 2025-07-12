import React, { memo, Suspense } from 'react';

// Eagerly load Hero for above-the-fold content
import Hero from '../components/Hero';

// Lazy load Timeline since it's below the fold
const Timeline = React.lazy(() => import('../components/Timeline'));

// Loading component for Timeline
const TimelineLoading = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<TimelineLoading />}>
        <Timeline />
      </Suspense>
    </>
  );
};

export default memo(HomePage);