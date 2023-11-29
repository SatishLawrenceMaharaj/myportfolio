import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import todoimg from "@/public/todo.jpg";
import todomobileimg from "@/public/todomobile.jpg";
import hhImg from "@/public/hh.jpg";
import chatappImg from "@/public/myapp.jpg";
import interviewpImg from "@/public/interview.jpg";
import carigroImg from "@/public/carigro.jpg";
import rblImg from "@/public/rbl.png";
import covidImg from "@/public/CovidTracker.png";
import portfolioImg from "@/public/portfolio.jpg";
import calendarimg from "@/public/calendar.jpg"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Republic Bank - Programmer",
        location: "Trincity",
        description:
            "During this period of time, I am in the Production Support - Programming Department.",
        icon: React.createElement(FaReact),
        date: "November 2023 - Present",
    },
    {
        title: "Software Engineer - Freelance",
        location: "Princes Town",
        description:
            "Projects for companies.",
        icon: React.createElement(CgWorkAlt),
        date: "September 2023 - Present",
    },
    {
        title: "University of the West Indies - AP",
        location: "St. Augustine",
        description:
            "During this period of time, I am tasked with building courses for the University, maintaining databases, and building niche software.",
        icon: React.createElement(CgWorkAlt),
        date: "September 2023 - November 2023",
    },
    {
        title: "Hibiscus Health - Full-Stack Software Developer | Software Engineer",
        location: "New York",
        description:
            "During this period of time, I was tasked with building the company's web platform and mobile application to facilitate the trade of healthy meals.",
        icon: React.createElement(CgWorkAlt),
        date: "May 2023 - September 2023",
    },
    {
        title: "Computer Science (Special)",
        location: "University of the West Indies St. Augustine",
        description:
            "I graduated with a First-Class Honors in Computer Science (Special) after 3 years of studying and doing internships to build my knowledge.",
        icon: React.createElement(LuGraduationCap),
        date: "2020-2023",
    },
    {
        title: "Carigro - Student Developer",
        location: "St. Augustine",
        description:
            "During this period, I was tasked with building a web platform for Carigro to facilitate the trade of goods and services of farmers in St. Vincent.",
        icon: React.createElement(CgWorkAlt),
        date: "January 2023 - May 2023",
    },
    {
        title: "Republic Bank | RFHL - ITMD Graduate Intern",
        location: "Trincity",
        description:
            "During this internship, I was tasked with building a niche system for the Republic Financial Holdings Limited Group known as the ERS.",
        icon: React.createElement(CgWorkAlt),
        date: "May 2022 - August 2022",
    },
    {
        title: "Software Engineer - Freelance",
        location: "Princes Town",
        description:
            "From an early age, I was interested in software development. During this time, I applied my knowledge from high school, university, and YouTube to build web applications for local businesses.",
        icon: React.createElement(CgWorkAlt),
        date: "2017 - 2022",
    },
    {
        title: "High School | Secondary School",
        location: "San Fernando Central Secondary School",
        description:
            "The time I spent to do CSEC and CAPE.",
        icon: React.createElement(LuGraduationCap),
        date: "2013 - 2020",
    },
] as const;

export const projectsData = [
    {
        title: "Personal Portfolio",
        description:
            "A platform to facilitate the displaying of my knowledge and skills.",
        tags: ["React", "Next.js", "Tailwind", "Prisma", "Vercel"],
        imageUrl: portfolioImg,
        git: "https://github.com/SatishLawrenceMaharaj/myportfolio",
        url: "https://satishmaharaj.vercel.app/",
    },
    {
        title: "ToDo",
        description:
            "I worked as a full-stack developer on this project for fun. It's a personal project from which I can add events I need to do.",
        tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma", "Vercel"],
        imageUrl: todoimg,
        git: "https://github.com/SatishLawrenceMaharaj/todo",
        url: "https://todo-alpha-five.vercel.app/",
    },
    {
        title: "ToDo Mobile",
        description:
            "I worked as a full-stack developer on this project for fun. It's a personal project from which I can add events I need to do via mobile application.",
        tags: ["Flutter"],
        imageUrl: todomobileimg,
        git: "https://github.com/SatishLawrenceMaharaj/flutter-todo-app",
        url: "https://github.com/SatishLawrenceMaharaj/flutter-todo-app",
    },
    {
        title: "Calendar Mobile",
        description:
            "I worked as a full-stack developer on this project for fun. It's a personal project from which I can have a custom calendlar.",
        tags: ["Flutter"],
        imageUrl: calendarimg,
        git: "https://github.com/SatishLawrenceMaharaj/flutter_calendar",
        url: "https://github.com/SatishLawrenceMaharaj/flutter_calendar",
    },
    {
        title: "ChatApp",
        description:
            "A web platform I worked on as a full-stack project for fun. It allows users to log in and post messages to a board to interact.",
        tags: ["PHP", "Laravel", "CSS", "MySQL"],
        imageUrl: chatappImg,
        git: "https://github.com/SatishLawrenceMaharaj/myapplication",
        url: "https://github.com/SatishLawrenceMaharaj/myapplication",
    },
    {
        title: "JavaApp",
        description:
            "A Java JSP and Servlet app connected to a MySQL database. Users are allowed to log in/register, then they can find the sum of any two numbers.",
        tags: ["Java", "Servlet", "JSP", "MySQL"],
        imageUrl: interviewpImg,
        git: "https://github.com/SatishLawrenceMaharaj/javainterviewapp",
        url: "https://github.com/SatishLawrenceMaharaj/javainterviewapp",
    },
    {
        title: "Hibiscus Health",
        description:
            "A web platform and mobile application for the US company Hibiscus Health to facilitate sales of goods.",
        tags: ["React", "JavaScript", "Next.js", "Styled", "Shopify", "Healthie", "Hydrogen", "Netlify", "Flutter", "Android Studio"],
        imageUrl: hhImg,
        git: "https://github.com/SatishLawrenceMaharaj",
        url: "https://hibiscushealth.com/",
    },
    {
        title: "Carigro",
        description:
            "A web platform for the St. Vincent company Carigro to facilitate the trade of goods and services of local farmers.",
        tags: ["Flask MVC", "Svelte", "PostgreSQL", "Tailwind", "imagedb", "Vercel", "Render"],
        imageUrl: carigroImg,
        git: "https://github.com/SatishLawrenceMaharaj/sveltekit",
        url: "https://carigro.vercel.app/",
    },
    {
        title: "Republic Bank Employee Recognition System",
        description:
            "A platform for Republic Bank to facilitate internal operations such as promoting employees or events in the form of campaigns.",
        tags: ["Flask MVC", "Svelte", "MySQL", "Tailwind", "IIS"],
        imageUrl: rblImg,
        git: "https://github.com/SatishLawrenceMaharaj",
        url: "https://github.com/SatishLawrenceMaharaj",
    },
    {
        title: "Covid-19 Tracker",
        description:
            "A platform to facilitate the tracking of Covid-19 stats.",
        tags: ["Flask MVC", "Materialize", "PostgreSQL", "Heroku"],
        imageUrl: covidImg,
        git: "https://github.com/SatishLawrenceMaharaj/covid-19-tracker",
        url: "https://github.com/SatishLawrenceMaharaj/covid-19-tracker",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "GraphQL",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Flask",
    "MVC",
    "Svelte",
    "PostgreSQL",
    "MySQL",
    "SQL",
    "Shopify",
    "Healthie",
    "Hydrogen",
    "Styled",
    "Java",
    "JSP",
    "Servlet",
    "PHP",
    "Laravel",
] as const;
