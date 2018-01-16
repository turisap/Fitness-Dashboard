/**
 * Created by HP on 23-Dec-17.
 */
import {combineReducers} from 'redux';

import ActivitiesReducer from './activitiesReducer';


/**
 * Combines all reducers to one root one
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
    activities : ActivitiesReducer
});

export default rootReducer;