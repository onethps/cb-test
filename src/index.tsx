import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { CssBaseline } from "@mui/material";

import { RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import { store } from "./store/store";
import { routes } from "./_app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={store}>
    <CssBaseline />
    <RouterProvider router={routes} />
  </Provider>,
);

reportWebVitals();
