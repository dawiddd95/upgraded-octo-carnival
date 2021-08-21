import postReducer from '@redux/Post/PostReducer';
import postSaga from '@redux/Post/PostSaga';

const PostModule = {
  id: 'post',
  reducerMap: {
    post: postReducer
  },
  sagas: [postSaga]
};

export default PostModule;
