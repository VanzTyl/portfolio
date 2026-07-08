import { Monitor, Smartphone, LineChart, Plane, ShoppingCart, User, Ghost } from "lucide-react";

export const projectsData = [
  // 2026 PROJECTS
  {
    id: "sense-of-self",
    title: "Sense of Self",
    year: "2026",
    category: "Web App",
    icon: User, 
    terminalIcon: Monitor, 
    featured: false,
    visibility: "Public",
    repoUrl: "https://github.com/VanzTyl/Sense-of-Self",
    liveUrl: "https://sense-of-self.netlify.app/",
    type: "Interactive Identity Showcase",
    description: "A project made for understanding the self where it showcases my own developed selves that I have developed throughout the years.",
    stack: ["Next.js", "TailwindCSS"],
    features: ["Interactive identity exploration", "Responsive UI/UX", "Component-based architecture"]
  },
  {
    id: "unveil",
    title: "Unveil",
    year: "2026",
    category: "Web App",
    icon: Ghost,
    terminalIcon: Monitor,
    featured: false,
    visibility: "Public",
    repoUrl: "https://github.com/VanzTyl/Hackathon-Jam-26/tree/experiment",
    liveUrl: null,
    type: "Anonymous P2P Platform",
    description: "A project made during my participation in Global Game Jam & Hackathon Jam 2026. It showcases an anonymous peer-to-peer platform utilizing strict CIIT student email verification for registration.",
    stack: ["Next.js", "TailwindCSS", "Supabase", "Resend"],
    features: ["Anonymous peer-to-peer messaging", "Domain-restricted auth (CIIT emails only)", "Real-time database integration"]
  },
  {
    id: "latik-delights",
    title: "Latik Delights",
    year: "2026",
    category: "Web App",
    icon: ShoppingCart,
    terminalIcon: Monitor,
    featured: true,
    visibility: "Public",
    repoUrl: "https://github.com/VanzTyl/Latik-Delights",
    liveUrl: null,
    type: "Web-based POS & Inventory Management",
    description: "A comprehensive point-of-sale and inventory system built for a local business to transition from manual to digital record-keeping.",
    stack: ["HTML/CSS/JS", "PHP", "MySQL", "XAMPP"],
    features: ["Real-time sales recording", "Comprehensive product management", "Automated inventory monitoring"]
  },

  // 2024 PROJECTS
  {
    id: "e-coinmerce",
    title: "E-Coinmerce",
    year: "2024",
    category: "Web App",
    icon: LineChart,
    terminalIcon: Monitor,
    featured: true,
    visibility: "Public",
    repoUrl: "https://github.com/VanzTyl/E-Coinmerce",
    liveUrl: null,
    type: "Real-Time Crypto Market Simulation Platform",
    description: "A full-stack web application simulating a live crypto trading environment. Designed for risk-free learning, users can execute paper trades using dynamically generated price data for 30 unique coins.",
    stack: ["React", "Node.js", "FastAPI", "MongoDB"],
    features: ["Live market simulation engine", "Risk-free paper trading", "Dynamic price updates", "Custom token ecosystem"]
  },

  // 2023 PROJECTS
  {
    id: "navi-guide",
    title: "NaviGuide",
    year: "2023",
    category: "Mobile App",
    icon: Plane,
    terminalIcon: Smartphone,
    featured: true,
    visibility: "Private", // Marked private as an example for enterprise/thesis projects
    repoUrl: null,
    liveUrl: null,
    type: "Android Aircraft Marshalling Trainer",
    description: "An AI-powered mobile application designed to train aviation personnel in aircraft marshalling. Uses machine learning for real-time skeletal tracking.",
    stack: ["Unity 3D", "C#", "MediaPipe", "Android Studio"],
    features: ["Real-time gesture recognition", "3D simulation environment", "Automated procedure scoring"]
  },
];