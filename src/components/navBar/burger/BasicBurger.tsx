// import { ReactNode } from "react";
import styles from "./BasicBurger.module.css";

interface Props {
  color?: string;
  isOpen: boolean;
  //   children: ReactNode;
}

const BasicBurger: React.FC<Props> = ({ isOpen }) => {
  const { burger__wrap, burger__line, open__line, close__line } = styles;
  const cssClass = `${burger__line} ${isOpen ? close__line : open__line}`;

  return (
    <div className={burger__wrap}>
      {Array.from({ length: 3 }).map((_, index) => (
        <span key={index} className={cssClass} />
      ))}
    </div>
  );
};

export default BasicBurger;
