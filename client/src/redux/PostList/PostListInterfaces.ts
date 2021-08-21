import { IPostModel } from '@models/Post/PostModel';

export interface IPostListOwnState {
  postList: IPostListState;
}

export interface IPostListState {
  data: IPostModel[];
  isLoading: boolean;
  isLoaded: boolean;
}
