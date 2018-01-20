/**
 * Created by HP on 20-Jan-18.
 */

const FormValidator = function (state, rules)  {

    /**
     * State of a component which is supposed to be validated
     */
    this.state = state;


    /**
     * Object with state's properties to validate and corresponding rules
     */
    this.rules = rules;


    /**
     * Holds Error objects
     */
    this.errors = {};


    /**
     * Returns array of errors
     */
    return this.init();
};





/**
 * Initializer (calls all methods supplied in rules against given properties in state)
 */
FormValidator.prototype.init = function() {
    for(let property in this.state) {
        if (property in this.rules) {
            this.rules[property] = this.getRules(this.rules[property]);
        }
    }
    for (let property in this.rules) {
        this.rules[property].forEach(rule => {
            this[rule].call(this, this.state[property], property)
        })
    }
    return makeErrorsArray(this.errors);
};




/**
 * Gets array or rules out of string which was supplied in rules object
 * @param string
 * @returns {*}
 */
FormValidator.prototype.getRules = string => {
    return string.split('|');
};




/**
 * Empties errors array
 */
FormValidator.prototype.dropErrors = function() {this.errors = {}};





/**
 * Checks whether there is at lest one letter in the field
 * @param value
 * @param fieldName
 * @returns {Error}
 */
FormValidator.shouldContainLetters = function(value, fieldName) {
    const pattern = new RegExp(/[a-zА-я]+/i);
    if (!pattern.test(value)) {
        checkIfExistsInErrors.call(this, fieldName);
        this.errors[fieldName].push(`${fieldName} should contain at least one letter`);
    }
    return this;
};




/**
 * Checks whether a given property is numeric
 * @param value
 * @param fieldName
 */
FormValidator.prototype.isNumeric = function(value, fieldName) {
    const pattern = new RegExp(/^\d+$/);
    if (!pattern.test(value)){
        checkIfExistsInErrors.call(this,fieldName);
        this.errors[fieldName].push(`${fieldName} should be a number`);
    }
};





/**
 * Checks if the value is present
 * @param value
 * @param fieldName
 * @returns {Error}
 */
FormValidator.prototype.isRequired = function(value, fieldName) {
    checkIfExistsInErrors.call(this, fieldName);
    if (!value)  {
        this.errors[fieldName].push(`${fieldName} is required`);
    }
    return this;
};




/**
 * Flattens errors object to an array of error messages
 * @param errorsObj
 * @returns {Array}
 */
const makeErrorsArray = function(errorsObj) {
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
 * creates it with an empty array as a value
 * @param fieldName
 */
const checkIfExistsInErrors = function(fieldName) {
    if (!this.errors[fieldName]) {
        this.errors[fieldName] = [];
    }
};

export default FormValidator;