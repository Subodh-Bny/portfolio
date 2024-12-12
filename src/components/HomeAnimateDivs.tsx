"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const HomeAnimatedDivs = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef(null);

  useGSAP(() => {
    if (topRef.current) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const rect = topRef.current.getBoundingClientRect();
      const originalX = rect.left + rect.width / 2;
      const originalY = rect.top + rect.height / 2;

      gsap.from(topRef.current, {
        x: centerX - originalX,
        y: centerY - originalY,

        ease: "power1.out",
        duration: 1,
      });
      gsap.from(bottomRef.current, {
        x: originalX - centerX,
        y: originalY - centerY,

        ease: "power1.out",
        duration: 1,
      });
    }
  });
  return (
    <>
      <div
        ref={topRef}
        className="absolute h-48 w-48 top-9 border-[5px] border-r-transparent border-b-transparent border-white"
      ></div>
      <div
        ref={bottomRef}
        className="absolute h-48 w-48 bottom-9 right-0 border-[5px] border-l-transparent border-t-transparent border-white"
      ></div>
    </>
  );
};

export default HomeAnimatedDivs;
