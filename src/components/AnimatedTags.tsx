import React from "react";

import { motion } from "motion/react";

export const Heading = ({ heading }: { heading: string }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100"
    >
      {heading}
    </motion.h2>
  );
};

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="dark:text-slate-400 text-slate-600 text-base leading-relaxed"
    >
      {children}
    </motion.div>
  );
};
