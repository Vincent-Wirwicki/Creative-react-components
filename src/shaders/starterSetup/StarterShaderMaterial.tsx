import { shaderMaterial } from "@react-three/drei";

export const StarterShaderMaterial = shaderMaterial(
  { uTime: 0 },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    uniform float uTime;
    varying vec2 vUv;

    void main() {

      gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + uTime), 1.0);
    }
  `
);
