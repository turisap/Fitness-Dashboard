/**
 * Created by HP on 07-Jan-18.
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';

import * as actions from '../../actions/filters';
import * as types from '../../actions/types';

const createMockStore = configureMockStore([thunk]);
let store;

beforeEach(() => {
    store = createMockStore({});
});


test('should get list of categories objects from eventBrite API', (done) => {
    store.dispatch(actions.getCategories())
        .then(resp => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: types.GET_CATEGORIES,
                categories : expect.any(Array)
            });
            done();
        })
});

test('should set return setCategory action object', () => {
    const action = actions.setCategory('cookies');
    expect(action).toEqual({
        type : types.SET_CATEGORY,
        category: 'cookies'
    })
});


test('should return setLocation action object', () => {
    const action = actions.setLocation('Kemerovo');
    expect(action).toEqual({
        type : types.SET_LOCATION,
        location: 'Kemerovo'
    })
});


test('should return setPrice action object', () => {
    const action = actions.setPrice(12345);
    expect(action).toEqual({
        type : types.SET_PRICE,
        price : 12345
    })
});

test('should return setType action object', () => {
    const action = actions.setType('party');
    expect(action).toEqual({
        type : types.SET_TYPE,
        typeOfE : 'party'
    })
});


test('should return setText  action object', () => {
    const action = actions.setText('I am traveling down the river..');
    expect(action).toEqual({
        type : types.SET_TEXT,
        text : "I am traveling down the river.."
    })
});


test('should return setToday action object', () => {
    const action = actions.setToday();
    expect(action).toEqual({
        type : types.SET_TODAY,
    })
});


test('should return setTomorrow action object', () => {
    const action = actions.setTomorrow();
    expect(action).toEqual({
        type : types.SET_TOMORROW,
    })
});


test('should return setThisFirday action object', () => {
    const action = actions.setThisFriday();
    expect(action).toEqual({
        type : types.SET_THIS_FRIDAY,
    })
});


test('should return setThisWEekend action object', () => {
    const action = actions.setThisWeekend();
    expect(action).toEqual({
        type : types.SET_THIS_WEEKEND,
    })
});


test('should return setNextWeek action object', () => {
    const action = actions.setNextWeek();
    expect(action).toEqual({
        type : types.SET_NEXT_WEEK,
    })
});



test('should return setThisMonth action object', () => {
    const action = actions.setThisMonth();
    expect(action).toEqual({
        type : types.SET_THIS_MONTH,
    })
});



test('should return removeFilter action object', () => {
    const action = actions.removeFilter('the sweetest cookies I\'ve ever eaten');
    expect(action).toEqual({
        type : types.REMOVE_FILTER,
        filter : 'the sweetest cookies I\'ve ever eaten'
    })
});