"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MouseFollow = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (boxRef.current) {
      // Center the flair relative to the mouse
      gsap.set(boxRef.current, { xPercent: -50, yPercent: -50 });

      // Create GSAP quick setters for smooth transitions
      const xTo = gsap.quickTo(boxRef.current, "x", {
        duration: 0.6,
        ease: "power3",
      });
      const yTo = gsap.quickTo(boxRef.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

      const handleMouseMove = (e: MouseEvent) => {
        // Use clientX and clientY directly for fixed positioning
        xTo(e.clientX);
        yTo(e.clientY);
      };

      // Add mousemove event listener
      window.addEventListener("mousemove", handleMouseMove);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className="flair fixed bg-blue-500/20 w-56 h-56 rounded-full pointer-events-none blur-3xl"
    ></div>
  );
};

export default MouseFollow;
