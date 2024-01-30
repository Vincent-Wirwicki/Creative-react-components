import { Color, ShaderMaterial } from "three";
// import { extend } from "@react-three/fiber";
import { lavaLampVertex } from "./lavaLampVertex";
import { lavaLampfragement } from "./lavaLampFragment";

class LavaLampMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uColors: {
          value: [
            new Color("#0c0a09"),
            new Color("#eab308"),
            new Color("#14532d"),
            new Color("#991b1b"),
            new Color("#292524"),
          ],
        },
        uTime: {
          value: 0,
        },
      },
      vertexShader: lavaLampVertex,
      fragmentShader: lavaLampfragement,
    });
  }

  set uTime(value) {
    this.uniforms.uTime.value = value;
  }

  get uTime() {
    return this.uniforms.uTime.value;
  }

  set uColors(value) {
    this.uniforms.uColors.value = value;
  }

  get uColors() {
    return this.uniforms.uColors.value;
  }
}

// LavaLampMaterial.key = guid.generate();

// extend({ LavaLampMaterial });
export { LavaLampMaterial };
