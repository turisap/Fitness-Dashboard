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
        console.log(rules);
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
        if (!this.errors[fieldName]) {
            this.errors[fieldName] = [];
        }
        if (!value)  {
            this.errors[fieldName].push(new Error(`${fieldName} is required`));
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
            if (!this.errors[fieldName]) {
                this.errors[fieldName] = [];
            }
            this.errors[fieldName].push(new Error(`${fieldName} should contain at least one letter`));
        }
        return this;
    };


    this.init();
};


export default FormValidator;