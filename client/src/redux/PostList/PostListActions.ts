import { ActionUnion, createAction } from '@helpers/ActionHelper';
import { PostListTypes } from '@redux/PostList/PostListTypes';
import { IPostModelDTO } from '@models/Post/PostModel';

export const PostListAction = {
  postList: (id: string) => createAction(PostListTypes.POST_LIST, { id }),
  postListSuccess: (data: IPostModelDTO[]) => createAction(PostListTypes.POST_LIST_SUCCESS, { data }),
  postListFailure: () => createAction(PostListTypes.POST_LIST_FAILURE)
};

export type PostListActionUnion = ActionUnion<typeof PostListAction>;
