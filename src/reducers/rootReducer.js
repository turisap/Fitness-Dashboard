/**
 * Created by HP on 23-Dec-17.
 */
import {combineReducers} from 'redux';

import EventReducer from '../reducers/eventsReducer';
import FiltersReducer from '../reducers/filtersReducer';
import UserDataReducer from '../reducers/userDataReducer';
import { reducer as formReducer } from 'redux-form'


/**
 * Combines all reducers to one root one
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
    events   : EventReducer,
    filters  : FiltersReducer,
    userData : UserDataReducer,
    form     : formReducer
});

export default rootReducer;