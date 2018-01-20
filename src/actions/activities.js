/**
 * Created by HP on 19-Jan-18.
 */
import axios from 'axios';
import * as actions from './types';
import {setLoadingElement, unsetLoadingElement, emptyModal} from './menuElements';
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
    let URL = ENV.stravaAPI.activitiesBaseEndPoint;
    for (let param in data) {
        if (param === 'Start date') {
            URL += `start_date_local=${data[param]}&`;
        } else {
            URL += `${param}=${data[param]}&`;
        }
    }

    dispatch(setLoadingElement('activityForm'));
    return axios.post(URL, null, autHeaders)
        .then(resp => {
            if (resp.status === 201) {
                dispatch(emptyModal());
            }
            dispatch(unsetLoadingElement('activityForm'));
            dispatch({type: actions.FLIP_NEW_ACTIVITY_FLAG})
        })
        .catch(err => {
            if(window.DEBUG) console.log(err.response.data.errors);
            dispatch(unsetLoadingElement('activityForm'));
        });
};