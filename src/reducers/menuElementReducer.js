/**
 * Created by HP on 17-Jan-18.
 */
import * as actions from '../actions/types';

const menuElementsReducerDefaultState = {
    loadingElements: {},
    modalContent : '',
    modalErrors  : '',
};

export default (state=menuElementsReducerDefaultState, action) => {
    switch(action.type) {
        case(actions.SET_MODAL_CONTENT):
            return {
                ...state,
                modalContent: action.content,
            };
            break;
        case(actions.EMPTY_MODAL_CONTENT):
            return {
                ...state,
                modalContent: '',
                modalErrors : []
            };
            break;
        case(actions.SET_MODAL_ERRORS):
            return {
                ...state,
                modalErrors : action.errors
            };
            break;
        case(actions.SET_LOADING_ELEMENT):
            return {
                ...state,
                loadingElements: {[action.element]: true}
            };
            break;
        case(actions.UNSET_LOADING_ELEMENT):
            return {
                ...state,
                loadingElements: {[action.element]: false}
            };
            break;
        default: return state;
    }
}