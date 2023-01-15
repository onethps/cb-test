import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React from "react";

import { HomePage } from "./pages/HomePage";
import { PostPage } from "./pages/PostPage";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/:postId"} element={<PostPage />} />
      <Route path={"*"} element={<div>not found page</div>} />
    </>,
  ),
);
