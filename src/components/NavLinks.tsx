"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Home", href: "/" },
];

const NavLinks = () => {
  const linkRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

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
    <nav className="hidden md:block fixed  top-1/2 -right-1 ">
      <ul ref={linkRef} className="flex gap-3 -rotate-90">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`hover:line-through transition-all  dark:hover:text-white ${
                pathname === link.href ? "hidden" : "dark:text-slate-400"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
