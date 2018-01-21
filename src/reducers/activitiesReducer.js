/**
 * Created by HP on 16-Jan-18.
 */
import * as actions from '../actions/types';

const activitiesReducerDefaultState =  {
    usersActivities : [],
};

export default (state=activitiesReducerDefaultState, action) => {
    switch(action.type) {
        case(actions.GET_ACTIVITIES):
            return {
                ...state,
                usersActivities : action.activities,
            };
        default: return state;
    }
}