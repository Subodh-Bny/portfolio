import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import routes from "@/config/routes";

const TopNav = () => {
  return (
    <header className="bg-gray-100 p-6 px-11 flex items-center justify-between">
      <Link
        className="text-primary-500 text-4xl font-extrabold select-none"
        href={routes.home}
      >
        SUBODH
      </Link>
      <NavLinks />
    </header>
  );
};

export default TopNav;
