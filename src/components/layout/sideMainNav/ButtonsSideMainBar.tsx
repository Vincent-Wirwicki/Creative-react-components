import BurgerMenuMainSideNav from "./Icons/BurgerMenuMainSideNav";
import HomeSvg from "./Icons/HomeSvg";
import { NavLink } from "react-router-dom";

interface Props {
  handleClick: () => void;
}

const ButtonsSideMainBar: React.FC<Props> = ({ handleClick }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className={
          "relative flex justify-center items-center p-2 cursor-pointer w-[40px] h-[40px] border border-solid border-neutral-500 box-border"
        }
      >
        <BurgerMenuMainSideNav />
      </button>
      <NavLink
        to="/"
        className={
          "relative flex justify-center items-center p-2 cursor-pointer w-[40px] h-[40px] border border-solid border-neutral-500"
        }
      >
        {({ isActive }) => <HomeSvg color={isActive ? "#ef4444" : "#737373"} />}
      </NavLink>
    </>
  );
};

export default ButtonsSideMainBar;
