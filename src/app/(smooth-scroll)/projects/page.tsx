"use client";
import React from "react";

import { Section } from "../LazyContainer";
import { Heading, Paragraph } from "@/components/AnimatedTags";

const Projects = () => {
  const sections = [
    {
      content: (
        <div className="space-y-6">
          <Heading heading="Featured Project" />
          <Paragraph>hi</Paragraph>
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

export default Projects;
