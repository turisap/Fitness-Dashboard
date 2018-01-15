/**
 * Created by HP on 07-Jan-18.
 */
import moment from 'moment';

import filtersReducer from '../../reducers/filtersReducer';
import * as types from '../../actions/types';
import categories from '../fixtures/categories';

const state = {
    allCategories : [],
    location      : '',
    category      : '',
    categoryName  : '',
    typeOfE       : '',
    price         : '',
    textFilter    : '',
    dateRangeText : '',
    startRange    : defaultStart,
    endRange      : '',
};

let defState;

/**
 * Particular dates for setting event filters on front-end
 */
const today = moment().format('YYYY-MM-DD HH:mm:ss');
const tomorrow = moment().add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss');
const friday   = moment().day(5).format('YYYY-MM-DD HH:mm:ss');
const thisWeekendStart = moment().endOf('isoWeek').subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss');
const thisWeekendEnd = moment().endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
const nextWeekStart = moment().add(1, 'week').startOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
const nextWeekEnd = moment().add(1, 'week').endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
const thisMonthEnd = moment().endOf('month').format('YYYY-MM-DD HH:mm:ss');
const defaultStart = moment().format('YYYY-MM-DD HH:mm:ss');

beforeEach(() => {
    defState = {...state};
});

test('should set default state', () => {
    const state = filtersReducer(undefined, '@@INIT');
    expect(state).toEqual(defState);
});

test('should set list of categories to the store', () => {
    const action = {
        type : types.GET_CATEGORIES,
        categories : categories
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        allCategories : categories
    })
});


test('should set location to the store', () => {
    const location = {lat : 11.342, lng : 103.1324};
    const action = {
        type : types.SET_LOCATION,
        location : location
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        location : location
    })
});


test('should set category id and category name', () => {
    const id = 123;
    const name = 'light sabers';
    const action = {
        type : types.SET_CATEGORY,
        category : {
            id,
            name
        }
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        category: id,
        categoryName : name
    })
});

test('should set type of events', () => {
    const action = {
        type : types.SET_TYPE,
        typeOfE : 'tarampampushki'
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        typeOfE : 'tarampampushki'
    })
});

test('should set price of event', () => {
   const action = {
       type : types.SET_PRICE,
       price : 1234.4
   };
   const state = filtersReducer(defState, action);
   expect(state).toEqual({
       ...defState,
       price: 1234.4
   })
});

test('should set text filter', () => {
    const action = {
        type : types.SET_TEXT,
        text: 'Mangos'
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        textFilter: 'Mangos'
    })
});

test('should set remove a filter from the filters object', () => {
    defState.catFilter = 'This filter should be removed';
    const action = {
        type : types.REMOVE_FILTER,
        filter : {filter : 'catFilter'}
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        catFilter : ''
    })
});

test('should set time filter for today', () => {
    const action = {
        type : types.SET_TODAY,
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        dateRangeText : 'today',
        startRange : today,
        endRange : today
    })
});

test('should set the time filter for this week', () => {
    const action = {
        type : types.SET_THIS_WEEK
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        dateRangeText : 'this week',
        startRange : today,
        endRange   : thisWeekendEnd
    })
});

test('should set the time filter to this Friday', () => {
    const action = {
        type : types.SET_THIS_FRIDAY
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        dateRangeText : 'this friday',
        startRange : friday,
        endRange   : friday
    })
});


test('should set the time filter to this Friday', () => {
    const action = {
        type : types.SET_THIS_WEEKEND
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        dateRangeText : 'this weekend',
        startRange : thisWeekendStart,
        endRange   : thisWeekendEnd
    })
});


test('should set the time filter to this Friday', () => {
    const action = {
        type : types.SET_NEXT_WEEK
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        dateRangeText : 'next week',
        startRange : nextWeekStart,
        endRange   : nextWeekEnd
    })
});



test('should set the time filter to this Friday', () => {
    const action = {
        type : types.SET_THIS_MONTH
    };
    const state = filtersReducer(defState, action);
    expect(state).toEqual({
        ...defState,
        dateRangeText : 'this month',
        startRange : today,
        endRange   : thisMonthEnd
    })
});