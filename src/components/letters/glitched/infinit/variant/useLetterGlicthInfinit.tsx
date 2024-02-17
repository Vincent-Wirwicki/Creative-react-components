import { useRef, useState, useEffect } from "react";
// useEffect, useMemo, useCallback
const useLetterGlicthInfinit = (
  words: string[],
  perLetter = 5,
  toNextLetter = 20
) => {
  const [letters, setLetters] = useState([...words[0]]);
  const rafRef = useRef(0);
  const specialChars = [..."°²+'@*!&".split("")];

  const stateRef = useRef({
    frame: 0,
    wordIndex: 0,
    currentLetter: 0,
  });

  const longestWord = () => {
    let longestWord = "";
    words.forEach(word => {
      if (word.length > longestWord.length) longestWord = word;
    });
    return longestWord.length;
  };

  const maxLength = longestWord();

  const updateLetters = (currentLetter: number, i: number) => {
    const word = words[i].split("");
    const random =
      specialChars[Math.floor(Math.random() * specialChars.length)];

    const letters = word.map((letter, i) => {
      if (currentLetter > i) return letter;
      return random;
    });
    setLetters(() => [...letters]);
  };

  const animate = () => {
    // animation logic
    if (stateRef.current.frame % perLetter === 0)
      updateLetters(stateRef.current.currentLetter, stateRef.current.wordIndex);
    if (stateRef.current.frame % toNextLetter === 0) {
      stateRef.current.currentLetter++;
    }

    //reset part how long it display
    if (stateRef.current.currentLetter > maxLength) {
      if (stateRef.current.frame % 100 === 0) {
        stateRef.current.wordIndex++;
        if (stateRef.current.wordIndex >= words.length) {
          stateRef.current.wordIndex = 0;
        }
        stateRef.current.currentLetter = 0;
      }
    }
    stateRef.current.frame++;
    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  });

  return { letters };
};

export default useLetterGlicthInfinit;
