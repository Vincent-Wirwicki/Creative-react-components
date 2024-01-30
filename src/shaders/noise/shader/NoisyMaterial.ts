import { Color, ShaderMaterial } from "three";
import { noisyFragment } from "./noisyFragment";
import { noisyVertex } from "./noisyVertex";

class NoisyMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uColorA: {
          value: new Color("#F28705"),
        },
        uColorB: {
          value: new Color("#F2D0A7"),
        },
        uColorC: {
          value: new Color("#000"),
        },
        uTime: {
          value: 0,
        },
      },
      vertexShader: noisyVertex,
      fragmentShader: noisyFragment,
    });
  }

  set uTime(v) {
    this.uniforms.uTime.value = v;
  }

  get uTime() {
    return this.uniforms.uTime.value;
  }

  set uColorA(v) {
    this.uniforms.uColors.value = v;
  }

  get uColorA() {
    return this.uniforms.uColors.value;
  }
  set uColorB(v) {
    this.uniforms.uColors.value = v;
  }

  get uColorB() {
    return this.uniforms.uColors.value;
  }
  set uColorC(v) {
    this.uniforms.uColors.value = v;
  }

  get uColorC() {
    return this.uniforms.uColors.value;
  }
}

export default NoisyMaterial;
