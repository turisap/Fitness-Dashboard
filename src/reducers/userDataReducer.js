/**
 * Created by HP on 16-Jan-18.
 */
import * as actions from '../actions/types';

const userDataReducerDefaultState = {
    access_token: '',
    athlete     : {},
    error       : ''
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
            break;
        case (actions.SET_USER_ERROR):
            return {
                ...state,
                error : action.error
            };
            break;
        default:
            return state;
    }
}