import type { ProjectData } from "../types/Project.types";

export const projects: ProjectData[] = [
  {
    slug: "betterdrive",
    heading: "BetterDrive",
    subheading: "Google Drive That Feels Right",
    image: "/projects/p1.webp",
    description:
      "BetterDrive is a full-stack file management web application inspired by Google Drive, built to handle secure file storage and structured access control.",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Google APIs",
    ],
    filler: "with a focus on clean architecture and real-world usability.",
    features: [
      "Secure authentication using JWT and Google OAuth",
      "File upload, search, and access-based visibility",
      "Redis caching and debounced search for performance",
    ],
    links: {
      live: "https://betterdrive.rhythmdoshi.site",
      github: "https://github.com/Rhythmdoshi31",
    },
  },
  {
    slug: "societysync",
    heading: "SocietySync",
    subheading: "Role-Based Society Management Platform",
    image: "/projects/p22.webp",
    description:
      "SocietySync is a web platform designed to simplify management operations within residential communities. It allows different user roles such as residents, admins, and staff to interact through a unified system for handling daily tasks like issue reporting and scheduling.",
    tech: [],
    filler: "focusing on reliability and organized data handling.",
    features: [
      "Role-based access with JWT and Passport.js authentication",
      "Ticketing and issue tracking system for residents and admins",
      "Structured APIs and database design for handling multiple workflows",
    ],
    links: {
      live: "https://societysync.rhythmdoshi.site",
      github: "https://github.com/Rhythmdoshi31/Societysnyc",
    },
  },
  {
    slug: "livelychat",
    heading: "LivelyChat",
    subheading: "Real-Time Communication Platform",
    image: "/projects/p3.webp",
    description:
      "LivelyChat is a real-time communication platform that enables users to interact through instant messaging and peer-to-peer video calls with low latency.",
    tech: ["Node.js", "Express", "WebSockets", "WebRTC", "EJS", "Tailwind CSS"],
    filler:
      "with a focus on real-time performance and smooth user interaction.",
    features: [
      "Real-time messaging using WebSockets",
      "Peer-to-peer video calling using WebRTC",
      "Event-driven backend for handling live sessions",
    ],
    links: {
      live: "https://lively.rhythmdoshi.site",
      github: "https://github.com/Rhythmdoshi31/Lively",
    },
  },
  {
    slug: "cineclair",
    heading: "Cinéclair",
    subheading: "Movie Discovery Platform",
    image: "/projects/p4.webp",
    description:
      "Cinéclair is a modern movie discovery app that allows users to explore trending movies, TV shows, and actor profiles with a smooth and immersive UI.",
    tech: ["React", "Redux", "Tailwind CSS", "Framer Motion", "TMDB API"],
    filler: "focused on performance, animations, and seamless user experience.",
    features: [
      "Real-time movie and TV data integration via API",
      "Advanced search and categorized browsing",
      "Smooth UI animations using Framer Motion",
    ],
    links: {
      live: "https://cineclair.rhythmdoshi.site", 
      github: "https://github.com/Rhythmdoshi31/cineclair",
    },
  },
  {
    slug: "portfolio",
    heading: "Developer Portfolio v2",
    subheading: "Personal Portfolio Website v2",
    image: "/projects/p5.webp",
    description:
      "A personal portfolio website to showcase projects, skills, and experience with a clean UI and smooth interactions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcnUI", "AceternityUI"],
    filler: "designed for performance, accessibility, and clean presentation.",
    features: [
      "Dynamic project pages with reusable components",
      "Responsive and minimal UI design",
      "Optimized performance with Next.js features",
    ],
    links: {
      live: "https://v2.rhythmdoshi.site",
      github: "https://github.com/Rhythmdoshi31",
    },
  },
  {
    slug: "leetcode-hider",
    heading: "LeetCode Difficulty Hider",
    subheading: "Chrome Extension for Distraction-Free DSA Practice",
    image: "/projects/leetcode-difficulty-hider.webp",
    description:
      "A lightweight Chrome extension designed to hide problem difficulty on LeetCode with 20+ users, helping them focus purely on problem-solving without bias.",
    tech: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    filler:
      "built for simplicity, speed, and improved focus during coding practice.",
    features: [
      "Hides difficulty indicators dynamically on LeetCode pages",
      "Lightweight and fast using Chrome Extension APIs",
      "Improves focus and unbiased problem-solving",
    ],
    links: {
      live: "Currently not available",
      github: "https://github.com/Rhythmdoshi31",
    },
  }
];
