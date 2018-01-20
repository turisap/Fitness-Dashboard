/**
 * Created by HP on 18-Jan-18.
 */
import * as actions from './types';


/**
 * Sets loading changing weight to true
 */
export const changingWeight = () => ({
    type : actions.CHANGING_WEIGHT
});


/**
 * Sets loading changing weight to false (request is complete)
 */
export const changedWeight = () => ({
    type : actions.CHANGED_WEIGHT
});


/**
 * Sets modal state to visible and provides it with content
 * @param content
 */
export const setModalOff = content => ({
    type : actions.SET_MODAL_CONTENT,
    content,
});


/**
 * Reduces modal's content to an empty string
 */
export const emptyModal = () => ({
    type : actions.EMPTY_MODAL_CONTENT
});