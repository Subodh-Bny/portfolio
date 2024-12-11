"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const nameRef = useRef(null);
  const subheadingsRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (nameRef.current && subheadingsRef.current) {
      tl.from(nameRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      })
        .from(
          Array.from(subheadingsRef.current.children),
          {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          paragraphRef.current,
          {
            y: 10,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );
    }
  });
  return (
    <section className="h-full w-full flex items-center justify-center flex-col px-4 md:px-8 ">
      <div className="text-center space-y-4">
        <h1
          ref={nameRef}
          className="text-4xl md:text-6xl lg:text-8xl font-semibold"
        >
          SUBODH ADHIKARI
        </h1>
        <div
          ref={subheadingsRef}
          className="flex flex-wrap text-sm md:text-lg w-full justify-center gap-4 md:gap-9 font-mono"
        >
          <h3>Web Developer</h3> <span className="hidden md:block">.</span>
          <h3>Next.js</h3> <span className="hidden md:block">.</span>
          <h3>MERN</h3>
        </div>
      </div>
      <p
        ref={paragraphRef}
        className="text-sm text-slate-300 max-w-4xl mt-6 font-[family-name:var(--font-poppins)]"
      >
        Building dynamic, responsive web applications using MongoDB, Express.js,
        React, Node.js, and Next.js.
        <br />
        <br />I specialize in crafting intuitive user interfaces, developing
        robust backend systems, and delivering scalable, end-to-end solutions.
        Passionate about creating seamless, user-friendly experiences while
        staying at the forefront of modern web development.
      </p>
    </section>
  );
}
