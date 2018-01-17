import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import ConfigureStore from './store/ConfigureStore';
import Menu from './components/SideBar';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = ConfigureStore();

ReactDOM.render(
        <Provider store={store}>
            <div id="outer-container">
                <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>
                <main id="page-wrap">
                    <AppRouter/>
                </main>
            </div>
        </Provider>, document.getElementById('app')
);

