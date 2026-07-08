"use client";
import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  Mail,
  MapPin,
  GraduationCap,
  GitBranch,
  ExternalLink,
  FileText,
  Layers,
  Zap,
  Award,
  Home,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Check,
  Search,
  Filter,
  X,
  Satellite,
  Moon,
  Code2,
  Brain,
  Cloud,
  Wrench,
  Users,
} from "lucide-react";

/* ----------------------------------------------------------------------- */
/*  Data                                                                    */
/* ----------------------------------------------------------------------- */

const OWNER = {
  name: "Ian De Guzman",
  alias: "VanzTyl",
  // Swap in a real photo path (e.g. "/profile.jpg" from /public) once available.
  photo: "https://avatars.githubusercontent.com/u/125661587?v=4",
  titles: ["Full Stack Developer", "AI Enthusiast", "Computer Science Student"],
  status: "Student @ CIIT Colleges of Arts and Technology",
  course: "BSCS — AI & Cloud Computing Specialization",
  location: "Philippines",
  email: "hello@vanztyl.dev",
  interests: ["Machine Learning", "Production-Ready Applications", "AI Integration", "Software Engineering Standards", "System Design"],
};

// Muted, theme-aligned ROYGBIV — leaned toward the site's purple family rather
// than stock saturated colors, so tags read as part of the same palette.
const TAG_COLORS = {
  red: "#E2828A",
  orange: "#E2A074",
  yellow: "#D9C77A",
  green: "#86CDA8",
  blue: "#84AEE0",
  indigo: "#9C90EE",
  violet: "#C792F0",
};

const PROJECT_CATEGORIES = [
  { id: "academic", label: "Academic" },
  { id: "professional", label: "Professional" },
  { id: "commissioned", label: "Commissioned / Contract" },
  { id: "personal", label: "Personal" },
];

