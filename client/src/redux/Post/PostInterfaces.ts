import { IPostModel } from '@models/Post/PostModel';

export interface IPostOwnState {
  post: IPostState;
}

export interface IPostState {
  data: IPostModel | undefined;
  isLoading: boolean;
  isLoaded: boolean;
}
