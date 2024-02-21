import { useRef, useState, useEffect } from "react";
import useLongestWord from "../../utils/useLongestWord";
// useEffect, useMemo, useCallback
const useLetterGlicthInfinit = (
  words: string[],
  perLetter = 15,
  toNextLetter = 15,
  toNextIteration = 20,
  maxIteration = 10
) => {
  const [letters, setLetters] = useState([...words[0]]);

  const rafRef = useRef(0);
  const stateRef = useRef({
    frame: 0,
    wordIndex: 0,
    iteration: 0,
    resetLetter: 0,
    currentLetter: 0,
  });

  const maxLength = useLongestWord(words);
  //  const indices = useRandomUniqueIndex(maxLength);

  const specialChars = [..."°²+'@*!&°²+'@*!&".split("")];
  const currentWord: string[] = Array(maxLength).fill("");

  const getRandomIndex = () => {
    return Math.floor(Math.random() * specialChars.length);
  };

  const updateArray = (i: number): string[] => {
    const word = words[i].split("");
    for (let i = 0; i < maxLength; i++) {
      currentWord.splice(i, 1, "_");
      if (i < word.length) currentWord.splice(i, 1, word[i]);
    }
    return currentWord;
  };

  const updateLetters = (
    currentLetter: number,
    iteration: number,
    maxIteration: number,
    resetLetter: number,
    i: number
  ) => {
    const currentWord = updateArray(i);
    const random = specialChars[getRandomIndex()];

    const letters = currentWord.map((letter, i) => {
      if (resetLetter > i && iteration > maxIteration) return random;
      if (currentLetter >= i) return letter;
      return random;
    });

    setLetters(() => [...letters]);
  };

  const timeline = () => {
    // update letter
    if (stateRef.current.frame % perLetter === 0)
      updateLetters(
        stateRef.current.currentLetter,
        stateRef.current.iteration,
        maxIteration,
        stateRef.current.resetLetter,
        stateRef.current.wordIndex
      );
    //frame to next letter
    if (stateRef.current.frame % toNextLetter === 0) {
      stateRef.current.currentLetter++;
    }
    //frame to next iteration
    if (stateRef.current.frame % toNextIteration === 0) {
      stateRef.current.iteration++;
    }
    // frame to reset
    if (
      stateRef.current.frame % toNextLetter === 0 &&
      stateRef.current.iteration >= maxIteration
    ) {
      stateRef.current.resetLetter++;
    }
  };

  const resetTimeline = () => {
    stateRef.current.wordIndex++;
    if (stateRef.current.wordIndex >= words.length) {
      stateRef.current.wordIndex = 0;
    }
    stateRef.current.currentLetter = 0;
    stateRef.current.iteration = 0;
    stateRef.current.resetLetter = 0;
  };

  const animate = () => {
    timeline();
    if (stateRef.current.resetLetter > maxLength) resetTimeline();
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
