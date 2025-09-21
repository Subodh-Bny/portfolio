"use client";

import React from "react";
import { Section } from "@/components/LazyContainer";
import FeaturedProject from "./FeaturedProject";
import OtherProjects from "./OtherProjects";

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto space-y-16">
      <Section content={<FeaturedProject />} />
      <Section content={<OtherProjects />} />
    </div>
  );
};

export default Projects;
