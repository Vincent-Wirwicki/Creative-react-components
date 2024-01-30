import { motion } from "framer-motion";
// import PageTransitionDefault from "./transition/PageTransitionDefault";
import TransitionScaleY from "./transition/2/TransitionScaleY";

interface Props {
  children: React.ReactNode;
  title: string;
}

const PageLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <TransitionScaleY />
      {/* <PageTransitionDefault /> */}
      {/* <TitlePageTransition text={title} /> */}
      <motion.main
        id={title}
        className="absolute top-0 left-0 w-screen h-screen max-h-fit"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.61, 1, 0.88, 1],
            // delay: 0.4,
          },
        }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.61, 1, 0.88, 1] }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default PageLayout;
