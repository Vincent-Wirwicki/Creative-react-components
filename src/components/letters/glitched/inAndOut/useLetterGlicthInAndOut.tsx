import {
  useRef,
  RefObject,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";

/** A hook that  randomize a string[] with special charachter */
const useLetterGlicthInAndOut = (
  ref: RefObject<HTMLElement | null>,
  ogLetters: string[],
  perLetter = 5,
  toNextLetter = 20,
  toNextIteration = 25,
  maxIteration = 2
) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const myRef = ref;
  const wrapperNode = myRef.current;
  const rafRef = useRef(0);
  const char = "/°|²+=-'@!§&\\";
  const specialChars = useMemo(() => [...char.split("")], []);

  let frame = 0;
  let currentLetter = 0;
  let resetLetter = 0;
  let iteration = 0;

  const getRandomIndex = (arr: string[]) =>
    Math.floor(Math.random() * arr.length);

  const resetChildLetters = useCallback(() => {
    if (wrapperNode)
      ogLetters.map(
        (letter, index) => (wrapperNode.childNodes[index].textContent = letter)
      );
  }, [ogLetters, wrapperNode]);

  const updateLetters = useCallback(
    (
      currentLetter: number,
      resetLetter: number,
      iteration: number,
      maxIteration: number
    ) => {
      if (wrapperNode) {
        const { childNodes } = wrapperNode;
        for (let i = 0; i < ogLetters.length; i++) {
          const randomIndex = getRandomIndex(specialChars);
          if (resetLetter > i && iteration >= maxIteration) {
            childNodes[i].textContent = ogLetters[i];
          } else if (currentLetter > i) {
            childNodes[i].textContent = specialChars[randomIndex];
          }
        }
      } else {
        console.warn("HTML element missing childNodes");
      }
    },
    [ogLetters, specialChars, wrapperNode]
  );

  const stopAnimate = useCallback(() => {
    resetChildLetters();
    cancelAnimationFrame(rafRef.current);
  }, [resetChildLetters]);

  const animate = useCallback(() => {
    if (frame % perLetter === 0)
      updateLetters(currentLetter, resetLetter, iteration, maxIteration);
    if (frame % toNextLetter === 0) currentLetter++;
    if (frame % toNextIteration === 0) iteration++;
    if (frame % toNextLetter === 0 && iteration >= maxIteration) resetLetter++;
    frame++;
    rafRef.current = requestAnimationFrame(animate);
    if (resetLetter > ogLetters.length) stopAnimate();
  }, [
    currentLetter,
    resetLetter,
    frame,
    iteration,
    ogLetters.length,
    perLetter,
    toNextIteration,
    toNextLetter,
    maxIteration,
    stopAnimate,
    updateLetters,
  ]);

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

export default useLetterGlicthInAndOut;
