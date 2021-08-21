import produce from 'immer';
import PostModel from '@models/Post/PostModel';
import { IPostState } from '@redux/Post/PostInterfaces';
import { PostActionUnion } from '@redux/Post/PostActions';
import { PostTypes } from '@redux/Post/PostTypes';

const initialState: IPostState = {
  data: undefined,
  isLoading: false,
  isLoaded: false
};

function postReducer(state = initialState, action: PostActionUnion): IPostState {
  return produce(state, (draft) => {
    switch (action.type) {
      case PostTypes.POST: {
        draft.isLoading = true;
        break;
      }

      case PostTypes.POST_SUCCESS: {
        draft.data = PostModel.build(action.payload.data);
        draft.isLoading = false;
        draft.isLoaded = true;
        break;
      }

      case PostTypes.POST_FAILURE: {
        draft.isLoading = false;
        break;
      }
    }
  });
}

export default postReducer;
