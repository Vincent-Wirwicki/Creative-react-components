import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

const colors = [
  new Color("#0c0a09"),
  new Color("#eab308"),
  new Color("#14532d"),
  new Color("#991b1b"),
  new Color("#292524"),
];

export const LavaLampMaterial = shaderMaterial(
  {
    uTime: 0,
    uColors: colors,
  },
  // vertex shader
  /*glsl*/ ` 
    uniform float uTime;
    uniform vec3 uColors[5];
    varying vec2 vUv;
    varying vec3 vColor;

    //	Simplex 3D Noise 
    //	by Ian McEwan, Ashima Arts
    // noise function start----------------------------
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float snoise(vec3 v){ 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      //  x0 = x0 - 0. + 0.0 * C 
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    // Permutations
      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients
    // ( N*N points uniformly over a square, mapped onto an octahedron.)
      float n_ = 1.0/7.0; // N=7
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

    //Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

    // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    // noise function end----------------------------
    
    
    // main code 
    void main() {        
        vUv = uv;
        vColor = uColors[4];

        //the highest value the highest waves
        vec2 noiseCoords = uv*vec2(5.,3.);
        
        float noise = snoise(
            vec3(
                noiseCoords.x + uTime * 3., 
                noiseCoords.y, 
                uTime*6.
                )
            );
        //remove down value
        noise = max(0.,noise);
        //keep low value these are very little changes how the waves works
        //effect for the wavy things
        float tilt = -.2*uv.y;
        // make the plan longer and the wave more flat
        float incline = .1*uv.x;
        //distortion to the plan
        float offset = incline*mix(-.25,.25, uv.x);

        float addEffects = tilt + incline + offset;
        
        // vec3 pos = vec3(position.x, position.y, position.z + 0.1*sin(uv.x*20.)*sin(uv.y*20.));
        vec3 pos = vec3(
            position.x, 
            position.y, 
            position.z + noise * 0.3 + addEffects
            );
            // noise * 0.03 low value make it more flat
        
        //color part test arround 
        for (int i = 0; i <= 4; i++) {
            
            float index = float(i);
            //how color spread
            float noiseFlow = .75 + index*.8;
            //how fast color change
            float noiseSpeed = 4. + index*1.75;
            //how the noise start and evolve
            float noiseSeed = 5. * index*3.;
            //value > 1 kill make the effect weird
            vec2 noiseFreq = vec2(.6,.8);

            float noiseFloor = 0.01;
            float noiseCeil = .5 + float(i)*0.075;

            float noise = smoothstep(
                noiseFloor, 
                noiseCeil, 
                snoise(
                    vec3(
                        noiseCoords.x * noiseFreq.x + uTime * noiseFlow, 
                        noiseCoords.y * noiseFreq.y, 
                        uTime*noiseSpeed + noiseSeed
                    )
                )
            );
            vColor = mix(vColor,uColors[i], noise);
        };

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    }`,
  // fragment shader
  /*glsl*/ `
    uniform float uTime;
    varying vec3 vColor;
    // varying vec
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(vUv, 0.0 , 1.);
      gl_FragColor = vec4(vColor , 1.);
    }
  `
);

// declaratively
// extend({ LavaLampMaterial });
