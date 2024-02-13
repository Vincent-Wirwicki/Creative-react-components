export const noisyFragment = /* glsl */ `

    uniform float uTime;

    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vTarget;
    varying float vNoise;


    #define M_PI 3.14159265358979323846

    void main() {
        vec3 pos = vPosition;

        vec3 target = vTarget;
        float noise = vNoise;

        float sx = smoothstep(-10., 10.,target.x );
        float sy = smoothstep(-10., 10.,target.y);

        vec3 color = vec3(0.5, .25, .5);

        color.g *= noise * sx *5.;
        color.r *= noise * sy *5.;
        // color.b = noise;

        gl_FragColor = vec4(color ,1.);

    }

`;
// vec4(1. - target.y * target.x, 1.,1.,1.); (pos.z +1.)*0.5
// vec4(sin(sy * uTime *2.), cos(sx * uTime*2.), 0.5,1.);
