/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Amartya",
  last: "Jha",
  fullName: "Amartya Jha",
  tagline: "Aspiring Robotics & Drone Engineer • National Footballer • FRC Rookie All-Star",
  location: "Noida, India",
  email: "",
  phone: "",
  bio: [
    "I enjoy understanding how machines and systems come together — whether it's through robotics, electronics, or simply exploring how different parts work as one. I've always preferred learning by doing, which is probably why I enjoy building things, experimenting, and working hands-on.",
    "My interest in robotics grew through FRC, where I learned CAD and programming, worked with a team to build a robot, and experienced what it takes to turn an idea into something real. Since then, internships involving drone systems, electronics, and soldering have helped me explore engineering in more practical ways. What excites me most is the process of solving problems, building something meaningful, and learning from every step of it.",
    "Outside of engineering, I enjoy playing football and being part of team environments that push me to stay disciplined and keep improving.",
  ],
  quote:
    "I want to keep learning how things work — and more importantly, how they can work better. Whether through robotics, engineering, or hands-on building, I enjoy exploring ideas that combine creativity with problem-solving.",
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/placeholder.jpg",
  photo: "/placeholder.png",
  aboutPhoto: "/placeholder.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Experience (renders as "Work Experience" cards) — Internships ---- */

export const EXPERIENCE = [
  {
    slug: "endure-air-drone-intern",
    role: "Drone Technology Intern",
    org: "Endure Air",
    logo: "/logos/endure-air.png",
    location: "Noida, India",
    dates: "May – June 2025 · 15 days",
    meta: "May – June 2025 · 15 days · Noida, India ·",
    badge: "Internship",
    desc: "Stepped into a professional drone engineering lab with one clear brief: design and build the radio transmitter system for a drone from scratch. Over two weeks, worked alongside engineers to understand how aerodynamics, hardware design, and manufacturing connect in a real production environment.",
    bullets: [
      "Designed and built the radio transmitter system for drone prototypes",
      "Applied CAD software and aerodynamics principles in live manufacturing contexts",
      "Gained hands-on exposure to hardware prototyping and production workflows",
    ],
    tags: ["Drone Engineering", "CAD", "Aerodynamics", "Radio Systems", "Hardware Prototyping"],
    featured: true,
  },
  {
    slug: "addverb-robotics-intern",
    role: "Robotics Intern",
    org: "Addverb Technologies",
    logo: "/logos/addverb.png",
    location: "Noida, India",
    dates: "2024",
    meta: "2024 · Noida, India ·",
    badge: "Internship",
    desc: "Worked inside one of India's leading industrial robotics companies, with hands-on time in their hardware lab. Rather than shadowing, I was soldering circuits, studying mechanical systems, and debugging assemblies on an advanced robot dog platform.",
    bullets: [
      "Worked with electronics and soldering in a professional robotics lab",
      "Studied the mechanical and electronic architecture of the robot dog system",
      "Built practical skills in circuit assembly, debugging, and systems integration",
    ],
    tags: ["Soldering", "Electronics", "Robotics", "Circuit Assembly", "Systems Integration"],
    featured: true,
  },
];

/* ---- Projects (Research & Projects) ---- */

