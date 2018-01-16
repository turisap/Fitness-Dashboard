/**
 * Created by HP on 16-Jan-18.
 */
import axios from 'axios';
import * as actions from './types';
import ENV from '../../ENV';

const clientId = ENV.stravaAPI.clientID;
const clientSecret = ENV.stravaAPI.clientSecret;

export const getAccessToken = code => dispatch => {
    return axios.post(`https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`)
        .then(resp => dispatch({type: actions.GET_ACCESS_TOKEN, access_token : resp.data.access_token}))
        .catch(err => console.log(err.response));
};