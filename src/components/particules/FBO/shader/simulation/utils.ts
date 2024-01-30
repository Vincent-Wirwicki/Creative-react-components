import { MathUtils, Vector3, Vector4 } from "three";

export const getPoint = (
  v: Vector3,
  size: number,
  data: Float32Array,
  offset: number
): Vector3 => {
  v.x = Math.random() * 2 - 1;
  v.y = Math.random() * 2 - 1;
  v.z = Math.random() * 2 - 1;
  if (v.length() > 1) return getPoint(v, size, data, offset);
  return v.normalize().multiplyScalar(size);
};

export const getSphere = (count: number, size: number) => {
  const data = new Float32Array(count * 4);
  const p = new Vector3();
  for (let i = 0; i < count * 4; i += 4) {
    getPoint(p, size, data, i);
    data[i] = p.x;
    data[i + 1] = p.y;
    data[i + 2] = p.z;
    // data[i + 3] = 1;
  }
  return data;
};

export const getRandomData = (width: number, height: number) => {
  // we need to create a vec4 since we're passing the positions to the fragment shader
  // data textures need to have 4 components, R, G, B, and A
  const length = width * height * 4;
  const data = new Float32Array(length);

  for (let i = 0; i < length; i++) {
    const stride = i * 4;

    const distance = Math.sqrt(Math.random()) * 0.5;
    const theta = MathUtils.randFloatSpread(360);
    const phi = MathUtils.randFloatSpread(360);

    data[stride] = distance * Math.sin(theta) * Math.cos(phi);
    data[stride + 1] = distance * Math.sin(theta) * Math.sin(phi);
    data[stride + 2] = distance * Math.cos(theta);
    data[stride + 3] = 1.0; // this value will not have any impact
  }

  return data;
};

const getTorusKnotPoint = (
  v: Vector3,
  size: number,
  p: number,
  q: number
): THREE.Vector3 => {
  const u = Math.random() * Math.PI * 2;
  const theta = Math.random() * Math.PI * 2;
  const r =
    size * 0.5 +
    size * 0.5 * Math.sin(q * u) +
    size * 0.5 * Math.sin(p * theta);

  v.x = r * Math.cos(u);
  v.y = r * Math.sin(u);
  v.z = size * 0.5 * Math.sin(p * theta);

  return v;
};

const getTorusKnot = (
  count: number,
  size: number,
  p: number,
  q: number
): Float32Array => {
  const len = count * 3;
  const data = new Float32Array(len);
  const pos = new Vector3();

  for (let i = 0; i < len; i += 3) {
    getTorusKnotPoint(p, size, p, q);
    data[i] = pos.x;
    data[i + 1] = pos.y;
    data[i + 2] = pos.z;
  }

  return data;
};
