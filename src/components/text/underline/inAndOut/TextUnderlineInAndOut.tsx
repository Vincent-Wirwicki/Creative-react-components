import React from "react";

interface Props {
  text: string;
}

const TextUnderlineInAndOut: React.FC<Props> = ({ text }) => {
  return <div className="">{text}</div>;
};

export default TextUnderlineInAndOut;
