import * as React from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IPostOwnState } from '@redux/Post/PostInterfaces';
import { PostAction } from '@redux/Post/PostActions';
import { IUserOwnState } from '@redux/User/UserInterfaces';
import { IUserModel } from '@models/User/UserModel';
import styled from 'styled-components';
import { IPostCommentListOwnState } from '@redux/PostCommentList/PostCommentListInterfaces';
import PostCommentList from '@organisms/PostCommentList/PostCommentList';
import Loader from '@atoms/Loader/Loader';
import { UserAction } from '@redux/User/UserActions';
import { IPostModel } from '@models/Post/PostModel';

const PostContainer = styled.div`
  padding: 50px 100px 0 100px;
`;

const PostTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.themeColors.textColor3};
`;

const PostBody = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.themeColors.textColor3};
`;

interface RouteParams {
  userId: string;
  postId: string;
}

interface IProps extends RouteComponentProps<RouteParams> {
  post: IPostModel;
  user: IUserModel;
  isLoading: boolean;
  isLoaded: boolean;
}

const PostDetails = ({ history, match, isLoading, isLoaded, user, post }: IProps): React.ReactElement => {
  const dispatch = useDispatch();

  const loadPostData = React.useCallback(() => {
    const { params } = match;

    dispatch(PostAction.post(params.postId));
  }, [match, dispatch]);

  const loadUserData = React.useCallback(() => {
    const { params } = match;

    dispatch(UserAction.user(params.userId));
  }, [match, dispatch]);

  React.useEffect(() => {
    loadPostData();
  }, [loadPostData]);

  React.useEffect(() => {
    if (!user) {
      loadUserData();
    }
  }, [user, loadUserData]);

  return (
    <>
      {(isLoading || !isLoaded) ? (
        <Loader />
      ) : (
        <>
          <PostContainer>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
            <PostCommentList />
          </PostContainer>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ user, post }: IUserOwnState & IPostOwnState & IPostCommentListOwnState) => ({
  user: user.data,
  post: post.data,
  isLoading: user.isLoading || post.isLoading,
  isLoaded: user.isLoaded && post.isLoaded
});

export default compose<React.ComponentType>(connect(mapStateToProps), withRouter)(PostDetails);
