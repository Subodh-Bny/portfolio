"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MouseFollow = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (boxRef.current) {
      gsap.set(boxRef.current, { xPercent: -50, yPercent: -50 });

      const boxWidth = boxRef.current.offsetWidth;
      const boxHeight = boxRef.current.offsetHeight;

      const xTo = gsap.quickTo(boxRef.current, "x", {
        duration: 0.6,
        ease: "power3",
      });
      const yTo = gsap.quickTo(boxRef.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

      const handleMouseMove = (e: MouseEvent) => {
        // Account for the scroll position of the document
        const scrollX = window.scrollX || 0;
        const scrollY = window.scrollY || 0;

        // Calculate the viewport bounds dynamically
        const viewportWidth = document.documentElement.clientWidth;
        const viewportHeight = document.documentElement.clientHeight;

        // Constrain the movement within the visible viewport
        const constrainedX = Math.max(
          boxWidth / 2,
          Math.min(viewportWidth - boxWidth / 2, e.clientX)
        );

        const constrainedY = Math.max(
          boxHeight / 2,
          Math.min(viewportHeight - boxHeight / 2, e.clientY)
        );

        // Add the scroll offset to ensure proper tracking in scrollable pages
        xTo(constrainedX + scrollX);
        yTo(constrainedY + scrollY);
      };

      // Add event listener for mouse movement
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
      className="flair absolute bg-blue-500/20 w-56 h-56 rounded-full pointer-events-none blur-3xl"
    ></div>
  );
};

export default MouseFollow;
