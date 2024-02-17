import { useRef, useState } from "react";

const useLettersGlitchedBasic = (text: string, perLetter = 5) => {
  const [displayText, setDisplayText] = useState(text);
  const specialChar = "/°|²=+\\+=-@!'";
  const specialChars = [...specialChar.split("")];
  const ogText = Array.from(text);
  const rafRef = useRef(0);
  let frame = 0;
  let currentLetter = 0;

  const updateLetters = (currentLetter: number) => {
    const letters = ogText.map((letter, index) => {
      if (currentLetter > index) return letter;
      return specialChars[Math.floor(Math.random() * specialChars.length)];
    });
    setDisplayText(letters.join(""));
  };

  const animate = () => {
    if (frame % perLetter === 0) {
      updateLetters(currentLetter);
      currentLetter++;
    }
    frame++;
    rafRef.current = requestAnimationFrame(animate);
    if (currentLetter > ogText.length) stopAnimate();
  };

  const stopAnimate = () => {
    setDisplayText(text);
    cancelAnimationFrame(rafRef.current);
  };

  return { displayText, animate, stopAnimate };
};

export default useLettersGlitchedBasic;
