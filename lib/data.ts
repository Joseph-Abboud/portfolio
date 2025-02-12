import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import condocube from "@/public/condocube.png";
import laurence from "@/public/laurence.png";
import smokey from "@/public/smokey.png";
import curandeiras from "@/public/curandeiras.png";
import vagamundo from "@/public/vagamundo.png";
import { IoRocketOutline } from "react-icons/io5";

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
    title: "Created First Website",
    location: "High School Project",
    description:
      "Built my first website in 2013 as a high school project—a blog dedicated to Minecraft tips and tricks. This project sparked my passion for web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
  },
  {
    title: "Freelance Web Developer",
    location: "Remote",
    description:
      "Started freelancing by creating professional websites and landing pages using WordPress and Shopify. During this time, I expanded my stack and honed my coding skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "Worked on small full-stack projects as a contractor and freelancer, developing applications with React, Node.js, MongoDB, and other modern tools. This period helped me refine my full-stack expertise.",
    icon: React.createElement(FaReact),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer: CondoCube & Inkhub",
    location: "Remote",
    description:
      "Worked long-term on two major projects: CondoCube, a real estate comparison platform, and Inkhub, a SaaS platform for tattoo artists. Built robust systems leveraging React, Next.js, Tailwind, Supabase, and Stripe.",
    icon: React.createElement(IoRocketOutline),
    date: "2023 - 2024",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "CondoCube",
    description:
      "I worked as a full-stack developer on this startup project for 1 year. Users can compare condo buildings in Miami for investments.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: condocube,
  },
  {
    title: "Laurence Real Estate",
    description:
      "Real estate website where I built a backend system to manage listings and allow users to search for properties to rent or buy.",
    tags: ["Wordpress", "Estatik", "Php", "Locale"],
    imageUrl: laurence,
  },
  {
    title: "Smokey Co",
    description:
      "E-commerce store built on Shopify for POD and dropshipped items, with features like reviews, email automation, cart, and payments.",
    tags: ["Next.js", "Stripe", "Supabase", "Tailwind", "Shadcn", "Oberlo"],
    imageUrl: smokey,
  },
  {
    title: "Curandeiras",
    description:
      "Desgined and crreated POS for selling courses and books, featuring a blog that combines science and spirituality for practical self-discovery.",
    tags: ["Wordpress", "WooCommerce", "MailChimp"],
    imageUrl: curandeiras,
  },
  {
    title: "Hostel Vagaumndo",
    description:
      "Desgined and built website with features to view hostel room details, nearby attractions, make bookings, contact the hotel, and read the blog.",
    tags: ["React", "Tailwind", "CSS", "Stripe"],
    imageUrl: vagamundo,
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
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "App Translation",
  "Stripe",
  "Clerk",
  "Tiwilio",
  "Sendgrid",
  "Supabase",
  "Framer Motion",
  "Wordpress",
  "Shopify",
] as const;
