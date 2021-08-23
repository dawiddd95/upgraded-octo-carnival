import * as React from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IPostCommentModel } from '@models/PostComment/PostCommentModel';
import { IPostCommentListOwnState, IPostCommentListState } from '@redux/PostCommentList/PostCommentListInterfaces';
import { PostCommentListAction } from '@redux/PostCommentList/PostCommentListActions';
import { IPostOwnState } from '@redux/Post/PostInterfaces';
import Loader from '@atoms/Loader/Loader';
import PostCommentItem from '@molecules/PostCommentItem/PostCommentItem';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 40px 0;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.themeColors.textColor1};
  cursor: pointer;
  font-size: 17px;
`;

interface IProps extends IPostCommentListState {
  postId: number;
}

const PostCommentList = ({ postId, data, isLoading }: IProps): React.ReactElement => {
  const [showComments, setShowComments] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const loadCommentListData = React.useCallback(() => {
    dispatch(PostCommentListAction.postCommentList(postId));
  }, [dispatch, postId]);

  React.useEffect(() => {
    if (showComments) {
      loadCommentListData();
    }
  }, [showComments, loadCommentListData]);


  const renderCommentList = (commentList: IPostCommentModel[]): JSX.Element[] =>
    commentList.map((item) => <PostCommentItem comment={item} />);

  const toggleCommentsView = () => {
    setShowComments((state) => !state);
  };

  return (
    <>
      <ButtonsContainer>
        <Button onClick={() => toggleCommentsView()}>{showComments ? 'Hide comments' : 'Show comments'}</Button>
      </ButtonsContainer>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {showComments && <div>{renderCommentList(data)}</div>}
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ postCommentList, post }: IPostCommentListOwnState & IPostOwnState) => ({
  postId: post.data?.id,
  ...postCommentList
});

export default compose<React.ComponentType>(connect(mapStateToProps))(PostCommentList);
