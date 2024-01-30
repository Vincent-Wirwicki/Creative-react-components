import { ShaderMaterial, Vector3 } from "three";

export default class RenderMaterialFBOCurl extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uPositions: { value: null },
        uDotSize: { value: 3 },
        uDotLarge: {
          value: new Vector3(207, 221, 212).multiplyScalar(1 / 0xff),
        },
        uDotSmall: {
          value: new Vector3(217, 217, 217).multiplyScalar(1 / 0xff),
        },
      },
      fragmentShader: /* glsl */ `
        uniform vec3 uDotLarge;
        uniform vec3 uDotSmall;
        varying float vSize;
        void main() {        
          // gl_FragColor = vec4(vec3(0.8),.8);
          gl_FragColor = vec4( uDotSmall, .2 );
          if( vSize > 1. ){
            gl_FragColor = vec4( uDotLarge * vec3( 1. - length( gl_PointCoord.xy-vec2(.5) ) )*1.5 , .5 );
          }
        }`,
      vertexShader: /*glsl */ `
        uniform sampler2D uPositions;
        uniform float uDotSize;
        varying float vSize;
        void main() {
          //the mesh is a nomrliazed square so the uvs = the xy positions of the vertices
          vec3 pos = texture2D( uPositions, position.xy ).xyz;
           //pos now contains the position of a point in space taht can be transformed
          gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
          gl_PointSize = vSize = max( 1., ( step( 1. - ( 1. / 512. ), position.x ) ) * uDotSize  );
        }`,
    });
  }
}

// vec3 pos = texture2D(uPositions, position.xy).xyz;

// vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
// vec4 viewPosition = viewMatrix * modelPosition;
// vec4 projectedPosition = projectionMatrix * viewPosition;

// gl_Position = projectedPosition;

// gl_PointSize = 2.0;
// Size attenuation;
// gl_PointSize *= step(1.0 - (1.0/512.0), position.x) + 0.5;
