"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MouseFollow = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (boxRef.current && dotRef.current) {
      // Center the flair relative to the mouse
      gsap.set([boxRef.current, dotRef.current], {
        xPercent: -50,
        yPercent: -50,
      });

      // Create GSAP quick setters for smooth transitions
      const xTo = gsap.quickTo(boxRef.current, "x", {
        duration: 0.6,
        ease: "power3",
      });
      const dotXTo = gsap.quickTo(dotRef.current, "x", {
        duration: 0.2,
        ease: "power3",
      });
      const yTo = gsap.quickTo(boxRef.current, "y", {
        duration: 0.6,
        ease: "power3",
      });
      const dotYTo = gsap.quickTo(dotRef.current, "y", {
        duration: 0.2,
        ease: "power3",
      });

      const handleMouseMove = (e: MouseEvent) => {
        // Use clientX and clientY directly for fixed positioning
        xTo(e.clientX);
        yTo(e.clientY);
        dotXTo(e.clientX);
        dotYTo(e.clientY);
      };

      const handleMouseOver = (e: MouseEvent) => {
        if (dotRef.current) {
          const elementUnderCursor = e.target as HTMLElement;
          const cursorType = getComputedStyle(elementUnderCursor).cursor;

          if (cursorType === "pointer") {
            gsap.to(dotRef.current, {
              width: 20,
              height: 20,
              duration: 0.2,
            });
          } else {
            gsap.to(dotRef.current, {
              width: 7,
              height: 7,
              duration: 0.2,
            });
          }
        }
      };

      // Attach event listeners
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        // Cleanup event listeners
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, []);

  return (
    <>
      <div
        ref={boxRef}
        className="flair items-center justify-center fixed border border-slate-400 w-8 h-8 rounded-full pointer-events-none z-50 hidden lg:block"
      ></div>
      <span
        ref={dotRef}
        className="fixed bg-slate-400 h-2 w-2 rounded-full z-50 pointer-events-none hidden lg:block"
      ></span>
    </>
  );
};

export default MouseFollow;

/* 
<div
ref={boxRef}
className="flair fixed bg-blue-500/20 w-56 h-56 rounded-full pointer-events-none blur-3xl"
></div> */
