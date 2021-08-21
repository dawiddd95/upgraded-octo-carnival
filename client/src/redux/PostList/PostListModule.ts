import postListReducer from '@redux/PostList/PostListReducer';
import postListSaga from '@redux/PostList/PostListSaga';

const PostListModule = {
  id: 'postList',
  reducerMap: {
    postList: postListReducer
  },
  sagas: [postListSaga]
};

export default PostListModule;
