import {
  MotionValue,
  SpringOptions,
  Variants,
  motion,
  useSpring,
} from "framer-motion";

interface Props {
  x: MotionValue<number>;
  y: MotionValue<number>;
  w: string;
  h: string;
  variants?: Variants;
  springs?: SpringOptions;
  className?: string;
}

const RectMagneticShape: React.FC<Props> = ({
  x,
  y,
  w = "120px",
  h = "60px",
  variants,
  springs,
  className,
}) => {
  const defaultSpring: SpringOptions = {
    stiffness: 100,
    damping: 5,
  };

  const pos = {
    x: useSpring(x, springs ? springs : defaultSpring),
    y: useSpring(y, springs ? springs : defaultSpring),
  };
  return (
    <motion.div
      style={{
        translateX: pos.x,
        translateY: pos.y,
        width: w,
        height: h,
      }}
      className={`absolute ${className}`}
      variants={variants ? variants : undefined}
    />
  );
};

export default RectMagneticShape;
// w-[${radius}px] h-[${radius}px]
