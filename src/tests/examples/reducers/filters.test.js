/**
 * Created by HP on 15-Dec-17.
 *
 *  Testing the filters reducer function
 *
 */

import filterReducer from '../../reducers/filters';

const state = {
    text : '',
    filterBy : 'PIZZA'
};
let defState;

beforeEach(() => {
    defState = {...state}
});

test('should set default state', () => {
    const state = filterReducer(undefined, '@@INIT');
    expect(state).toEqual(defState);
});

test('should set text filter', () => {
    const action = {
        type : 'SET_TEXT_FILTER',
        text : 'tirip'
    };
    const state = filterReducer(state, action);
    expect(state).toEqual({
        ...defState,
        text : 'tirip'
    })
});

test('should set pizza filter', () => {
    const action = {
        type : 'SET_PASTA_FILTER',
        filterBy : 'PIZZA'
    };
    const state = filterReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        filterBy: 'PIZZA'
    })
});

test('should set pasta filter', () => {
    const action = {
        type : 'SET_PASTA_FILTER',
        filterBy : 'PASTA'
    };
    const state = filterReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        filterBy : 'PASTA'
    })
});

test('should set dessert filter', () => {
    const action = {
        type : 'SET_DESSERT_FILTER',
        filterBy : 'DESSERTS'
    };
    const order = filterReducer(defState, action);
    expect(order).toEqual({
        ...defState,
        filterBy : 'DESSERTS'
    })
});