import { ActionUnion, createAction } from '@helpers/ActionHelper';
import { IPostModelDTO } from '@models/Post/PostModel';
import { PostTypes } from '@redux/Post/PostTypes';

export const PostAction = {
  post: (id: string) => createAction(PostTypes.POST, { id }),
  postSuccess: (data: IPostModelDTO) => createAction(PostTypes.POST_SUCCESS, { data }),
  postFailure: () => createAction(PostTypes.POST_FAILURE),
};

export type PostActionUnion = ActionUnion<typeof PostAction>;
