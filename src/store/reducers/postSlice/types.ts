import { IPost } from '../postsSlice/types';

export interface IPostReducerState {
post: Pick<IPost, 'title' | 'description'> | null
isLoading:boolean
}