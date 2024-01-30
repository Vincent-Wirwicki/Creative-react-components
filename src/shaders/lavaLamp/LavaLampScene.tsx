import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { useControls } from "leva";
// import { Loader } from "@react-three/drei";
import LavaLampMesh from "./LavaLampMesh";
// import DisplayArrayLavaLamp from "./utils/DisplayArrayLavaLamp";useState

// import { OrbitControls } from "@react-three/drei";

const LavaLampScene = () => {
  // const [colorsArray, setColorsArray] = useState([
  //   "#0c0a09",
  //   "#eab308",
  //   "#14532d",
  //   "#991b1b",
  //   "#292524",
  // ]);

  // const updateColor = (index: number, value: string) => {
  //   setColorsArray(prevColors => {
  //     const newColors = [...prevColors];
  //     newColors[index] = value;
  //     return newColors;
  //   });
  // };

  // Leva controls for color
  // useControls({
  //   color1: { value: colorsArray[0], onChange: value => updateColor(0, value) },
  //   color2: { value: colorsArray[1], onChange: value => updateColor(1, value) },
  //   color3: { value: colorsArray[2], onChange: value => updateColor(2, value) },
  //   color4: { value: colorsArray[3], onChange: value => updateColor(3, value) },
  //   color5: { value: colorsArray[4], onChange: value => updateColor(4, value) },
  // });

  return (
    <>
      {/* <DisplayArrayLavaLamp colors={colorsArray} /> */}
      <Canvas camera={{ position: [-0.3, -0.5, 1.2], fov: 20 }}>
        <Suspense fallback={null}>
          {/* <LavaLampMesh colors={colorsArray} /> */}
          <LavaLampMesh />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
      {/* <Loader /> */}
      {/* <Stats/> */}
    </>
  );
};

export default LavaLampScene;

// "#f2637e" ,'#1f736a', '#f2bbb6', '#d95b5b', '#262626'
// [0.12, -1.05, 1.6] x: 0.2393988277052338, y: -0.8640140793554445, z: 1.3841811655965919
// [-0.18, -0.7, 1.6] x: -0.4765476009192239, y: -1.0476609605033915, z: 1.5101829190735483
// [-0.18, -0.7, 1.6]

// "#0c0a09",
// "#eab308",
// "#14532d",
// "#991b1b",
// "#292524",

// "#148C8C",
// "#41F2B1",
// "#737373",
// "#05F2F2",
// "#93ABBF",

// "#1c1917",
// "#450a0a",
// "#f87171",
// "#dc2626",
// "#1c1917",

// "#0c0a09",
// "#eab308",
// "#14532d",
// "#991b1b",
// "#292524",

// "#154001",
// "#68f205",
// "#52bf04",
// "#317302",
// "#0d0d0d",

// "#9cf25e",
// "#d9895b",
// "#0d0d0d",
// "#dc2626",
// "#e2f266",
