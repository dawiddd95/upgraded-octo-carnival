import produce from 'immer';
import { IPostCommentListState } from '@redux/PostCommentList/PostCommentListInterfaces';
import { PostCommentListActionUnion } from '@redux/PostCommentList/PostCommentListActions';
import { PostCommentListTypes } from '@redux/PostCommentList/PostCommentListTypes';
import PostCommentModel from '@models/PostComment/PostCommentModel';

const initialState: IPostCommentListState = {
  data: [],
  isLoading: false,
  isLoaded: false
};

function postCommentListReducer(state = initialState, action: PostCommentListActionUnion): IPostCommentListState {
  return produce(state, (draft) => {
    switch (action.type) {
      case PostCommentListTypes.POST_COMMENT_LIST: {
        draft.isLoading = true;
        break;
      }

      case PostCommentListTypes.POST_COMMENT_LIST_SUCCESS: {
        console.log('asdasd');
        draft.data = action.payload.data.map((item) => PostCommentModel.build(item));
        draft.isLoading = false;
        draft.isLoaded = true;
        break;
      }

      case PostCommentListTypes.POST_COMMENT_LIST_FAILURE: {
        draft.isLoading = false;
        break;
      }
    }
  });
}

export default postCommentListReducer;
