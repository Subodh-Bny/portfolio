import React from "react";
import NavLinks from "./NavLinks";

const TopNav = () => {
  return (
    <header className="bg-gray-100 p-6 px-11 flex items-center justify-between">
      <h1 className="text-primary-500 text-4xl font-extrabold">SUBODH</h1>
      <NavLinks />
    </header>
  );
};

export default TopNav;
