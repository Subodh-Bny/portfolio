import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Container from "./Container";

const tools = [
  { icon: FaReact, size: 50, name: "React" },
  { icon: FaNodeJs, size: 50, name: "NodeJs" },
  { icon: SiTypescript, size: 50, name: "TypeScript" },
  { icon: SiMongodb, size: 50, name: "MongoDb" },
  { icon: RiTailwindCssFill, size: 50, name: "TailwindCss" },
];

const Tools = () => {
  return (
    <Container head="Tools">
      <div className="flex gap-3 w-5/6 items-end justify-center">
        <span className="text-8xl text-primary-500">{"{"}</span>

        <div className="relative text-primary-500 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-2 w-full justify-around">
            {tools.map((tool) => (
              <span key={tool.name} className="flex items-end">
                <tool.icon size={tool.size} />:{tool.name}
                <span className="text-4xl font-bold">,</span>
              </span>
            ))}
          </div>
          <div className="flex animate-marquee gap-2 w-full justify-around absolute top-0">
            {tools.map((tool) => (
              <span key={tool.name + "_duplicate"} className="flex items-end">
                <tool.icon size={tool.size} />:{tool.name}
                <span className="text-4xl font-bold">,</span>
              </span>
            ))}
          </div>
        </div>
        <span className="text-8xl text-primary-500">{"}"}</span>
      </div>
    </Container>
  );
};

export default Tools;
