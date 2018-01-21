/**
 * Created by HP on 21-Jan-18.
 */
import * as actions from '../actions/types';

const defaultClubsReducerState = {
    athleteClubs : []
};

export default (state=defaultClubsReducerState, action) => {
    switch (action.type) {
        case(actions.GET_CLUBS):
            return {
                ...state,
                athleteClubs : action.athleteClubs
            };
            break;
    }
    return state;
}