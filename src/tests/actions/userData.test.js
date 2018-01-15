/**
 * Created by HP on 07-Jan-18.
 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/userData';
import * as types from '../../actions/types';

const createMockStore = configureMockStore([thunk]);
let store;

beforeEach(() => {
    store = createMockStore({});
});

test('should not sign user up and dispatch SET_AUTH_ERROR ACTION', (done) => {
    const credentials = {email : 'k@mail.ru', password : 'password123'};
    store.dispatch(actions.signUserUp(credentials))
        .then(resp => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : types.SET_AUTH_ERROR,
                error : 'It looks like this email is already in use'
            });
            done();
        })
});


test('should sign user up and dispatch SIGN_USER_IN action', (done) => {
    const credentials = {email : `k@mail.ru${Math.random()}`, password : 'password123'};
    store.dispatch(actions.signUserUp(credentials))
        .then(resp => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : types.SIGN_USER_IN,
                jwtToken : expect.any(String)
            });
            done();
        })
});


test('should sign user in using email and password', (done) => {
    const credentials = {email : `kw@mail.ru`, password : 'password123'};
    store.dispatch(actions.signUserIn(credentials.email, credentials.password))
        .then(resp => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : types.SIGN_USER_IN,
                jwtToken : expect.any(String)
            });
            done();
        })
});


test('should get user\' locality', (done) => {
    const coords = {latitude : 11.5449, longitude : 104.8922};
    store.dispatch(actions.getUsersLocality(coords))
        .then(resp => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : types.SET_USER_LOCALITY,
                locality : expect.any(String)
            });
            done();
        })
});


test('should return toggleNavBar object', () => {
    const action = actions.toggleNavbar();
    expect(action).toEqual({
        type : types.CLICK_NAVBAR
    })
});


test('should return sign user out action object', () => {
    const action = actions.signUserOut();
    expect(action).toEqual({
        type : types.SIGN_USER_OUT
    })
});


test('should return setUserLocation object', () => {
    const action = actions.setUserLocation('Phnom Penh');
    expect(action).toEqual({
        type : types.SET_USER_LOCATION,
        location : 'Phnom Penh'
    })
});