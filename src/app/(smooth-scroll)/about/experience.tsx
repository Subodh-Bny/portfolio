import React from "react";
import { motion } from "motion/react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { GoDash } from "react-icons/go";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/constants/experiences";

const Experience = () => {
  return (
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
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                {exp.designation}
              </CardTitle>
              <h3 className="text-sm md:text-base">Void Nepal Pvt. Ltd.</h3>
              <CardDescription className="text-slate-500 text-sm md:text-base flex items-center gap-1">
                {exp.from} <GoDash /> {exp.to}
              </CardDescription>
            </CardHeader>
            <CardContent className="dark:text-slate-400 text-slate-700 text-sm md:text-base">
              {exp.description}
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {exp.tech.map((tech, index) => (
                <Badge
                  key={index}
                  className="rounded-lg bg-cyan-600/[0.1] text-cyan-600 hover:text-cyan-200 hover:bg-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-200 cursor-pointer text-xs md:text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
