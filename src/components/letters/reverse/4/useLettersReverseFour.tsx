import { useRef, useState } from "react";

const useLettersReverseFour = (ogLetters: string[], perLetter = 8) => {
  const rafRef = useRef(0);
  const [letters, setLetters] = useState([...ogLetters]);

  let frame = 0;
  let currentLetter = 0;

  const reverseArray = <T,>(arr: T[]): T[] => {
    const lastIndex = arr.pop();
    if (lastIndex) arr.unshift(lastIndex);
    return arr;
  };

  const stopAnimate = () => {
    setLetters(ogLetters);
    cancelAnimationFrame(rafRef.current);
  };

  const animate = () => {
    if (frame % perLetter === 0) {
      const reverse = reverseArray(ogLetters);
      const letters = reverse.map(letter => letter);
      setLetters(letters);
      currentLetter++;
    }
    frame++;
    rafRef.current = requestAnimationFrame(animate);
    if (currentLetter >= ogLetters.length) stopAnimate();
  };

  return { animate, stopAnimate, letters };
};

export default useLettersReverseFour;
