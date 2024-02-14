export const defaultFragment = /* glsl */ `
    
    uniform float uTime;
    varying vec3 vPosition;
    varying vec2 vUv;

    #define M_PI 3.14159265358979323846

    void main() {
        vec2 uv = vUv;
        vec3 color = vec3(1.);

        vec2 g1 = step(vec2(0.125), uv);
        float gF1 = g1.y - g1.x;

        vec2 g2 = step(vec2(0.25), uv);
        float gF2 = g2.y - g2.x;

        vec2 g3 = step(vec2(0.5), uv);
        float gF3 = g3.y - g3.x;

        vec2 g4 = step(vec2(.75), uv);
        float gF4 = g4.y - g4.x;

        // vec2 subGrid = step(0.25, grid - 0.5);
        float v1 = gF1 * gF3 * 1.- gF1 - 1.- gF3;
        // float v2 = gF2 * gF3 * 1.- gF2 * 1.- gF3;
        float v2 = gF4 * gF3 + gF3 * gF3;
        float v3 = gF2 * gF4 + 1.- gF2 - 1.- gF4;

        // color = vec3(v1, v2 , v3);1.-v3,v2
        // color = vec3(v2 - v3, v3 * v2, v3 );


        // vec2 sCenter = step(vec2(0.25), uv);
        // float gF2 = g2.y - g2.x;

        //white square
        float topLeft = g3.y * 1.- g3.x;
        float topRight = g3.y * g3.x;
        float bottomLeft = 1.-g3.y * 1.- g3.x;
        float bottomRight = 1.-g3.y / g3.x;




        color = vec3((g3 ,.5 ) );
        gl_FragColor = vec4(color,1.);

    }
`;
