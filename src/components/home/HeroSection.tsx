import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-around py-11">
      <div className="flex flex-col gap-6 w-2/4 justify-around">
        <h1 className="text-4xl  bg-primary-500/15 font-medium p-2 px-4 rounded-xl w-fit">
          Hi There! I am Subodh
        </h1>
        <div className="flex flex-col gap-9  px-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl text-primary-500  font-bold">
              Frontend Developer.
            </h2>
            <p>
              I like to craft solid and scalable frontend products <br /> with
              great user experiences.
            </p>
          </div>
          <ul className="grid gap-9 grid-cols-2 w-5/6">
            <li>
              Passionate frontend developer crafting intuitive and engaging user
              experiences.
            </li>
            <li>
              I excel in building scalable design systems that adapt to diverse
              needs and environments.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-2/4 flex items-start justify-center">
        <Image
          src={"/subodh.png"}
          width={400}
          height={400}
          alt="subodh adhikari"
        />
      </div>
    </section>
  );
};

export default Hero;
