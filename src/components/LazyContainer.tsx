"use client";

import React from "react";
import { motion } from "motion/react";

interface LazyContainerProps {
  children: React.ReactNode;
}

const LazyContainer: React.FC<LazyContainerProps> = ({ children }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="px-4 py-16 md:py-24 lg:py-32"
    >
      {children}
    </motion.section>
  );
};

interface SectionProps {
  content: React.ReactNode;
}

export const Section: React.FC<SectionProps> = React.memo(({ content }) => {
  return <LazyContainer>{content}</LazyContainer>;
});

export default LazyContainer;
