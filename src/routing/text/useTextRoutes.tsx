import { Route } from "react-router-dom";

import TextPage from "../../pages/Text/TextPage";
import TextSplitPage from "../../pages/Text/textSplit/TextSplitPage";

const useTextRoutes = () => {
  return (
    <Route path="/text" element={<TextPage />}>
      <Route path="/text/text-split" element={<TextSplitPage />} />
    </Route>
  );
};

export default useTextRoutes;
