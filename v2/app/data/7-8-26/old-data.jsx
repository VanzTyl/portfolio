const PROJECT_CATEGORIES = [
  { id: "academic", label: "Academic" },
  { id: "professional", label: "Professional" },
  { id: "commissioned", label: "Commissioned / Contract" },
  { id: "personal", label: "Personal" },
];

const PROJECTS = {
  academic: [
    {
      id: "cucina-de-marquina",
      name: "Cucina De Marquina’s User Authentication System",
      shortDescription: "•	Developed the authentication service for the web ecosystem Versatily has made",
      fullDescription:
        "STI College Marikina Grade 12 SHS EXPO joint-section project, web ecosystem developed by our team \"Versatily\". Led and develop the 2FA service, for logging in using gmail and sending verification codes via email / sms",
      stack: ["ReactJS", "ExpressJS"],
      tags: [
        { label: "Web App", tagColor: "blue" },
        { label: "Microservice", tagColor: "green" },
      ],
      role: "Sole developer — model integration, backend, and admin dashboard.",
      year: "2025",
      status: "Public",
      links: { source: "#", demo: null, docs: "#" },
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    {
      id: "librasys",
      name: "LibraSys Library Management",
      shortDescription: "Cataloguing, lending, and reservations with role-based access.",
      fullDescription:
        "Coursework system for cataloguing, lending, and reserving titles, with role-based access for librarians and students, plus overdue tracking and email reminders.",
      stack: ["Laravel", "MySQL", "Bootstrap"],
      tags: [
        { label: "Team Project", tagColor: "green" },
        { label: "Backend", tagColor: "blue" },
      ],
      role: "Backend lead in a 3-person team — schema design and lending logic.",
      year: "2024",
      status: "Public",
      links: { source: "#", demo: "#", docs: null },
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=LibraSys+1",
        "https://placehold.co/480x320/17171F/C084FC?text=LibraSys+2",
      ],
    },
    {
      id: "pathviz",
      name: "PathViz Algorithm Visualizer",
      shortDescription: "Animates sorting and pathfinding algorithms step-by-step.",
      fullDescription:
        "Interactive teaching tool that animates sorting and pathfinding algorithms step-by-step for a data structures class, with adjustable speed and side-by-side comparisons.",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      tags: [
        { label: "Solo Project", tagColor: "violet" },
        { label: "Education", tagColor: "yellow" },
      ],
      role: "Solo build for a course project.",
      year: "2024",
      status: "Public",
      links: { source: "#", demo: "#", docs: null },
      imgCount: 3,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=PathViz+1",
        "https://placehold.co/480x320/17171F/A855F7?text=PathViz+2",
        "https://placehold.co/480x320/17171F/C084FC?text=PathViz+3",
      ],
    },
  ],
  professional: [
    
  ],
  commissioned: [
    {
      id: "tableside",
      name: "Tableside Ordering App",
      shortDescription: "QR-based ordering and payments for a local restaurant.",
      fullDescription:
        "QR-based ordering and payments experience for a local restaurant, integrated with a card processor and a live kitchen display for incoming orders.",
      stack: ["Next.js", "Stripe", "Tailwind CSS"],
      tags: [
        { label: "Client Work", tagColor: "red" },
        { label: "E-Commerce", tagColor: "orange" },
      ],
      role: "Freelance build, client-commissioned — full stack delivery.",
      year: "2025",
      status: "Public",
      links: { source: "#", demo: "#", docs: null },
      imgCount: 3,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=Tableside+1",
        "https://placehold.co/480x320/17171F/A855F7?text=Tableside+2",
        "https://placehold.co/480x320/17171F/C084FC?text=Tableside+3",
      ],
    },
    {
      id: "studio-portfolio",
      name: "Studio Portfolio Site",
      shortDescription: "Image-forward portfolio for a visual artist.",
      fullDescription:
        "Lightweight, image-forward portfolio commissioned for a visual artist, optimized for fast loading on mobile with a lightbox gallery.",
      stack: ["React", "Vite", "Tailwind CSS"],
      tags: [
        { label: "Client Work", tagColor: "red" },
        { label: "Design", tagColor: "violet" },
      ],
      role: "Freelance build, client-commissioned — design and implementation.",
      year: "2024",
      status: "Public",
      links: { source: "#", demo: "#", docs: null },
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=Studio+1",
        "https://placehold.co/480x320/17171F/A855F7?text=Studio+2",
      ],
    },
  ],
  personal: [
    {
      id: "glance",
      name: "Glance — Real-Time Object Detection",
      shortDescription: "Webcam detector identifying everyday objects in real time.",
      fullDescription:
        "Webcam-based detector identifying everyday objects in real time, built to explore lightweight on-device inference and frame-rate tradeoffs.",
      stack: ["Python", "YOLOv8", "OpenCV"],
      tags: [
        { label: "AI", tagColor: "indigo" },
        { label: "Solo Project", tagColor: "violet" },
      ],
      role: "Personal research project.",
      year: "2026",
      status: "Public",
      links: { source: "#", demo: null, docs: null },
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=Glance+1",
        "https://placehold.co/480x320/17171F/A855F7?text=Glance+2",
      ],
    },
    {
      id: "devlog",
      name: "VanzTyl Dev Log",
      shortDescription: "Build notes on AI experiments and full stack side projects.",
      fullDescription:
        "Personal blog documenting build notes on AI experiments and full stack side projects, written in MDX with code-highlighted snippets.",
      stack: ["Next.js", "MDX"],
      tags: [
        { label: "Writing", tagColor: "yellow" },
        { label: "Solo Project", tagColor: "violet" },
      ],
      role: "Personal project.",
      year: "2025",
      status: "Public",
      links: { source: "#", demo: "#", docs: null },
      imgCount: 1,
      imgLinks: ["https://placehold.co/480x320/17171F/8B5CF6?text=Dev+Log"],
    },
    {
      id: "studyroom",
      name: "StudyRoom Discord Bot",
      shortDescription: "Schedules study sessions and tracks focus streaks.",
      fullDescription:
        "Bot that schedules study sessions and tracks focus streaks for a small student community server, with weekly leaderboard summaries.",
      stack: ["Node.js", "discord.js"],
      tags: [
        { label: "Community", tagColor: "green" },
        { label: "Solo Project", tagColor: "violet" },
      ],
      role: "Personal project, built for a friend group's server.",
      year: "2024",
      status: "Public",
      links: { source: "#", demo: null, docs: null },
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=StudyRoom+1",
        "https://placehold.co/480x320/17171F/A855F7?text=StudyRoom+2",
      ],
    },
  ],
};

