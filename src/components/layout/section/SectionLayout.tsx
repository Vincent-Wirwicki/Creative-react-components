import { ReactNode } from "react";
import LogoGithub from "../logo/LogoGithub";

interface Props {
  children: ReactNode;
  title: string;
}

const SectionLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <div className="relative w-4/6 flex flex-col justify-center items-center">
        <h3 className="mb-2 text-neutral-500 text-xl font-bold tracking-wider select-none">
          {title}
        </h3>
        <div className="w-2/6 h-[2px] mb-10 bg-neutral-500"></div>
        {children} <LogoGithub className="cursor-pointer mb-5" fill="#737373" />
        <div className="w-1/6 h-[2px]  bg-neutral-500"></div>
        <h3 className="mt-5 text-neutral-500 text-sm font-bold tracking-wider select-none"></h3>
      </div>
    </section>
  );
};

export default SectionLayout;
