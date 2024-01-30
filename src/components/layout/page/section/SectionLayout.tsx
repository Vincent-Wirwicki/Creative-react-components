import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const SectionLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <h3 className="mb-2 text-neutral-500 text-xl font-bold tracking-wider select-none">
        {title}
      </h3>
      <div className="w-2/6 h-[2px] mb-10 bg-neutral-500" />
      {children}
    </section>
  );
};

export default SectionLayout;
