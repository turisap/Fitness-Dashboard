/**
 * Created by HP on 18-Jan-18.
 */

/**
 * Validator for user's input
 */
export default {
    validateWeight : weight => {
        const pattern = new RegExp(/^\d*(\.\d*)?$/);
        if (!pattern.test(weight)) {
            return new Error ('Weight should be a number')
        }
        if (parseFloat(weight) < 20) {
            return new Error ('Are you sure you\'ve lost so much?')
        }
        return true;
    }
}