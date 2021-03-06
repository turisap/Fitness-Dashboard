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
            const context = extractContext(rule);
            const message = extractMessage(rule);
            extractMessage(rule);
            if(rule in this && !context){
                this[rule].call(this, this.state[property], property);
            } else if(context || message) {
                this[getMethodFromRuleString(rule)].call(this, this.state[property], property, context, message);
            }
        })
    }
    // strips message and context chars
    function getMethodFromRuleString(rule) {
        return rule.match(/^(.*?)[\{,\[]/)[1];
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
 * @param context
 * @param message
 * @returns {FormValidator}
 */
FormValidator.prototype.shouldContainLetters = function(value, fieldName, context, message) {
    const pattern = /[a-zА-я]+/i;
    if (!pattern.test(value)) {
        checkIfExistsInErrors.call(this, fieldName);
        this.errors[fieldName].push(message ? message : `${fieldName} should contain at least one letter`);
    }
    return this;
};



/**
 * Checks whether a given property is numeric
 * @param value
 * @param fieldName
 * @param context
 * @param message
 */
FormValidator.prototype.isNumeric = function(value, fieldName, context, message) {
    const pattern = /^\d+$/;
    if (!pattern.test(value)){
        checkIfExistsInErrors.call(this,fieldName);
        this.errors[fieldName].push(message ? message : `${fieldName} should be a number`);
    }
};



/**
 * Checks if the value is present
 * @param value
 * @param fieldName
 * @param context
 * @param message
 * @returns {FormValidator}
 */
FormValidator.prototype.isRequired = function(value, fieldName, context, message) {
    checkIfExistsInErrors.call(this, fieldName);
    if (!value)  {
        this.errors[fieldName].push(message ? message : `${fieldName} is required`);
    }
    return this;
};



/**
 * Checks whether a given field has required length
 * Lenght is obtained from context in rules string
 * @param value
 * @param fieldName
 * @param minLength
 * @param message
 * @returns {FormValidator}
 */
FormValidator.prototype.hasMinLength = function (value, fieldName, minLength, message) {
    return value.length >= parseInt(minLength) ? this : this.errors[fieldName].push(message ? message : `${fieldName} should be at least ${minLength} characters`);
};



/**
 * Checks whether a given value does not exceed required length
 * @param value
 * @param fieldName
 * @param maxLength
 * @param message
 * @returns {FormValidator}
 */
FormValidator.prototype.hasMaxLength = function (value, fieldName, maxLength, message) {
    return value.length <= parseInt(maxLength) ? this : this.errors[fieldName].push(message ? message : `${fieldName} should be at maximum ${maxLength} characters`)
};


/**
 * Checks if a given value is a valid email
 * @param value
 * @param fieldName
 * @param context
 * @param message
 * @returns {FormValidator}
 */
FormValidator.prototype.isEmail = function (value, fieldName, context, message) {
    const pattern = value.match(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
    return value.match(pattern) ? false : this.errors[fieldName].push(message ? message : `${fieldName} should be a valid email`);
};




/**
 * Checks if a given value is equal to another one (comparison of passwords)
 * @param value
 * @param fieldName
 * @param context
 * @param message
 * @returns {boolean}
 */
FormValidator.prototype.isEqualTo = function (value, fieldName, context, message) {
    return value === this.state[context] ? false : this.errors[fieldName].push(message ? message : `${fieldName} should be equal to ${context}`)
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



/**
 * Extracts params for validation from rule string in [] brackets
 * @param rule
 */
const extractContext = function (rule) {
    const pattern = /\[\w+\]/;
    const match = rule.match(pattern);
    if (match) {
        const context = match[0].match(/[^\[,^\]]+/);
        return context ? context[0] : null;
    }
    return null;

};



/**
 * Extracts a custom error message from rule string (between {})
 * @param rule
 * @returns {null}
 */
const extractMessage = function (rule) {
    const pattern = /\{(.*?)\}/;
    const match = rule.match(pattern);
    if (match) {
        return match[1];
    }
    return null;

};




export default FormValidator;