/**
 * Created by HP on 15-Dec-17.
 *
 * Testing action functions for the orders reducer
 *
 */
import {addItem, fillCredentials, removeAllSameItems, removeItem, setPickupTime} from '../../actions/orders';

let item;
beforeEach(() => {
    item = {
        category: 'food',
        title: 'Cremeschnitte',
        price: 4,
        description : 'test description',
        amount : undefined
    }
});

test('should return addItem action object',() => {
   const action = addItem(item);
   expect(action).toEqual({
       type : 'ADD_ITEM',
       item
   })
});

test('should return remove itemAction object', () => {
    const action = removeItem('Galzone');
    expect(action).toEqual({
        type: 'REMOVE_ITEM',
        title : 'Galzone'
    })
});

test('should return removeAllSameItems action object', () => {
    const action = removeAllSameItems('Serradura');
    expect(action).toEqual({
        type : 'REMOVE_ALL_SAME_ITEMS',
        title : 'Serradura'
    })
});

test('should return fillCredentials action object', () => {
    const action = fillCredentials({name : 'Turisap', phone : '+85511165342'});
    expect(action).toEqual({
        type : 'FILL_CREDENTIALS',
        data : {
            name : 'Turisap',
            phone : '+85511165342'
        }
    })
});

test('should return setPickUpTime action object', () => {
    const action = setPickupTime('14th Dec 12:23');
    expect(action).toEqual({
        type : 'SET_PICKUP_TIME',
        time : '14th Dec 12:23'
    })
});

test('', () => {
});