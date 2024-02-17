import { useRef, useState, useEffect } from "react";
import useLongestWord from "../../utils/useLongestWord";
import useRandomUniqueIndex from "../../utils/useRandomUniqueIndex";
// useEffect, useMemo, useCallback
const useLetterGlicthRandomInfinit = (
  words: string[],
  perLetter = 5,
  toNextLetter = 20,
  toNextIteration = 25,
  maxIteration = 3
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
  const indices = useRandomUniqueIndex(maxLength);

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
    const letters = currentWord.map((letter, i) => {
      const random = specialChars[indices[i]];
      if (resetLetter > indices[i] && iteration > maxIteration) return random;
      if (currentLetter >= indices[i]) return letter;
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

export default useLetterGlicthRandomInfinit;

// const animate = useCallback(() => {
//   if (stateRef.current.frame % perLetter === 0)
//     updateLetters(
//       stateRef.current.currentLetter,
//       stateRef.current.iteration,
//       maxIteration,
//       stateRef.current.wordIndex
//     );
//   if (stateRef.current.frame % toNextLetter === 0)
//     stateRef.current.currentLetter++;
//   if (stateRef.current.frame % toNextIteration === 0)
//     stateRef.current.iteration++;
//   if (
//     stateRef.current.frame % toNextLetter === 0 &&
//     stateRef.current.iteration >= maxIteration
//   )
//     stateRef.current.resetLetter++;
//   if (stateRef.current.resetLetter > maxLength) {
//     if (stateRef.current.frame % 90 === 0) {
//       stateRef.current.wordIndex++;
//       if (stateRef.current.wordIndex >= words.length)
//         stateRef.current.wordIndex = 0;
//       stateRef.current.currentLetter = 0;
//       stateRef.current.iteration = 0;
//       stateRef.current.resetLetter = 0;
//     }
//   }
//   stateRef.current.frame++;
//   rafRef.current = requestAnimationFrame(animate);
// }, [
//   maxIteration,
//   maxLength,
//   perLetter,
//   toNextIteration,
//   toNextLetter,
//   updateLetters,
//   words.length,
// ]);

// const animate = useCallback(() => {
//   let { frame, currentLetter, resetLetter, iteration, wordIndex } =
//     stateRef.current;
//   if (frame % perLetter === 0)
//     updateLetters(currentLetter, iteration, maxIteration, wordIndex);
//   if (frame % toNextLetter === 0) currentLetter++;
//   if (frame % toNextIteration === 0) iteration++;
//   if (frame % toNextLetter === 0 && iteration >= maxIteration) resetLetter++;
//   if (resetLetter > maxLength) {
//     if (frame % 90 === 0) {
//       stateRef.current.wordIndex++;
//       if (wordIndex >= words.length) wordIndex = 0;
//       currentLetter = 0;
//       iteration = 0;
//       resetLetter = 0;
//     }
//   }
//   frame++;
//   rafRef.current = requestAnimationFrame(animate);
// }, [
//   maxIteration,
//   maxLength,
//   perLetter,
//   toNextIteration,
//   toNextLetter,
//   updateLetters,
//   words.length,
// ]);
