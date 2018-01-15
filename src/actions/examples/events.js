/**
 * Created by HP on 23-Dec-17.
 */
import axios from 'axios';

import {SET_ERROR, SET_NEARBY, SET_FILTERED_EVENTS, SAVE_EVENT, SET_VENUE, RESET_VENUE} from './types';
import ENV from '../../ENV';

const ROOT_URL = ENV.eventbriteAPI.rootURL;

/**
 * Creates an AJAX request to eventbrite API
 * Gets random events if user does not permit obtaining of location
 * @param latitude
 * @param longitude
 */
export const getEvents = ({latitude, longitude}={}) => dispatch => {
    let URL = `${ROOT_URL}/events/search/`;
    URL += (latitude && longitude) ? `?location.latitude=${latitude}&location.longitude=${longitude}` : '';
    return axios.get(`${URL}`,
        {
            headers : {Authorization : ENV.eventbriteAPI.OAuthToken}
        }
    )
        .then(response => {
            dispatch(setNearby(response.data.events));
        })
        .catch(error => {
            dispatch(setError(error.response.data.error_description));
        });
};


/**
 * Gets filtered events in accordance with user's input
 * @param props
 * @returns {function(*)}
 */
export const getFilteredEvents = (props = {}) =>   {

    return dispatch => {

        const {category, price, typeOfE, location, startRange, endRange, textFilter } = props.filters;
        const {latitude, longitude} = props.userData.location;
        const search = `${typeOfE}${textFilter}&`;

        let URL = `${ROOT_URL}/events/search/?`;
        if(!location) URL += latitude && longitude ? `location.latitude=${latitude}&location.longitude=${longitude}&` : '';
        URL += category ? `categories=${category}&` : '';
        URL += typeOfE || textFilter ? `q=${search}`: '';
        URL += price ? `price=${price === 'free' ? 'free' : 'paid'}&` : '';
        URL += location ? `location.address=${location.trim()}&` : '';
        URL += startRange ? `start_date.range_start=${adjustTimestamps(startRange)}&` : '';
        URL += endRange   ? `start_date.range_end=${adjustTimestamps(endRange)}` : '';

        return axios.get(URL, { headers : {Authorization : ENV.eventbriteAPI.OAuthToken}})
            .then(resp => {
                dispatch({type : SET_FILTERED_EVENTS, events: resp.data.events})
            })
            .catch(err => console.log(err.response))
    }
};

/**
 * Saves a user's event to the database (not eventbrite, it's own database)
 */
export const saveEvent = ({title, location, startDate, endDate,picture, description, organizerName}) => dispatch => {
    return axios.post(`${ENV.backendServer.rootUrl}/event-save`,
        {
            title : title.value,
            location : location.value,
            startDate : startDate.value,
            endDate : endDate.value,
            picture : picture.value,
            description : description.value,
            organizerName : description.value
        },
        {
            headers : { Authorization : localStorage.getItem('token')}
        })
        .then(resp => {
            dispatch({type : SAVE_EVENT})
        })
        .catch(err => {
            dispatch(setError(err.response.data.errors))
        })
};


/**
 * Gets venue's info basing on it's id
 * @param venueId
 */
export const getVenue = venueId  => dispatch => {
    return axios.get(`${ROOT_URL}/venues/${venueId}/`, { headers : {Authorization : ENV.eventbriteAPI.OAuthToken}})
        .then(resp => dispatch({ type: SET_VENUE, venue: resp.data}))
        .catch(err => console.warn('error on load venue'/*err.response*/))
};


export const resetVenue = () => ({
    type : RESET_VENUE
});



/**
 * Sets error property to the Redux store
 * @param error
 */
export const setError = (error) => ({
    type : SET_ERROR,
    error
});




/**
 * Fills events property of the store with events obtained via AJAX in getEvents()
 * @param events
 */
export const setNearby = (events) =>({
    type : SET_NEARBY,
    events
});



/**
 * Adjasts timestamp to the format which is required by eventbrite API
 * @param timeStamp
 */
const adjustTimestamps = timeStamp => timeStamp.replace(' ', 'T');