import { ChangeEvent } from "react";

interface Props {
  handleChange: ({ currentTarget }: ChangeEvent<HTMLInputElement>) => void;
  // handleFocus: ({ currentTarget }: ChangeEvent<HTMLInputElement>) => void;
  // handleBlur: () => void;
  maxDist: number;
  maxDensity: number;
  config: { density: number; maxDist: number; color: string };
}
const ParticulesConfig: React.FC<Props> = ({
  handleChange,
  // handleBlur,
  // handleFocus,
  config,
  maxDist,
  maxDensity,
}) => {
  return (
    <div className="absolute  right-10 flex flex-col gap-2 border border-neutral-800 bg-neutral-950 ">
      {Object.entries(config).map(([key, value], index) => (
        <div
          key={index}
          className="w-52 grid grid-cols-3 gap-2 text-sm  p-1 border-b border-neutral-800"
        >
          <label htmlFor={`input-${key}`} className="text-right">
            {key}
          </label>
          <input
            id={`input-${key}`}
            className="appearance-none cursor-text text-sm text-center bg-neutral-800 rounded-xs w-16"
            type={typeof value === "number" ? "number" : "text"}
            name={key}
            value={value}
            onChange={handleChange}
            // onBlur={handleBlur}
            // onFocus={handleFocus}
          />
          {key === "density" && (
            <span className="text-neutral-500 text-[12px]">{`max ${maxDensity}`}</span>
          )}
          {key === "maxDist" && (
            <span className="text-neutral-500 text-[12px]">
              {"max " + maxDist}
            </span>
          )}
          {/* {selectedInput === key ? (
            <span className="absolute bottom-0 right-[10px] text-xs">
              {selectedInput === "density" && "max value " + maxDensity}
              {selectedInput === "maxDist" && "max dist " + maxDist}
            </span>
          ) : null} */}
        </div>
      ))}
    </div>
  );
};
// w-[502px] flex justify-between border border-neutral-500 mt-2
export default ParticulesConfig;
