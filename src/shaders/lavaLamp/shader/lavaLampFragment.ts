export const lavaLampfragement = /*glsl*/ `
    uniform float uTime;
    varying vec3 vColor;
    // varying vec
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(vUv, 0.0 , 1.);
      gl_FragColor = vec4(vColor, 1.);
    }
  `;
