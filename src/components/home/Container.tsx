import React, { ReactNode } from "react";

const Container = ({
  head,
  children,
}: {
  head: string;
  children: ReactNode;
}) => {
  return (
    <section className="flex flex-col items-center w-full py-6 gap-16">
      <h2 className="text-primary-500 text-4xl font-semibold">...{head}</h2>
      {children}
    </section>
  );
};

export default Container;
