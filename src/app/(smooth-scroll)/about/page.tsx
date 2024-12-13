"use client";

import React from "react";
import { motion } from "motion/react";
import { GoDash } from "react-icons/go";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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

const About = () => {
  const sections = [
    {
      content: (
        <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full flex justify-center mb-8"
          >
            <Image
              src="/subodh.png"
              alt="subodh"
              height={300}
              width={300}
              className="rounded-full h-60 w-60 md:h-80 md:w-80 object-cover"
            />
          </motion.div>
          <div className="w-full space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="dark:text-slate-400 text-slate-600 text-base leading-relaxed"
            >
              I&apos;m a developer passionate about building reliable,
              efficient, and user-friendly web applications. I enjoy creating
              seamless experiences by blending clean code with scalable
              solutions, ensuring every project meets high standards of
              performance and usability. My expertise lies in full-stack
              development, particularly with the{" "}
              <span className="text-slate-900 dark:text-white">MERN</span> stack
              and{" "}
              <span className="text-slate-900 dark:text-white">Next.js</span>.
              <br />
              <br /> I&apos;ve worked on a variety of projects, including
              e-commerce platforms, financial management systems, and personal
              blogs. From developing robust authentication systems to
              integrating payment gateways and crafting dynamic dashboards. I
              value learning and staying current with the latest technologies,
              applying best practices to ensure my work is maintainable and
              future-proof. My goal is always to create applications that not
              only work well but also exceed user expectations.
            </motion.p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="w-full space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  Frontend Developer Intern
                </CardTitle>
                <h3 className="text-sm md:text-base">Void Nepal Pvt. Ltd.</h3>
                <CardDescription className="text-slate-500 text-sm md:text-base flex items-center gap-1">
                  May <GoDash /> Sep 2024
                </CardDescription>
              </CardHeader>
              <CardContent className="dark:text-slate-400 text-slate-700 text-sm md:text-base">
                Worked on building and optimizing user interfaces using{" "}
                <span className="dark:text-white text-slate-900">React</span>,{" "}
                <span className="dark:text-white text-slate-900">
                  React Query
                </span>
                , and{" "}
                <span className="dark:text-white text-slate-900">Next.js</span>.
                Focused on enhancing performance, improving responsiveness, and
                ensuring seamless user experiences. Contributed to UI
                development, server-state management, and maintaining
                high-quality code through testing and refactoring. Collaborated
                with cross-functional teams to tackle frontend challenges and
                apply new technologies.
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {["React", "Next.js", "TailwindCSS"].map((name, index) => (
                  <Badge
                    key={index}
                    className="rounded-lg bg-cyan-600 cursor-pointer text-xs md:text-sm"
                  >
                    {name}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      ),
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

export default About;
