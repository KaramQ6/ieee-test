// Mock data for the IEEE Jadara University Student Branch website

export const officers = [
  {
    id: 1,
    name: "Rayan Dahdooly",
    title: "Chair",
    bio: "Computer Science student.",
    image: "/images/rayan.webp",
    email: "chair@ieee-jadara.org",
    linkedin: "https://www.linkedin.com/in/rayan-dahdooly",
    insta: "https://www.instagram.com/rayan_dahdooly/",
  },
  {
    id: 2,
    name: "Abdelsamad Jaradat",
    title: "Vice Chair",
    bio: "",
    image: "/images/abdelsamad.webp",
    email: "vice-chair@ieee-jadara.org",
    linkedin: "https://www.linkedin.com/in/abdelsamad-jaradat-1194a6291",
    insta: "https://www.instagram.com/abdelsamad.20/",
  },
  {
    id: 3,
    name: "Abdelmonm Alsnajleh",
    title: "Secretary",
    bio: "",
    image: "/images/abdelmonm.webp",
    email: "secretary@ieee-jadara.org",
    linkedin: "https://www.linkedin.com/in/5y3b",
    // FIX: Corrected typo "hhttps" to "https"
    insta: "https://www.instagram.com/5y3.b/",
  },
  {
    id: 4,
    name: "Suliman Alkasasbeh",
    title: "Treasurer",
    bio: "Computer Science student at Jadara University with a passion for data science. Active IEEE member and Treasurer of the student branch. Ambassador for the IEEE Modeling Hackathon, dedicated to promoting innovation and teamwork in the tech field.",
    image: "/images/suliman.webp",
    email: "treasurer@ieee-jadara.org",
    linkedin: "https://www.linkedin.com/in/suliman-alkasasbeh-b58822364",
    insta: "https://www.instagram.com/suliman__alkasasbeh/",
  },
  {
    id: 5,
    name: "Abdallah Abdalrohman",
    title: "Media Chair",
    bio: "Robotics and artificial intelligence.",
    image: "/images/abdallah.webp",
    email: "Abdallahalshyyab@ieee.org",
    linkedin: "https://www.linkedin.com/in/abdallah-abd-alrohman-67a6b8276",
    insta: "https://www.instagram.com/iaboodomar/",
  },
];

export const ieeeTimeline = [
  {
    year: "1884",
    title: "IEEE Founded",
    description:
      "The Institute of Electrical and Electronics Engineers was established.",
  },
  {
    year: "1963",
    title: "Global Expansion",
    description: "IEEE expanded internationally with regional offices worldwide.",
  },
  {
    year: "1980",
    title: "Student Branches",
    description:
      "IEEE Student Branch program launched to support student engagement.",
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description:
      "IEEE embraced digital transformation for enhanced member experience.",
  },
  {
    year: "2025",
    title: "Jadara Branch",
    description: "IEEE Jadara University Student Branch officially established.",
  },
];

export const openingDayEvent = {
  title: "IEEE Jadara University Student Branch Opening Day",
  description:
    "Join us for the official launch of IEEE Jadara University Student Branch! This inaugural event will introduce our mission, showcase opportunities, and welcome new members to our growing community.",
  date: "2025-07-15",
  time: "10:00:00", // 24-hour format
  location: "Main Auditorium, Jadara University",
  schedule: [
    {
      time: "9:00 AM - 10:30 AM",
      session: "Registration",
      // FIX: Added quotes around the description string
      description:
        "Welcoming attendees, distributing name tags, and guiding guests to their seats.",
    },
    {
      time: "10:00 AM - 11:00 AM",
      session: "Coffee Break",
      // FIX: Added quotes and corrected the text
      description:
        "Serving coffee and light refreshments. A chance for networking and informal introductions.",
    },
    {
      time: "11:00 AM - 11:03 AM",
      session: "The Jordanian National Anthem",
      // FIX: Added quotes around the description string
      description: "All attendees stand for the national anthem of Jordan.",
    },
    {
      time: "11:03 AM - 11:05 AM",
      session: "Welcome Speech",
      speaker: "Prof. Belal Zaqaibeh, Dean of IT Faculty",
      description: null,
    },
    {
      time: "11:05 AM - 11:08 AM",
      session: "The Holy Quran",
      speaker: "Dr. Saeed Namarneh",
      description:
        "A brief and respectful Quran recitation by one of the students.",
    },
    {
      time: "11:10 AM - 11:15 AM",
      session: "Opening Speech",
      speaker: "Prof. Belal Zaqaibeh, Dean of IT Faculty",
      description: null,
    },
    {
      time: "11:15 AM - 11:25 AM",
      session: "Speech",
      speaker: "Prof. Habis Al-Hatamleh, President of Jadara University",
      description: null,
    },
    {
      time: "11:25 AM - 11:30 AM",
      session: "Speech",
      speaker: "Rayan Dahdooly, IEEE Student Branch Leader",
      description: null,
    },
    {
      time: "11:35 AM - 11:50 AM",
      session: "Speech",
      speaker: "Dr. Mousa AlAkhras, IEEE Jordan Section",
      description: null,
    },
    {
      time: "11:50 AM - 12:00 PM",
      session: "Group Photo",
      speaker: "All Participants",
      // FIX: Added quotes around the description string
      description:
        "A group photo with all participants and guests to commemorate the event.",
    },
    {
      time: "12:00 PM - 1:30 PM",
      session: "Activity Continues",
      speaker: "All Participants",
      description:
        "Visit our activity booths and interact with different teams and student projects.",
    },
  ],
  sponsors: [
    {
      name: "IEEE Region 8",
      logo: "https://via.placeholder.com/200x100/00468B/FFFFFF?text=IEEE+Region+8",
      tier: "Gold",
    },
    {
      name: "Jadara University",
      logo: "https://via.placeholder.com/200x100/FFB800/000000?text=Jadara+University",
      tier: "Gold",
    },
    {
      name: "Tech Innovation Hub",
      logo: "https://via.placeholder.com/200x100/00468B/FFFFFF?text=Tech+Hub",
      tier: "Silver",
    },
    {
      name: "Future Engineers Society",
      logo: "https://via.placeholder.com/200x100/FFB800/000000?text=Future+Engineers",
      tier: "Silver",
    },
  ],
};

export const branchInfo = {
  name: "IEEE Jadara University Student Branch",
  tagline: "Advancing Technology for Humanity",
  mission:
    "To advance technology for humanity while fostering innovation and professional growth among students at Jadara University. We strive to create a vibrant community of future engineers and technologists who will shape tomorrow's world.",
  established: "2025",
  membersCount: "150+",
  activitiesCount: "25+",
  contact: {
    email: "info@ieee-jadara.org",
    phone: "+962-xxxxxxx",
    address: "Jadara University, Irbid, Jordan",
  },
};

export const socialLinks = {
  instagram: "https://instagram.com/ieee_ju",
  linkedin:
    "https://www.linkedin.com/company/ieee-jadara-university-student-branch",
  email: "info@ieee-jadara.org",
};

export const quickLinks = [
  { name: "About IEEE", href: "#about" },
  { name: "Membership", href: "#membership" },
  { name: "Events", href: "#events" },
  { name: "Workshops", href: "#workshops" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];