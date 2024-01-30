import { Variants } from "framer-motion";

export const wrapper: Variants = {
  initial: {},
  hover: {
    transition: {
      duration: 0.7,
      easing: "easeInOut",
      staggerChildren: 0.075,
      staggerDirection: -1,
    },
  },
};

export const spanEl: Variants = {
  initial: { y: 1, scaleY: 1, origin: "bottom right" },
  hover: {
    scaleX: [1, -0.2, 1],
    y: [0, -30, 0],
    transition: {
      times: [0.4, 0.8, 1],
    },
  },
};
