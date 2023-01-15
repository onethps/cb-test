import { useEffect, useMemo, useState } from "react";

import _debounce from "lodash/debounce";

import { fetchPosts } from "../store/reducers/postsSlice/postsSlice";

import { useAppDispatch, useAppSelector } from "./redux-hooks";

export const useFetchPosts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);

  const [debouncedValue, setDebouncedValue] = useState("");

  const debounceQuery = useMemo(
    () => _debounce((val) => setDebouncedValue(val), 300),
    [],
  );

  useEffect(() => {
    dispatch(fetchPosts({ search: debouncedValue }));
  }, [debouncedValue]);

  return { isLoading, posts, debounceQuery };
};
