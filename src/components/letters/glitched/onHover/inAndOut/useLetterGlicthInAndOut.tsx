import { useRef, useState } from "react";

/** A hook that  randomize a string[] with special charachter */
const useLetterGlicthInAndOut = (
  ogLetters: string[],
  perLetter = 5,
  toNextLetter = 20,
  toNextIteration = 25,
  maxIteration = 2
) => {
  const rafRef = useRef(0);
  const char = "/°|²+=-'@!§&\\";
  const specialChars = [...char.split("")];
  const [letters, setLetters] = useState([...ogLetters]);

  let frame = 0;
  let currentLetter = 0;
  let resetLetter = 0;
  let iteration = 0;

  const updateLetters = (
    currentLetter: number,
    resetLetter: number,
    iteration: number,
    maxIteration: number
  ) => {
    const letters = ogLetters.map((letter, i) => {
      if (resetLetter > i && iteration >= maxIteration) return letter;
      if (currentLetter > i)
        return specialChars[Math.floor(Math.random() * specialChars.length)];
      return letter;
    });
    setLetters(letters);
  };

  const stopAnimate = () => {
    setLetters(ogLetters);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    // console.log(rafRef.current);
  };

  const animate = () => {
    if (frame % perLetter === 0)
      updateLetters(currentLetter, resetLetter, iteration, maxIteration);
    if (frame % toNextLetter === 0) currentLetter++;
    if (frame % toNextIteration === 0) iteration++;
    if (frame % toNextLetter === 0 && iteration >= maxIteration) resetLetter++;
    frame++;
    rafRef.current = requestAnimationFrame(animate);
    if (resetLetter > ogLetters.length) cancelAnimationFrame(rafRef.current);
  };

  return { animate, stopAnimate, letters };
};

export default useLetterGlicthInAndOut;
