/**
 * Created by HP on 07-Jan-18.
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';

import * as actions from '../../actions/events';
import * as types from '../../actions/types';

const createMockStore = configureMockStore([thunk]);
let store;

beforeEach(() => {
    store = createMockStore({});
});


test('should return setError action object', () => {
    const action = actions.setError('Test Error');
    expect(action).toEqual({
        type : types.SET_ERROR,
        error: 'Test Error'
    })
});



test('should dispatch asyncroniously setNearby action', (done) => {
    const coords = {latitude : 10.234234, longitude : 103.4232};
    store.dispatch(actions.getEvents(coords)).then((response) => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : types.SET_NEARBY,
            events : expect.any(Array)
        });
        done();
    })
});


test('should dispatch async action with filtered events', (done) => {
    const filters = {filters : {}, userData : {location:{latitude : 10.234234, longitude : 103.4232}}};
    store.dispatch(actions.getFilteredEvents(filters)).then(resp => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : types.SET_FILTERED_EVENTS,
            events : expect.any(Array)
        });
        done();
    })
});


/*test('should save an event to the database', (done) => {
    const event = {
        title: {value:'My test event' + Math.random()},
        location : {value:'Kemerovo'},
        startDate : {value:moment()},
        endDate : {value:moment()},
        picture : {value:'test.jpg'},
        description : {value:'Testing events'},
        organizerName : {value:'Turisap'}
    };
    store.dispatch(actions.saveEvent(event))
        .then(resp => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : types.SAVE_EVENT
            });
            done();
        });
});*/


test('should get venue object from  eventbrite API', (done) => {
    const venueId = 1234;
    store.dispatch(actions.getVenue(venueId))
        .then(resp => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : types.SET_VENUE,
                venue : expect.any(Object)
            });
            done();
        })
});


test('should return a resetEvent action object', () => {
    const action = actions.resetVenue();
    expect(action).toEqual({
        type : types.RESET_VENUE
    })
});


test('should return a setNearby action object', () => {
    const action = actions.setNearby([]);
    expect(action).toEqual({
        type : types.SET_NEARBY,
        events : expect.any(Array)
    });
});