import { combineReducers } from '@reduxjs/toolkit';

import { postReducer } from './postSlice/postSlice';
import { postsReducer } from './postsSlice/postsSlice';


const rootSlice = combineReducers({
  posts: postsReducer,
  post: postReducer,
});

export default rootSlice;