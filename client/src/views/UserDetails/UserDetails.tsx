import * as React from 'react';
import { compose } from 'redux';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { IPostListOwnState } from '@redux/PostList/PostListInterfaces';
import PostModel, { IPostModel } from '@models/Post/PostModel';
import { PostListAction } from '@redux/PostList/PostListActions';
// U mnie będzie to jako molekuła i inny sposób na form
// import UserPostCreateForm from '@modules/User/routes/UserView/components/UserPostCreateForm';
import { UserAction } from '@redux/User/UserActions';
import { IUserOwnState } from '@redux/User/UserInterfaces';
import { IUserModel } from '@models/User/UserModel';
import Loader from '@atoms/Loader/Loader';
import UserDetailsCard from '@organisms/UserDetailsCard/UserDetailsCard';
import * as S from './StyledUserDetails'

interface RouteParams {
    userId: string;
}

interface IProps extends RouteComponentProps<RouteParams> {
    user: IUserModel;
    postList: IPostModel[];
    isLoading: boolean;
    isLoaded: boolean;
}

const UserDetails = ({ history, match, user, postList, isLoading, isLoaded }: IProps): React.ReactElement  => {
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
  
    // To tutaj nie
    // const showFormModal = (): void => {
    //     setModalConfig({
    //         isOpen: true,
    //         onCloseAction: () => {
    //         setModalConfig({
    //             isOpen: false
    //         });
    //         }
    //     });
    // };
  
    // To tutaj nie
    // const onCreateUserSuccess = (): void => {
    //   if (modalConfig.onCloseAction) {
    //     modalConfig.onCloseAction();
    //   }
  
    //   loadUserPostListData();
    // };
  
    const removePost = async (postId: number): Promise<void> => {
      try {
        await PostModel.removePost(postId);
        loadUserPostListData();
      } catch (error) {
        console.log(error);
      }
    };
  
    // const renderPostList = (postList: IPostModel[]) => (
    //   <>
    //     {postList.map((post) => (
    //       <UserPostItem
    //         key={post.id}
    //         post={post}
    //         postLink={buildLink(Paths.userPost, [
    //           { key: ':userId', value: match.params.userId },
    //           { key: ':postId', value: post.id }
    //         ])}
    //         removePostAction={removePost}
    //       />
    //     ))}
    //   </>
    // );


    return isLoading || !isLoaded 
        ? <Loader />
        : (
            <S.Wrapper>
                <UserDetailsCard user={user} />
              {/* <Header text={user.name} backButtonAction={() => history.goBack()} addButtonAction={() => showFormModal()} /> */}
        
              {/* {renderPostList(postList)} */}
        
              {/* <Modal {...modalConfig} title={'New post'}>
                <UserPostCreateForm userId={user.id} onSuccessAction={onCreateUserSuccess} />
              </Modal> */}
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