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
        // webElement.style.left = `${headingRect.left - 50}px`;
        webElement.style.right = `150px`;
        webElement.style.top = `${-headingRect.top}px`;
        webElement.classList.add("md:flex");
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
    if (webRef.current) {
      gsap.killTweensOf(webRef.current);

      gsap.fromTo(
        webRef.current,
        { y: 0 },
        {
          y: 20,
          ease: "power1.inOut",
          duration: 0.2,
          onComplete: () => {
            gsap.to(webRef.current, {
              y: 0,
              ease: "elastic",
              duration: 2,
            });
          },
        }
      );
    }
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div
        ref={webRef}
        className="absolute   border z-10 hidden  items-center justify-center border-gray-500 "
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
