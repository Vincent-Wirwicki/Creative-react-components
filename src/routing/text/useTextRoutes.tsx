import { Route } from "react-router-dom";

import TextPage from "../../pages/Text/TextPage";
import TextSplitPage from "../../pages/Text/textSplit/TextSplitPage";
import TextGlitchedPage from "../../pages/Text/wip/TextGlitchedPage";

export const textPaths = {
  main: { path: "/text", title: "Text" },
  sub: [
    { path: "/text/text-split", title: "Text split" },
    { path: "/text/glitched-wip", title: "glitch wip" },
  ],
};

const useTextRoutes = () => {
  return (
    <Route path="/text" element={<TextPage />}>
      <Route path="/text/text-split" element={<TextSplitPage />} />
      <Route path="/text/glitched-wip" element={<TextGlitchedPage />} />
    </Route>
  );
};

export default useTextRoutes;
