/**
 * Created by HP on 21-Jan-18.
 */
import axios from 'axios';

import ENV from '../../ENV';
import {GET_CLUBS} from '../actions/types';
import {setLoadingElement, unsetLoadingElement, setModalOff} from '../actions/menuElements';

const autHeaders = {headers : {Authorization : `Bearer ${localStorage.getItem('access_token')}`}};


/**
 * Gets list of user's clubs from Strava API
 */
export const getAthletesClubs = () => dispatch => {
    return axios.get(ENV.stravaAPI.athleteClubsBaseEndPoint, autHeaders)
        .then(resp => {
            dispatch({type:GET_CLUBS, athleteClubs : resp.data})
        })
        .catch(err => {
            if(window.DEBUG) console.log(err.response.data.errors);
        })
};


/**
 * Makes a request to Strava API to remove a club from athlete's list
 * @param id
 */
export const leaveClub = id => dispatch => {
    dispatch(setLoadingElement('leavingClub'));
    return axios.post(`${ENV.stravaAPI.leaveClub}/${id}/leave`, null, autHeaders)
        .then(resp => {
            if (resp.status === 200) {
                dispatch(getAthletesClubs());
                dispatch(setModalOff(`You've successfully left the club`));
            }
            dispatch(unsetLoadingElement('leavingClub'))
        })
        .catch(err => {
            if(window.DEBUG) console.log(err.message);
            dispatch(unsetLoadingElement('leavingClub'));
        })
};