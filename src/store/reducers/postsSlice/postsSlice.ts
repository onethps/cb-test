import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { postsAPI } from '../../../api/postsAPI';

import { IPost } from './types';

import { IPostsReducerState } from './types';

export const fetchPosts = createAsyncThunk<
  IPost[],
  { search: string },
  { rejectValue: string }
>('posts/fetchPostsData', async ({ search }) => {
  try {
    const response = await postsAPI.getPosts(search);
    return response.data.data;
  } catch (error) {
    throw new Error(error as string);
  }
});

const initialState = {
  posts: [],
  isLoading: true,
} as IPostsReducerState;

const { reducer, actions } = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.isLoading = false;
      })
      .addCase(fetchPosts.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const postsReducer = reducer;

export const postsActions = {
  ...actions,
};
