/**
 * Created by HP on 26-Dec-17.
 */


export default class FieldsValidator {



    /**
     * This method checks all inputs on the create event page
     * @param state
     * @returns {{}}
     */
    static validate = state => {
        const newState = {...state};
        newState['hasErrors'] = false;
        for(let key in newState) {
            if(newState[key].value === ''){
                newState[key].error = 'This field is required';
                newState['hasErrors'] = true;
            }
        }
        return newState;
    };



    /**
     * Checks whether a value is present
     * @param value
     * @returns {*|boolean}
     */
    static isRequired = value => !!value;




    /**
     * Checks whether a given value contains one lower case, one upper case
     * onde number and at least 8 characters long
     * @param value
     * @returns {boolean|*}
     */
    static isStrongPassword = value => {
        if(value){
            const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
            return pattern.test(value);
        }
        return false;
    };




    /**
     * Checks whether a given value has required length
     * @param value
     * @param length
     * @returns {boolean}
     */
    static isRequiredLength = (value, length) => {
        if (value) {
            return value.length >= length;
        }
        return false;
    };




    /**
     * Checks whether a given string is a valid email
     * @param email
     * @returns {*|boolean}
     */
    static isValidEmail = email => {
        if (email) {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(email);
        }
        return false;
    };



    /**
     * Checks if passwords are same
     * @param pass1
     * @param pass2
     * @returns {boolean}
     */
    static passwordsAreEqual = (pass1, pass2) => {
        if (pass1 && pass2){
            return pass1 === pass2;
        }
        return false;
    }

}