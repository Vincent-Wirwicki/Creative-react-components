import { proxy } from "valtio";

export const store = proxy({
  isHover: false,
  handleCursorEnter: () => (store.isHover = true),
  handleCursorLeave: () => (store.isHover = false),
});
