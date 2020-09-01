import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ConvertText from "./pages/ConvertText";
import BinaryTranslater from "./pages/BinaryTranslater";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ConvertText} />
      <Route path="/binary-translator" component={BinaryTranslater} />
    </BrowserRouter>
  );
}

export default Routes;
