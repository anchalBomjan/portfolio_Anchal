import { AiOutlineApi } from "react-icons/ai";
import {
  FaAngular,
  FaBug,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaJs,
  FaNodeJs,
  FaPalette,
  FaRocket,
} from "react-icons/fa";
import {
  SiDotnet,
  SiFlutter,
  SiN8N,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import type { Badge, ExperienceItem, Project, Skill } from "./types";

export const skills: Skill[] = [

  {
    name: "Dot Net",
    icon: SiDotnet,
    color: "#512BD4",
    usage: ".NET is a developer platform with tools and libraries for building all types of applications, including web, mobile, desktop, gaming, IoT, cloud, and microservices.",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    usage: "Adds interactivity and dynamism to modern web interfaces.",
    level: 90,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    usage: "Used for front-end and back-end applications with static typing.",
    level: 85,
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "#DD0031",
    usage: "Development of complex Single Page Applications (SPAs) for enterprise environments.",
    level: 90,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    usage: "Building microservices and backend development tools.",
    level: 50,
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
    usage: "Containerizing applications to ensure consistency across environments.",
    level: 70,
  },
  {
    name: "Flutter",
    icon: SiFlutter, // make sure to import from 'react-icons/si'
    color: "#02569B",
    usage: "Cross-platform mobile app development for Android and iOS with a single codebase.",
    level: 80,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    usage: "Designing and optimizing relational databases.",
    level: 85,
  },
  {
    name: "n8n",
    icon: SiN8N,
    color: "#6A23B7",
    usage: "Workflow automation and integration between different APIs.",
    level: 75,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    usage: "Code versioning and team collaboration.",
    level: 95,
  },
     {
    name: "SQL",
    icon: FaDatabase,
    color: "#00758F",
    usage: "Designing, querying, and managing relational databases for structured data storage and retrieval.",
    level: 90,
  },
];

export const experience: ExperienceItem[] = [


  
  {
    period: "March 2025 - Present",
    company: "IMARK Pvt Ltd",
    description:
      "Working as a Software Developer at IMARK Pvt Ltd, a company focused on Fintech (TMS). Experienced in developing scalable web applications using .NET Core, Angular, SQL Server, and Clean Architecture.",
  },
  {
    period: "October 2024 - December 2025",
    company: "Percoid IT Solution",
    description:
      "Technical Mastery: Develop full-stack proficiency using .NET Core (backend), Angular (frontend), and SignalR (real-time communication),Database Optimization: Gain practical experience in relational database design, focusing on schema structuring and high-performance SQL query optimization.Software Lifecycle & Workflow: Implement industry best practices using Git for version control and collaborating within a structured project management framework.Problem Solving: Refine the ability to troubleshoot and resolve complex, real-world technical challenges in a production-oriented environment",
  },
  {
    period: "2018 - 2023",
    company: "GSTU",
    description:
      "Completed Bachelor's in Computer Science and Engineering  from Gopalganj Science and Technology University, developing a strong foundation in programming, databases, and software development principles.",
  }
  

];

export const projects: Project[] = [

  {
    id: 1,
    title: "TMS (Terminal Management System)",
    description:
      "A .NET 6 and Angular-based system enabling secure data transfer between servers and POS terminals.",
    longDescription:
      "Designed the architecture and workflow allowing Android POS devices to connect with the system for file downloads (APK, images, banners, etc.), heartbeat monitoring, and status updates. Implemented digital signatures using .pfx files, TLS communication, AES encryption, and Google 2FA for secure access.",
    stack: [".NET 6", "Angular", "TLS", "AES Encryption", "OpenSSL", "Google 2FA"],
    image: import.meta.env.BASE_URL + "/images/tms.png",
    results:
      "Improved data security and device management reliability by implementing TLS and AES protocols.",
  },
 

  {
    id: 2,
    title: "Flutter Mobile Projects",
    description:
      "Cross-platform apps built using Flutter and .NET backend.",
    longDescription:
      "Developed Flutter-based mobile apps integrated with secure .NET APIs for user authentication, data visualization, and geolocation-based services. Emphasized on clean UI, performance, and reusability.",
    stack: ["Flutter", "Dart", ".NET 8", "REST API"],
    image: import.meta.env.BASE_URL + "/images/flutter-app.png",
    results:
      "Delivered robust mobile applications with seamless API integration and excellent UI responsiveness.",
  },
];


export const badges: Badge[] = [
  {
    name: "Master of APIs",
    icon: AiOutlineApi,
    description: "Design and implementation of scalable and secure RESTful APIs.",
  },
  {
    name: "Bug Hunter",
    icon: FaBug,
    description: "Skilled in debugging and solving complex problems.",
  },
  {
    name: "UI Designer",
    icon: FaPalette,
    description: "Creating intuitive and visually appealing interfaces.",
  },
  {
    name: "Performance Rocket",
    icon: FaRocket,
    description: "Optimizing applications for maximum speed and efficiency.",
  },
];
