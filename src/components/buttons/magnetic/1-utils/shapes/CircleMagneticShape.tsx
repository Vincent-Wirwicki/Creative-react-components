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
  variants?: Variants;
  springs?: SpringOptions;
  radius: string;
  className?: string;
}

const CircleMagneticShape: React.FC<Props> = ({
  x,
  y,
  variants,
  springs,
  radius,
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
        width: radius,
        height: radius,
      }}
      className={`absolute rounded-full ${className ? className : ""}`}
      variants={variants ? variants : undefined}
    />
  );
};

export default CircleMagneticShape;
// w-[${radius}px] h-[${radius}px]
