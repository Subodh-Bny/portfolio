"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoLogoReact } from "react-icons/io5";
import { GiSpiderAlt } from "react-icons/gi";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const webRef = useRef<HTMLHRElement>(null);
  const clickWebRef = useRef<HTMLSpanElement>(null);

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
    if (clickWebRef.current) {
      gsap.fromTo(
        clickWebRef.current,
        {
          height: 0,
          width: 0,
          opacity: 0,
        },
        {
          height: "auto",
          width: "auto",
          opacity: 1,
          duration: 0.8,
          ease: "bounce.inOut",
        }
      );
    }
  });

  const handleClick = () => {
    if (clickWebRef.current) {
      clickWebRef.current.classList.remove("hidden");

      gsap.fromTo(
        clickWebRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "bounce.out",
        }
      );
    }
  };
  return (
    <>
      <div
        ref={webRef}
        className="rotate-90 w-[500px] absolute top-22 left-40 z-10 md:flex items-center justify-center hidden"
      >
        <hr className="w-full border-t-2 border-gray-500" />
        <GiSpiderAlt
          size={25}
          className="-rotate-90 -ml-1 fill-white cursor-pointer"
          onClick={handleClick}
        />
        <span ref={clickWebRef} className="absolute -right-4 -z-20 hidden">
          <IoLogoReact size={30} className="fill-gray-500" />
        </span>
      </div>

      {children}
    </>
  );
};

export default Layout;
