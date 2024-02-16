import { textPaths } from "./text/useTextRoutes";

export const navPaths = [
  {
    main: { path: "/cursors/lerp", title: "Cursors" },
    sub: [
      { path: "/cursors/lerp", title: "lerp" },
      { path: "/cursors/image-trail", title: "img trial" },
    ],
  },
  { ...textPaths },
  {
    main: { path: "/buttons", title: "Buttons" },
    sub: [{ path: "/buttons/magnetic", title: "Magnetic" }],
  },
  {
    main: { path: "/list", title: "List " },
    sub: [
      { path: "/list/imageTranslate", title: "translate" },
      { path: "/list/imageRgbShift", title: "RGB Shift" },
    ],
  },
  {
    main: { path: "/particules", title: "Particules" },
    sub: [
      { path: "/particules/constellation", title: "Cloud" },
      { path: "/particules/mousemove", title: "On move" },
      { path: "/particules/FBO", title: "FBO" },
      { path: "/particules/terrain", title: "Terrain" },
    ],
  },
  {
    main: { path: "/shaders/lavaLamp", title: "Shaders" },
    sub: [
      { path: "/shaders/lavaLamp", title: "Lava lamp" },
      { path: "/shaders/noise", title: "Noisy" },
    ],
  },
];
