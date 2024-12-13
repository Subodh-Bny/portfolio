"use client";
import React from "react";
import { motion } from "motion/react";

import Experience from "./experience";
import About from "./about";

const Section = React.memo(({ content }: { content: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10px" }}
      transition={{ duration: 0.5 }}
      className="px-4 py-16 md:py-24 lg:py-32"
    >
      {content}
    </motion.section>
  );
});

Section.displayName = "Section";

const AboutPage = () => {
  const sections = [
    {
      content: <About />,
    },
    {
      content: <Experience />,
    },
  ];

  return (
    <div className="container mx-auto space-y-16 ">
      {sections.map((section, index) => (
        <Section key={index} content={section.content} />
      ))}
    </div>
  );
};

export default AboutPage;
