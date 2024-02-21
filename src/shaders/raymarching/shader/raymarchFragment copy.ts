// code from https://www.youtube.com/watch?v=PGtv-dBi2wE

export const raymarchFragment = /* glsl */ `
     
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;
    
    #define MAX_STEPS 100
    #define MAX_DIST 100.
    #define SURF_DIST 0.01


    // float sdSphere( vec3 p, float s ){
    //     return length(p)-s;
    // }

    // float scene(vec3 p){
    //     return sdSphere(p,1.);
    // }



    float getDist(vec3 p){
        vec4 sphere = vec4(0,1,6,1);
        float sphereDist = length(p - sphere.xyz) - sphere.w;
        float planeDist = p.y;
        float dist = min(sphereDist, planeDist);
        return dist;
    }

    vec3 getNormal(vec3 p){
        float d = getDist(p);
        vec2 e = vec2(0.1,0.);
        vec3 n = d - vec3(
            getDist(p - e.xyy),
            getDist(p - e.yxy),
            getDist(p - e.yyx)
        );
        return normalize(n);
    }



    float rayMarch(vec3 rayOrigin, vec3 rayDirection){
        float distToOrigin = 0.;
        
        for(int i =0; i<MAX_STEPS; i++){
            vec3 pos = rayOrigin + rayDirection * distToOrigin;
            float distInScene = getDist(pos);
            
            distToOrigin += distInScene;
            
            if(distToOrigin > MAX_DIST || distToOrigin < SURF_DIST) break;
        }
        return distToOrigin;
    }


    float getLight(vec3 p){
        vec3 lightPos = vec3(0,5,6);
        lightPos.xy += vec2(sin(uTime), cos(uTime));
        vec3 light = normalize(lightPos - p);
        vec3 normalPos = getNormal(p);

        float diffuseLight = dot(normalPos,light);
        float rayShadow = rayMarch(p + normalPos*SURF_DIST *5., light);
        if(rayShadow<length(lightPos - p)) diffuseLight *= 0.1;

        return diffuseLight;

    }

    void main() {
        // vec2 newUv = (vUv - vec2(0.5)) * uResolution.xy + vec2(0.5);
        // vec2 p = newUv - vec2(0.5);

        vec2 newUv =  (gl_FragCoord.xy - vec2(0.5) * uResolution.xy)/uResolution.y;
       
        
        vec3 color = vec3(1.);

        vec3 rayOrigin = vec3(0.,1.0,0.);
        vec3 rayDir = normalize(vec3(newUv.x, newUv.y, 1.));
        
        float d = rayMarch(rayOrigin, rayDir);
        vec3 p = rayOrigin + rayDir * d;
        float diffuseLight = getLight(p);
        
        color = vec3(diffuseLight);

        // color = getNormal(p);



        gl_FragColor = vec4(color,1.);

    }
`;
