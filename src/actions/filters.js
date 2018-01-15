/**
 * Created by HP on 24-Dec-17.
 */
import axios from 'axios';

import ENV from '../../ENV';
import {setError} from './events';
import {
    SET_CATEGORY,
    SET_LOCATION,
    SET_PRICE,
    SET_TYPE,
    SET_TEXT,
    SET_TODAY,
    SET_TOMORROW,
    SET_THIS_FRIDAY,
    SET_THIS_WEEK,
    SET_THIS_WEEKEND,
    SET_NEXT_WEEK,
    SET_THIS_MONTH,
    GET_CATEGORIES,
    REMOVE_FILTER,
} from './types';

const ROOT_URL = ENV.eventbriteAPI.rootURL;

/**
 * Requests list of categories from eventbrite API and put them into the Redux store
 */
export const getCategories = () => dispatch => {
    return axios.get(`${ROOT_URL}/categories/`, {headers : {Authorization : ENV.eventbriteAPI.OAuthToken}})
        .then(resp =>  {
            //console.log(resp.data.categories);
            dispatch({
                type : GET_CATEGORIES,
                categories : resp.data.categories
            })
        })
        .catch(err => {
            //console.log(err.response.data.error_description);
            dispatch(setError(err.response.data.error_description));
        })
};


/**
 * Sets category for search from a list
 * @param category
 */
export const setCategory = category =>  ({
    type : SET_CATEGORY,
    category
});

/**
 * Sets location filter
 * @param location
 */
export const setLocation = location => ({
    type : SET_LOCATION,
    location
});

/**
 * Set price filter
 * @param price
 */
export const setPrice = price => ({
    type : SET_PRICE,
    price
});

/**
 * Sets type of event filter
 * @param typeOfE
 */
export const setType = typeOfE => ({
    type : SET_TYPE,
    typeOfE
});

/**
 * Sets text filter from input
 * @param text
 */
export const setText = text => ({
    type : SET_TEXT,
    text
});

/**
 * Sets time filter for today
 */
export const setToday = () => ({
    type : SET_TODAY
});

/**
 * Sets time filter for tomorrow
 */
export const setTomorrow = () => ({
    type : SET_TOMORROW
});

/**
 * Sets time filter for this friday
 */
export const setThisFriday = () => ({
    type : SET_THIS_FRIDAY
});

/**
 * Sets time filter for this week
 */
export const setThisWeek = () => ({
    type : SET_THIS_WEEK
});

/**
 * Sets time filter for this weekend
 */
export const setThisWeekend = () => ({
    type : SET_THIS_WEEKEND
});

/**
 * Sets time filter for next week
 */
export const setNextWeek = () => ({
    type : SET_NEXT_WEEK
});

/**
 * Sets time filter for this month
 */
export const setThisMonth = () => ({
    type : SET_THIS_MONTH
});

/**
 * Removes a filter from the filter bar
 * @param filter
 */
export const removeFilter = filter => ({
    type : REMOVE_FILTER,
    filter
});




