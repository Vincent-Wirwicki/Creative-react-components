export const basicImgDisplaceFragment = /* glsl */ `

    uniform float uTime;
    uniform sampler2D uTexture;
    uniform vec3 uResolution;
    varying vec3 vPosition;
    varying vec2 vUv;
    varying float vNoise;

    void main(){
        // vec2 newUV = (vUv - vec2(0.5))*uResolution.xy + vec2(0.5);

        float colorShift = vNoise *0.25;

        float red = texture2D(uTexture, vUv).r;
        float green = texture2D(uTexture, vUv + colorShift).g;
        float blue = texture2D(uTexture, vUv + colorShift).b;

        vec3 texture = vec3(red, green, blue);
        gl_FragColor = vec4(texture, 1.);
    }

`;
