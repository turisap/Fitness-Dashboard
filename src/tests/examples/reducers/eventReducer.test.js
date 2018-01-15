/**
 * Created by HP on 07-Jan-18.
 */
import eventReducer from '../../reducers/eventsReducer';
import * as types from '../../actions/types';
import {events} from '../fixtures/events';

const state = {
    events : [],
    filteredEvents : [],
    currentEventVenue : {},
    errors  : '',
    newEventSaved : false,
};

let defState;

beforeEach(() => {
    defState = {...state};
});


test('should set default state', () => {
    const state = eventReducer(undefined, '@@INIT');
    expect(state).toEqual(defState);
});


test('should set error', () => {
    const action = {
        type : types.SET_ERROR,
        error : 'No errors, please'
    };
    const state = eventReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        errors : 'No errors, please'
    })
});


test('should set nearby events', () => {
    const action = {
        type : types.SET_NEARBY,
        events : events
    };
    const state = eventReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        events : events
    })

});


test('should set filtered events', () => {
    const action = {
        type : types.SET_FILTERED_EVENTS,
        events : events
    };
    const state = eventReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        filteredEvents : events
    })
});


test('should flip flag of saving event', () => {
    const action = {
        type : types.SAVE_EVENT,
        newEventSaved : false
    };
    const state = eventReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        newEventSaved : true
    })
});


test('should set venue of an event', () => {
    const action = {
        type : types.SET_VENUE,
        venue: 'Our basement'
    };
    const state = eventReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        currentEventVenue : 'Our basement'
    })
});


test('should reset current venue on page leaving', () => {
    const action = {
        type : types.RESET_VENUE,
    };
    defState.currentEventVenue = {name: 'My living room'};
    const state = eventReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        currentEventVenue : {}
    })
});