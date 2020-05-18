import React from "react";
import { render } from "react-dom";
import ServerStatus from "./components/ServerStatus"

const root = document.getElementById("root");

render(< ServerStatus />, root);

if (module.hot) {
  module.hot.accept();
}