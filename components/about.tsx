"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Marketing</span>, I decided to pursue my
        interest in web and app development. I enrolled in coding bootcamps and
        learned <span className="font-medium">full-stack development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-bold">
          React, Next.js, Node.js, Stripe, Clerk and Supabase
        </span>
        . I am also familiar with TypeScript, Tailwind and Shadcn. I am always
        looking to learn new technologies. I am currently looking for a
        <span className="font-medium"> full or part-time position</span> as a
        software developer.
      </p>

      <p className="mb-3">
        <span className="italic">When I'm not coding</span>, I enjoy going to
        the beach, hiking, or grabbing a beer with friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span> and am
        currently exploring{" "}
        <span className="font-medium">
          automation and artificial intelligence
        </span>
        .
      </p>
      <span className="font-bold">
        Proficient in English, Portgues, Spanish and Arabic.
      </span>
    </motion.section>
  );
}
