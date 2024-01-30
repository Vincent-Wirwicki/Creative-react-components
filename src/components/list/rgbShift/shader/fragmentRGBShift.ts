export const fragmentRGBShift = /*glsl*/ `
 uniform sampler2D uTexture;
    uniform float uAlpha;
    uniform vec2 uOffset;
    varying vec2 vUv;

    vec3 rgbShift(sampler2D textureimage, vec2 uv, vec2 offset ){
        float r = texture2D(textureimage, uv + offset).r;
        vec2 gb = texture2D(textureimage, uv).gb;
        return vec3(r, gb);
    }

    void main(){
        vec2 uv = vUv;
        // float aspect = uTextureSize.x/uTextureSize.y;
        // uv.y*=aspect;
        vec3 color = rgbShift(uTexture, uv, uOffset);
        gl_FragColor = vec4(color, uAlpha);
    }
`;
