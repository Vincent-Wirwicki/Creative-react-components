import OutterDivPageTransition from "./OutterDivPageTransition";
import InnerDivPageTransition from "./InnerDivPageTransition";

// interface Props {
//   text: string;
// } : React.FC<Props> { text }

const PageTransitionDefault = () => {
  return (
    <>
      {/* top left full height*/}
      <OutterDivPageTransition
        clipPath="inset(0% 0 100% 0)"
        position="top-0 left-0 h-screen w-60"
      />
      {/* top left full width*/}
      <OutterDivPageTransition
        clipPath="inset(0% 100% 0 0)"
        position="top-0 left-0 h-40 w-screen"
      />
      {/* bottom right full height*/}
      <OutterDivPageTransition
        clipPath="inset(100% 0 0 0)"
        position="bottom-0 right-0 h-screen w-60"
      />
      {/* bottom right full width*/}
      <OutterDivPageTransition
        clipPath="inset(0% 0 0 100%)"
        position="bottom-0 right-0 h-40 w-screen"
      />
      {/*  bottom left */}
      <InnerDivPageTransition clipPath="inset(100% 100% 0 0)" />
      {/* from top right */}
      <InnerDivPageTransition clipPath="inset(0% 0% 100% 100%)" />
    </>
  );
};

export default PageTransitionDefault;
