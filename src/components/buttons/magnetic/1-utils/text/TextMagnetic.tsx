import {
  MotionValue,
  SpringOptions,
  Variants,
  motion,
  useSpring,
} from "framer-motion";

interface Props {
  text: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  variants?: Variants;
  springs?: SpringOptions;
  className: string;
}
const TextMagnetic: React.FC<Props> = ({
  text,
  x,
  y,
  variants,
  springs,
  className,
}) => {
  const defaultSpring: SpringOptions = {
    stiffness: 120,
    damping: 10,
  };

  const pos = {
    x: useSpring(x, springs ? springs : defaultSpring),
    y: useSpring(y, springs ? springs : defaultSpring),
  };

  return (
    <motion.span
      style={{ translateX: pos.x, translateY: pos.y }}
      className={`w-fit h-fit absolute select-none ${className}`}
      variants={variants ? variants : undefined}
    >
      {text}
    </motion.span>
  );
};

export default TextMagnetic;
