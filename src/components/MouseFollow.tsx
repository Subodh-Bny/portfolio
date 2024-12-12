"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MouseFollow = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (boxRef.current) {
      gsap.set(boxRef.current, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(boxRef.current, "x", {
        duration: 0.6,
        ease: "power3",
      });
      const yTo = gsap.quickTo(boxRef.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

      const handleMouseMove = (e: MouseEvent) => {
        const scrollX = window.scrollX || 0;
        const scrollY = window.scrollY || 0;

        xTo(e.clientX + scrollX);
        yTo(e.clientY + scrollY);
      };

      window.addEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className="flair absolute bg-blue-500/20 w-56 h-56 rounded-full pointer-events-none blur-3xl"
    ></div>
  );
};

export default MouseFollow;
