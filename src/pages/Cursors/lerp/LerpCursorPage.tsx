// import { store } from "../../../storeValtio/store";
// import { Link } from "react-router-dom";
// import { snapshot } from "valtio";
import LerpCursor from "../../../components/cursor/lerpCursor/LerpCursor";
import LerpText from "../../../components/cursor/lerpCursor/LerpText";
import FramerLerpCursor from "../../../components/cursor/lerpCursor/framerVariant/FramerLerpCursor";

const LerpCursorPage = () => {
  // const { handleCursorEnter, handleCursorLeave } = snapshot(store);
  return (
    <>
      <LerpCursor color="#e5e5e5" radius={12} ease={0.095} />
      <FramerLerpCursor />
      <LerpText />
      {/* <LerpCursor radius={128} ease={0.08} color="#0a0a0a" /> */}
      {/* <section className="section-center">work in progress</section> */}
    </>
  );
};

export default LerpCursorPage;
