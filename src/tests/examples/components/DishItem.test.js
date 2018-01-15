/**
 * Created by HP on 16-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import {DishItem} from '../../components/DishItem';

let wrapper, removeItem, removeAllSameItems, item;

beforeEach(() => {
    item = {
        category: "PIZZA",
        title: 'Al Taglio',
        price: 6.5,
        description : 'test description',
        amount : 1
    };
    removeItem = jest.fn();
    removeAllSameItems = jest.fn();
    wrapper =  shallow(<DishItem
        removeItem={removeItem}
        removeAllSameItems={removeAllSameItems}
        {...item}
        orderPage={true}
    />)
});

test('should render Dish item component', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should remove one item', () => {
   wrapper.find('p.dishitem__removeone').simulate('click');
   expect(removeItem).toHaveBeenCalledWith(item.title);
});

test('should remove all identical items', () => {
    wrapper.find('p.dishitem__removeall').simulate('click');
    expect(removeAllSameItems).toHaveBeenCalledWith(item.title);
});