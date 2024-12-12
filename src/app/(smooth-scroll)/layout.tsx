"use client";
import ReactLenis, { useLenis } from "lenis/react";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      <div className="px-9">{children}</div>
    </ReactLenis>
  );
};

export default Layout;
