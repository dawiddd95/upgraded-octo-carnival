import {IPostCommentModel} from "@models/PostComment/PostCommentModel";

export interface IPostCommentListOwnState {
  postCommentList: IPostCommentListState;
}

export interface IPostCommentListState {
  data: IPostCommentModel[];
  isLoading: boolean;
  isLoaded: boolean;
}
