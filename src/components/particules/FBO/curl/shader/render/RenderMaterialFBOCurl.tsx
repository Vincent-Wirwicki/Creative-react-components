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
        varying float vDistance;
        void main() {        
          // gl_FragColor = vec4(vec3(0.8),.8);
          float dist = length(gl_PointCoord - vec2(0.5));
          float alpha = 1. - smoothstep(0.,1., 1.- vDistance);

          vec3 color = vec3(1.,0.25,.5);
          color = smoothstep(vec3(.75),vec3(1.),vec3(vDistance, 0. ,0.));

          //reddish with blacks more blends
          color = smoothstep(vec3(.25),vec3(1.),vec3(dist,0.,0.75)) ;
          //black and white
          // color = smoothstep(vec3(.3),vec3(.1),vec3(0.,0.,dist));

          
          gl_FragColor = vec4( color, vDistance);



          // if( vSize > 1. ){
          //   gl_FragColor = vec4( uDotLarge * vec3( 1. - length( gl_PointCoord.xy-vec2(.5) ) )*1.5 , .5 );
          // }
        }`,
      vertexShader: /*glsl */ `
        uniform sampler2D uPositions;
        uniform float uDotSize;
        varying float vSize;
        varying float vDistance;
        void main() {
          //the mesh is a nomrliazed square so the uvs = the xy positions of the vertices
          vec3 pos = texture2D( uPositions, position.xy ).xyz;
                // newPos.y -= mod(uTime/3., 1.); 

          
          //pos now contains the position of a point in space taht can be transformed
          // gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
          // gl_PointSize = vSize = max( 1., ( step( 1. - ( 1. / 512. ), position.x ) ) * uDotSize  );
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
          vDistance = -mvPosition.z;
          gl_PointSize = 5. * (1./ -mvPosition.z);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1. );

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
