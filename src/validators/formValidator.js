/**
 * Created by HP on 20-Jan-18.
 */

const FormValidator = function(state, rules)  {

    /**
     * Initializer (calls all methods supplied in rules against given properties in state)
     */
    this.init = () => {
        for(let property in state) {
            if (property in rules) {
                rules[property] = this.getRules(rules[property]);
            }
        }
        for (let property in rules) {
            rules[property].forEach(rule => {
                this[rule].call(this, state[property], property)
            })
        }
        return makeErrorsArray(this.errors);
    };



    /**
     * Holds Error objects
     */
    this.errors = {};




    /**
     * Gets array or rules out of string which was supplied in rules object
     * @param string
     * @returns {*}
     */
    this.getRules = (string) => {
        return string.split('|');
    };




    /**
     * Empties errors array
     */
    this.dropErrors = () => this.errors = {};



    /**
     * Check
     * @param value
     * @param fieldName
     * @returns {Error}
     */
    this.isRequired = (value, fieldName) => {
        checkIfExistsInErrors(fieldName);
        if (!value)  {
            this.errors[fieldName].push(`${fieldName} is required`);
        }
        return this;
    };



    /**
     * Checks whether there is at lest one letter in the field
     * @param value
     * @param fieldName
     * @returns {Error}
     */
    this.shouldContainLetters = (value, fieldName) => {
        const pattern = new RegExp(/[a-zА-я]+/i);
        if (!pattern.test(value)) {
            checkIfExistsInErrors(fieldName);
            this.errors[fieldName].push(`${fieldName} should contain at least one letter`);
        }
        return this;
    };


    /**
     * Checks whether a given property is numeric
     * @param value
     * @param fieldName
     */
    this.isNumeric = (value, fieldName) => {
        const pattern = new RegExp(/^\d+$/);
        if (!pattern.test(value)){
            checkIfExistsInErrors(fieldName);
            this.errors[fieldName].push(`${fieldName} should be a number`);
        }
    };



    /**
     * Flattens errors object to an array of error messages
     * @param errorsObj
     * @returns {Array}
     */
    const makeErrorsArray = (errorsObj) => {
        const entries = Object.entries(errorsObj);
        const errors = [];
        if(entries.length) {
            entries.forEach(entry => {
                const errorsArray = entry.pop();
                errorsArray.forEach(err => errors.push(err))
            })
        }
        return errors;
    };



    /**
     * Checks if a property with a given name already exists in the error object and
     * creates it with an empty array as value
     * @param fieldName
     */
    const checkIfExistsInErrors = fieldName => {
        if (!this.errors[fieldName]) {
            this.errors[fieldName] = [];
        }
    };


    return this.init();
};


export default FormValidator;