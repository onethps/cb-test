import { useEffect } from "react";

import { fetchPost } from "../store/reducers/postSlice/postSlice";

import { useAppDispatch, useAppSelector } from "./redux-hooks";

export const useFetchPost = (postId?: string) => {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.post.post);
  const isLoading = useAppSelector((state) => state.post.isLoading);

  useEffect(() => {
    if (postId) {
      dispatch(fetchPost({ postId }));
    }
  }, []);

  return { isLoading, post };
};
