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