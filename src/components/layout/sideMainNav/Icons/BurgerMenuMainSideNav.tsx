import { motion } from "framer-motion";

const BurgerMenuMainSideNav = () => {
  return (
    <div className="relative">
      <motion.span
        className="absolute w-2/4 h-[3px] "
        variants={{
          open: { rotate: -45, y: 0, backgroundColor: "#737373" },
          close: { rotate: 0, y: -10, backgroundColor: "#ef4444" },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute w-2/4 h-[3px] "
        variants={{
          open: { rotate: 45, y: 0, backgroundColor: "#737373" },
          close: { rotate: 0, y: 10, backgroundColor: "#ef4444" },
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default BurgerMenuMainSideNav;
