import { Variants } from "framer-motion";

const easings = {
  in: [0.5, 0, 0.75, 0],
  out: [0.25, 1, 0.5, 1],
};

export const wrapperUl: Variants = {
  open: {
    y: "0%",
    transition: {
      duration: 0.3,
      easings: easings.in,
    },
  },
  close: {
    y: "-100%",
    transition: {
      duration: 0.3,
      // delay: 0.2,
      easings: easings.in,
    },
  },
};

export const wrapperLi: Variants = {
  open: {
    // clipPath: "inset(0)",
    y: "0%",
    // transition: {
    //   duration: 0.3,
    //   delay: 0.2,
    //   easings: easings.in,
    // },
  },
  close: {
    // clipPath: "inset(100% 0 100% 0)",
    // y: "100%",
    // transition: { duration: 0.4, easings: easings.out },
  },
};