const SKILL_CATEGORIES = [
  { id: "development", label: "Development", icon: Code2 },
  { id: "ai", label: "Artificial Intelligence", icon: Brain },
  { id: "productivity", label: "Productivity", icon: Wrench },
  { id: "collaboration", label: "Team Collaboration", icon: Users },
];

// logoLink is optional — when omitted (or when it fails to load) the chip
// falls back to a first-letter icon, which is now the default basis.
const SKILLS = {
  development: [
    { name: "React", logoLink: "https://cdn.simpleicons.org/react/C084FC" },
    { name: "Next.js", logoLink: "https://cdn.simpleicons.org/nextdotjs/C084FC" },
    { name: "Go", logoLink: "https://cdn.simpleicons.org/go/C084FC" },
    { name: "Node.js", logoLink: "https://cdn.simpleicons.org/nodedotjs/C084FC" },
    { name: "Express", logoLink: "https://cdn.simpleicons.org/express/C084FC" },
    { name: "Tailwind CSS", logoLink: "https://cdn.simpleicons.org/tailwindcss/C084FC" },
    { name: "TypeScript", logoLink: "https://cdn.simpleicons.org/typescript/C084FC" },
    { name: "PHP", logoLink: "https://cdn.simpleicons.org/php/C084FC" },
    { name: "MySQL", logoLink: "https://cdn.simpleicons.org/mysql/C084FC" },
  ],
  ai: [
    { name: "Python", logoLink: "https://cdn.simpleicons.org/python/C084FC" },
    { name: "TensorFlow", logoLink: "https://cdn.simpleicons.org/tensorflow/C084FC" },
    { name: "OpenCV", logoLink: "https://cdn.simpleicons.org/opencv/C084FC" },
    { name: "YOLO" },
    { name: "Scikit-learn", logoLink: "https://cdn.simpleicons.org/scikitlearn/C084FC" },
    { name: "Pandas", logoLink: "https://cdn.simpleicons.org/pandas/C084FC" },
    { name: "NumPy", logoLink: "https://cdn.simpleicons.org/numpy/C084FC" },
  ],
  productivity: [
    { name: "Git", logoLink: "https://cdn.simpleicons.org/git/C084FC" },
    { name: "Notion", logoLink: "https://cdn.simpleicons.org/notion/C084FC" },
    { name: "Figma", logoLink: "https://cdn.simpleicons.org/figma/C084FC" },
    { name: "Postman", logoLink: "https://cdn.simpleicons.org/postman/C084FC" },
    { name: "VS Code", logoLink: "https://cdn.simpleicons.org/visualstudiocode/C084FC" },
    { name: "Linear", logoLink: "https://cdn.simpleicons.org/linear/C084FC" },
  ],
  collaboration: [
    { name: "Agile / Scrum" },
    { name: "Slack", logoLink: "https://cdn.simpleicons.org/slack/C084FC" },
    { name: "Jira", logoLink: "https://cdn.simpleicons.org/jira/C084FC" },
    { name: "Code Review" },
    { name: "Pair Programming" },
    { name: "Technical Writing" },
  ],
};

