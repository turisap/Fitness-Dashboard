/**
 * Created by HP on 29-Nov-17.
 */
import {BrowserRouter,Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import React from 'react';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={} exact={true}/>
                <Route path="/browse" component={} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;