const PROJECTS = {
  academic: [
    {
      id: "naviguide",
      name: "NaviGuide",
      shortDescription: "Android training app for aeronautics students to practice aircraft marshalling.",
      fullDescription:
        "Android training app helping aeronautics students practice aircraft marshalling procedures, built in Unity with a MediaPipe model integrated for real-time gesture recognition to simulate marshalling signals.",
      stack: ["Unity", "C#", "MediaPipe", "Android"],
      tags: [
        { label: "Mobile App", tagColor: "blue" },
        { label: "AI", tagColor: "indigo" },
      ],
      role: "Developer — Unity/C# app logic and MediaPipe gesture-recognition integration.",
      year: "2025", // TODO: confirm exact year
      status: "Public",
      links: { source: "#", demo: null, docs: null }, // TODO: add repo/demo links
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    {
      id: "e-coinmerce",
      name: "E-Coinmerce",
      shortDescription: "Full-stack web app simulating a live crypto trading environment.",
      fullDescription:
        "Full-stack web app simulating a live crypto trading environment, with a Brownian Motion process implemented in FastAPI to model realistic price fluctuations.",
      stack: ["ReactJS", "Express", "FastAPI", "MongoDB"],
      tags: [
        { label: "Web App", tagColor: "blue" },
        { label: "Simulation", tagColor: "yellow" },
      ],
      role: "Full-stack developer — frontend, backend, and price-simulation logic.",
      year: "2025", // TODO: confirm exact year
      status: "Public",
      links: { source: "#", demo: null, docs: null }, // TODO: add repo/demo links
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    // {
    //   id: "",
    //   name: "",
    //   shortDescription: "",
    //   fullDescription: "",
    //   stack: [],
    //   tags: [{ label: "", tagColor: "" }],
    //   role: "",
    //   year: "",
    //   status: "",
    //   links: { source: "#", demo: null, docs: null },
    //   imgCount: 2,
    //   imgLinks: [
    //     "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
    //     "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
    //   ],
    // },
  ],
  professional: [
    // No professional (employer-based) projects found in resume yet.
    // {
    //   id: "",
    //   name: "",
    //   shortDescription: "",
    //   fullDescription: "",
    //   stack: [],
    //   tags: [{ label: "", tagColor: "" }],
    //   role: "",
    //   year: "",
    //   status: "",
    //   links: { source: "#", demo: null, docs: null },
    //   imgCount: 2,
    //   imgLinks: [
    //     "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
    //     "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
    //   ],
    // },
  ],
  commissioned: [
    {
      id: "latik-delights-pos",
      name: "Latik Delights POS System",
      shortDescription: "Web-based POS and inventory management system for a local delicacy business.",
      fullDescription:
        "Web-based point-of-sale and inventory management system built for a local delicacy business, with sales recording, product management, and inventory monitoring, deployed via XAMPP.",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      tags: [
        { label: "Client Work", tagColor: "red" },
        { label: "POS System", tagColor: "orange" },
      ],
      role: "Developer — client-commissioned build for Latik Delights.",
      year: "2024", // TODO: confirm exact year
      status: "Public",
      links: { source: "#", demo: null, docs: null }, // TODO: add repo/demo links
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    // {
    //   id: "",
    //   name: "",
    //   shortDescription: "",
    //   fullDescription: "",
    //   stack: [],
    //   tags: [{ label: "", tagColor: "" }],
    //   role: "",
    //   year: "",
    //   status: "",
    //   links: { source: "#", demo: null, docs: null },
    //   imgCount: 2,
    //   imgLinks: [
    //     "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
    //     "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
    //   ],
    // },
  ],
  personal: [
    {
      id: "agent-explorer",
      name: "Agent Explorer",
      shortDescription: "Web app for organizing AI agent specs and sub-prompts with a file-explorer UI.",
      fullDescription:
        "Live web app for organizing AI agent specs and sub-prompts with a file-explorer UI, backed by a Go REST API. Self-deployed via Netlify (frontend) and Render (backend) with full client-server separation.",
      stack: ["ReactJS", "Go", "Supabase"],
      tags: [
        { label: "Solo Project", tagColor: "violet" },
        { label: "Tooling", tagColor: "blue" },
      ],
      role: "Solo developer — frontend, Go backend, and deployment.",
      year: "2025", // TODO: confirm exact year
      status: "Public",
      links: { source: "https://github.com/VanzTyl", demo: null, docs: null }, // TODO: link to specific repo/demo
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    // {
    //   id: "",
    //   name: "",
    //   shortDescription: "",
    //   fullDescription: "",
    //   stack: [],
    //   tags: [{ label: "", tagColor: "" }],
    //   role: "",
    //   year: "",
    //   status: "",
    //   links: { source: "#", demo: null, docs: null },
    //   imgCount: 2,
    //   imgLinks: [
    //     "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
    //     "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
    //   ],
    // },
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
    { name: "Golang", logoLink: "https://cdn.simpleicons.org/go/C084FC" },
    { name: "C#", logoLink: "https://cdn.simpleicons.org/csharp/C084FC" },
    { name: "PHP", logoLink: "https://cdn.simpleicons.org/php/C084FC" },
    { name: "HTML", logoLink: "https://cdn.simpleicons.org/html5/C084FC" },
    { name: "CSS", logoLink: "https://cdn.simpleicons.org/css3/C084FC" },
    { name: "JavaScript", logoLink: "https://cdn.simpleicons.org/javascript/C084FC" },
    { name: "Go Gin" }, // no reliable simple-icon slug; falls back to first-letter icon
    { name: "React.js", logoLink: "https://cdn.simpleicons.org/react/C084FC" },
    { name: "Next.js", logoLink: "https://cdn.simpleicons.org/nextdotjs/C084FC" },
    { name: "Express.js", logoLink: "https://cdn.simpleicons.org/express/C084FC" },
    { name: "FastAPI", logoLink: "https://cdn.simpleicons.org/fastapi/C084FC" },
    { name: "Supabase", logoLink: "https://cdn.simpleicons.org/supabase/C084FC" },
    { name: "MySQL", logoLink: "https://cdn.simpleicons.org/mysql/C084FC" },
    { name: "MongoDB", logoLink: "https://cdn.simpleicons.org/mongodb/C084FC" },
  ],
  ai: [
    { name: "Python", logoLink: "https://cdn.simpleicons.org/python/C084FC" },
    { name: "MediaPipe" }, // no reliable simple-icon slug; falls back to first-letter icon
    // Add more AI/ML tools here as they come up (e.g. specific frameworks, libraries).
  ],
  productivity: [
    { name: "VS Code", logoLink: "https://cdn.simpleicons.org/visualstudiocode/C084FC" },
    { name: "Visual Studio", logoLink: "https://cdn.simpleicons.org/visualstudio/C084FC" },
    { name: "Unity", logoLink: "https://cdn.simpleicons.org/unity/C084FC" },
  ],
  collaboration: [
    { name: "Git", logoLink: "https://cdn.simpleicons.org/git/C084FC" },
    { name: "GitHub", logoLink: "https://cdn.simpleicons.org/github/C084FC" },
    { name: "GitLab", logoLink: "https://cdn.simpleicons.org/gitlab/C084FC" },
    { name: "Gitea", logoLink: "https://cdn.simpleicons.org/gitea/C084FC" },
    { name: "Slack", logoLink: "https://cdn.simpleicons.org/slack/C084FC" },
    { name: "ClickUp", logoLink: "https://cdn.simpleicons.org/clickup/C084FC" },
    { name: "Discord", logoLink: "https://cdn.simpleicons.org/discord/C084FC" },
    { name: "Google Workspace", logoLink: "https://cdn.simpleicons.org/googleworkspace/C084FC" },
    { name: "Figma", logoLink: "https://cdn.simpleicons.org/figma/C084FC" },
    { name: "Zoom", logoLink: "https://cdn.simpleicons.org/zoom/C084FC" },
    { name: "Whimsical", logoLink: "https://cdn.simpleicons.org/whimsical/C084FC" },
    { name: "LucidChart" }, // no confirmed simple-icon slug; falls back to first-letter icon
    { name: "Draw.io" }, // no confirmed simple-icon slug; falls back to first-letter icon
    { name: "Notion", logoLink: "https://cdn.simpleicons.org/notion/C084FC" },
    { name: "Obsidian", logoLink: "https://cdn.simpleicons.org/obsidian/C084FC" },
    { name: "Microsoft Teams", logoLink: "https://cdn.simpleicons.org/microsoftteams/C084FC" },
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
      id: "quiz-bee-topnotcher",
      title: "Topnotcher, Elimination Round of Quiz Bee for all 1st Year Students",
      org: "Technological Institute of the Philippines, QC",
      date: "2024",
      description: "Placed first in the elimination round of a quiz bee open to all first-year students.",
      achievements: [
        "Ranked 1st among all first-year examinees in the elimination round",
        "Competed on general academic knowledge topics",
      ],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    {
      id: "quiz-bee-4th-place",
      title: "4th Place, Interdepartmental General Information & Current Events Quiz Bee",
      org: "Technological Institute of the Philippines, QC",
      date: "2024",
      description: "Placed 4th in an interdepartmental quiz bee covering general information and current events.",
      achievements: [
        "Placed 4th among competing departments",
        "Covered general information and current events categories",
      ],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    // {
    //   id: "",
    //   title: "",
    //   org: "",
    //   date: "",
    //   description: "",
    //   achievements: [],
    //   imgCount: 2,
    //   imgLinks: [
    //     "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
    //     "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
    //   ],
    // },
  ],
  professional: [
    {
      id: "cybercafe-administrator",
      title: "Cybercafé Administrator",
      org: "Bunker Gaming (Family Business)",
      date: "2018 – 2020",
      description:
        "Managed daily operations of a multi-computer cybercafé, including diskless workstation maintenance, hardware/software troubleshooting, and basic LAN networking via network switches.",
      achievements: [
        "Maintained diskless workstation setups for consistent daily uptime",
        "Resolved hardware/software issues across multiple stations",
        "Handled basic LAN networking and switch configuration",
      ],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    {
      id: "operations-assistant",
      title: "Operations Assistant",
      org: "LIZA LYN PH (Family Business)",
      date: "2016 – 2020",
      description:
        "Managed product listings and customer support on Shopee, Lazada, and Zalora; handled product photography, image editing in GIMP, and data tracking in Microsoft Excel.",
      achievements: [
        "Managed product listings and customer support across Shopee, Lazada, and Zalora",
        "Produced product photography and edited images using GIMP",
        "Tracked sales and inventory data in Microsoft Excel",
      ],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    // {
    //   id: "",
    //   title: "",
    //   org: "",
    //   date: "",
    //   description: "",
    //   achievements: [],
    //   imgCount: 2,
    //   imgLinks: [
    //     "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
    //     "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
    //   ],
    // },
  ],
  certifications: [
    {
      id: "ml101-xaltius",
      title: "Machine Learning 101: Demystifying the Magic",
      org: "Xaltius",
      date: "2024",
      description: "Microcredential covering foundational machine learning concepts.",
      achievements: ["Completed a microcredential in machine learning fundamentals"],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    // {
    //   id: "",
    //   title: "",
    //   org: "",
    //   date: "",
    //   description: "",
    //   achievements: [],
    //   imgCount: 2,
    //   imgLinks: [
    //     "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
    //     "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
    //   ],
    // },
  ],
  community: [
    {
      id: "class-president",
      title: "Class President",
      org: "STI College Marikina SHS",
      date: "2023 – 2024",
      description: "Led the section to win Best in Communication and Best Use of Expo Theme at the SHS Expo.",
      achievements: ["Best in Communication (SHS Expo)", "Best Use of Expo Theme (SHS Expo)"],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    {
      id: "tech-head-ict-org",
      title: "Tech Head, ICT School Organization",
      org: "STI College Marikina SHS",
      date: "2022 – 2023",
      description:
        "Designed and developed the revamp of the organization's official Discord server, implementing automated support ticket systems, auto-roles, and webhook integration for bot announcements.",
      achievements: [
        "Implemented an automated support ticket system",
        "Set up auto-roles for streamlined member management",
        "Integrated webhooks for automated bot announcements",
      ],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    {
      id: "hackathon-jam",
      title: "Hackathon Jam Participant",
      org: "CIIT College",
      date: "A.Y. 2025–26",
      description: "Participated in the college's Hackathon Jam event.",
      achievements: ["Took part in a collegiate hackathon jam event"],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    {
      id: "innov8-ideathon-finalist",
      title: "Finalist, Innov8 Ideathon by Microsoft Student Community",
      org: "TIP Manila",
      date: "2024",
      description: "Reached the finals of the Innov8 Ideathon hosted by the Microsoft Student Community.",
      achievements: [
        "Advanced to the finals stage of the ideathon",
        "Competed under a Microsoft Student Community-hosted program",
      ],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    {
      id: "codefest-2nd-runner-up",
      title: "2nd Runner-Up, Codefest Tagisan ng Talino 2023–24 (Local Level)",
      org: "STI Marikina",
      date: "2023 – 2024",
      description: "Placed 2nd runner-up in the local-level Codefest Tagisan ng Talino competition.",
      achievements: ["Placed 2nd runner-up at the local level"],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    {
      id: "codefest-entrant",
      title: "Entrant, Codefest Tagisan ng Talino 2022–23 (Local Level)",
      org: "STI Marikina",
      date: "2022 – 2023",
      description: "Competed in the local-level Codefest Tagisan ng Talino competition.",
      achievements: ["Competed as an entrant at the local level"],
      imgCount: 2,
      imgLinks: [
        "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
        "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
      ],
    },
    // {
    //   id: "",
    //   title: "",
    //   org: "",
    //   date: "",
    //   description: "",
    //   achievements: [],
    //   imgCount: 2,
    //   imgLinks: [
    //     "https://placehold.co/480x320/17171F/8B5CF6?text=To+Be+Added",
    //     "https://placehold.co/480x320/17171F/A855F7?text=To+Be+Added",
    //   ],
    // },
  ],
};

const NAV_BUTTONS = [
  { id: "projects", label: "Display Projects", icon: Layers },
  { id: "skills", label: "Gather Skills", icon: Zap },
  { id: "milestones", label: "Personal Milestones", icon: Award },
];

const MOBILE_NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "milestones", label: "Timeline", icon: Award },
];

const VIEW_LABELS = { home: "Home", projects: "Projects", skills: "Skills", milestones: "Milestones" };

/* ----------------------------------------------------------------------- */
/*  Hooks                                                                   */
/* ----------------------------------------------------------------------- */

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, [query]);
  return matches;
}

function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

function useClickOutside(ref, handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [ref, handler, enabled]);
}

/* ----------------------------------------------------------------------- */
/*  Ambient background                                                     */
/* ----------------------------------------------------------------------- */

function AmbientBackground({ reducedMotion }) {
  const particles = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => {
      const seed = i * 137.5;
      
      // Calculate standard values
      const leftVal = ((Math.sin(seed) + 1) / 2) * 100;
      const topVal = ((Math.cos(seed * 1.3) + 1) / 2) * 100;
      const sizeVal = 1.5 + ((i * 7) % 5) * 0.5;
      const opacityVal = 0.18 + ((i * 13) % 10) * 0.03;

      return {
        // Enforce identical string truncation across Node (Server) and V8 (Client)
        left: `${leftVal.toFixed(8)}%`,
        top: `${topVal.toFixed(8)}%`,
        size: `${sizeVal.toFixed(8)}px`,
        duration: `${14 + (i % 9) * 2}s`,
        delay: `${(i % 7) * -1.7}s`,
        opacity: Number(opacityVal.toFixed(2)),
      };
    });
  }, []);

  return (
    <div className="vt-bg" aria-hidden="true">
      <div className="vt-bg-glow" />
      <svg className="vt-bg-rings" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="ringFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="vt-ring vt-ring-1">
          <ellipse cx="400" cy="400" rx="320" ry="200" fill="none" stroke="url(#ringFade)" strokeWidth="1" />
        </g>
        <g className="vt-ring vt-ring-2">
          <ellipse cx="400" cy="400" rx="260" ry="260" fill="none" stroke="url(#ringFade)" strokeWidth="1" />
        </g>
        <g className="vt-ring vt-ring-3">
          <ellipse cx="400" cy="400" rx="370" ry="150" fill="none" stroke="url(#ringFade)" strokeWidth="1" />
        </g>
      </svg>
      <div className="vt-bg-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            className="vt-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: reducedMotion ? "0s" : p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
      <svg className="vt-grain" aria-hidden="true">
        <filter id="vtNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.04 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#vtNoise)" />
      </svg>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/*  Navbar + breadcrumb                                                    */
/* ----------------------------------------------------------------------- */

function Navbar({ crumbs }) {
  return (
    <nav className="vt-navbar" aria-label="Main navigation">
      <span className="vt-wordmark">
        Vanz<span>Tyl</span>
      </span>
      <ol className="vt-breadcrumb" aria-label="Breadcrumb">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={c.key} className="vt-breadcrumb-item">
              {i > 0 && <ChevronRight size={13} className="vt-breadcrumb-sep" aria-hidden="true" />}
              {isLast || !c.onClick ? (
                <span aria-current={isLast ? "page" : undefined} className="vt-breadcrumb-current">
                  {c.label}
                </span>
              ) : (
                <button type="button" className="vt-breadcrumb-link" onClick={c.onClick}>
                  {c.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function MobileNavbar({ view, onNavigate }) {
  return (
    <nav className="vt-mobile-navbar" aria-label="Mobile navigation">
      {MOBILE_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = view === item.id;
        return (
          <button
            key={item.id}
            type="button"
            className={`vt-mobile-nav-item ${isActive ? "vt-mobile-nav-item-active" : ""}`}
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

/* ----------------------------------------------------------------------- */
/*  Shared bits                                                            */
/* ----------------------------------------------------------------------- */

function CategoryTabs({ items, active, onSelect }) {
  return (
    <div className="vt-tabs" role="tablist">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === active;
        return (
          <button
            key={item.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            className={`vt-tab ${isActive ? "vt-tab-active" : ""}`}
            onClick={() => onSelect(item.id)}
          >
            {Icon && <Icon size={14} />}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function FloatingNavButton({ item, onClick, index }) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      className="vt-float-btn"
      style={{ animationDelay: `${index * 0.4}s` }}
      onClick={() => onClick(item.id)}
    >
      <Icon size={16} />
      {item.label}
    </button>
  );
}

function StatusBadge({ status }) {
  const Icon = status === "Public" ? Satellite : Moon;
  return (
    <span className="vt-badge">
      <Icon size={11} />
      {status}
    </span>
  );
}

function ImageGallery({ links, count }) {
  const shown = (links || []).slice(0, count || 0);
  if (shown.length === 0) return null;
  return (
    <div className="vt-image-gallery">
      {shown.map((src, i) => (
        <img key={i} src={src} alt="" loading="lazy" className="vt-gallery-img" />
      ))}
    </div>
  );
}

function TagPillRow({ tags }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="vt-tag-pill-row">
      {tags.map((t) => (
        <span key={t.label} className="vt-tag-pill" style={{ "--tag-color": TAG_COLORS[t.tagColor] || TAG_COLORS.violet }}>
          {t.label}
        </span>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/*  Home view                                                              */
/* ----------------------------------------------------------------------- */

function ProfileAvatar() {
  return (
    <div className="vt-avatar">
      {OWNER.photo ? (
        <img src={OWNER.photo} alt={OWNER.name} />
      ) : (
        <span className="vt-avatar-initials">ID</span>
      )}
    </div>
  );
}

function HomeView({ onNavigate }) {
  return (
    <section className="vt-home" aria-label="Introduction">
      <ProfileAvatar />
      <p className="vt-alias">{OWNER.alias}</p>
      <h1 className="vt-name">{OWNER.name}</h1>
      <p className="vt-titles">{OWNER.titles.join(" · ")}</p>

      <div className="vt-meta">
        <span className="vt-meta-item">
          <GraduationCap size={15} />
          {OWNER.status}
        </span>
        <span className="vt-meta-item">{OWNER.course}</span>
        <span className="vt-meta-item">
          <MapPin size={15} />
          {OWNER.location}
        </span>
      </div>

      <div className="vt-interests">
        {OWNER.interests.map((interest) => (
          <span key={interest} className="vt-interest-chip">
            {interest}
          </span>
        ))}
      </div>

      <a className="vt-contact-btn" href={`mailto:${OWNER.email}`}>
        <Mail size={16} />
        Contact Me
      </a>

      {/* Hidden at the mobile breakpoint — the bottom tab bar already covers
          this navigation there, so only Contact Me stays visible. */}
      <div className="vt-float-row">
        {NAV_BUTTONS.map((item, i) => (
          <FloatingNavButton key={item.id} item={item} onClick={onNavigate} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/*  Projects view                                                          */
/* ----------------------------------------------------------------------- */

function ProjectCard({ project, onOpen }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(project.id);
    }
  };
  return (
    <article
      className="vt-card vt-project-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project.id)}
      onKeyDown={handleKeyDown}
    >
      {project.imgLinks?.[0] && <img src={project.imgLinks[0]} alt="" loading="lazy" className="vt-card-cover" />}
      <div className="vt-card-top">
        <h3 className="vt-card-title">{project.name}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="vt-card-desc">{project.shortDescription}</p>
      <TagPillRow tags={project.tags} />
      <div className="vt-tag-row">
        {project.stack.map((tech) => (
          <span key={tech} className="vt-tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="vt-card-footer">
        <span className="vt-year">{project.year}</span>
        <span className="vt-card-cta">
          Click for more details
          <ChevronRight size={13} />
        </span>
      </div>
    </article>
  );
}

function ProjectDetail({ project, categoryLabel, onBack }) {
  return (
    <div className="vt-grid-scroll">
      <div className="vt-detail" key={project.id}>
        <button type="button" className="vt-back-btn" onClick={onBack}>
          <ArrowLeft size={14} />
          Back to {categoryLabel}
        </button>

        <div className="vt-card-top">
          <h3 className="vt-detail-title">{project.name}</h3>
          <div className="vt-detail-top-meta">
            <StatusBadge status={project.status} />
            <span className="vt-year-pill">{project.year}</span>
          </div>
        </div>

        <ImageGallery links={project.imgLinks} count={project.imgCount} />

        <p className="vt-card-desc">{project.fullDescription}</p>

        <TagPillRow tags={project.tags} />

        <div className="vt-tag-row">
          {project.stack.map((tech) => (
            <span key={tech} className="vt-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="vt-detail-meta">
          <span className="vt-meta-item">
            <Users size={14} />
            {project.role}
          </span>
        </div>

        <div className="vt-detail-links">
          {project.links.source && (
            <a className="vt-detail-link-btn" href={project.links.source}>
              <GitBranch size={14} />
              Source Code
            </a>
          )}
          {project.links.demo && (
            <a className="vt-detail-link-btn" href={project.links.demo}>
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.links.docs && (
            <a className="vt-detail-link-btn" href={project.links.docs}>
              <FileText size={14} />
              Documentation
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectsView({ category, onSelectCategory, selectedProjectId, onOpenProject, onCloseProject }) {
  const items = PROJECTS[category] || [];
  const categoryLabel = PROJECT_CATEGORIES.find((c) => c.id === category)?.label;
  const selectedProject = items.find((p) => p.id === selectedProjectId);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const searchInputRef = useRef(null);
  const filterRef = useRef(null);

  useClickOutside(filterRef, () => setFilterOpen(false), filterOpen);

  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery("");
    setSelectedTags([]);
    setFilterOpen(false);
  }, [category]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  const allTags = useMemo(() => {
    const map = new Map();
    items.forEach((p) => (p.tags || []).forEach((t) => !map.has(t.label) && map.set(t.label, t)));
    return Array.from(map.values());
  }, [items]);

  const visibleItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return items.filter((p) => {
      const matchesSearch = !q || `${p.name} ${p.shortDescription}`.toLowerCase().includes(q);
      const matchesTags = selectedTags.length === 0 || (p.tags || []).some((t) => selectedTags.includes(t.label));
      return matchesSearch && matchesTags;
    });
  }, [items, searchQuery, selectedTags]);

  const toggleTag = (label) => {
    setSelectedTags((prev) => (prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]));
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <section className="vt-panel" aria-label="Projects">
      <div className="vt-panel-header">
        <h2 className="vt-panel-title">Projects</h2>
        <div className="vt-panel-header-actions">
          <div className={`vt-search-wrap ${searchOpen ? "vt-search-open" : ""}`}>
            {searchOpen ? (
              <>
                <Search size={14} className="vt-search-icon-inline" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="vt-search-input"
                  aria-label="Search projects"
                  onKeyDown={(e) => e.key === "Escape" && closeSearch()}
                />
                <button type="button" className="vt-search-close" onClick={closeSearch} aria-label="Close search">
                  <X size={13} />
                </button>
              </>
            ) : (
              <button type="button" className="vt-icon-action" onClick={() => setSearchOpen(true)} aria-label="Search projects">
                <Search size={15} />
              </button>
            )}
          </div>

          <div className="vt-filter-wrap" ref={filterRef}>
            <button
              type="button"
              className={`vt-icon-action ${selectedTags.length ? "vt-icon-action-active" : ""}`}
              onClick={() => setFilterOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={filterOpen}
              aria-label="Filter by tag"
            >
              <Filter size={15} />
            </button>
            {filterOpen && (
              <div className="vt-filter-popover">
                <p className="vt-filter-popover-label">Filter by tag</p>
                <div className="vt-filter-option-list">
                  {allTags.length === 0 && <span className="vt-filter-empty">No tags available</span>}
                  {allTags.map((t) => (
                    <button
                      key={t.label}
                      type="button"
                      className={`vt-filter-option ${selectedTags.includes(t.label) ? "vt-filter-option-active" : ""}`}
                      onClick={() => toggleTag(t.label)}
                    >
                      <span className="vt-tag-dot" style={{ "--tag-color": TAG_COLORS[t.tagColor] || TAG_COLORS.violet }} />
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <CategoryTabs items={PROJECT_CATEGORIES} active={category} onSelect={onSelectCategory} />

      {selectedProject ? (
        <ProjectDetail project={selectedProject} categoryLabel={categoryLabel} onBack={onCloseProject} />
      ) : (
        <div className="vt-grid-scroll">
          <div className="vt-project-grid" key={`${category}-${searchQuery}-${selectedTags.join(",")}`}>
            {visibleItems.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
            ))}
            {visibleItems.length === 0 && <p className="vt-empty-note">No projects match your search or filters.</p>}
          </div>
        </div>
      )}
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/*  Skills view — auto-responsive orbital system                          */
/* ----------------------------------------------------------------------- */

// Ring capacity grows by 2 per ring: 5, 7, 9, 11 ...
function distributeIntoRings(skills) {
  const rings = [];
  let remaining = skills.slice();
  let capacity = 5;
  while (remaining.length > 0) {
    rings.push(remaining.slice(0, capacity));
    remaining = remaining.slice(capacity);
    capacity += 2;
  }
  return rings;
}

// First-letter icon is the default basis for every skill chip; a logoLink
// (when present and loadable) takes priority and renders as the real logo.
function SkillLogo({ skill, size = 18 }) {
  const [imgError, setImgError] = useState(false);
  if (skill.logoLink && !imgError) {
    return (
      <img
        src={skill.logoLink}
        alt=""
        loading="lazy"
        style={{ width: size, height: size }}
        onError={() => setImgError(true)}
      />
    );
  }
  return (
    <span className="vt-chip-fallback-letter" style={{ fontSize: size * 0.62 }}>
      {skill.name[0]}
    </span>
  );
}

function SkillChip({ skill }) {
  return (
    <div className="vt-skill-chip-orbit" title={skill.name}>
      <SkillLogo skill={skill} size={18} />
      <span className="vt-skill-chip-orbit-label">{skill.name}</span>
    </div>
  );
}

function FlatSkillChip({ skill }) {
  return (
    <div className="vt-skill-chip-flat">
      <SkillLogo skill={skill} size={16} />
      <span>{skill.name}</span>
    </div>
  );
}

function OrbitRing({ skills, radius, chipSize, duration, direction }) {
  const angleStep = 360 / skills.length;
  return (
    <>
      <div
        className="vt-orbit-track"
        style={{ width: radius * 2, height: radius * 2, top: "50%", left: "50%", marginTop: -radius, marginLeft: -radius }}
      />
      <div className="vt-orbit-ring" style={{ animationDuration: `${duration}s`, animationDirection: direction }}>
        {skills.map((skill, i) => {
          const angle = angleStep * i;
          return (
            <div
              key={skill.name}
              className="vt-orbit-item-pos"
              style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)` }}
            >
              <div className="vt-orbit-item-counter" style={{ animationDuration: `${duration}s`, animationDirection: direction }}>
                <div style={{ width: chipSize, height: chipSize }}>
                  <SkillChip skill={skill} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function SkillOrbit({ category }) {
  const items = SKILLS[category] || [];
  const meta = SKILL_CATEGORIES.find((c) => c.id === category);
  const CenterIcon = meta?.icon;
  const rings = useMemo(() => distributeIntoRings(items), [items]);

  const baseRadius = 108;
  const radiusStep = 80;
  const chipSize = rings.length > 1 ? 50 : 58;
  const centerSize = 110;
  const maxRadius = baseRadius + (rings.length - 1) * radiusStep;
  const containerSize = (maxRadius + chipSize / 2 + 24) * 2;

  return (
    <div className="vt-orbit-wrap" key={category} style={{ width: containerSize, height: containerSize }}>
      <div className="vt-orbit-center" style={{ width: centerSize, height: centerSize }}>
        {CenterIcon && <CenterIcon size={20} />}
        <span>{meta?.label}</span>
      </div>
      {rings.map((ringSkills, ringIdx) => (
        <OrbitRing
          key={ringIdx}
          skills={ringSkills}
          radius={baseRadius + ringIdx * radiusStep}
          chipSize={chipSize}
          duration={48 + ringIdx * 22}
          direction={ringIdx % 2 === 0 ? "normal" : "reverse"}
        />
      ))}
    </div>
  );
}

function SkillsView({ category, onSelectCategory }) {
  // Smaller laptops and tablets get the flat, fully-readable list instead of
  // the orbit — the orbit now only renders on larger desktop widths.
  const showFlatList = useMediaQuery("(max-width: 1024px)");
  const items = SKILLS[category] || [];

  return (
    <section className="vt-panel" aria-label="Skills">
      <h2 className="vt-panel-title">Skills</h2>
      <CategoryTabs items={SKILL_CATEGORIES} active={category} onSelect={onSelectCategory} />
      {showFlatList ? (
        <div className="vt-grid-scroll">
          <div className="vt-skill-flat-grid" key={category}>
            {items.map((skill) => (
              <FlatSkillChip key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ) : (
        <div className="vt-orbit-stage">
          <SkillOrbit category={category} />
        </div>
      )}
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/*  Milestones view — linear progression timeline                          */
/* ----------------------------------------------------------------------- */

function MilestonesView({ category, onSelectCategory }) {
  const reducedMotion = useReducedMotion();
  const items = MILESTONES[category] || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sortOrder, setSortOrder] = useState("newest"); // 'newest' | 'oldest'
  const [filterOpen, setFilterOpen] = useState(false);
  const trackRef = useRef(null);
  const nodeRefs = useRef([]);
  const filterRef = useRef(null);
  const dragRef = useRef({ down: false, startX: 0, scrollLeft: 0 });

  useClickOutside(filterRef, () => setFilterOpen(false), filterOpen);

  const sortedItems = useMemo(() => {
    const withYear = items.map((m) => {
      const match = m.date.match(/\d{4}/);
      return { ...m, _year: match ? parseInt(match[0], 10) : 0 };
    });
    withYear.sort((a, b) => (sortOrder === "newest" ? b._year - a._year : a._year - b._year));
    return withYear;
  }, [items, sortOrder]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [category, sortOrder]);

  useEffect(() => {
    const node = nodeRefs.current[selectedIndex];
    if (node && node.scrollIntoView) {
      node.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", inline: "center", block: "nearest" });
    }
  }, [selectedIndex, category, sortOrder, reducedMotion]);

  const current = sortedItems[selectedIndex];
  const isFirst = selectedIndex === 0;
  const isLast = selectedIndex === sortedItems.length - 1;

  const handleWheel = (e) => {
    if (e.deltaY !== 0 && trackRef.current) {
      e.preventDefault();
      trackRef.current.scrollLeft += e.deltaY;
    }
  };
  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    dragRef.current = { down: true, startX: e.pageX, scrollLeft: trackRef.current.scrollLeft };
  };
  const handleMouseMove = (e) => {
    if (!dragRef.current.down || !trackRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - dragRef.current.startX) * 1.2;
    trackRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };
  const endDrag = () => {
    dragRef.current.down = false;
  };

  return (
    <section className="vt-panel" aria-label="Milestones">
      <div className="vt-panel-header">
        <h2 className="vt-panel-title">Milestones</h2>
        <div className="vt-panel-header-actions">
          <div className="vt-filter-wrap" ref={filterRef}>
            <button
              type="button"
              className={`vt-icon-action ${sortOrder !== "newest" ? "vt-icon-action-active" : ""}`}
              onClick={() => setFilterOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={filterOpen}
              aria-label="Sort milestones by date"
            >
              <Filter size={15} />
            </button>
            {filterOpen && (
              <div className="vt-filter-popover">
                <p className="vt-filter-popover-label">Sort by date</p>
                <div className="vt-filter-option-list">
                  <button
                    type="button"
                    className={`vt-filter-option ${sortOrder === "newest" ? "vt-filter-option-active" : ""}`}
                    onClick={() => {
                      setSortOrder("newest");
                      setFilterOpen(false);
                    }}
                  >
                    {sortOrder === "newest" && <Check size={13} />}
                    Newest first
                  </button>
                  <button
                    type="button"
                    className={`vt-filter-option ${sortOrder === "oldest" ? "vt-filter-option-active" : ""}`}
                    onClick={() => {
                      setSortOrder("oldest");
                      setFilterOpen(false);
                    }}
                  >
                    {sortOrder === "oldest" && <Check size={13} />}
                    Oldest first
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <CategoryTabs items={MILESTONE_CATEGORIES} active={category} onSelect={onSelectCategory} />

      {sortedItems.length === 0 ? (
        <p className="vt-empty-note">No milestones in this category yet.</p>
      ) : (
        <>
          <div
            className="vt-timeline-wrap"
            ref={trackRef}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
          >
            <div className="vt-timeline-track" key={`${category}-${sortOrder}`}>
              <div className="vt-timeline-line" />
              {sortedItems.map((m, i) => {
                const isSelected = i === selectedIndex;
                return (
                  <button
                    key={m.id}
                    type="button"
                    ref={(el) => (nodeRefs.current[i] = el)}
                    className={`vt-timeline-node-wrap ${isSelected ? "vt-timeline-node-selected" : ""}`}
                    onClick={() => setSelectedIndex(i)}
                    aria-current={isSelected ? "true" : undefined}
                  >
                    <span className="vt-timeline-node" />
                    <span className="vt-timeline-year">{m._year || m.date}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="vt-timeline-controls">
            <button
              type="button"
              className="vt-tab"
              disabled={isFirst}
              onClick={() => setSelectedIndex((i) => Math.max(0, i - 1))}
            >
              <ArrowLeft size={14} />
              Previous
            </button>
            <button
              type="button"
              className="vt-tab"
              disabled={isLast}
              onClick={() => setSelectedIndex((i) => Math.min(sortedItems.length - 1, i + 1))}
            >
              Next
              <ArrowRight size={14} />
            </button>
          </div>

          {current && (
            <div className="vt-grid-scroll">
              <div className="vt-card vt-milestone-card" key={current.id}>
                <div className="vt-card-top">
                  <div>
                    <h3 className="vt-card-title">{current.title}</h3>
                    <p className="vt-milestone-org">{current.org}</p>
                  </div>
                  <span className="vt-year-pill">{current.date}</span>
                </div>
                <ImageGallery links={current.imgLinks} count={current.imgCount} />
                <p className="vt-card-desc">{current.description}</p>
                <div className="vt-achieve-grid">
                  {current.achievements.map((a) => (
                    <span key={a} className="vt-achieve-item">
                      <Check size={14} />
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/*  App                                                                     */
/* ----------------------------------------------------------------------- */

export default function VanztylPortfolio() {
  const reducedMotion = useReducedMotion();
  const DURATION = reducedMotion ? 0 : 300;

  const [view, setView] = useState("home");
  const [pendingView, setPendingView] = useState(null);
  const [phase, setPhase] = useState("idle"); // idle | leaving | entering

  const [projectCategory, setProjectCategory] = useState("academic");
  const [skillCategory, setSkillCategory] = useState("development");
  const [milestoneCategory, setMilestoneCategory] = useState("academic");
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const timeoutRef = useRef(null);

  const navigate = useCallback(
    (next) => {
      if (next === view) return;
      setSelectedProjectId(null);
      if (reducedMotion) {
        setView(next);
        return;
      }
      setPendingView(next);
      setPhase("leaving");
    },
    [view, reducedMotion]
  );

  useEffect(() => {
    if (phase === "leaving") {
      timeoutRef.current = setTimeout(() => {
        setView(pendingView);
        setPhase("entering");
      }, DURATION);
      return () => clearTimeout(timeoutRef.current);
    }
    if (phase === "entering") {
      let raf1 = requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("idle"));
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [phase, pendingView, DURATION]);

  const handleSelectProjectCategory = useCallback((id) => {
    setProjectCategory(id);
    setSelectedProjectId(null);
  }, []);

  const projectCategoryLabel = PROJECT_CATEGORIES.find((c) => c.id === projectCategory)?.label;
  const skillCategoryLabel = SKILL_CATEGORIES.find((c) => c.id === skillCategory)?.label;
  const milestoneCategoryLabel = MILESTONE_CATEGORIES.find((c) => c.id === milestoneCategory)?.label;
  const selectedProjectName = PROJECTS[projectCategory]?.find((p) => p.id === selectedProjectId)?.name;

  const crumbs = useMemo(() => {
    const list = [{ key: "home", label: "Home", onClick: view !== "home" ? () => navigate("home") : null }];
    if (view === "projects") {
      list.push({
        key: "projects",
        label: "Projects",
        onClick: selectedProjectId ? () => setSelectedProjectId(null) : null,
      });
      list.push({
        key: "cat",
        label: projectCategoryLabel,
        onClick: selectedProjectId ? () => setSelectedProjectId(null) : null,
      });
      if (selectedProjectName) list.push({ key: "proj", label: selectedProjectName, onClick: null });
    } else if (view === "skills") {
      list.push({ key: "skills", label: "Skills", onClick: null });
      list.push({ key: "cat", label: skillCategoryLabel, onClick: null });
    } else if (view === "milestones") {
      list.push({ key: "milestones", label: "Milestones", onClick: null });
      list.push({ key: "cat", label: milestoneCategoryLabel, onClick: null });
    }
    return list;
  }, [view, projectCategoryLabel, skillCategoryLabel, milestoneCategoryLabel, selectedProjectId, selectedProjectName, navigate]);

  const stageClass =
    phase === "leaving" ? "vt-stage-leaving" : phase === "entering" ? "vt-stage-entering" : "vt-stage-idle";

  return (
    <div className={`vt-root ${reducedMotion ? "vt-reduced-motion" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .vt-root {
          --bg: #09090B;
          --surface: #111118;
          --card: #17171F;
          --accent: #8B5CF6;
          --glow: #A855F7;
          --secondary: #C084FC;
          --text: #F8FAFC;
          --text-secondary: #A1A1AA;
          --border: rgba(255,255,255,0.08);
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          background: var(--bg);
          color: var(--text);
          font-family: 'Manrope', sans-serif;
          isolation: isolate;
        }
        .vt-root * { box-sizing: border-box; }

        /* ---------- Ambient background (fixed so it stays put even if the
           page scrolls on small screens) ---------- */
        .vt-bg { position: fixed; inset: 0; z-index: 0; overflow: hidden; }
        .vt-bg-glow {
          position: absolute;
          top: 6%;
          left: 50%;
          width: 900px;
          height: 900px;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(168,85,247,0.30) 0%, rgba(139,92,246,0.14) 35%, rgba(9,9,11,0) 70%);
          filter: blur(40px);
          animation: vtPulse 14s ease-in-out infinite;
        }
        @keyframes vtPulse {
          0%, 100% { opacity: 0.85; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.06); }
        }
        .vt-bg-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 130vmin;
          height: 130vmin;
          transform: translate(-50%, -50%);
          opacity: 0.5;
        }
        .vt-ring { transform-origin: 400px 400px; }
        .vt-ring-1 { animation: vtSpin 140s linear infinite; }
        .vt-ring-2 { animation: vtSpin 95s linear infinite reverse; }
        .vt-ring-3 { animation: vtSpin 180s linear infinite; }
        @keyframes vtSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .vt-bg-particles { position: absolute; inset: 0; }
        .vt-particle {
          position: absolute;
          border-radius: 50%;
          background: var(--secondary);
          animation: vtDrift linear infinite;
        }
        @keyframes vtDrift {
          0% { transform: translateY(0); }
          50% { transform: translateY(-22px); }
          100% { transform: translateY(0); }
        }
        .vt-grain { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.5; mix-blend-mode: overlay; }

        .vt-reduced-motion .vt-bg-glow,
        .vt-reduced-motion .vt-ring,
        .vt-reduced-motion .vt-particle,
        .vt-reduced-motion .vt-float-btn,
        .vt-reduced-motion .vt-avatar {
          animation: none !important;
        }

        /* ---------- Navbar ---------- */
        .vt-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 24px clamp(20px, 4vw, 48px);
          border-bottom: 1px solid var(--border);
          background: rgba(9,9,11,0.55);
          backdrop-filter: blur(10px);
        }
        .vt-wordmark {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: var(--text);
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }
        .vt-wordmark span { color: var(--secondary); }
        .vt-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0; padding: 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          letter-spacing: 0.02em;
          color: var(--text-secondary);
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }
        .vt-breadcrumb-item { display: flex; align-items: center; gap: 8px; white-space: nowrap; }
        .vt-breadcrumb-sep { opacity: 0.5; flex-shrink: 0; }
        .vt-breadcrumb-link {
          background: none; border: none; color: var(--text-secondary);
          font-family: 'JetBrains Mono', monospace; font-size: 12.5px;
          cursor: pointer; padding: 6px 10px; border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .vt-breadcrumb-link:hover { color: var(--text); background: rgba(255,255,255,0.05); }
        .vt-breadcrumb-current { color: var(--secondary); padding: 6px 10px; }

        /* ---------- Mobile bottom tab bar ---------- */
        .vt-mobile-navbar {
          position: fixed; bottom: 0; left: 0; right: 0; height: 64px;
          background: rgba(15,15,22,0.85);
          backdrop-filter: blur(24px);
          border-top: 1px solid var(--border);
          border-radius: 18px 18px 0 0;
          display: none;
          justify-content: space-around;
          align-items: center;
          padding-bottom: env(safe-area-inset-bottom, 10px);
          z-index: 50;
          box-shadow: 0 -8px 32px rgba(0,0,0,0.4);
        }
        .vt-mobile-nav-item {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 3px; flex: 1; height: 100%;
          background: none; border: none; color: var(--text-secondary);
          font-family: 'Space Grotesk', sans-serif; font-size: 10.5px; font-weight: 500;
          transition: color 0.25s ease;
        }
        .vt-mobile-nav-item-active { color: var(--secondary); }
        .vt-mobile-nav-item svg { transition: transform 0.25s ease; }
        .vt-mobile-nav-item-active svg { transform: translateY(-2px) scale(1.08); }

        /* ---------- Main stage ---------- */
        .vt-main {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(120px, 16vh, 152px) clamp(20px, 5vw, 64px) 40px;
        }
        .vt-stage {
          width: 100%;
          max-width: 1000px;
          height: 100%;
          max-height: 680px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: opacity 300ms cubic-bezier(0.22,1,0.36,1), filter 300ms cubic-bezier(0.22,1,0.36,1), transform 300ms cubic-bezier(0.22,1,0.36,1);
        }
        .vt-stage-idle { opacity: 1; filter: blur(0px); transform: scale(1) translateY(0); }
        .vt-stage-leaving { opacity: 0; filter: blur(8px); transform: scale(0.96) translateY(0); }
        .vt-stage-entering { opacity: 0; filter: blur(8px); transform: scale(0.96) translateY(18px); transition: none; }

        /* ---------- Home view ---------- */
        .vt-home { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .vt-avatar {
          width: 84px;
          height: 84px;
          border-radius: 22px;
          overflow: hidden;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, rgba(139,92,246,0.35), rgba(23,23,31,0.95));
          border: 1px solid rgba(168,85,247,0.45);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 10px 30px rgba(168,85,247,0.3);
          animation: vtAvatarFloat 7s ease-in-out infinite;
        }
        @keyframes vtAvatarFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .vt-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .vt-avatar-initials { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 24px; color: var(--secondary); letter-spacing: 0.04em; }
        .vt-alias {
          font-family: 'JetBrains Mono', monospace;
          color: var(--secondary);
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 10px;
        }
        .vt-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 700;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .vt-titles {
          color: var(--text-secondary);
          font-size: clamp(14px, 1.6vw, 17px);
          margin: 0 0 20px;
        }
        .vt-meta {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 18px;
          margin-bottom: 16px;
        }
        .vt-meta-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        .vt-interests {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;
          margin-bottom: 28px;
        }
        .vt-interest-chip {
          font-size: 12px;
          font-family: 'JetBrains Mono', monospace;
          color: var(--secondary);
          border: 1px solid rgba(168,85,247,0.3);
          background: rgba(139,92,246,0.08);
          border-radius: 999px;
          padding: 5px 12px;
        }
        .vt-contact-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, var(--accent), var(--glow));
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          padding: 12px 26px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 8px 30px rgba(168,85,247,0.35);
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease;
          margin-bottom: 32px;
        }
        .vt-contact-btn:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 0 0 1px rgba(255,255,255,0.12), 0 12px 36px rgba(168,85,247,0.45); }

        .vt-float-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; padding: 6px; width: 100%; max-width: 640px; margin: 0 auto;}
        .vt-float-row button, 
        .vt-float-row .vt-btn-secondary { /* Use whatever class your secondary buttons use */
          flex: 1;
          min-width: 160px;   /* Guarantees they don't shrink too small */
          max-width: 200px;   /* Guarantees they stay perfectly equal and uniform */
          justify-content: center; /* Centers the icon + text inside each button */
          white-space: nowrap;
        }
        .vt-float-btn {
          display: flex; align-items: center; gap: 8px;
          background: rgba(23,23,31,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          color: var(--text);
          font-size: 13.5px;
          font-weight: 500;
          padding: 13px 22px;
          border-radius: 16px;
          cursor: pointer;
          animation: vtFloat 6s ease-in-out infinite;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        @keyframes vtFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .vt-float-btn:hover {
          transform: translateY(-7px) scale(1.04);
          border-color: rgba(168,85,247,0.5);
          box-shadow: 0 10px 30px rgba(168,85,247,0.25);
        }

        /* ---------- Panels (Projects / Skills / Milestones) ---------- */
        .vt-panel { display: flex; flex-direction: column; height: 100%; min-height: 0; }
        .vt-panel-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 18px; }
        .vt-panel-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 600;
          margin: 0;
        }
        .vt-panel-header-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

        .vt-icon-action {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; flex-shrink: 0;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 10px; color: var(--text-secondary); cursor: pointer;
          transition: all 0.2s ease;
        }
        .vt-icon-action:hover { color: var(--text); border-color: rgba(168,85,247,0.4); }
        .vt-icon-action-active { color: var(--secondary); border-color: rgba(168,85,247,0.5); background: rgba(139,92,246,0.08); }

        .vt-search-wrap {
          display: flex; align-items: center; gap: 6px;
          width: 34px; height: 34px; overflow: hidden;
          border-radius: 10px;
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1), background 0.2s ease, border-color 0.2s ease;
          border: 1px solid transparent;
        }
        .vt-search-open {
          width: 210px;
          background: var(--surface);
          border-color: rgba(168,85,247,0.4);
          padding: 0 8px;
        }
        .vt-search-icon-inline { color: var(--text-secondary); flex-shrink: 0; }
        .vt-search-input {
          flex: 1; min-width: 0; background: none; border: none; outline: none;
          color: var(--text); font-family: 'Manrope', sans-serif; font-size: 13px;
        }
        .vt-search-input::placeholder { color: var(--text-secondary); }
        .vt-search-close { display: flex; align-items: center; justify-content: center; background: none; border: none; color: var(--text-secondary); cursor: pointer; flex-shrink: 0; }
        .vt-search-close:hover { color: var(--text); }

        .vt-filter-wrap { position: relative; }
        .vt-filter-popover {
          position: absolute; top: calc(100% + 8px); right: 0;
          min-width: 200px; background: var(--card); border: 1px solid var(--border);
          border-radius: 12px; padding: 14px; box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          z-index: 30; animation: vtGridIn 0.2s ease;
        }
        .vt-filter-popover-label { font-size: 11px; color: var(--text-secondary); margin: 0 0 10px; text-transform: uppercase; letter-spacing: 0.05em; }
        .vt-filter-option-list { display: flex; flex-direction: column; gap: 6px; }
        .vt-filter-option {
          display: flex; align-items: center; gap: 8px;
          background: none; border: 1px solid var(--border); color: var(--text-secondary);
          font-size: 12.5px; padding: 7px 10px; border-radius: 8px; cursor: pointer;
          text-align: left; transition: all 0.2s ease;
        }
        .vt-filter-option:hover { border-color: rgba(168,85,247,0.3); color: var(--text); }
        .vt-filter-option-active { color: var(--text); border-color: rgba(168,85,247,0.5); background: rgba(139,92,246,0.08); }
        .vt-filter-option svg { color: var(--secondary); flex-shrink: 0; }
        .vt-filter-empty { font-size: 12px; color: var(--text-secondary); }
        .vt-tag-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--tag-color); flex-shrink: 0; }

        .vt-tag-pill-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
        .vt-tag-pill {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10.5px; font-family: 'JetBrains Mono', monospace;
          padding: 3px 9px; border-radius: 999px;
          border: 1px solid var(--tag-color); color: var(--tag-color);
          background: rgba(255,255,255,0.03);
        }

        .vt-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; padding: 2px; }
        .vt-tab {
          display: flex; align-items: center; gap: 6px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 13px;
          padding: 8px 16px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .vt-tab:hover { color: var(--text); border-color: rgba(168,85,247,0.4); }
        .vt-tab-active {
          color: #fff;
          background: linear-gradient(135deg, var(--accent), var(--glow));
          border-color: transparent;
        }
        .vt-tab:disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }

        .vt-grid-scroll { flex: 1; min-height: 0; overflow-y: auto; padding: 10px 8px 24px 4px; margin: -10px -8px -24px -4px; }
        .vt-grid-scroll::-webkit-scrollbar { width: 6px; }
        .vt-grid-scroll::-webkit-scrollbar-thumb { background: rgba(168,85,247,0.3); border-radius: 999px; }
        .vt-grid-scroll::-webkit-scrollbar-track { background: transparent; }

        @keyframes vtGridIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .vt-project-grid, .vt-detail, .vt-milestone-card { animation: vtGridIn 0.35s cubic-bezier(0.22,1,0.36,1); }
        .vt-reduced-motion .vt-project-grid,
        .vt-reduced-motion .vt-detail,
        .vt-reduced-motion .vt-milestone-card { animation: none; }

        .vt-project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 18px;
          padding: 4px;
        }
        .vt-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 18px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .vt-card-cover { width: 100%; height: 120px; object-fit: cover; border-radius: 10px; margin-bottom: 12px; display: block; background: var(--surface); }
        .vt-project-card { cursor: pointer; }
        .vt-project-card:hover, .vt-project-card:focus-visible {
          transform: translateY(-4px);
          border-color: rgba(168,85,247,0.4);
          box-shadow: 0 16px 32px rgba(139,92,246,0.18);
        }
        .vt-card-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
        .vt-card-title { font-family: 'Space Grotesk', sans-serif; font-size: 15.5px; font-weight: 600; margin: 0; }
        .vt-detail-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(19px, 2.4vw, 24px); font-weight: 600; margin: 0; }
        .vt-detail-top-meta { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .vt-badge {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 10.5px; font-family: 'JetBrains Mono', monospace;
          color: var(--secondary); border: 1px solid rgba(168,85,247,0.3);
          padding: 3px 9px; border-radius: 999px; white-space: nowrap;
        }
        .vt-card-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.55; margin: 0 0 14px; }
        .vt-tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .vt-tech-tag {
          font-size: 11px; font-family: 'JetBrains Mono', monospace;
          color: var(--text-secondary); background: rgba(255,255,255,0.04);
          border-radius: 6px; padding: 4px 8px;
        }
        .vt-card-footer { display: flex; justify-content: space-between; align-items: center; }
        .vt-year { font-size: 12px; color: var(--text-secondary); }
        .vt-card-cta {
          display: flex; align-items: center; gap: 4px;
          font-size: 12px; color: var(--secondary); font-weight: 500;
        }
        .vt-empty-note { color: var(--text-secondary); font-size: 13px; padding: 20px 4px; grid-column: 1 / -1; }

        /* ---------- Image gallery ---------- */
        .vt-image-gallery { display: flex; gap: 8px; overflow-x: auto; margin-bottom: 16px; padding-bottom: 2px; }
        .vt-image-gallery::-webkit-scrollbar { height: 5px; }
        .vt-image-gallery::-webkit-scrollbar-thumb { background: rgba(168,85,247,0.3); border-radius: 999px; }
        .vt-gallery-img { height: 130px; width: auto; border-radius: 10px; border: 1px solid var(--border); flex-shrink: 0; object-fit: cover; }

        /* ---------- Project detail ---------- */
        .vt-detail { max-width: 640px; padding: 4px; }
        .vt-back-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: none; border: 1px solid var(--border); color: var(--text-secondary);
          font-size: 12.5px; padding: 8px 14px; border-radius: 999px; cursor: pointer;
          margin-bottom: 20px; transition: all 0.2s ease;
        }
        .vt-back-btn:hover { color: var(--text); border-color: rgba(168,85,247,0.4); }
        .vt-detail-meta { display: flex; flex-wrap: wrap; gap: 8px 18px; margin-bottom: 6px; }
        .vt-detail-links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
        .vt-detail-link-btn {
          display: flex; align-items: center; gap: 7px;
          font-size: 13px; font-weight: 500; color: var(--text);
          background: var(--surface); border: 1px solid var(--border);
          padding: 9px 16px; border-radius: 10px; text-decoration: none;
          transition: all 0.25s ease;
        }
        .vt-detail-link-btn:hover { border-color: rgba(168,85,247,0.5); background: rgba(139,92,246,0.08); transform: translateY(-2px); }

        /* ---------- Skills orbit (auto-responsive multi-ring) ---------- */
        .vt-orbit-stage { flex: 1; display: flex; align-items: center; justify-content: center; min-height: 0; padding: 8px; overflow: visible; }
        .vt-orbit-wrap { position: relative; }
        .vt-orbit-center {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.28), rgba(23,23,31,0.92));
          border: 1px solid rgba(168,85,247,0.45);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
          text-align: center; padding: 10px; z-index: 2;
          box-shadow: 0 0 30px rgba(168,85,247,0.25);
          color: var(--text);
          /* ADD THESE TWO LINES */
          pointer-events: none; /* Allows hover to pass through the empty background box */
        }

        /* Re-enable pointer interactions explicitly on the children so it behaves normally */
        .vt-orbit-center * {
          pointer-events: auto;
        }
        .vt-orbit-center span { font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: 600; line-height: 1.25; }
        .vt-orbit-track {
          position: absolute; border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.06);
          pointer-events: none;
        }
        .vt-orbit-ring { position: absolute; inset: 0; animation-name: vtOrbitSpin; animation-timing-function: linear; animation-iteration-count: infinite; pointer-events: none;}
        @keyframes vtOrbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .vt-orbit-item-pos { position: absolute; top: 50%; left: 50%; width: 0; height: 0; pointer-events: auto;}
        .vt-orbit-item-counter {
          position: absolute; top: 0; left: 0;
          animation-name: vtOrbitSpinReverse; animation-timing-function: linear; animation-iteration-count: infinite;
        }
        @keyframes vtOrbitSpinReverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .vt-reduced-motion .vt-orbit-ring,
        .vt-reduced-motion .vt-orbit-item-counter { animation: none !important; }

        .vt-skill-chip-orbit {
          width: 100%; height: 100%;
          border-radius: 16px;
          background: var(--card);
          border: 1px solid var(--border);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
          padding: 4px;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .vt-skill-chip-orbit:hover {
          transform: scale(1.16) translateY(-2px);
          border-color: rgba(168,85,247,0.6);
          box-shadow: 0 0 22px rgba(168,85,247,0.35);
          z-index: 5;
        }
        .vt-chip-fallback-letter { font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: var(--secondary); line-height: 1; }
        .vt-skill-chip-orbit-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: var(--text-secondary);
          text-align: center;
          line-height: 1.1;
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        /* Flat skill list shown in place of the orbit on smaller laptops, tablets, and phones */
        .vt-skill-flat-grid { display: flex; flex-wrap: wrap; gap: 10px; padding: 4px; }
        .vt-skill-chip-flat {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px; color: var(--text);
          background: var(--card); border: 1px solid var(--border);
          border-radius: 12px; padding: 9px 14px;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s ease;
        }
        .vt-skill-chip-flat:hover { transform: translateY(-2px); border-color: rgba(168,85,247,0.4); }

        /* ---------- Milestones — linear timeline ---------- */
        .vt-timeline-wrap {
          position: relative; width: 100%;
          overflow-x: auto; overflow-y: hidden;
          padding: 28px 4px 18px; cursor: grab;
          scrollbar-width: none; -webkit-overflow-scrolling: touch;
        }
        .vt-timeline-wrap:active { cursor: grabbing; }
        .vt-timeline-wrap::-webkit-scrollbar { display: none; }
        .vt-timeline-track {
          position: relative;
          display: flex; gap: 54px; padding: 0 28px;
          width: max-content; align-items: flex-start;
          animation: vtGridIn 0.3s ease;
        }
        .vt-reduced-motion .vt-timeline-track { animation: none; }
        /* Line lives inside the track (not the outer scroll wrap) so it always
           spans the full scrollable width and never gets cut off, and its
           top offset is derived from the node-wrap's own padding plus circle
           radius so it stays centered on the circles regardless of viewport. */
        .vt-timeline-line {
          position: absolute; top: 9.5px; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.3) 12%, rgba(168,85,247,0.3) 88%, transparent);
          z-index: 1;
        }
        .vt-timeline-node-wrap {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .vt-timeline-node {
          width: 13px; height: 13px; border-radius: 50%;
          background: var(--bg); border: 2px solid rgba(168,85,247,0.4);
          transition: all 0.3s ease; display: block;
        }
        .vt-timeline-node-wrap:hover .vt-timeline-node {
          transform: scale(1.2); border-color: var(--secondary); box-shadow: 0 0 12px var(--accent);
        }
        .vt-timeline-node-selected .vt-timeline-node {
          transform: scale(1.35); background: var(--accent); border-color: var(--text); box-shadow: 0 0 18px var(--glow);
        }
        .vt-timeline-year { font-family: 'Space Grotesk', sans-serif; font-size: 12px; color: var(--text-secondary); white-space: nowrap; }
        .vt-timeline-node-selected .vt-timeline-year { color: var(--secondary); font-weight: 600; }
        .vt-timeline-controls { display: flex; justify-content: center; gap: 12px; margin: 14px 0 4px; }
        .vt-year-pill {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--text-secondary);
          background: rgba(255,255,255,0.04); padding: 5px 11px; border-radius: 8px; white-space: nowrap;
        }
        .vt-achieve-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-top: 14px; }
        .vt-achieve-item { display: flex; align-items: flex-start; gap: 8px; font-size: 12.5px; color: var(--text-secondary); }
        .vt-achieve-item svg { color: var(--accent); flex-shrink: 0; margin-top: 1px; }
        .vt-milestone-org { font-size: 12.5px; color: var(--secondary); margin: 0; font-family: 'JetBrains Mono', monospace; }

        /* ---------- Responsive: mobile layout ---------- */
        @media (max-width: 768px) {
          .vt-navbar { padding: 16px 20px; gap: 14px; }
          .vt-status-pill { display: none; }
          .vt-root { height: auto; min-height: 100vh; overflow-y: auto; overflow-x: hidden; }
          .vt-main { height: auto; min-height: calc(100vh - 64px); padding: 90px 20px 96px; align-items: flex-start; }
          .vt-stage { max-height: none; height: auto; }
          .vt-panel { height: auto; }
          .vt-grid-scroll { overflow-y: visible; height: auto; max-height: none; padding: 4px; margin: 0; }
          .vt-project-grid { grid-template-columns: 1fr; }
          .vt-mobile-navbar { display: flex; }
          .vt-timeline-track { gap: 36px; padding: 0 20px; }
          /* Only Contact Me stays on Home at mobile widths — the bottom tab
             bar already covers Projects / Skills / Milestones navigation. */
          .vt-float-row { display: none; }
        }
      `}</style>

      <AmbientBackground reducedMotion={reducedMotion} />
      <Navbar crumbs={crumbs} />

      <main className="vt-main">
        <div className={`vt-stage ${stageClass}`}>
          {view === "home" && <HomeView onNavigate={navigate} />}
          {view === "projects" && (
            <ProjectsView
              category={projectCategory}
              onSelectCategory={handleSelectProjectCategory}
              selectedProjectId={selectedProjectId}
              onOpenProject={setSelectedProjectId}
              onCloseProject={() => setSelectedProjectId(null)}
            />
          )}
          {view === "skills" && <SkillsView category={skillCategory} onSelectCategory={setSkillCategory} />}
          {view === "milestones" && (
            <MilestonesView category={milestoneCategory} onSelectCategory={setMilestoneCategory} />
          )}
        </div>
      </main>

      <MobileNavbar view={view} onNavigate={navigate} />
    </div>
  );
}