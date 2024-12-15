"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Heading, Content } from "@/components/AnimatedTags";

const Feature: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.li
      className="flex items-center space-x-2"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <ArrowUpRight className="h-4 w-4 text-primary" />
      <span>{children}</span>
    </motion.li>
  );
};

const features = [
  "Expense tracking & budget management",
  "Savings goals with progress tracking",
  "Personalized financial insights",
  "Detailed reports & spending trends",
];

const FeaturedProject: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-8 px-4 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="w-full lg:w-1/2 flex flex-col items-center gap-4"
      >
        <Image
          src="/spend-mentor.png"
          alt="spend-mentor"
          height={300}
          width={300}
          className="rounded-md w-full max-w-sm h-auto object-contain"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="w-full lg:w-1/2 space-y-6"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <Heading heading="Featured Project" />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <Content>
            Spend Mentor: A personal finance management platform built with
            Next.js and MongoDB. It enables users to track expenses, manage
            budgets, set savings goals, and receive personalized recommendations
            using advanced analytics.
          </Content>
        </motion.div>
        <motion.h3
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="dark:text-slate-200 text-xl font-semibold"
        >
          Features:
        </motion.h3>
        <motion.ul
          className="px-4 space-y-2"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {features.map((feature) => (
            <Feature key={feature}>{feature}</Feature>
          ))}
        </motion.ul>
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="flex gap-3"
        >
          <Link
            href="https://spend-mentor.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="text-slate-500" size={25} />
          </Link>
          <Link
            href="https://github.com/Subodh-Bny/SpendMentor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-slate-500" size={25} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
