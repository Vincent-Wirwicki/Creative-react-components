// import { store } from "../../../storeValtio/store";
// import { Link } from "react-router-dom";
// import { snapshot } from "valtio";
import LerpCursor from "../../../components/cursor/lerpCursor/LerpCursor";
// import LogoGithub from "../../../components/layout/logo/LogoGithub";
// import CardCssPropetiesLerpPage from "./card/CardCssPropetiesLerpPage";
// import BasicPageTransition from "../../components/pageTransition/basic/BasicPageTransition";

const LerpCursorPage = () => {
  // const { handleCursorEnter, handleCursorLeave } = snapshot(store);
  return (
    <>
      <LerpCursor color="#fca5a5" />
      {/* <LerpCursor radius={128} ease={0.08} color="#0a0a0a" /> */}
      <section className="section-center">work in progress</section>
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
