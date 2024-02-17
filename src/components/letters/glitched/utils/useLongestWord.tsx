const useLongestWord = (arr: string[]) => {
  let longestWord = "";
  arr.forEach(word => {
    if (word.length > longestWord.length) longestWord = word;
  });
  return longestWord.length;
};

export default useLongestWord;
