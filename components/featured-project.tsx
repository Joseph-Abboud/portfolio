"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./section-heading";
import MainProjectCard from "./feautured-project-card";

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"], // Adjust offsets for desired animation timing
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Latest Project</SectionHeading>
      <motion.div
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="group"
      >
        <MainProjectCard />
      </motion.div>
    </section>
  );
}
