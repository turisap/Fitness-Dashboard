/**
 * Created by HP on 23-Dec-17.
 */
import {combineReducers} from 'redux';

import ActivitiesReducer from './activitiesReducer';
import UserDataReducer from './userDataReducer';
import MenuElementsReducer from './menuElementReducer';
import ClubsReducer from './clubsReducer';


/**
 * Combines all reducers to one root one
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
    activities : ActivitiesReducer,
    clubs        : ClubsReducer,
    userData   : UserDataReducer,
    menuElements : MenuElementsReducer,
});

export default rootReducer;