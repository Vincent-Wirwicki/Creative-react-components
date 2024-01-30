import { useRef, useEffect } from "react";

const useNormalizeMousePos = () => {
  const normalizeMousePos = useRef({ x: 0, y: 0 });

  const handleNormalizeMousePos = ({ clientX, clientY }: MouseEvent) => {
    const { innerHeight, innerWidth } = window;
    return (normalizeMousePos.current = {
      x: (clientX / innerWidth) * 2 - 1,
      y: (clientY / innerHeight) * 2 - 1,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleNormalizeMousePos);
    return () =>
      window.removeEventListener("mousemove", handleNormalizeMousePos);
  });

  return { normalizeMousePos };
};

export default useNormalizeMousePos;

//   const [normalize, setNormalize] = useState({ x: 0, y: 0 });
// useState
// setNormalize({
//   x: (clientX / innerWidth) * 2 - 1,
//   y: (clientY / innerHeight) * 2 - 1,
// });
