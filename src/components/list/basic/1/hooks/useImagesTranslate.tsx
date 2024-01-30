import { useMemo } from "react";

const useImagePositions = (listLength: number) => {
  const translatePositions = useMemo(() => {
    const positions: string[] = [];
    const translateYPerImage = 100 / listLength;
    for (let i = 0; i < listLength; i++) {
      const pos = translateYPerImage * i;
      positions.push(pos.toFixed(3));
    }
    return positions;
  }, [listLength]);

  return { translatePositions };
};

export default useImagePositions;
