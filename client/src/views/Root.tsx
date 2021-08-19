import React from 'react';
import '../index.css';
import { Provider } from 'react-redux';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import { HashRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '@routes/index';
import store from '@redux/store';
import UserListModule from '@redux/UserList/UserListModule';
import MainTemplate from '@templates/MainTemplate';
import Homepage from '@views/Homepage/Homepage';


const Root: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <MainTemplate>
                <DynamicModuleLoader modules={[UserListModule]}>
                    <Switch>
                        <Route path={routes.users} component={Homepage} />
                    </Switch>
                </DynamicModuleLoader>
            </MainTemplate>
        </BrowserRouter>
    </Provider>
);

export default Root;