import postCommentListReducer from '@redux/PostCommentList/PostCommentListReducer';
import postCommentListSaga from '@redux/PostCommentList/PostCommentListSaga';

const PostCommentListModule = {
  id: 'postCommentList',
  reducerMap: {
    postCommentList: postCommentListReducer
  },
  sagas: [postCommentListSaga]
};

export default PostCommentListModule;
