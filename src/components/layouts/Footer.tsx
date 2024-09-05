import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 bg-gray-100  py-16 px-9">
      <section className="flex gap-3 w-full items-center justify-center text-4xl">
        <Link
          href="https://www.linkedin.com/in/subodh-adhikari-0469922a7"
          target="_blank"
        >
          <CiLinkedin />
        </Link>
        <Link href="https://github.com/Subodh-Bny" target="_blank">
          <FaGithub />
        </Link>
      </section>
      <hr className="border-primary-500" />
      <p className="text-primary-500 text-center">adhikarisubodh77@gmail.com</p>
    </footer>
  );
};

export default Footer;
