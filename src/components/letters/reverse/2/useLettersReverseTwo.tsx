import {
  RefObject,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from "react";

const useLettersReverseTwo = (
  ref: RefObject<HTMLElement | null>,
  ogLetters: string[],
  perLetter = 8
) => {
  const [isHover, setIsHover] = useState(false);
  const divRef = ref;
  const wrapperNode = divRef.current;
  const rafRef = useRef(0);
  const letters = useMemo(() => [...ogLetters], [ogLetters]);

  let frame = 0;
  let currentLetter = 0;

  const resetChildLetters = useCallback(() => {
    if (wrapperNode)
      ogLetters.map(
        (letter, index) => (wrapperNode.childNodes[index].textContent = letter)
      );
  }, [ogLetters, wrapperNode]);

  const reverseArray = (arr: string[]) => {
    const lastIndex = arr.pop();
    if (lastIndex) arr.unshift(lastIndex);
    return arr;
  };

  const updateText = useCallback(() => {
    if (wrapperNode) {
      const { childNodes } = wrapperNode;
      for (let i = 0; i < ogLetters.length; i++) {
        childNodes[i].textContent = letters[i];
      }
    }
  }, [letters, ogLetters.length, wrapperNode]);

  const stopAnimate = useCallback(() => {
    resetChildLetters();
    cancelAnimationFrame(rafRef.current);
  }, [resetChildLetters]);

  const animate = useCallback(() => {
    if (frame % perLetter === 0) {
      reverseArray(letters);
      updateText();
      currentLetter++;
    }
    frame++;
    rafRef.current = requestAnimationFrame(animate);
    if (currentLetter >= ogLetters.length) stopAnimate();
  }, [
    currentLetter,
    frame,
    letters,
    ogLetters.length,
    perLetter,
    stopAnimate,
    updateText,
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

export default useLettersReverseTwo;
