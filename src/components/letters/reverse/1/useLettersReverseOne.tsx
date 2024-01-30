import { useRef, useState } from "react";

const useLettersReverseOne = (ogLetters: string[], perLetter = 5) => {
  const letters = [...ogLetters];
  const [displayText, setDisplayText] = useState<string>(letters.join(""));
  const rafRef = useRef(0);

  let frame = 0;
  let currentLetter = 0;

  const reverseArray = (arr: string[]) => {
    const firstIndex = arr.pop();
    if (firstIndex) arr.unshift(firstIndex);
    return arr;
  };

  const animate = () => {
    if (frame % perLetter === 0) {
      reverseArray(letters);
      setDisplayText(letters.join(""));
      currentLetter++;
    }
    frame++;
    rafRef.current = requestAnimationFrame(animate);
    if (currentLetter >= ogLetters.length) currentLetter = 0;
  };

  const stopAnimate = () => {
    setDisplayText(ogLetters.join(""));
    cancelAnimationFrame(rafRef.current);
  };
  return { displayText, animate, stopAnimate };
};

export default useLettersReverseOne;
