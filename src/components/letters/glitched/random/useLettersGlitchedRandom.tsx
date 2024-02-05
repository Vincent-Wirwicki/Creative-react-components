import { useRef, useState } from "react";

const useLettersGlitchedRandom = (
  ogLetters: string[],
  perLetter = 5,
  toNextLetter = 20
) => {
  const [letters, setLetters] = useState([...ogLetters]);

  const rafRef = useRef(0);
  const char = "/°|²+=-'@!§&\\";
  const specialChars = [...char.split("")];

  const getRandomIndex = (arr: string[]) =>
    Math.floor(Math.random() * arr.length);
  const getRandomLetter = useRef(getRandomIndex(ogLetters));

  let frame = 0;

  const updateText = (randoLetter: number, randoSpecial: number) => {
    const letters = ogLetters.map((letter, i) => {
      if (i === randoLetter) return specialChars[randoSpecial];
      return letter;
    });
    setLetters(letters);
  };

  const animate = () => {
    if (frame % perLetter === 0) {
      const getRandomSpecial = getRandomIndex(specialChars);
      updateText(getRandomLetter.current, getRandomSpecial);
    }
    if (frame % toNextLetter === 0)
      getRandomLetter.current = getRandomIndex(ogLetters);
    frame++;
    rafRef.current = requestAnimationFrame(animate);
  };

  const stopAnimate = () => {
    setLetters(ogLetters);
    cancelAnimationFrame(rafRef.current);
  };

  return { animate, stopAnimate, letters };
};

export default useLettersGlitchedRandom;
