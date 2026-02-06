import { Book, Dumbbell, Gamepad2 } from "lucide-react";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import type { Experience } from "../lib/types";

export const myInfo = {
  name: "Kemish Gomez",
  alias: "Kemish",
  title: "Full Stack Developer",
  image: "/Portrait.jpg",
  skills: [
    {
      name: ".Net",
      children: <AiOutlineDotNet className="size-10" />,
      className: "bg-violet-500",
    },
    {
      name: "React",
      children: <FaReact className="size-10" />,
      className: "bg-sky-500",
    },
    {
      name: "Docker",
      children: <FaDocker className="size-10" />,
      className: "bg-blue-700",
    },
    {
      name: "NodeJS",
      children: <FaNodeJs className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Azure",
      children: <VscAzure className="size-10" />,
      className: "bg-blue-500",
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
        label: "6",
        value: "Years of experience",
      },
      {
        label: "2.5",
        value: "Spoken languages",
      },
      {
        label: "2",
        value: "Countries lived in",
      },
    ],
    hobbies: [
      {
        name: "Gaming",
        icon: <Gamepad2 className="size-6 text-zinc-400" />,
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
    linkedin: "https://www.linkedin.com/in/kemish-gomez/",
    github: "https://www.github.com/kemishigp",
    location: "Toluca, México",
    whatsapp: "https://wa.me/13853132568"
  },
  experience: {
    work: [
      {
        title: "Software Developer Intern",
        company: "Vorp",
        location: "Rexburg, Idaho",
        dateRange: "2025",
        description:
          "Develop and maintain the company’s logistics system, refactor legacy code, and build new features and microservices. Lead the team as a Scrum master.",
        skills: ["C#", ".NET", "SQL", "Docker", "Azure Devops", "Scrum"],
        current: true,
      },
      {
        title: "Junior Software Engineer",
        company: "CloudStudio",
        location: "Rexburg, Idaho",
        dateRange: "2019 - 2023",
        description:
          "Developed and maintained a financial system used by banks nationwide. Refactored legacy code, provided customer support, and trained new developers.",
        skills: ["C#", ".NET", "SQL", "Silverlight"],
      },
    ] satisfies Experience[],
    freelance: [
      {
        project: "Cyan-Bot",
        client: "Independent",
        description:
          "Discord bot for that managing payments and roles in a translation community",
        duration: "3 months",
        skills: ["Python", "MongoDB"],
      },
      {
        project: "ULI",
        client: "Universidad de las Américas",
        description:
          "AI chatbot for customer service customized with information about the institution",
        duration: "1 year",
        skills: ["Python", "React", "C#", "SignalR", "Azure"],
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
        "Game development",
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
      liveLink: "https://www.kemishgomez.dev",
      githubLink: "https://github.com/kemishigp/kemish-gomez-portfolio",
      image: "/projects/portfolio.jpg",
    },
    {
      title: "We Like Sushi",
      description:
        "Blog / CMS to rate sushi restaurants with my girlfriend with Authentication. Currently in development.",
      technologies: ["Sveltekit", "Tailwind CSS", "ShadCN", "Supabase"],
      githubLink: "https://github.com/kemishigp/WeLikeSushi",
      image: "/projects/we-like-sushi.jpg",
    },
    {
      title: "Oxify Mod",
      description: "Minecraft mod that adds oxifier item to the game.",
      technologies: ["Java", "Fabric"],
      liveLink: "https://modrinth.com/mod/oxify",
      githubLink: "https://github.com/kemishigp/OxifyMod",
      image: "/projects/oxify.jpg",
    },
    {
      title: "Auth Enterprise",
      description:
        "Authentication demo for youtube series about .NET auth. Manages JWT, Users, Roles, and Permissions.",
      technologies: [
        ".NET",
        "C#",
        "Entity Framework",
        "PostgreSQL",
        "Docker",
        "Vertical Slice Architecture",
      ],
      liveLink: "https://www.youtube.com/watch?v=rcRMXLr4f60",
      githubLink: "https://github.com/kemishigp/AuthEnterprise",
      image: "/projects/auth-enterprise.jpg",
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
