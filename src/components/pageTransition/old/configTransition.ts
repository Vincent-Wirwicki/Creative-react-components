const cubicBezier = [0.33, 1, 0.68, 1];
const cubicBezierOut = [0.76, 0, 0.24, 1];

const path = {
  start: {
    clipPath: "inset(100% 0 0 0)",
  },
  mid: {
    clipPath: "inset(0 0 0 0)",
  },
  end: {
    clipPath: "inset(0 0 100% 0)",
  },
};

const { start, end, mid } = path;

export const slideInVariants = {
  enterIn: {
    ...start,
  },
  exitIn: {
    ...mid,
    transition: {
      duration: 0.6,
      ease: cubicBezier,
      staggerChildren: 0.2,
      // delayChildren: 0.2,
    },
  },
};

export const slideInChildVariants = {
  enterIn: {
    ...start,
  },
  exitIn: {
    ...mid,
    transition: {
      duration: 0.6,
      ease: cubicBezierOut,
    },
  },
};

export const slideOut = {
  initial: { ...mid },
  end: { ...end },
  transition: {
    duration: 0.6,
    ease: cubicBezierOut,
  },
};
