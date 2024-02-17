const useRandomUniqueIndex = (length: number): number[] => {
  // Generate an array of indices from 0 to length - 1
  const indices = Array.from({ length }, (_, index) => index);
  // Shuffle the array using Fisher-Yates algorithm
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
};

export default useRandomUniqueIndex;
