import { useState, ChangeEvent } from "react";

const useParticulesConfig = (
  setConfig: React.Dispatch<
    React.SetStateAction<{
      density: number;
      maxDist: number;
      color: string;
    }>
  >,
  maxDensity: number = 800
) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  // const [activeInput, setActiveInput] = useState<number | null>(null);
  // const [currentInput, setCurrentInput] = useState("");

  const handleErrors = (isError: boolean, msg: string) => {
    setIsError(isError);
    setErrorMsg(msg);
  };

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = currentTarget;
    const numValue = Number(value);
    if (currentTarget) {
      handleErrors(false, "");
      if (name === "density" && numValue > maxDensity) {
        return handleErrors(true, "max value is " + maxDensity);
      }
      setConfig(prev => ({ ...prev, [name]: value }));
    }
  };

  // const handleOnBlur = () => setActiveInput(null)
  // const handleOnFocus = ({ currentTarget }: ChangeEvent<HTMLInputElement>) =>
  //   setActiveInput(Number(currentTarget.dataset.id));

  return { handleChange, isError, errorMsg };
};

export default useParticulesConfig;

// const isNumeric = (input: string): boolean => /^\d+$/.test(input);
// const isNumber = isNumeric(value);
// if (name != "color" && !isNumber) {
//   return handleErrors(true, "input accept only numbers");
// }
// const [errors, setErrors] = useState<Record<string, string>>({});

// const maxDensity = 100; // replace with your actual max density value

// const handleErrors = (name: string, isError: boolean, msg: string) => {
//   setErrors(prevErrors => ({ ...prevErrors, [name]: { isError, msg } }));
// };
