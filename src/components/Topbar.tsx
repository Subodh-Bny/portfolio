"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const links = [
  { icon: FaGithub, href: "https://github.com/Subodh-Bny/" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/subodh-adh" },
  { icon: BiLogoGmail, href: "mailto:adhikarisubodh77@gmail.com" },
];

const TopBar = () => {
  const linkRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (linkRef?.current) {
      gsap.from(Array.from(linkRef.current.children), {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      });
    }
  });
  return (
    <div className="flex justify-between px-4 items-center">
      <h1 className="select-none font-bold text-4xl font-mono cursor-pointer">
        <Link href={"/"} className="text-cyan-500">
          Subodh<span className="text-green-500">.</span>
        </Link>
      </h1>
      <ul
        className="flex gap-3 text-slate-900 dark:text-slate-300"
        ref={linkRef}
      >
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} target="_blank">
              <link.icon size={30} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBar;
