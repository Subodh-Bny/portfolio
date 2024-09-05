import routes from "@/config/routes";
import Link from "next/link";

import React from "react";

const NavLinks = () => {
  return (
    <nav>
      <Link
        href={routes.contact}
        className="text-xl border border-primary-500 rounded-3xl p-2 px-6 hover:text-white hover:bg-primary-500"
      >
        Contact Me
      </Link>
    </nav>
  );
};

export default NavLinks;
