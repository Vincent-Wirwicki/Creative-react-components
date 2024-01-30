import { Variants } from "framer-motion";

export const wrapper: Variants = {
  initial: {},
  hover: {
    transition: {
      duration: 0.7,
      easing: "backInOut",
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

export const spanEl: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 2, 1],
    transition: {
      times: [0.4, 0.8, 1],
    },
  },
};
