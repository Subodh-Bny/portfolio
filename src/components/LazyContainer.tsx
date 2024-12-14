import React from "react";
import { motion } from "motion/react";

const LazyContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10px" }}
      transition={{ duration: 0.5 }}
      className="px-4 py-16 md:py-24 lg:py-32"
    >
      {children}
    </motion.section>
  );
};

export const Section = React.memo(
  ({ content }: { content: React.ReactNode }) => {
    return <LazyContainer>{content}</LazyContainer>;
  }
);

export default LazyContainer;
