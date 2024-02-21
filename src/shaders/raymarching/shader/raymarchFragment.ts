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
    float sdBox( vec3 p, vec3 b ){
        vec3 q = abs(p) - b;
        return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
    }

    float sdScene(vec3 pos){
        // float d = sdSphere(pos-vec3(0.0, 0.0, 1.0), 3.0);
        vec3 p1 = pos - vec3(0.0, sin(uTime) * 0.5, 1.0);

        // float render = sdBoxFrame(pos,vec3(0.5,0.3,0.5), 0.025 );
        float sphere = sdSphere(pos-vec3(0.5),0.075);
        float box = sdBox(pos - vec3(0.5), vec3(0.075));
        float render = min(box, sphere);

        return render;
    }

    // RO = Ray Origin - RD = Ray Direction
    float raymarch(vec3 ro, vec3 rd){
        //dist from origin
        float dO = 0.;
        
        for(int i = 0; i < MAX_STEPS; i++) {
            
            //Ray position = Ray Origin + Ray Direction * Dist from origin
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

    vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

    void main() {
        // normalize plane cord
        vec2 newUv = (gl_FragCoord.xy/uResolution.xy);
        newUv -= 0.5;
        newUv.x *= uResolution.x / uResolution.y;

        vec3 rayOrigin = vec3(0.,0.,2.);
        vec3 rayDir = normalize(vec3(newUv,-.5));

        float dist = raymarch(rayOrigin, rayDir);
        vec3 p = rayOrigin + rayDir * dist;

        // vec3 rayPos = camPos;
        // vec3 lightPosition = vec3(-10.0 * cos(uTime), 10.0, 10.0 * sin(uTime));
        vec3 lightPosition = vec3(0.75);

        vec3 color = vec3(0.);
        if(dist < MAX_DIST){ 

            float diffuse = addLights(p, lightPosition);
            vec3 color1 = palette(diffuse, vec3(0.2), vec3(0.5), vec3(1.), vec3(0.5,0.2,0.25));
            color = vec3(1.0, 1.0, 1.0) * color1  ;
        };


        gl_FragColor = vec4(color,1.);

    }
`;