export const PROJECTS = [
  {
    name: "FIRST Robotics Competition (FRC) — Chicago Regional",
    org: "Team Co-founder · CAD & Programming · Competitor",
    meta: "2022 · Rookie All-Star Award — Chicago Regional",
    desc: "Started with five months of self-directed learning in CAD and robot programming before a team even existed. Then assembled a group of ten, spent three months designing and building a full competition robot, and flew to Chicago to compete in an international FRC regional — as a first-year, rookie squad.",
    tags: ["CAD", "Robot Programming", "Mechanical Engineering", "Team Building", "Problem-Solving Under Pressure"],
    featured: true,
  },
  {
    name: "ICT Team — Media & Content Production",
    org: "Member · School ICT Initiative",
    meta: "2025",
    desc: "Joined the school's ICT team to produce video content for educational and promotional programmes — handling editing, scripting, and visual storytelling for a school-wide audience.",
    tags: ["Video Production", "Editing", "Scriptwriting", "Multimedia Storytelling"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🏆",
    title: "FRC Rookie All-Star Award",
    meta: "International · FIRST Robotics Competition — Chicago Regional · 2022",
    detail: "Awarded the Rookie All-Star Award, recognizing our first-year FRC team for outstanding engineering, professionalism, and community impact. Winning this prestigious regional honor validated our success both on and off the field.",
    link: "",
    featured: true,
  },
  {
    icon: "⚽",
    title: "National Football Competitor — ISSO",
    meta: "National, India · Inter-School Sports Organisation (ISSO) · 2023 – Present",
    detail: "Selection for ISSO national football is based on competitive performance across regional qualifying rounds. Maintaining consistent national-level selection across multiple years — while managing an IB workload — reflects both athletic ability and personal discipline.",
    link: "",
    featured: true,
  },
  {
    icon: "🧪",
    title: "IGCSE — A* In Chemistry",
    meta: "Cambridge International Examinations · 2023",
    detail: "The A* is the highest grade awarded by Cambridge IGCSE, requiring performance above 90% across paper components. Chemistry A* confirmed a scientific aptitude that has since been built on through HL IB Chemistry.",
    link: "",
    featured: true,
  },
  {
    icon: "🎥",
    title: "ICT Media Team — Selected Member",
    meta: "School · 2025",
    detail: "Selected by the school to join the ICT media team, responsible for producing educational and promotional video content — reflecting technical competence in video production and communication beyond core academic subjects.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of Interest ---- */

export const ARTICLES = [
  {
    title: "Robotics & Mechatronics",
    outlet: "Building robots and robot-dog platforms, from CAD design to circuit assembly",
    link: "",
  },
  {
    title: "Drone Engineering & Aerodynamics",
    outlet: "Radio transmitter systems and aerodynamics principles applied in live manufacturing",
    link: "",
  },
  {
    title: "CAD, Electronics & Hardware Prototyping",
    outlet: "Hardware prototyping, soldering, and circuit design across internships and FRC",
    link: "",
  },
  {
    title: "Video Production & Storytelling",
    outlet: "Communicating ideas visually through editing, scripting, and multimedia content",
    link: "",
  },
];

/* ---- Leadership, community & personal growth ---- */

export const VOLUNTEER = {
  stats: [
    { value: "2", label: "Engineering Internships" },
    { value: "10", label: "FRC Team Members Co-Founded" },
    { value: "3+", label: "Years National Football" },
  ],
  orgs: [
    {
      name: "Dr. A.V. Baliga Memorial Trust",
      role: "Volunteer (Planned) · 2026",
      desc: "The Dr. A.V. Baliga Memorial Trust works toward improving healthcare access for communities that lack it. I'm in the process of arranging to volunteer here — contributing time and effort in whatever capacity is most useful to the organisation. I think students preparing for careers in engineering or science have a responsibility to look beyond their own ambitions, and this is one way of doing that.",
    },
    {
      name: "Leadership & Personal Growth",
      role: "Across sport, robotics & community work",
      desc: "Experiences on the football pitch, in robotics labs, and through community initiatives have developed composure under pressure, teamwork, and the discipline to keep improving — qualities carried into every new engineering project.",
    },
  ],
};

/* ---- Beyond Academics (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "⚽",
    name: "Football — National Competitor",
    desc: "Football isn't something I do alongside everything else — it's the thing that balances everything else. Twice a week, every week, regardless of what's happening academically, I'm on the pitch. Playing at national level means competing against the best interschool talent in the country. It's taught me things no classroom has: how to stay composed under pressure, how to trust the people around you, and how to keep going when you're down by one in the 80th minute.",
  },
  {
    icon: "🎥",
    name: "ICT Team — Video Production",
    desc: "I joined the ICT team because I wanted to understand how to communicate ideas visually — not just through engineering drawings, but through video and editing. It gave me an appreciation for how much craft goes into making something that genuinely holds an audience's attention.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming & Design",
    items: ["CAD Design", "Robot Programming"],
  },
  {
    group: "Engineering & Hardware",
    items: ["Drone Engineering", "Radio Transmitter Systems", "Electronics & Soldering", "Circuit Assembly", "Aerodynamics", "Hardware Prototyping"],
  },
  {
    group: "Media",
    items: ["Video Production", "Editing", "Scriptwriting"],
  },
  {
    group: "Core Strengths",
    items: ["Discipline", "Team Building", "Teamwork", "Composure Under Pressure", "Problem-Solving Under Pressure"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "The Shriram Millennium School, Noida",
    location: "Noida, India",
    level: "IB Diploma Programme",
    dates: "Graduating June 2027",
    gpa: "",
    coursework: [
      "Mathematics AA — HL",
      "Chemistry — HL",
      "Physics — HL",
      "Environmental Systems & Societies — SL",
      "French B — SL",
      "English A — SL",
    ],
  },
  {
    school: "The Shriram Millennium School, Noida",
    location: "Noida, India",
    level: "Cambridge IGCSE",
    dates: "Completed May 2023",
    gpa: "",
    coursework: ["Chemistry", "Physics", "Biology", "French", "Mathematics", "Computer Science", "English Literature", "English Language"],
  },
];

export const TEST_SCORES = [
  {
    exam: "IB Predicted Grades (Grade 11)",
    date: "2025",
    breakdown: [
      { label: "Mathematics AA (HL)", value: "7" },
      { label: "Chemistry (HL)", value: "6" },
      { label: "Physics (HL)", value: "5" },
      { label: "Environmental Systems & Societies (SL)", value: "6" },
      { label: "French B (SL)", value: "5" },
      { label: "English A (SL)", value: "4" },
    ],
  },
  {
    exam: "Cambridge IGCSE Results",
    date: "May 2023",
    breakdown: [
      { label: "Chemistry", value: "A*" },
      { label: "Physics", value: "A" },
      { label: "Biology", value: "A" },
      { label: "French", value: "A" },
      { label: "Mathematics", value: "B" },
      { label: "Computer Science", value: "B" },
      { label: "English Literature", value: "B" },
      { label: "English Language", value: "C" },
    ],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];