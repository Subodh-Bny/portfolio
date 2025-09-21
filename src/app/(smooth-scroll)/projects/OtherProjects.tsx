"use client";

import React from "react";
import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import { Heading, Content } from "@/components/AnimatedTags";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/constants/projects";
import Link from "next/link";

const OtherProjects: React.FC = () => {
  return (
    <section className="w-full space-y-6">
      <Heading heading="Other Projects" />
      {projects.map((project) => (
        <div key={project.name}>
          <Content>
            <Link
              href={project.href}
              className="flex flex-col md:flex-row p-4 gap-4 items-start group dark:hover:bg-slate-700/[0.5] hover:bg-slate-300/[0.5] rounded-md transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-32 w-full md:w-52 border rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  height={128}
                  width={208}
                  className="h-full w-full object-cover brightness-90 group-hover:brightness-100 transition-all"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="flex items-center text-lg font-semibold group-hover:text-blue-400">
                  {project.name}
                  <ArrowUpRight className="h-5 w-5 ml-2" aria-hidden="true" />
                </h3>
                <p className="dark:text-slate-300 text-slate-600 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
              </div>
            </Link>
          </Content>
        </div>
      ))}
    </section>
  );
};

export default OtherProjects;
