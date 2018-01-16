/**
 * Created by HP on 29-Nov-17.
 */
import {BrowserRouter,Router, Route, Switch} from 'react-router-dom';
import React from 'react';

import HomePage from '../components/pages/HomePage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/browse" />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;