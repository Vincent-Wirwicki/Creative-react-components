import { useRef, useState, useEffect } from "react";
import useLongestWord from "../../utils/useLongestWord";
import useRandomUniqueIndex from "../../utils/useRandomUniqueIndex";
// import { useAnimationFrame } from "framer-motion";
// useEffect for no framer version,useEffect
const useLetterGlicthRandomInfinit = (
  words: string[],
  perLetter = 5,
  toNextLetter = 20,
  toNextIteration = 25,
  maxIteration = 3
) => {
  const [letters, setLetters] = useState([...words[0]]);
  //no framer version
  const rafRef = useRef(0);
  const stateRef = useRef({
    frame: 0,
    wordIndex: 0,
    iteration: 0,
    resetLetter: 0,
    currentLetter: 0,
  });

  const maxLength = useLongestWord(words);
  // const dummyArr = Array(maxLength).fill("");
  const indices = useRandomUniqueIndex(maxLength);
  // const indices = Array.from({ length }, (_, index) => index);
  // // Shuffle the array using Fisher-Yates algorithm
  // for (let i = indices.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [indices[i], indices[j]] = [indices[j], indices[i]];
  // }
  // return indices;
  const shuffleArr = (length: number) => {
    const indx = Array.from({ length }, (_, index) => index);
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indx[i], indx[j]] = [indx[j], indx[i]];
    }
    return indx;
  };

  const specialChars = [..."°²+'@*!&°²+'@*!&".split("")];
  const currentWord: string[] = Array(maxLength).fill("");

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
    const shuffle = shuffleArr(maxLength);

    const letters = currentWord.map((letter, i) => {
      const random = specialChars[indices[i]];
      if (resetLetter > shuffle[i] && iteration > maxIteration) return random;
      if (currentLetter >= shuffle[i]) return letter;
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
    state.wordIndex++;
    if (state.wordIndex >= words.length) {
      state.wordIndex = 0;
    }
    state.currentLetter = 0;
    state.iteration = 0;
    state.resetLetter = 0;
    state.frame = 0;
  };

  // framer version
  // useAnimationFrame(() => {
  //   timeline();
  //   if (stateRef.current.resetLetter > maxLength) resetTimeline();
  //   stateRef.current.frame++;
  // });
  // console.log(indices);
  // No framer version
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

export default useLetterGlicthRandomInfinit;
