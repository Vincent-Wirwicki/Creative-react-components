import { Variants } from "framer-motion";

export const wrapper: Variants = {
  initial: {},
  hover: {
    transition: {
      duration: 0.7,
      easing: "easeInOut",
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
};

export const spanEl: Variants = {
  initial: { rotateY: 0, scaleY: 1, origin: "bottom right" },
  hover: {
    rotateY: [0, 135, 0],
    scaleY: [1, 0.8, 1],
    transition: {
      times: [0.4, 0.8, 1],
    },
  },
};
