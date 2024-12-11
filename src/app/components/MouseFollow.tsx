"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MouseFollow = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (boxRef.current && dotRef.current) {
        gsap.to(boxRef.current, {
          x: mouseX - boxRef.current.offsetWidth / 2,
          y: mouseY - boxRef.current.offsetHeight / 2,
          duration: 1,
          ease: "power3.out",
        });
        gsap.from(dotRef.current, {
          x: mouseX - dotRef.current.offsetWidth / 2,
          y: mouseY - dotRef.current.offsetHeight / 2,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <>
      <div
        ref={boxRef}
        className="absolute bg-blue-500/20 w-56 h-56 rounded-full pointer-events-none blur-3xl"
      ></div>
      <span
        ref={dotRef}
        className="absolute bg-green-400 h-2 w-2 rounded-full pointer-events-none z-50"
      ></span>
    </>
  );
};

export default MouseFollow;
