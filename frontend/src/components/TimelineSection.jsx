import React from "react";

const TimelineSection = ({ timeline }) => {
  return (
    <section id="timeline" className="my-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#00468B]">IEEE Timeline</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow border-l-4 border-[#FFB800]"
          >
            <h3 className="text-xl font-semibold text-[#00468B]">
              {item.year} — {item.title}
            </h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;