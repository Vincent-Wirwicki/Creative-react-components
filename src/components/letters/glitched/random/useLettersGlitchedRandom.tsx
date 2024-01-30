import {
  RefObject,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  useState,
} from "react";

const useLettersGlitchedRandom = (
  ref: RefObject<HTMLElement | null>,
  ogLetters: string[],
  perLetter = 5,
  toNextLetter = 20
) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const divRef = ref;
  const wrapperNode = divRef.current;
  const rafRef = useRef(0);
  const char = "/°|²+=-'@!§&\\";
  const specialChars = useMemo(() => [...char.split("")], []);
  const getRandomIndex = (arr: string[]) =>
    Math.floor(Math.random() * arr.length);
  const getRandomLetter = useRef(getRandomIndex(ogLetters));

  let frame = 0;

  const resetChildLetters = useCallback(() => {
    if (wrapperNode)
      ogLetters.map(
        (letter, index) => (wrapperNode.childNodes[index].textContent = letter)
      );
  }, [ogLetters, wrapperNode]);

  const updateText = useCallback(
    (randoLetter: number, randoSpecial: number) => {
      if (wrapperNode) {
        const { childNodes } = wrapperNode;
        for (let i = 0; i < ogLetters.length; i++) {
          childNodes[i].textContent = ogLetters[i];
          childNodes[randoLetter].textContent = specialChars[randoSpecial];
        }
      }
    },
    [ogLetters, specialChars, wrapperNode]
  );

  const animate = useCallback(() => {
    if (frame % perLetter === 0) {
      const getRandomSpecial = getRandomIndex(specialChars);
      updateText(getRandomLetter.current, getRandomSpecial);
    }
    if (frame % toNextLetter === 0)
      getRandomLetter.current = getRandomIndex(ogLetters);
    frame++;
    rafRef.current = requestAnimationFrame(animate);
  }, [frame, ogLetters, perLetter, toNextLetter, specialChars, updateText]);

  const stopAnimate = useCallback(() => {
    resetChildLetters();
    cancelAnimationFrame(rafRef.current);
  }, [resetChildLetters]);

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => {
    setIsHover(false);
    stopAnimate();
  };

  useEffect(() => {
    if (isHover) animate();
    return () => stopAnimate();
  }, [isHover, animate, stopAnimate]);

  return { handleMouseEnter, handleMouseLeave };
};

export default useLettersGlitchedRandom;
