import { useRef, useState, useEffect } from "react";
import useLongestWord from "../../utils/useLongestWord";

const useLetterGlicthInAndOutInfinit = (
  words: string[],
  specialChars: string[],
  perLetter = 15,
  toNextLetter = 20,
  toNextIteration = 25,
  maxIteration = 3
) => {
  const [letters, setLetters] = useState<string[]>([...words[0]]);

  const rafRef = useRef(0);
  const stateRef = useRef({
    frame: 0,
    wordIndex: 0,
    iteration: 0,
    resetLetter: 0,
    currentLetter: 0,
  });

  const maxLength = useLongestWord(words);
  // const specialChars = [..."°²+'@*!&".split("")];

  const getRandomIndex = () => {
    return Math.floor(Math.random() * specialChars.length);
  };

  const updateArray = (i: number): string[] => {
    const word = words[i].split("");
    const currentWord = Array(maxLength).fill("");

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
    const letters = currentWord.map((letter, i) => {
      const random = specialChars[getRandomIndex()];
      if (resetLetter > i && iteration > maxIteration) return random;
      if (currentLetter > i) return letter;
      return random;
    });

    setLetters(() => [...letters]);
  };

  const timeline = () => {
    const state = stateRef.current;
    // update letter
    if (state.frame % perLetter === 0)
      updateLetters(
        state.currentLetter,
        state.iteration,
        maxIteration,
        state.resetLetter,
        state.wordIndex
      );
    //frame to next letter
    if (state.frame % toNextLetter === 0) {
      state.currentLetter++;
    }
    //frame to next iteration
    if (state.frame % toNextIteration === 0) {
      state.iteration++;
    }
    // frame to reset
    if (state.frame % toNextLetter === 0 && state.iteration >= maxIteration) {
      state.resetLetter++;
    }
  };

  const resetTimeline = () => {
    const state = stateRef.current;
    if (state.frame % 100 === 0) {
      state.wordIndex++;
      if (state.wordIndex >= words.length) {
        state.wordIndex = 0;
      }
      state.currentLetter = 0;
      state.iteration = 0;
      state.resetLetter = 0;
    }
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
      rafRef.current = 0;
    };
  });

  return { letters };
};

export default useLetterGlicthInAndOutInfinit;
