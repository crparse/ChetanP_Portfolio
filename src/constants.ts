/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  Globe, 
  Layers, 
  Mail, 
  Github, 
  Linkedin, 
  FileText,
  Brain,
  Rocket,
  Zap,
  Server,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Award,
  BookOpen,
  Instagram
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Chetan Parse",
  role: "Backend Developer & AI Engineer",
  tagline: "Building scalable backend systems, AI-powered applications, and intelligent developer tools.",
  about: "Hi, I’m Chetan Parse, a Backend Developer and AI enthusiast passionate about building scalable systems, intelligent automation tools, and AI-powered applications.\n\nI currently work at C-edge Technologies as a System Analyst (Backend Developer), where I work with production banking systems, Linux environments, databases, server migrations, DR drills, and automation workflows.\n\nI’ve solved 525+ DSA problems and maintained a 450-day coding streak on GeeksforGeeks.",
  building: "ShraK.AI — AI-powered Cloud IDE for Developers.",
  email: "chetanparse73@gmail.com",
  socials: {
    github: "https://github.com/crparse",
    linkedin: "https://www.linkedin.com/in/chetan-parse-43797b17a",
    instagram: "https://www.instagram.com/chetanparse_/"
  }
};

export const SKILL_CATEGORIES = [
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "OAuth", "BullMQ", "Python APIs"]
  },
  {
    title: "AI / GenAI",
    icon: Brain,
    skills: ["OpenAI APIs", "Prompt Engineering", "RAG", "LLM Integration", "AI Chatbots", "AI Automation"]
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Database",
    icon: Server,
    skills: ["MongoDB", "MySQL", "SQL"]
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git", "GitHub", "Linux", "Docker", "Postman", "Vercel"]
  }
];

export const PROJECTS = [
  {
    title: "ShraK.AI",
    description: "A futuristic browser-based AI-powered cloud IDE designed for developers. Code, build, debug, and execute projects directly with AI assistance.",
    features: ["Browser-based coding", "AI coding assistant", "Multi-language support", "AI debugging", "Real-time execution"],
    tech: ["MERN", "AI APIs", "Node.js", "Monaco Editor"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "AI Email Automation",
    description: "Intelligent system that reads, categorizes, and generates automated AI replies for Gmail and Outlook.",
    features: ["OAuth Integrations", "AI classification", "Automated replies", "BullMQ queue system"],
    tech: ["TypeScript", "Node.js", "BullMQ", "OpenAI APIs"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Parsed Coin",
    description: "Cryptocurrency-focused backend project emphasizing performance and security.",
    features: ["High throughput", "Secure transactions", "Distributed ledger"],
    tech: ["C++", "Node.js", "Ubuntu", "MongoDB"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Automatic Irrigation",
    description: "IoT-based smart irrigation system using sensors to optimize water usage.",
    features: ["Real-time monitoring", "Automated watering", "Sensor data analysis"],
    tech: ["Arduino UNO", "Python", "IoT Sensors"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "AI Text to Image",
    description: "Web-based generator that turns text descriptions into visual art using deep learning.",
    features: ["GANs implementation", "TensorFlow.js", "Fast inference"],
    tech: ["MERN", "TensorFlow.js", "GANs"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
  }
];

export const EXPERIENCE = [
  {
    company: "C-edge Technologies",
    role: "System Analyst (Backend Developer)",
    period: "Present",
    description: "Managing production banking systems, Linux server operations, and complex database migrations.",
    bullets: [
      "Linux server operations & Shell scripting",
      "Database migrations & SQL operations",
      "DR Drill activities & infrastructure support",
      "Automation of production workflows"
    ]
  },
  {
    company: "Chegg",
    role: "Computer Science Subject Matter Expert",
    period: "Past",
    description: "Mentoring students and solving advanced technical problems.",
    bullets: [
      "Solved 500+ DSA problems",
      "Debugged complex programming issues",
      "Technical mentoring for CS concepts"
    ]
  }
];

export const ACHIEVEMENTS = [
  { label: "DSA Problems", value: "525+", icon: Code2 },
  { label: "Coding Streak", value: "450 Days", icon: TrendingUp },
  { label: "GFG Rank", value: "6th (MU)", icon: Award },
  { label: "Projects", value: "10+", icon: Rocket }
];

export const LEARNING_PATH = [
  { title: "Mathematics", children: ["Linear Algebra", "Matrix Operations", "Eigenvalues", "Gaussian Elimination", "Vector Math"] },
  { title: "Core CS", children: ["Advanced DSA", "Dynamic Programming", "System Design"] },
  { title: "AI/ML", children: ["Generative AI", "RAG Systems", "LLM Fine-tuning", "Prompt Engineering"] }
];

const Layout = Globe; // Temporary fix for missing Brain/Layout imports if needed
