import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import ConfigureStore from './store/ConfigureStore';

import 'antd/dist/antd.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'semantic-ui-css/semantic.min.css';
import 'rodal/lib/rodal.css';


const store = ConfigureStore();

// setting global debug flag to true (for development only)
window.DEBUG = true;

ReactDOM.render(
                    <Provider store={store}>
                        <AppRouter/>
                    </Provider>,
                    document.getElementById('app')
                );
