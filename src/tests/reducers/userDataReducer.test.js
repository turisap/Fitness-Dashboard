/**
 * Created by HP on 08-Jan-18.
 */

import userDataReducer from '../../reducers/userDataReducer';
import * as types from '../../actions/types';

const state = {
    location : {},
    locality : '',
    authenticated : false,
    jwtToken : '',
    authErrors : '',
    clicked    : true
};

let defState;


beforeEach(() => {
    defState = {...state};
});


test('should set user\'s location', () => {
    const action = {
        type : types.SET_LOCATION,
        location : {
            latitude : 123.2,
            longitude : 23.39
        }
    };
    const state = userDataReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        location : {}
    })
});


test('should set user\'s locality', () => {
    const action = {
        type : types.SET_USER_LOCALITY,
        locality : 'Moon'
    };
    const state = userDataReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        locality : 'Moon'
    })
});


test('should sign user in', () => {
    const action = {
        type : types.SIGN_USER_IN,
        jwtToken : 'dsfjadf09efjoidsfi902er9f23jfisodaf93'
    };
    const state = userDataReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        authenticated: true,
        jwtToken : 'dsfjadf09efjoidsfi902er9f23jfisodaf93',
        authErrors : ''
    })
});

test('should sign user up', () => {
    const action = {
        type : types.SIGN_USER_UP,
        jwtToken : 'fkasdjfo2903urjdisf209ru20dijo283u9rw9eidh'
    };
    const state = userDataReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        authenticated: true,
        jwtToken : 'fkasdjfo2903urjdisf209ru20dijo283u9rw9eidh',
        authError : ''
    })
});

test('should set authentication error', () => {
    const action = {
        type : types.SET_AUTH_ERROR,
        error : 'A tiny error'
    };
    const state = userDataReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        authErrors : 'A tiny error'
    })
});

test('should sign user out', () => {
    const action = {
        type : types.SIGN_USER_OUT
    };
    defState.authenticated = true;
    const state = userDataReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        authenticated : false
    })
});

test('should flip navbar clicked flag', () => {
    const action = {
        type : types.CLICK_NAVBAR
    };
    defState.clicked = true;
    const state = userDataReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        clicked : false,
    })
});
