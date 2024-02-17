import { useRef, useState } from "react";

const useLetterGlicthReveal = (
  ogLetters: string[],
  perLetter = 5,
  toNextLetter = 15,
  toNextIteration = 20
) => {
  const rafRef = useRef(0);
  const char = "/°|²+=-'@!§&\\";
  const specialChars = [...char.split("")];
  const [letters, setLetters] = useState([...ogLetters]);

  let frame = 0;
  let currentLetter = 0;
  let iteration = 0;

  const updateLetters = (currentLetter: number, iteration: number) => {
    const letters = ogLetters.map((letter, i) => {
      if (currentLetter > i && iteration >= 1) return letter;
      return specialChars[Math.floor(Math.random() * specialChars.length)];
    });
    setLetters(letters);
  };

  const stopAnimate = () => {
    setLetters(ogLetters);
    cancelAnimationFrame(rafRef.current);
  };

  const animate = () => {
    if (frame % perLetter === 0) updateLetters(currentLetter, iteration);
    if (frame % toNextLetter === 0 && iteration >= 1) currentLetter++;
    if (frame % toNextIteration === 0) iteration++;
    frame++;
    rafRef.current = requestAnimationFrame(animate);
    if (currentLetter > ogLetters.length) stopAnimate();
  };

  return {
    stopAnimate,
    animate,
    letters,
  };
};

export default useLetterGlicthReveal;
// const letters = ogLetters.map((l, i) => {
//   if (currentLetter > i && iteration >= 1) return l;
//   return specialChars[Math.floor(Math.random() * specialChars.length)];
// });
// // setModLet(letters);
// console.log(modifiedLetters);
// // setMl(letters);
// // // console.log(letters);
// // console.log(ml);
// // console.log(modifRef.current);
