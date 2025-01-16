import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Heading, Content } from "@/components/AnimatedTags";

const About = () => {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full flex justify-center mb-8"
      >
        <Image
          src="/subodh-work.jpg"
          alt="subodh"
          height={300}
          width={300}
          priority
          className="rounded-full h-60 w-60 md:h-80 md:w-80 object-cover"
        />
      </motion.div>
      <div className="w-full space-y-6">
        <Heading heading="About me" />
        <Content>
          I&apos;m a developer passionate about building reliable, efficient,
          and user-friendly web applications. I enjoy creating seamless
          experiences by blending clean code with scalable solutions, ensuring
          every project meets high standards of performance and usability. My
          expertise lies in full-stack development, particularly with the{" "}
          <span className="text-slate-900 dark:text-white">MERN</span> stack and{" "}
          <span className="text-slate-900 dark:text-white">Next.js</span>.
          <br />
          <br /> I&apos;ve worked on a variety of projects, including e-commerce
          platforms, financial management systems, and personal blogs. From
          developing robust authentication systems to integrating payment
          gateways and crafting dynamic dashboards. I value learning and staying
          current with the latest technologies, applying best practices to
          ensure my work is maintainable and future-proof. My goal is always to
          create applications that not only work well but also exceed user
          expectations.
        </Content>
      </div>
    </div>
  );
};

export default About;
