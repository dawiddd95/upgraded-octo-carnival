import React from 'react';
import '../index.css';
import { Provider } from 'react-redux';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import { HashRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '@routes/index';
import store from '@redux/store';
import UserListModule from '@redux/UserList/UserListModule';
import UserModule from '@redux/User/UserModule';
import PostListModule from '@redux/PostList/PostListModule';
import PostModule from '@redux/Post/PostModule';
import PostCommentListModule from '@redux/PostCommentList/PostCommentListModule';
import MainTemplate from '@templates/MainTemplate';
import Homepage from '@views/Homepage/Homepage';
import UserDetails from '@views/UserDetails/UserDetails';
import PostDetails from '@views/PostDetails/PostDetails';

const Root: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <MainTemplate>
                <DynamicModuleLoader modules={[UserListModule, UserModule, PostListModule, PostModule, PostCommentListModule]}>
                    <Switch>
                        <Route exact path={routes.users} component={Homepage} />
                        <Route exact path={routes.userDetails} component={UserDetails} />
                        <Route exact path={routes.userPost} component={PostDetails} />
                    </Switch>
                </DynamicModuleLoader>
            </MainTemplate>
        </BrowserRouter>
    </Provider>
);

export default Root;