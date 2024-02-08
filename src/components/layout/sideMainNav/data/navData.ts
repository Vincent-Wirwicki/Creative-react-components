export type NavType = {
  path: string;
  title: string;
};

export type NavDataType = {
  main: NavType;
  sub?: NavType[];
};

export const navData: NavDataType[] = [
  {
    main: { path: "/cursors/lerp", title: "Cursors" },
    sub: [
      { path: "/cursors/lerp", title: "lerp cursor" },
      { path: "/cursors/image-trail", title: "img trial" },
    ],
  },
  // { path: "/navbars", title: "Nav" },
  {
    main: { path: "/text", title: "Text" },
    sub: [{ path: "/text/text-split", title: "Text split" }],
  },
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
      // { path: "/shaders/noise", title: "Noisy env" },
    ],
  },
];
// /list/IPaeeegimmrt;
