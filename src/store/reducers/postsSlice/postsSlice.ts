import { createSlice } from '@reduxjs/toolkit';

import { IPostsReducerState } from './types';

const initialState = {
  posts: null,
  isLoading: true,
} as IPostsReducerState;

const {reducer, actions} = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});


export const postsReducer = reducer;

export const postsActions = {
  ...actions,
};