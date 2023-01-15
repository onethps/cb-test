import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { postsAPI } from "../../../api/postsAPI";
import { IPost } from "../postsSlice/types";

import { IPostReducerState } from "./types";

export const fetchPost = createAsyncThunk<
  IPost,
  { postId: string },
  { rejectValue: string }
>("posts/fetchOnePost", async ({ postId }) => {
  try {
    const response = await postsAPI.getPostById(postId);
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
});

const initialState = {
  post: null,
  isLoading: true,
} as IPostReducerState;

const { reducer, actions } = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPost.fulfilled, (state, { payload }) => {
        state.post = payload;
        state.isLoading = false;
      })
      .addCase(fetchPost.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchPost.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const postReducer = reducer;

export const postActions = {
  ...actions,
};
