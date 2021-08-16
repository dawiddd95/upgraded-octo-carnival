import React from 'react';
import { HashRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '@routes/index';
import MainTemplate from '@templates/MainTemplate';
import Homepage from '@views/Homepage/Homepage';


const Root: React.FC = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
        <MainTemplate>
            <Switch>
                <Route path={routes.home} component={Homepage} />
            </Switch>
        </MainTemplate>
    </BrowserRouter>
);

export default Root;