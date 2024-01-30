import { ShaderMaterial } from "three";

export default class RenderMaterialFBOTwo extends ShaderMaterial {
  constructor() {
    super({
      uniforms: { uPositions: { value: null } },
      fragmentShader: /* glsl */ `  
      void main() {
        vec3 color = vec3(0.34, 0.53, 0.96);
        vec3 red = vec3(0.770,0.162,0.176);
         gl_FragColor = vec4(red, 1.);
     }`,
      vertexShader: /*glsl */ `
      uniform sampler2D uPositions;
      uniform float uTime;
      
      void main() {
         vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
         gl_PointSize = 10.*(1. / -mvPosition.z);
         gl_Position = projectionMatrix * mvPosition;

        vec3 pos = texture2D(uPositions, position.xy).xyz;
      
    
        // vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
        // vec4 viewPosition = viewMatrix * modelPosition;
        // vec4 projectedPosition = projectionMatrix * viewPosition;
      
        // gl_Position = projectedPosition;
      
        // gl_PointSize = 2.0;
        // Size attenuation;
        // gl_PointSize *= step(1.0 - (1.0/512.0), position.x) + 0.5;
      }`,
    });
  }
}