const MILESTONE_CATEGORIES = [
  { id: "academic", label: "Academic" },
  { id: "professional", label: "Professional" },
  { id: "certifications", label: "Certifications" },
  { id: "community", label: "Community Engagement" },
];

const MILESTONES = {
  academic: [
    {
      id: "deans-list",
      title: "Dean's List",
      org: "CIIT Colleges of Arts and Technology",
      date: "2024 – 2025",
      description: "Recognized for academic standing across two consecutive terms in the Computer Science program.",
      achievements: ["Consistent term GPA above 3.5", "Specialization in AI & Cloud Computing"],
      imgCount: 1,
      imgLinks: ["https://placehold.co/480x320/17171F/8B5CF6?text=Dean%27s+List"],
    },
    {
      id: "thesis-award",
      title: "Best Thesis Proposal",
      org: "CIIT College of Computer Studies",
      date: "2025",
      description: "Awarded for a thesis proposal on facial-recognition attendance systems with practical campus deployment.",
      achievements: ["Top-rated proposal in cohort", "Selected for departmental showcase"],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=Thesis+Award+1",
        "https://placehold.co/480x320/17171F/A855F7?text=Thesis+Award+2",
      ],
    },
  ],
  professional: [
    {
      id: "intern",
      title: "Software Engineering Intern",
      org: "Local Tech Startup",
      date: "2025",
      description: "Built internal tools for operations and analytics while collaborating with a small product team.",
      achievements: ["Shipped 2 internal tools to production", "Onboarded onto an agile sprint workflow"],
      imgCount: 1,
      imgLinks: ["https://placehold.co/480x320/17171F/8B5CF6?text=Internship"],
    },
  ],
  certifications: [
    {
      id: "aws-ccp",
      title: "AWS Certified Cloud Practitioner",
      org: "Amazon Web Services",
      date: "2025",
      description: "Foundational certification covering core AWS services, security, and cloud economics.",
      achievements: ["Passed on first attempt", "Applied learnings to a deployed class project"],
      imgCount: 1,
      imgLinks: ["https://placehold.co/480x320/17171F/8B5CF6?text=AWS+CCP"],
    },
    {
      id: "dl-spec",
      title: "Deep Learning Specialization",
      org: "DeepLearning.AI",
      date: "2024",
      description: "Five-course specialization covering neural networks, CNNs, and sequence models.",
      achievements: ["Completed all 5 courses", "Final project applied to a computer vision use case"],
      imgCount: 1,
      imgLinks: ["https://placehold.co/480x320/17171F/8B5CF6?text=Deep+Learning"],
    },
  ],
  community: [
    {
      id: "hackathon",
      title: "Hackathon Finalist",
      org: "Regional Student Hackathon",
      date: "2025",
      description: "Reached the finals with a team-built prototype for accessible campus navigation.",
      achievements: ["Top 5 of 40+ teams", "Built and demoed in 24 hours"],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=Hackathon+1",
        "https://placehold.co/480x320/17171F/A855F7?text=Hackathon+2",
      ],
    },
    {
      id: "mentor",
      title: "Volunteer Coding Mentor",
      org: "Local Student Coding Bootcamp",
      date: "2024 – Present",
      description: "Mentors beginner students through fundamentals of web development on weekends.",
      achievements: ["Mentored 15+ students", "Co-designed the beginner curriculum"],
      imgCount: 1,
      imgLinks: ["https://placehold.co/480x320/17171F/8B5CF6?text=Mentorship"],
    },
  ],
};