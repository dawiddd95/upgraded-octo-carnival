import { IPostListState } from '@redux/PostList/PostListInterfaces';
import { PostListActionUnion } from '@redux/PostList/PostListActions';
import produce from 'immer';
import { PostListTypes } from '@redux/PostList/PostListTypes';
import PostModel from '@models/Post/PostModel';

const initialState: IPostListState = {
  data: [],
  isLoading: false,
  isLoaded: false
};

function postListReducer(state = initialState, action: PostListActionUnion): IPostListState {
  return produce(state, (draft) => {
    switch (action.type) {
      case PostListTypes.POST_LIST: {
        draft.isLoading = true;
        break;
      }

      case PostListTypes.POST_LIST_SUCCESS: {
        draft.data = action.payload.data.map((item) => PostModel.build(item));
        draft.isLoading = false;
        draft.isLoaded = true;
        break;
      }

      case PostListTypes.POST_LIST_FAILURE: {
        draft.isLoading = false;
        break;
      }
    }
  });
}

export default postListReducer;
