import { IPost } from "../postsSlice/types";

export interface IPostReducerState {
  post: Omit<IPost, "uuid"> | null;
  isLoading: boolean;
}
