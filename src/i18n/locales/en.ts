import type { Translation } from "../types";

/** English translations */
const en: Translation = {
  // ---------- Nav ----------
  nav: {
    about: "About",
    projects: "Projects",
    homelab: "Homelab",
    skills: "Skills",
    decisions: "Tech Decisions",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    contact: "Contact",
  },

  // ---------- Hero ----------
  hero: {
    subtitle: "AI & Backend Developer",
    title: "Backend-Oriented Fullstack Developer",
  },

  // ---------- About ----------
  about: {
    heading: "About Me",
    description: [
      "Software Engineering graduate from FPT University (GPA 7.8/10), oriented toward Backend & AI Application Development. Experienced in building web systems with ASP.NET Core, NestJS, React, PostgreSQL, and Docker. Particularly interested in backend architecture, retrieval systems (RAG, vector search), and deployment pipelines.",
      "Running a personal homelab on Fedora Linux: container orchestration with Docker Compose, monitoring via Portainer/Komodo, and automated CI/CD deployment — treating it as a lab for real system architecture experiments.",
    ],
    highlights: {
      projects: "Real Projects",
      technologies: "Technologies",
      homelab: "Homelab Services",
    },
  },

  // ---------- Skills ----------
  skills: {
    heading: "Skills",
    all: "All",
    backend: "Backend",
    ai: "AI & Retrieval",
    infrastructure: "Infrastructure",
    frontend: "Frontend",
    database: "Database",
  },

  // ---------- Experience ----------
  experience: {
    heading: "Work Experience",
  },

  // ---------- Projects ----------
  projects: {
    heading: "Projects",
    detail: "Details",
    problem: "Problem",
    whatIBuilt: "What I Built",
    highlights: "Technical Highlights",
    challenges: "Challenges",
    learned: "What I Learned",
    architecture: "Architecture",
    responsibilities: "Responsibilities & Contributions",
    technologies: "Technologies",
    links: "Links",
    members: "members",
  },

  // ---------- Homelab ----------
  homelab: {
    heading: "Homelab & Infrastructure",
    description: "Running a homelab server on repurposed hardware with Fedora Linux, using Docker Compose to orchestrate all services. Managing through Portainer and Komodo, with automated CI/CD pipeline and 24/7 system monitoring.",
    specs: "Specs",
    services: "Services",
    challenges: "Challenges",
    learned: "What I Learned",
  },

  // ---------- Technical Decisions ----------
  decisions: {
    heading: "Technical Decisions",
    subtitle: "Tradeoffs and technical decisions made when building systems.",
  },

  // ---------- Education ----------
  education: {
    heading: "Education",
    gpa: "GPA",
    scholarship: "Scholarship",
  },

  // ---------- Certifications ----------
  certifications: {
    heading: "Certifications",
  },

  // ---------- Contact ----------
  contact: {
    heading: "Contact",
    description: "Thanks for your interest! Feel free to reach out through any of the channels below or send me an email directly.",
    email: "Email",
    phone: "Phone",
    address: "Address",
    ctaTitle: "Let's work together!",
    ctaDescription: "I'm always open to new opportunities and projects.",
    sendEmail: "Send Email",
  },

  // ---------- Footer ----------
  footer: {
    built: "Built with Next.js & shadcn/ui.",
  },

  // ---------- Common ----------
  common: {
    languageVi: "Tiếng Việt",
    languageEn: "English",
  },
};

export default en;