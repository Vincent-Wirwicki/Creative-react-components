import React from 'react'

interface Props {
    text:string;
}

const SpanLettersTranslate3d = ({text}) => {
  return (
    <div>
      {text.map((letter, index) => (
        <span
          key={letter + index}
          className={span__letter}
          style={{
            transformOrigin: origin,
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay * index}s`,
            transitionTimingFunction: easing,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

export default SpanLettersTranslate3d