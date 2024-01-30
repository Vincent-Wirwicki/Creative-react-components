import { useState } from "react";

interface Props {
  colors: string[];
}

const DisplayArrayLavaLamp: React.FC<Props> = ({ colors }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="fixed z-30 top-[85%] right-5  p-2 backdrop-blur-3xl rounded-lg"
      >
        show array
      </button>
      {show && (
        <div className="fixed z-30 top-[90%]  right-5 backdrop-blur-3xl p-2 rounded-lg">
          {colors.map((color, index) => (
            <span key={index} style={{ color: color }} className="p-2">
              "{color}",
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default DisplayArrayLavaLamp;
