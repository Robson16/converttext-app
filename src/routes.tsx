import React from "react";
import { HashRouter, Route } from "react-router-dom";

import ConvertText from "./pages/ConvertText";
import BinaryTranslater from "./pages/BinaryTranslater";

function Routes() {
  return (
    <HashRouter>
      <Route path="/" exact component={ConvertText} />
      <Route path="/binary-translator" component={BinaryTranslater} />
    </HashRouter>
  );
}

export default Routes;
