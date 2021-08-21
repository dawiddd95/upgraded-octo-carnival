import { ActionUnion, createAction } from '@helpers/ActionHelper';
import { PostCommentListTypes } from '@redux/PostCommentList/PostCommentListTypes';
import { IPostCommentModelDTO } from '@models/PostComment/PostCommentModel';

export const PostCommentListAction = {
  postCommentList: (id: number) => createAction(PostCommentListTypes.POST_COMMENT_LIST, { id }),
  postCommentListSuccess: (data: IPostCommentModelDTO[]) =>
    createAction(PostCommentListTypes.POST_COMMENT_LIST_SUCCESS, { data }),
  postCommentListFailure: () => createAction(PostCommentListTypes.POST_COMMENT_LIST_FAILURE)
};

export type PostCommentListActionUnion = ActionUnion<typeof PostCommentListAction>;
