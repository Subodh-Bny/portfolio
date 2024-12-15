"use client";
import React from "react";

import Experience from "./experience";
import About from "./about";
import { Section } from "../../../components/LazyContainer";

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
