export const noisyFragment = /*glsl*/ `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;
    varying vec3 vPosition;
    varying vec2 vUv;


    // -- noise function start --
    float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

    float noise(vec3 p){
      vec3 a = floor(p);
      vec3 d = p - a;
      d = d * d * (3.0 - 2.0 * d);

      vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
      vec4 k1 = perm(b.xyxy);
      vec4 k2 = perm(k1.xyxy + b.zzww);

      vec4 c = k2 + a.zzzz;
      vec4 k3 = perm(c);
      vec4 k4 = perm(c + 1.0);

      vec4 o1 = fract(k3 * (1.0 / 41.0));
      vec4 o2 = fract(k4 * (1.0 / 41.0));

      vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
      vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

      return o4.y * d.y + o4.x * (1.0 - d.y);
    } 
    // -- noise function end --

    // float lines (vec2 uv, float numOfLines) {
    //     return abs(sin(uv.x*numOfLines));
    // }

    float lines(vec2 uv, float numOfLines, float offset){
        return smoothstep(0., .8 + offset * .8,
           abs(.8*sin(uv.x*numOfLines) + offset * 2.) );
    }

    mat2 rotate2D (float angle){
        return mat2(
            cos(angle),-sin(angle),
            sin(angle), cos(angle)
        );
    }

    void main() {
        // float n = noise(vPosition + uTime);
        // vec2 baseUV = vPosition.xy;
        // gl_FragColor = vec4(n,0.,0.,1.);

        // vec3 color1 = vec3(0.878, 0.58, 0.286);
        // vec3 color2 = vec3(0.233,0.365,0.274);

        float n = noise(vPosition + uTime);
        
        vec2 baseUV = rotate2D(n) * vPosition.xy * 1.;
        float numOfLines = 30.;

        float firstPattern = lines(baseUV, numOfLines, .5);
        float secondPattern = lines(baseUV, numOfLines, .1);

        vec3 firstColor = mix(uColorA, uColorB, firstPattern );
        vec3 secondColor = mix(firstColor, uColorC, secondPattern);

        gl_FragColor = vec4(vec3(secondColor),1.);
    }
  `;
