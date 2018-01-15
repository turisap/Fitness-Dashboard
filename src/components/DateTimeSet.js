/**
 * Created by HP on 26-Dec-17.
 */
import React from 'react';
import {DatePicker, TimePicker} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';


/**
 * Represents date and time of start and end on the create page
 * @param props
 * @constructor
 */
const DateTimeSet = props => {
    const {defaultDate, defaultTime, context, onChange} = props;
    return (
        <div className="date-time-set">
            <DatePicker onChange={onChange} defaultValue={defaultDate} disabledDate={(current, cont) => disabledDate(current, context)}/>
            <TimePicker onChange={onChange} defaultValue={defaultTime} format="HH:mm"/>
        </div>
    )
};

/**
 * Validation of props
 * @type {{defaultDate, defaultTime, disabledDate}}
 */
/*DateTimeSet.propTypes = {
    defaultDate  : PropTypes.instanceOf(moment).isRequired,
    defaultTime  : PropTypes.instanceOf(moment).isRequired,
    context      : PropTypes.string.isRequired,
};*/

/**
 * Disables days in datepicker based on context from props (beginning of disabling)
 * @param current
 * @param context
 * @returns {boolean|*}
 */
const disabledDate = (current, context) => {
    const comparison = (context === 'today') ? moment() : moment().add(1, 'day');
    return current.isBefore(comparison, 'day')
};


export default DateTimeSet;