/**
 * Created by HP on 18-Jan-18.
 */

/**
 * Validator for user's input
 */
export default {

    /**
     * Validates weight input if its integer or floating point, lower threshold
     * that it's not equal to the old weight
     * @param weight
     * @param oldWeight
     * @returns {*}
     */
    validateWeight : (weight, oldWeight) => {
        const pattern = new RegExp(/^\d*(\.\d*)?$/);
        if (!pattern.test(weight)) {
            return new Error ('Weight should be a number')
        }
        if (parseFloat(weight) < 20) {
            return new Error ('Are you sure you\'ve lost so much?')
        }
        if(weight === parseFloat(oldWeight)) {
            return new Error ('New weight should be different from old')
        }
        return true;
    },

}