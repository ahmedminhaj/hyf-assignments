const DATA = {

  /* ── PERSONAL ─────────────────────────────────────────── */
  personal: {
    name:      "Minhaj Ahammed",
    title:     "Frontend Engineer",
    tagline:   ["Crafting", "fast", "interfaces."],  
    location:  "Aarhus, Denmark",
    email:     "ahammedminhaj.pro@gmail.com",
    phone:     "+45 77226881",
    github:    "https://github.com/ahmedminhaj",
    linkedin:  "https://linkedin.com/in/ahammed-minhaj",
    available: true,
    summary:   "Impact-focused Frontend Engineer specialising in scalable web and mobile applications. Experienced building high-performance systems that handle large volumes of API requests and concurrent users. Background across AdTech, EdTech, live sports platforms, and office management — delivering clean, maintainable code in agile environments.",
  },

  /* ── TECH STACK (icons from devicons CDN) ──────────────── */
  techStack: [
    { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  },
    { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  },
    { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"            },
    { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"          },
    { name: "Vue.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"            },
    { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"          },
    { name: "GraphQL",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"           },
    { name: "Jest",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"                 },
    { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"            },
    { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"        },
    { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"                },
    { name: "Figma",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"            },
  ],

  /* ── PROJECTS ────────────────────────────────────────── */
  projects: [
    {
      id:    "01",
      title: "AdTech DSP Platform",
      tag:   "AdTech",
      year:  "2022–25",
      desc:  "Delivered core frontend modules for a Demand-Side Platform — campaign, line item, creative, and reporting panels. Optimised API handling to cut response latency by 40% and enhanced platform performance by 35%.",
      stack: ["React", "TypeScript", "GraphQL", "RTK Query"],
      github: "https://github.com/ahmedminhaj",
    },
    {
      id:    "02",
      title: "Visitor Management App",
      tag:   "SaaS",
      year:  "2022–25",
      desc:  "Led creation of an appointment scheduling system for thousands of users across multiple companies, streamlining visitor workflows and improving time utilisation by 80%.",
      stack: ["Vue.js", "JavaScript", "RESTful API", "MySQL"],
      github: "https://github.com/ahmedminhaj/visitor-management",
    },
    {
      id:    "03",
      title: "Live Sports Score System",
      tag:   "Real-time",
      year:  "2019–22",
      desc:  "Built real-time cricket and football score systems with a 1.2-second update delay, supporting millions of concurrent users with zero downtime during peak match periods.",
      stack: ["React", "WebSocket", "MongoDB", "Node.js"],
      github: "https://github.com/ahmedminhaj",
    }
  ],

  /* ── EXPERIENCE ──────────────────────────────────────── */
  experience: [
    {
      role:    "Software Engineer",
      company: "Vivasoft Limited",
      period:  "Mar 2022 — May 2025",
      location:"Dhaka, Bangladesh",
      bullets: [
        "Delivered core frontend modules for an AdTech DSP — campaign, line item, creative & reporting panels. Optimised API handling to reduce response latency by <strong>40%</strong> and enhanced platform performance by <strong>35%</strong>.",
        "Led creation of a visitor management application streamlining appointment scheduling for thousands of users across multiple companies, improving time utilisation by <strong>80%</strong>.",
        "Modernised legacy codebases to improve system scalability, increasing application responsiveness by <strong>30%</strong> under peak loads.",
      ],
    },
    {
      role:    "Software Engineer",
      company: "Peddlecloud Limited",
      period:  "Feb 2019 — Mar 2022",
      location:"Dhaka, Bangladesh",
      bullets: [
        "Implemented an admin panel for course material and a live quiz system supporting concurrent users — maintaining zero downtime and significantly improving user engagement.",
        "Built real-time cricket and football score systems with a <strong>1.2-second delay</strong>, delivering near-instantaneous results to millions of users.",
        "Delivered an office management application with centralised admin tools for attendance, payroll, and cost tracking — improving productivity by <strong>70%</strong> and reducing operational costs by <strong>50%</strong>.",
      ],
    },
  ],

  /* ── EDUCATION ───────────────────────────────────────── */
  education: [
    {
      type:   "Degree",
      school: "North South University",
      degree: "Bachelor of Computer Science and Engineering",
      date:   "Apr 2014 — Dec 2018",
      place:  "Dhaka, Bangladesh",
    },
    {
      type:   "Certification",
      school: "HackYourFuture Denmark",
      degree: "Web Development Boot-camp",
      date:   "Oct 2025 — Present",
      place:  "Aarhus, Denmark",
    },
  ],

  /* ── STATS (hero terminal) ───────────────────────────── */
  stats: [
    { label: "API latency reduced",    value: "40%" },
    { label: "Platform perf boost",   value: "35%" },
    { label: "Productivity uplift",   value: "70%" },
  ],

  /* ── SOFT SKILLS ─────────────────────────────────────── */
  softSkills: [
    "Team Collaboration",
    "Clear Communication",
    "Receptive to Feedback",
    "Time Management",
    "Adaptability",
    "Problem-Solving",
    "Attention to Detail",
  ],

};