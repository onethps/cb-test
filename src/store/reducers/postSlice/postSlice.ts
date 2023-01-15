import { createSlice } from '@reduxjs/toolkit';

import { IPostReducerState } from './types';


const initialState = {
  post: null,
  isLoading: true,
} as IPostReducerState;

const {reducer, actions} = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {},
});


export const postReducer = reducer;

export const postActions = {
  ...actions,
};