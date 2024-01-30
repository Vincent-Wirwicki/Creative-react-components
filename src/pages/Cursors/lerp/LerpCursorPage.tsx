import { store } from "../../../storeValtio/store";
// import { Link } from "react-router-dom";
import { snapshot } from "valtio";
import LerpCursor from "../../../components/cursor/lerpCursor/LerpCursor";
import LogoGithub from "../../../components/layout/logo/LogoGithub";
import CardCssPropetiesLerpPage from "./card/CardCssPropetiesLerpPage";
// import BasicPageTransition from "../../components/pageTransition/basic/BasicPageTransition";

const LerpCursorPage = () => {
  const { handleCursorEnter, handleCursorLeave } = snapshot(store);
  return (
    <>
      <LerpCursor />
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <h3
          className="mb-2 text-neutral-500 text-xl font-bold tracking-wider select-none"
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
        >
          On move / lerp cursor
        </h3>
        <div className="w-2/6 h-[2px] mb-5 bg-neutral-500"></div>
        <section
          className="select-none mb-5 flex flex-col  justify-evenly items-center"
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
        >
          <CardCssPropetiesLerpPage />
          {/* <article className="flex flex-col p-5 mt-5 border border-neutral-500">
            <h3>For interactivity</h3>
            <h3>
              You need a state management <br />
              library like Redux, Valtio...
            </h3>
          </article> */}
        </section>
        <div onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
          <LogoGithub className="cursor-pointer mt-5" fill="#737373" />
        </div>
        <div className="w-1/6 h-[2px]  bg-neutral-500 mt-5"></div>
        <h3 className="mt-5 text-neutral-500">
          For interactivity
          <br />
          You need a state management <br />
          library like Redux, Valtio...
        </h3>
        {/* <h3 className="mt-5 text-neutral-500 text-sm font-bold tracking-wider select-none">
          ...Big size fonts are trendy...
        </h3> */}
      </section>
    </>
  );
};

// const CursorPageWithTransition = BasicPageTransition(LerpCursorPage);

export default LerpCursorPage;
// initial={{ clipPath: "circle(10% at 50% 50%)" }}
// animate={{ clipPath: "circle(50% at 50% 50%)" }}
// transition={{
//   duration: 1,
//   easings: "anticipate",
//   repeat: Infinity,
//   repeatType: "reverse",
//   repeatDelay: 0.5,
// }}
