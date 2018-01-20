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


/**
 * Sets from form submission (on activities page) to modal
 * @param errors
 */
export const setModalErrors = errors => ({
    type : actions.SET_MODAL_ERRORS,
    errors
});


/**
 * Sets a given element's loading status to true
 */
export const setLoadingElement = element => ({
    type : actions.SET_LOADING_ELEMENT,
    element
});


/**
 * Unsets a given element's loading status to true
 */
export const unsetLoadingElement = element => ({
    type : actions.UNSET_LOADING_ELEMENT,
    element
});