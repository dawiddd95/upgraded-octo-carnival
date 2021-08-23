import * as React from 'react';
import { compose } from 'redux';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { IPostListOwnState } from '@redux/PostList/PostListInterfaces';
import PostModel, { IPostModel } from '@models/Post/PostModel';
import { PostListAction } from '@redux/PostList/PostListActions';
import { UserAction } from '@redux/User/UserActions';
import { IUserOwnState } from '@redux/User/UserInterfaces';
import { IUserModel } from '@models/User/UserModel';
import Loader from '@atoms/Loader/Loader';
import UserDetailsCard from '@organisms/UserDetailsCard/UserDetailsCard';
import * as S from './StyledUserDetails'
import UserPostTile from '@molecules/UserPostTile/UserPostTile';
import { H2 } from '@atoms/H2/H2';

interface RouteParams {
    userId: string;
}

interface IProps extends RouteComponentProps<RouteParams> {
    user: IUserModel;
    postList: IPostModel[];
    isLoading: boolean;
    isLoaded: boolean;
}

const UserDetails = ({ match, user, postList, isLoading, isLoaded }: IProps): React.ReactElement  => {
    const dispatch = useDispatch();
  
    const loadUserData = React.useCallback(() => {
        const { params } = match;
        dispatch(UserAction.user(params.userId));
    }, [match, dispatch]);
  
    const loadUserPostListData = React.useCallback(() => {
        const { params } = match;
        dispatch(PostListAction.postList(params.userId));
    }, [match, dispatch]);
  
    React.useEffect(() => {
        loadUserData();
        loadUserPostListData();
    }, [loadUserData, loadUserPostListData]);
  
    const removePost = async (postId: number): Promise<void> => {
      try {
        await PostModel.removePost(postId);
        loadUserPostListData();
      } catch (error) {
        console.log(error);
      }
    };
  

    return isLoading || !isLoaded 
        ? <Loader />
        : (
            <S.Wrapper>
                <UserDetailsCard user={user} />
                <S.PostsWrapper>
                    <S.ContentWrapper>
                        <H2>User Posts:</H2>
                        {postList.map((post) => (
                            <UserPostTile
                                key={post.id}
                                post={post}
                                postLink={`/user/${match.params.userId}/post/${post.id}`}
                                removePostAction={removePost}
                            />
                        ))}
                    </S.ContentWrapper>
                </S.PostsWrapper>
            </S.Wrapper>
        );
    
}

const mapStateToProps = ({ user, postList }: IUserOwnState & IPostListOwnState) => ({
    user: user.data,
    postList: postList.data,
    isLoading: postList.isLoading || user.isLoading,
    isLoaded: user.isLoaded && postList.isLoaded
});
  
export default compose<React.ComponentType>(connect(mapStateToProps), withRouter)(UserDetails);