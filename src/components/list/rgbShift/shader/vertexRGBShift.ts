export const vertexRGBShift = /*glsl*/ `
    uniform sampler2D uTexture;
    uniform vec2 uOffset;
    varying vec2 vUv;
    float M_PI = 3.141529;
    vec3 deformation(vec3 position, vec2 uv, vec2 uOffset){
        position.x = position.x + (sin(uv.y * M_PI) * uOffset.x);
        position.y = position.y + (sin(uv.x * M_PI) * uOffset.y);
        return position;
    }

    void main(){
        vUv = uv;
        vec3 newPosition = deformation(position, uv, uOffset);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`;
