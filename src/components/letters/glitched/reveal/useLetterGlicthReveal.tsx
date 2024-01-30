import {
  useRef,
  RefObject,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";

const useLetterGlicthReveal = (
  ref: RefObject<HTMLElement | null>,
  ogLetters: string[],
  perLetter = 5,
  toNextLetter = 15,
  toNextIteration = 20
) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const myRef = ref;
  const wrapperNode = myRef.current;
  const rafRef = useRef(0);
  const char = "/°|²+=-'@!§&\\";
  const specialChars = useMemo(() => [...char.split("")], []);

  let frame = 0;
  let currentLetter = 0;
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
    (currentLetter: number, iteration: number) => {
      if (wrapperNode) {
        const { childNodes } = wrapperNode;
        for (let i = 0; i < ogLetters.length; i++) {
          const randomIndex = getRandomIndex(specialChars);
          if (currentLetter > i && iteration >= 1) {
            childNodes[i].textContent = ogLetters[i];
          } else {
            childNodes[i].textContent = specialChars[randomIndex];
          }
        }
      }
    },
    [ogLetters, specialChars, wrapperNode]
  );

  const stopAnimate = useCallback(() => {
    resetChildLetters();
    cancelAnimationFrame(rafRef.current);
  }, [resetChildLetters]);

  const animate = useCallback(() => {
    if (frame % perLetter === 0) updateLetters(currentLetter, iteration);
    if (frame % toNextLetter === 0 && iteration >= 1) currentLetter++;
    if (frame % toNextIteration === 0) iteration++;
    frame++;
    rafRef.current = requestAnimationFrame(animate);
    if (currentLetter > ogLetters.length) stopAnimate();
  }, [
    currentLetter,
    frame,
    iteration,
    ogLetters.length,
    perLetter,
    toNextIteration,
    toNextLetter,
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

export default useLetterGlicthReveal;
