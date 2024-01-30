// import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
}

const TextButtonMinimalistOne: React.FC<Props> = ({ isOpen }) => {
  return (
    <>
      <h3>{isOpen ? "close" : "menu"}</h3>
    </>
  );
};

export default TextButtonMinimalistOne;
