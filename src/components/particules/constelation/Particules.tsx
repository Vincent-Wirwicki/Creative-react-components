import { useRef, ChangeEvent } from "react";
import useParticules from "./hook/useParticules";
import ParticulesConfig from "./ParticulesConfig";

const Particules = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { config, setConfig } = useParticules(canvasRef);
  // const [selectedInput, setSelectedInput] = useState<string | null>(null);

  const maxDensity = 600;
  const maxDist = 200;

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = currentTarget;
    const numValue = Number(value);
    if (currentTarget) {
      if (name === "density" && numValue > maxDensity) {
        return console.warn("max value is " + maxDensity);
      }
      if (name === "maxDist" && numValue > maxDist) {
        return console.warn("max value is " + maxDist);
      }
      setConfig(prev => ({ ...prev, [name]: value }));
    }
  };

  // const handleFocus = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
  //   const { name } = currentTarget;
  //   if (currentTarget) setSelectedInput(name);
  // };

  // const handleBlur = () => setSelectedInput(null);

  return (
    <div className="bento-grid">
      <div className="col-start-1 col-span-8 row-start-1 row-span-full w-full md:h-full sm:h-fit">
        <canvas className="border border-neutral-800" ref={canvasRef} />
      </div>
      <ParticulesConfig
        handleChange={handleChange}
        // handleFocus={handleFocus}
        // handleBlur={handleBlur}
        maxDensity={maxDensity}
        maxDist={maxDist}
        config={config}
      />
    </div>
  );
};

export default Particules;
// be
