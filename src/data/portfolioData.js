// src/data/portfolioData.js
// Single source of truth for all portfolio content.
// Update images and links here — no need to touch components.

export const portfolioData = {
  personalInfo: {
    name: "Avinash Singh",
    role: "Full Stack Developer",
    location: "Based in India",
    availability: "Available for Freelance",
    workPreference: "Work from Anywhere",
    contact: {
      email: "mailto:hello@example.com",
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourusername",
    },
  },

  about: {
    displayHeading: {
      line1: "Obsessed with",
      highlight1: "detail",
      connector: "&",
      line2: "driven by",
      highlight2: "performance",
    },
    paragraphs: [
      "I'm Avinash, a multidisciplinary developer who bridges the gap between design and engineering. I don't just write code; I craft digital experiences that are fast, accessible, and visually striking.",
      "With a background in full-stack development and GenAI, I bring a unique perspective to every project. My goal is to build software that feels inevitable.",
    ],
    portrait: "/images/portrait.webp",
    resumeLink: "#", // Replace with actual resume URL
  },

  skills: [
    {
      category: "Frontend",
      icon: "code",
      technologies: ["React", "Next.js", "Tailwind", "GSAP", "Redux"],
    },
    {
      category: "Backend",
      icon: "dns",
      technologies: ["Node.js", "Express", "MongoDB", "Firebase", "PostgreSQL"],
    },
    {
      category: "Gen AI",
      icon: "psychology",
      technologies: ["RAG", "LangChain", "Gemini", "System Design"],
    },
    {
      category: "DevOps",
      icon: "deployed_code",
      technologies: ["AWS", "Docker", "CI/CD", "Git", "Vercel"],
    },
  ],

  experience: [
    {
      id: "exp-1",
      year: "2026",
      role: "AI Intern",
      company: "Blink Tech",
      description:
        "Integrated technical features into web applications and optimized GenAI prompts to significantly reduce operational costs.",
    },
    {
      id: "exp-2",
      year: "2025",
      role: "Hackathon Winner",
      company: "NHAI Road Safety",
      description:
        "Ranked in the top 200 out of 40,000+ participants, developing AI-driven solutions for automated infrastructure and road maintenance.",
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "CRYPNEW",
      year: "2025",
      category: "Web Platform",
      tagline: "Real-time Cryptocurrency, Weather, and News Dashboard",
      description:
        "A comprehensive dashboard integrating multiple APIs to deliver real-time financial and environmental data with a brutalist UI.",
      techStack: ["React", "Tailwind", "REST APIs"],
      links: {
        live: "https://crypnew.live",
        github: "https://github.com/yourusername/crypnew",
      },
      image: "/images/projects/crypnew.jpg",
    },
    {
      id: "proj-2",
      title: "KARMAM",
      year: "2026",
      category: "SaaS App",
      tagline: "SaaS Productivity & Discipline Engine",
      description:
        "A robust productivity tool designed to track daily, weekly, and monthly goals with automated insights.",
      techStack: ["MERN Stack", "Tailwind CSS", "JWT Auth"],
      links: {
        live: "https://karmam.app",
        github: "https://github.com/yourusername/karmam",
      },
      image: "/images/projects/karmam.jpg",
    },
    {
      id: "proj-3",
      title: "KRITIQ",
      year: "2026",
      category: "VS Code Extension",
      tagline: "AI-Powered VS Code Extension",
      description:
        "Leveraged Gemini AI and LangChain to build an extension that provides automated code reviews and security audits directly in the IDE.",
      techStack: ["JavaScript", "LangChain", "Gemini API"],
      links: {
        live: "https://marketplace.visualstudio.com/",
        github: "https://github.com/yourusername/kritiq",
      },
      image: "/images/projects/kritiq.jpg",
    },
    {
      id: "proj-4",
      title: "CABZY",
      year: "2025",
      category: "Mobile App",
      tagline: "A Taxi Service Platform",
      description:
        "Full-stack application managing ride bookings, driver dispatching, and real-time location tracking.",
      techStack: ["React Native", "Node.js", "MongoDB"],
      links: {
        live: "https://cabzy.live",
        github: "https://github.com/yourusername/cabzy",
      },
      image: "/images/projects/cabzy.jpg",
    },
  ],
};
