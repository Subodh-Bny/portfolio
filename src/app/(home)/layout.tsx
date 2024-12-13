"use client";
import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { GiSpiderAlt } from "react-icons/gi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const webRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();

  useEffect(() => {
    const adjustWebHeight = () => {
      const heading = document.querySelector("h3:nth-child(1)"); // Select "Web Developer" heading
      if (heading && webRef.current) {
        const headingRect = heading.getBoundingClientRect();
        const webElement = webRef.current;

        // Adjust the height to stretch to the top of the heading
        const targetHeight = (headingRect.top + window.scrollY) * 2; // Account for scrolling
        webElement.style.height = `${targetHeight}px`;
        webElement.style.left = `${headingRect.left - 50}px`;
        webElement.style.top = `${-headingRect.top}px`;
      }
    };

    adjustWebHeight();
    window.addEventListener("resize", adjustWebHeight); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", adjustWebHeight);
    };
  }, []);

  useGSAP(() => {
    if (webRef.current) {
      const web = webRef.current.getBoundingClientRect();
      const originalY = web.top + web.height / 2;

      gsap.fromTo(
        webRef.current,
        { y: originalY - window.innerHeight / 2 - 100 },
        {
          y: 0,
          duration: 3,
          ease: "elastic",
        }
      );
    }
  });

  const handleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

    if (webRef.current) {
      gsap.from(webRef.current, { y: 50, ease: "elastic", duration: 2 });
    }
  };

  return (
    <>
      <div
        ref={webRef}
        className="absolute   border z-10 hidden md:flex items-center justify-center border-gray-500 "
      >
        <GiSpiderAlt
          size={25}
          className="cursor-pointer absolute -bottom-2"
          onClick={handleClick}
        />
      </div>

      {children}
    </>
  );
};

export default Layout;
