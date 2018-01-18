/**
 * Created by HP on 18-Jan-18.
 */
export default {
    validateWeight : weight => {
        if (!weight.test(/^\d*(\.\d*)?$/)) {
            return false;
        }
        if (parseFloat(weight) > 20) {
            return new Error ('Are you sure you\'ve lost so much?')
        }
        return true;
    }
}