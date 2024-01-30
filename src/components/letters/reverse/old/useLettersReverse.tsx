import { useState, useRef } from "react";

const useLetterReverse = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState<string>(text);

  const originalText = Array.from(text);
  const reverseText = Array.from(text).reverse();
  const intervalRef = useRef(0);

  const updateText = (current: number) => {
    const letters = originalText.map((letter, index) => {
      if (current > index) return letter;
      return reverseText[index];
    });
    setDisplayText(letters.join(""));
  };

  const reverse = () => {
    let current = originalText.length;
    let iteration = 0;
    intervalRef.current = setInterval(() => {
      updateText(current);
      iteration === 0 && current--;
      current < 0 && iteration++;
      iteration > 0 && current++;
      if (current > originalText.length) {
        stopReverse();
        setDisplayText(originalText.join(""));
      }
    }, speed);
  };

  const stopReverse = () => {
    clearInterval(intervalRef.current);
    setDisplayText(originalText.join(""));
  };

  return { reverse, stopReverse, displayText };
};

export default useLetterReverse;
