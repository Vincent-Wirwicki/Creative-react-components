export const noisyVertex = /* glsl */ `
    uniform float uTime;
    varying vec3 vPosition;
    varying vec2 vUv;

    #define M_PI 3.14159265358979323846

    float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}
    float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}
    float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}

    float perlin(vec2 p, float dim, float time) {
    	vec2 pos = floor(p * dim);
    	vec2 posx = pos + vec2(1.0, 0.0);
    	vec2 posy = pos + vec2(0.0, 1.0);
    	vec2 posxy = pos + vec2(1.0);
    
    	float c = rand(pos, dim, time);
    	float cx = rand(posx, dim, time);
    	float cy = rand(posy, dim, time);
    	float cxy = rand(posxy, dim, time);
    
    	vec2 d = fract(p * dim);
    	d = -0.5 * cos(d * M_PI) + 0.5;
    
    	float ccx = mix(c, cx, d.x);
    	float cycxy = mix(cy, cxy, d.x);
    	float center = mix(ccx, cycxy, d.y);
    
    	return center * 2.0 - 1.0;
    }

    void main() {   
        vUv = uv;
        vec3 pos = position;
        vPosition = position;


        float radius = length(pos.xy);
        float angle = atan(pos.x, pos.y);

        vec3 target = vec3(cos(angle + uTime*5.), sin(angle + uTime*5.),0.) * radius;

        float noise = perlin(pos.xy *0.5, 5. ,5.);
        // pos.z = noise *0.5  ;
        pos = pos + noise * target.y *0.5 + noise * target.x *0.5;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1. );
    }

`;
