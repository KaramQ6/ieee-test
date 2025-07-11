import React from 'react';
const JoinJSYP = () => {
return (

{/* Hero */}

Jordan Students and Young Professionals (JSYP)
Innovation meets Impact.

Empowering Jordan's next generation of tech leaders.


Explore Events
Join Us


  {/* About */}
  <section id="about" className="py-24 px-6 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Building Jordan's Digital Future, Together</h2>
    <div className="md:flex gap-10">
      <p className="md:w-1/2 mb-8 md:mb-0">
        JSYP is affiliated with IEEE and driven by a vision to foster innovation through community, technology, and impact.
      </p>
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/10 p-6 rounded-xl">Community<br /><small>Connecting Jordan's brightest tech minds.</small></div>
        <div className="bg-white/10 p-6 rounded-xl">Technology<br /><small>Exploring cutting-edge fields like AI and IoT.</small></div>
        <div className="bg-white/10 p-6 rounded-xl">Impact<br /><small>Creating tangible solutions for national challenges.</small></div>
      </div>
    </div>
  </section>

  {/* Mission */}
  <section id="mission" className="py-24 px-6 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10">Our Mission</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white/10 p-6 rounded-xl">Skill Development<br /><small>Workshops and training sessions.</small></div>
      <div className="bg-white/10 p-6 rounded-xl">Networking<br /><small>Opportunities to connect students and professionals.</small></div>
      <div className="bg-white/10 p-6 rounded-xl">Innovation<br /><small>Hackathons to solve real-world problems.</small></div>
    </div>
  </section>

  {/* Hackathon */}
  <section id="hackathon" className="py-24 px-6 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Flagship Event: JSYP Hackathon 2025</h2>
    <p className="text-lg text-gray-300 mb-8">Building a Smart Jordan with AI & IoT</p>
    <p className="mb-6">Challenge: Solve urban challenges in Health, Education, Tourism, Water, and Transportation using AI/IoT in teams of 2–3.</p>
    <div className="bg-white/10 p-6 rounded-xl text-left">
      <h3 className="text-2xl font-bold mb-4">Timeline</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Second Phase: 5–24 July</li>
        <li>Semi-final: 27 July – 10 Aug</li>
        <li>Final Pitch Day: 16 Aug</li>
      </ul>

      <h3 className="text-2xl font-bold mt-6 mb-4">Scoring Criteria</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Innovation – 25pts</li>
        <li>Impact – 20pts</li>
        <li>Feasibility – 15pts</li>
        <li>Use of AI/IoT – 20pts</li>
        <li>Scalability – 15pts</li>
        <li>Presentation – 5pts</li>
        <li>Practical Bonus – 25pts</li>
      </ul>

      <a href="#" className="block mt-6 text-center bg-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">View Hackathon Details</a>
    </div>
  </section>

  {/* Team */}
  <section id="team" className="py-24 px-6 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10">Meet the Team</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="bg-white/10 p-4 rounded-xl">
          <div className="w-24 h-24 bg-gray-500 rounded-full mx-auto mb-4"></div>
          <h4 className="font-bold">Name {i}</h4>
          <p>Role</p>
        </div>
      ))}
    </div>
  </section>

  {/* Partners */}
  <section id="partners" className="py-24 px-6 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10">Our Valued Partners</h2>
    <div className="flex overflow-x-auto space-x-8 p-4 bg-white/5 rounded-xl">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="w-32 h-16 bg-gray-400 rounded-md flex items-center justify-center text-black font-bold">
          Logo {i}
        </div>
      ))}
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Build the Future of Jordan?</h2>
    <p className="mb-8">Students, professionals, and partners — we want to hear from you.</p>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-100 text-black" />
      <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-100 text-black" />
      <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-100 text-black" rows="4"></textarea>
      <button type="submit" className="bg-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition">Send Message</button>
    </form>
  </section>

  {/* Footer */}
  <footer className="text-center text-sm py-6 bg-indigo-900">© 2025 JSYP - All Rights Reserved.</footer>
</div>

);
};
export default JoinJSYP;
