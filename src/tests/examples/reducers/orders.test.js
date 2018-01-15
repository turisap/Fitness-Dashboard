/**
 * Created by HP on 15-Dec-17.
 *
 * Testing the order reducer function
 *
 */

import ordersReducer, {incrementSameItem} from '../../reducers/orders';
import order from '../fixtures/orders';

let fixOrder;

let fixState;
let orderData;

beforeEach(() => {
    orderData = [...order];
    fixOrder = {
        items : orderData,
        time : undefined,
        name : '',
        phone : ''
    };
    fixState = {...fixOrder}
});


test('should set default state for orders', () => {
    const state = ordersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        items : [],
        time : undefined,
        name : '',
        phone : ''
    })
});

test('should increment an existing item in the order list', () => {
    const action = {
        type : 'ADD_ITEM',
        item : orderData[0]
    };
    const state = ordersReducer(fixOrder, action);
    expect(state).toEqual({
        name : '',
        phone : '',
        time : undefined,
        items : [
            {
                category: 'PIZZA',
                title: 'Cremeschnitte',
                price: 4,
                description : 'test description',
                amount : 1
            },
            {
                category: 'PASTA',
                title: 'Linguine',
                price: 5.5,
                description : 'test description',
                amount : undefined
            },
            {
                category: 'DESSERT',
                title: 'Margherita',
                price: 7,
                description : 'test description',
                amount : undefined
            }
        ]
    })
});

test('should add a new item to the order list', () => {
    const item = {
        category: 'PASTA',
        title: 'Kerfufflia',
        price: 5.5,
        description : 'test description',
        amount : undefined
    };
    const action = {
        type : 'ADD_ITEM',
        item
    };
    const state = ordersReducer(fixState, action);
    expect(state).toEqual({
        items : [...orderData, item],
        time : undefined,
        name : '',
        phone : ''
    })
});

test('should remove an item from order', () => {
    const action = {
        type : 'REMOVE_ITEM',
        title : 'Cremeschnitte'
    };
    const state = ordersReducer(fixState, action);
    expect(state).toEqual({
        items : [{
            category: 'PASTA',
            title: 'Linguine',
            price: 5.5,
            description : 'test description',
            amount : undefined
            },
            {
                category: 'DESSERT',
                title: 'Margherita',
                price: 7,
                description : 'test description',
                amount : undefined
            },],
        time  : undefined,
        name  : '',
        phone : ''
    })
});

test('should remove all same items from order', () => {
    const action = {
        type : 'REMOVE_ALL_SAME_ITEMS',
        title : 'Margherita'
    };
    const state = ordersReducer({
        items : orderData,
        time : undefined,
        name : '',
        phone : ''
    }, action);
    expect(state).toEqual({
        items : [
            {
                category: 'PIZZA',
                title: 'Cremeschnitte',
                price: 4,
                description : 'test description',
                amount : 0
            },
            {
                category: 'PASTA',
                title: 'Linguine',
                price: 5.5,
                description : 'test description',
                amount : undefined
            },
        ],
        time  : undefined,
        name  : '',
        phone : ''
    })
});

test('should fill user\' credentials', () => {
    const action = {
        type : 'FILL_CREDENTIALS',
        data : {
            name : 'Turisap',
            phone : '12345'
        }
    };
    const state = ordersReducer(fixState, action);
    expect(state).toEqual({
        ...fixState,
        name : 'Turisap',
        phone : '12345'
    })
});

test('should set up pick up time', () => {
    const action = {
        type : 'SET_PICKUP_TIME',
        time : '14 Dec 2017 23:34'
    };
    const state = ordersReducer(fixState, action);
    expect(state).toEqual({
        ...fixState,
        time : '14 Dec 2017 23:34'
    })
});