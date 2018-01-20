/**
 * Created by HP on 17-Jan-18.
 */
import * as actions from '../actions/types';

const menuElementsReducerDefaultState = {
    loadingChangingWeight: false,
    modalContent : ''
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
            break;
        case(actions.SET_MODAL_CONTENT):
            return {
                ...state,
                modalContent: action.content,
                modalCallBack : action.callback
            };
            break;
        case(actions.EMPTY_MODAL_CONTENT):
            return {
                ...state,
                modalContent: '',
                modalCallBack: null
            };
            break;
        default: return state;
    }
}