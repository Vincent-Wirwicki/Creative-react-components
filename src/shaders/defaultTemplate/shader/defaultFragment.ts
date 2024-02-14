export const defaultFragment = /* glsl */ `
    
    uniform float uTime;
    varying vec3 vPosition;
    varying vec2 vUv;

    #define M_PI 3.14159265358979323846

    void main() {
        vec2 uv = vUv;
        vec3 color = vec3(1.);
        vec2 toCenter = vec2(0.5) - uv;
        float dist = length(toCenter);
        vec2 a = abs(toCenter.xy);
        float m = max(a.y, a.x);

        vec2 p1 = step(0.1,uv);
        float p2 = step(p1.x,p1.y);

        // float s = max(a.x, b.y);


        color = vec3(step(0.1,m)*step(m,0.2));
        color = vec3(p2.x,p2.y,1.);
        gl_FragColor = vec4(color,1.);

    }
`;
