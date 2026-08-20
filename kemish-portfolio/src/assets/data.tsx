import { Book, Dumbbell, Guitar } from "lucide-react";

import { RiNextjsFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import type { Experience } from "../lib/types";

export const myInfo = {
  name: "Isai Gomez",
  alias: "Isai",
  title: "Full Stack Developer",
  image: "/Portrait.webp",
  image2: "/BYUI.webp",
  skills: [
    {
      name: "NextJS",
      children: <RiNextjsFill className="size-10" />,
      className: "bg-zinc-500",
    },
    {
      name: "React",
      children: <FaReact className="size-10" />,
      className: "bg-sky-500",
    },
    {
      name: "NodeJS",
      children: <FaNodeJs className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Docker",
      children: <FaDocker className="size-10" />,
      className: "bg-blue-700",
    },
    {
      name: "Spring Boot",
      children: <SiSpring className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Sql",
      children: <TbSql className="size-10" />,
      className: "bg-yellow-500 text-zinc-900",
    },
  ],
  about_me: {
    head: "I'm a software developer, and I’m gradually moving toward fullstack work. I enjoy figuring out problems and writing innovative software. I’m open to new remote opportunities.",
    snapshot: [
      {
        label: "10 000 +",
        value: "Lines of code written",
      },
      {
        label: "1",
        value: "Years of experience",
      },
      {
        label: "2",
        value: "Spoken languages",
      },
      {
        label: "3",
        value: "Countries lived in",
      },
    ],
    hobbies: [
      {
        name: "Guitar",
        icon: <Guitar className="size-6 text-zinc-400" />,
      },
      {
        name: "Reading",
        icon: <Book className="size-6 text-zinc-400" />,
      },
      {
        name: "Gym",
        icon: <Dumbbell className="size-6 text-zinc-400" />,
      },
    ],
    other:
      "I’m open to new remote opportunities that bring a real challenge and better overall conditions. Outside of work, I write code for fun, watch more series than I care to admit, play some Minecraft, and make time for the gym.",
  },
  contact: {
    email: "kemish.igp@gmail.com",
    phone: "+52 722 557 1720",
    linkedin: "https://www.linkedin.com/in/isai-gomez-bab585285/",
    github: "https://www.github.com/kemishigp",
    location: "Toluca, México",
    whatsapp: ""
  },
  experience: {
    work: [
      {
        title: "Junior Fullstack Developer",
        company: "Altamira",
        location: "Metepec, Mexico",
        dateRange: "Apr 2026 - Present",
        description:
          "Building and maintaining real-time features and REST APIs for a Vue.js security analytics platform, including WebSocket-based event deduplication, ingestion endpoints that transform and route external data.",
        skills: ["Javascript", "Docker", "Typescript", "Vue.js", "Node.js"],
        current: true,
      },
      {
        title: "Intern",
        company: "HeartCentrix Solutions",
        location: "Remote",
        dateRange: "Mar 2025 - Jul 2025",
        description:
          "Developed RESTful APIs in Spring Boot connected to PostgreSQL for internal business applications, implemented JWT-based authentication, query optimization, and containerized core services with Docker.",
        skills: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Docker", "RESTful APIs"],
      },
    ] satisfies Experience[],
    Volunteer: [
      {
        project: "University Tour Booking Platform",
        client: "Brigham Young University - Idaho",
        description:
          "Co-developed a university tour booking SaaS platform end-to-end (Next.js, Node.js, PostgreSQL) — booking, staff management, analytics dashboards, and inventory modules, with real-time slot availability via Socket.IO.",
        duration: "4 months",
        skills: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO"],
      },
    ],
  },
  studies: [
    {
      degreeTitle: "Bachelor in Computer Science",
      institution: "Brigham Young University - Idaho",
      location: "Rexburg, Idaho",
      dateRange: "2021 - 2025",
      topics: [
        "Advanced programming",
        "Advanced software engineering principles",
        "Web, mobile, and desktop development",
        "Software design",
        "Networks and Operative Systems",
      ],
      current: false,
    },
  ],
  projects: [
    {
      title: "Developer Portfolio",
      description: "My personal developer portfolio",
      technologies: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      liveLink: "https://kemishgomez.netlify.app/",
      githubLink: "https://github.com/Kemishigp/Personal-Website",
      image: "/tinified/portfolio.webp",
    },
    {
      title: "We Like Sushi",
      description:
        "Blog / CMS to rate sushi restaurants with my girlfriend with Authentication. Currently in development.",
      technologies: ["Sveltekit", "Tailwind CSS", "ShadCN", "Supabase"],
      githubLink: "https://github.com/kemishigp/WeLikeSushi",
      image: "/tinified/we-like-sushi.webp",
    },
    {
      title: "Salon & Co.",
      description: "Full-stack appointment scheduling application designed to automate salon operations. The system features real-time synchronization between a local PostgreSQL database and a third-party scheduling API",
      technologies: ["NextJs", "BetterAuth", "Prisma", "PostgreSQL", "Neon", "Rest API"],
      liveLink: "https://salonco.netlify.app/",
      githubLink: "https://github.com/Kemishigp/salon-website",
      image: "/tinified/salonco.webp",
    },
    {
      title: "Movie Browser App",
      description:
        "A movie discovery website that allows users to browse, search, and explore detailed information about films, including ratings, summaries, and release date.",
      technologies: [
        "Next.js",
        "React",
        "Rest API",
        "Vercel",
      ],
      liveLink: "https://moviebrwsrapp.netlify.app/",
      githubLink: "https://github.com/Kemishigp/Movie-App",
      image: "/tinified/Project1.webp",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      date: "2024",
      description:
        "Demonstrates foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
      credentialId: "E795636135DDD8FD",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/kemishgomez-9572/E795636135DDD8FD?sharingId=5BCEED54F209B1C6",
    },
    {
      title: "ScrumStudy Scrum Fundamentals Certified",
      date: "2024",
      description:
        "Certification demonstrating knowledge of Scrum fundamentals.",
    },
  ],
};
