/**
 * Created by HP on 19-Jan-18.
 */
import axios from 'axios';
import * as actions from './types';
import ENV from '../../ENV';

const autHeaders = {headers : {Authorization : `Bearer ${localStorage.getItem('access_token')}`}};


/**
 * Retrieves list of user's activities from Strava API
 */
export const getActivities = () => dispatch => {
    return axios.get(ENV.stravaAPI.athleteActivitiesBaseEndPoint, autHeaders)
        .then(resp => {
            dispatch({type: actions.GET_ACTIVITIES, activities: resp.data})
        })
        .catch(err => {
            if(window.DEBUG)console.log(err);
        })
};



/**
 * Posts user's input to Strava API to create an activity
 * @param data
 * @returns {Promise.<T>}
 */
export const createActivity = data => dispatch => {
    let URl = ENV.stravaAPI.activitiesBaseEndPoint;
    for (let param in data) {
        URL += `${param = data[param]}`;
    }
    return axios.post(URl, null, autHeaders)
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            if(window.DEBUG) console.log(err)
        });
};