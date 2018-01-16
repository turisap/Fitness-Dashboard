/**
 * Created by HP on 16-Jan-18.
 */
import axios from 'axios';
import * as actions from './types';
import ENV from '../../ENV';

const clientId = ENV.stravaAPI.clientID;
const clientSecret = ENV.stravaAPI.clientSecret;


/**
 * Exchanges a provided access code to a private access token from Strava API
 * And writes it into the local storage
 * @param code
 */
export const getAccessToken = code => dispatch => {
    return axios.post(`https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`)
        .then(resp => {
            localStorage.setItem('access_token', resp.data.access_token);
            dispatch({type: actions.GET_ACCESS_TOKEN, access_token : resp.data.access_token});
        })
        .catch(err => console.log(err.response));
};



/**
 * Obtains user's info after the application receives an access_token
 * From Strava API
 */
export const getAthlete = () => dispatch => {
    return axios.get('https://www.strava.com/api/v3/athlete',
        {headers : {Authorization : `Bearer ${localStorage.getItem('access_token')}`}})
        .then(resp => {
            dispatch({type : actions.GET_ATHLETE, athlete : resp.data})
        })
        .catch(err => console.log(err));
};