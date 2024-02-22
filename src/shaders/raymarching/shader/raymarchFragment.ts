// code from https://www.youtube.com/watch?v=PGtv-dBi2wE

export const raymarchFragment = /* glsl */ `
     
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    #define MAX_STEPS 64
    #define MAX_DIST 100.0
    #define SURF_DIST 0.01
    #define M_PI 3.14159265
    
    float sdSphere(vec3 p, float r){
        return length(p) - r;
    }
    float sdBox( vec3 p, vec3 b ){
        vec3 q = abs(p) - b;
        return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
    }

    float smoothmin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b-a)/k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
    }

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

    float sdScene(vec3 pos){
        // float d = sdSphere(pos-vec3(0.0, 0.0, 1.0), 3.0);
        // float time = sin(time) + cos(uTime);
        float radius = 0.15;
        float noisy = noise(pos.zyy  + uTime *0.5);
        float noisy2 = noise(vec3(pos.yyx + uTime *0.25));

        float sphere =  sdSphere(pos + vec3(1. -cos(noisy2 *1.75 ),1.- sin(noisy * 1.75), 0. ), radius);

        float sphere2 = sdSphere(pos + vec3(cos(noisy *2.25), sin(2.25 * noisy2), 0.), radius);

        float sphere3 = sdSphere(pos + vec3(cos(noisy2 * 2.),sin(noisy *2.), 0.),radius); 

        float sphere4 = sdSphere(pos + vec3(1.-cos(noisy *2.5),1.- sin(noisy2 *2.5), 0.), radius);

        float render1 = smoothmin(sphere, sphere2 , 0.8);
        float render2 = smoothmin(sphere3, sphere4, 0.8);
        float render3 = smoothmin(render1, render2, 0.8);

        render1 += noisy * 0.5; 
        render2 += noisy2 * 0.5;

        return render3;
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

    float softshadow( in vec3 ro, in vec3 rd, float mint, float maxt, float w ) {
        float res = 1.0;
        float t = mint;
        for( int i=0; i<256 && t<maxt; i++ )
        {
            float h = sdScene(ro + t*rd);
            res = min( res, h/(w*t) );
            t += clamp(h, 0.005, 0.50);
            if( res<-1.0 || t>maxt ) break;
        }
        res = max(res,-1.0);
        return 0.25*(1.0+res)*(1.0+res)*(2.0-res);
    }

    vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ){
        return a + b*cos( 6.28318*(c*t+d) );
    }

    void main() {
        // normalize plane cord
        vec2 newUv = (gl_FragCoord.xy/uResolution.xy);
        newUv -= 0.5;
        newUv.x *= uResolution.x / uResolution.y;

        // ray origin = camera position
        vec3 rayOrigin = vec3(-0.5,-1.,2.);
        vec3 rayDir = normalize(vec3(newUv,-.5));

        float dist = raymarch(rayOrigin, rayDir);
        vec3 p = rayOrigin + rayDir * dist;

        vec3 lightPosition = vec3(abs(cos(uTime*0.5)) + 10.,  abs(sin(uTime*0.5)) +10.,15.0);
        // vec3 lightPosition = vec3(cos(uTime * .5 + 10.),sin(uTime * .5 + 5.),0.5);
        // vec3 lightPosition = vec3(0.,15.,20.);


        vec3 color = vec3(0., 0., 0.);

        if(dist < MAX_DIST){ 

            float diffuse = addLights(p, lightPosition);
            float shadows = softshadow(rayOrigin, p, 0.1,5.,50.);
            float n = noise(p + sin(uTime) * cos(uTime));
            float test = diffuse * shadows * n;
            vec3 color1 = palette(n + shadows, vec3(1.,0.,0.), vec3(.0), vec3(.5), vec3(0.5, 0., 0.));
            color = vec3(color1) *diffuse * shadows  ;
        };


        gl_FragColor = vec4(color,1.);

    }
`;

// float sphere =  sdSphere(pos + vec3(noisy *2., 0.,1.- noisy ), radius);

// float sphere2 = sdSphere(pos + vec3(noisy, 0.15 * noisy, 0.), radius);

// float sphere3 = sdSphere(pos + vec3(noisy * noisy - 0.156, 0.15 + noisy, 0.),radius);

// float sphere4 = sdSphere(pos + vec3(noisy,0., noisy + noisy), radius);

// float mNoise = mix(pos.y, noisyY, 0.1);
// float sphere =  sdSphere(pos - vec3(cos(uTime*0.5)*0.742, sin(uTime *.5), 0.), 0.15);
// float sphere2 = sdSphere(pos - vec3(1.-cos(uTime*0.5)*.124, 1.-sin(uTime *.5),0.), 0.15);
// float sphere3 = sdSphere(pos - vec3(sin(uTime*.5 )*0.895, cos(uTime *.5), 0.), 0.15);
// float sphere4 = sdSphere(pos - vec3(1.-cos(uTime*0.5) + 0.217, 1.-cos(uTime *.5),0.), 0.15);
// float sphere5 = sdSphere(pos - vec3(cos(uTime*0.5),0.,0.), 0.2);
