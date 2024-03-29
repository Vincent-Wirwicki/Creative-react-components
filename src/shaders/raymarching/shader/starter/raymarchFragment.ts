// code from https://www.youtube.com/watch?v=PGtv-dBi2wE

export const raymarchFragment = /* glsl */ `
     
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    #define MAX_STEPS 64
    #define MAX_DIST 100.0
    #define SURF_DIST 0.01
    
    float sdSphere(vec3 p, float r){
        return length(p) - r;
    }

    float sdTorus( vec3 p, vec2 t ){
        vec2 q = vec2(length(p.xz)-t.x,p.y);
        return length(q)-t.y;
    }

    float sdScene(vec3 pos){
        // float d = sdSphere(pos-vec3(0.0, 0.0, 1.0), 3.0);

        float plane = pos.y +1.;
        float s1 = sdSphere(pos - vec3(sin(uTime) * .1,0.1,0.2), 0.2);
        float s2 = sdSphere(pos - vec3(0.1,sin(uTime) * .1,0.2), 0.2);
        float dist = min(s1, s2);
        float dist2 = min(plane, dist);
        return dist2;
    }

    // RO = Ray Origin - RD = Ray Direction
    float raymarch(vec3 ro, vec3 rd){
        //dist from origin
        float dO = 0.;
        
        for(int i = 0; i < MAX_STEPS; i++) {
            
            //progress = Ray Origin + Ray Direction * Dist from origin
            vec3 p = ro + rd * dO;
            
            float dS = sdScene(p);
            
            dO += dS;

            if(dO > MAX_DIST || dS < SURF_DIST) break;
        
        }
        return dO;
    }



    vec3 getNormal(vec3 p) {
        vec2 e = vec2(.01, 0);
        vec3 n = sdScene(p) - vec3(
            sdScene(p-e.xyy),
            sdScene(p-e.yxy),
            sdScene(p-e.yyx));
        return normalize(n);
    }

    float addLights (vec3 p, vec3 lightPos){
        vec3 nLight = normalize(lightPos - p);
        vec3 nPos = getNormal(p);
        float diffuseLight = max(dot(nPos, nLight),0.);
        return diffuseLight;

    }

    void main() {
        // normalize plane cord
        vec2 newUv = (gl_FragCoord.xy/uResolution.xy);
        newUv -= 0.5;
        newUv.x *= uResolution.x / uResolution.y;

        vec3 rayOrigin = vec3(0.,0.,1.);
        vec3 rayDir = normalize(vec3(newUv,-.5));

        float dist = raymarch(rayOrigin, rayDir);
        vec3 p = rayOrigin + rayDir * dist;

        // vec3 rayPos = camPos;
        // vec3 lightPosition = vec3(-10.0 * cos(uTime), 10.0, 10.0 * sin(uTime));
        vec3 lightPosition = vec3(0.5);

        vec3 color = vec3(0.);
        if(dist < MAX_DIST){ 

            float diffuse = addLights(p, lightPosition);
            color = vec3(1.0, 1.0, 1.0) * diffuse  ;
        };


        gl_FragColor = vec4(color,1.);

    }
`;
