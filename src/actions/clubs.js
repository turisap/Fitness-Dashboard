/**
 * Created by HP on 21-Jan-18.
 */
import axios from 'axios';

import ENV from '../../ENV';
import {GET_CLUBS} from '../actions/types';

let baseUrl = ENV.stravaAPI.athleteClubsBaseEndPoint;
const autHeaders = {headers : {Authorization : `Bearer ${localStorage.getItem('access_token')}`}};


/**
 * Gets list of user's clubs from Strava API
 */
export const getAthletesClubs = () => dispatch => {
    return axios.get(baseUrl, autHeaders)
        .then(resp => {
            dispatch({type:GET_CLUBS, athleteClubs : resp.data})
        })
        .catch(err => {
            if(window.DEBUG) console.log(err);
        })
};