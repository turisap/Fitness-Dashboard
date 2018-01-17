/**
 * Created by HP on 17-Jan-18.
 */
import * as actions from '../actions/types';

const menuElementsReducerDefaultState = {
    loadingChangingWeight: false
};

export default (state=menuElementsReducerDefaultState, action) => {
    switch(action.type) {
        case(actions.CHANGING_WEIGHT):
            return {
                ...state,
                loadingChangingWeight : true
            };
            break;
        case(actions.CHANGED_WEIGHT):
            return {
                ...state,
                loadingChangingWeight : false
            };
        default: return state;
    }
}