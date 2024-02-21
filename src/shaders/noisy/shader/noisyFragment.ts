export const noisyFragment = /* glsl */ `

    uniform float uTime;

    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vTarget;
    varying float vNoise;


    #define M_PI 3.14159265358979323846

    float getColor (float t ){
        return 0.5 + 0.5*cos( 6.28318*(1.*t+0.25) );
    }

    void main() {
        vec3 pos = vPosition;
        
        vec3 target = vTarget;
        float noise = vNoise;
        float len = length(vNoise);

        float dist = length(pos.xy);

        float sx = smoothstep(-10., 10.,target.x );
        float sy = smoothstep(-10., 10.,target.y);

        vec3 color = vec3(0.25, .5, .25);
        // color = vec3(0.);
        float c = getColor(dist);

        color.g *= noise * sx*2. +noise ;
        color.b *= noise * sy*2. +noise ;
        // color.r += noise *sx *4.;
        
        gl_FragColor = vec4(color ,1.-noise *2.);

    }

`;
// vec4(1. - target.y * target.x, 1.,1.,1.); (pos.z +1.)*0.5
// vec4(sin(sy * uTime *2.), cos(sx * uTime*2.), 0.5,1.);
