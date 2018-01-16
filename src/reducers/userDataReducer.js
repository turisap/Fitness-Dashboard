/**
 * Created by HP on 16-Jan-18.
 */
import * as actions from '../actions/types';

const userDataReducerDefaultState = {
    access_token: '',
    athlete     : {},
};

export default (state=userDataReducerDefaultState, action) => {
    switch(action.type) {
        case (actions.GET_ACCESS_TOKEN):
            return {
                ...state,
                access_token : action.access_token
            };
            break;
        case (actions.GET_ATHLETE):
            return {
                ...state,
                athlete : action.athlete
            };
        default:
            return state;

    }
}