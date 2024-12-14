"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { IconType } from "react-icons";
import Link from "next/link";
import { links } from "./NavLinks";
import { usePathname } from "next/navigation";

interface LinksProps {
  icon: IconType;
  href: string;
}

const SideSheet = ({ socialLinks }: { socialLinks: LinksProps[] }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="text-xl dark:text-slate-300 py-11 flex flex-col">
        <SheetTitle>Navigate</SheetTitle>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
          <li></li>
        </ul>
        <div className="flex gap-3 py-9">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link key={index} href={link.href}>
                <Icon size={30} />
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideSheet;
