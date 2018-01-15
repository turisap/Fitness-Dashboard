/**
 * Created by HP on 15-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import {Dishes} from '../../components/pages/Dishes'
import {dishes} from '../../data/data';

let wrapper, addItemToOrder;
beforeEach(() => {
    addItemToOrder = jest.fn();
    wrapper = shallow(<Dishes dishes={dishes} addItemToOrder={addItemToOrder}/>);
});

test('should render Dishes page', () => {
    expect(wrapper).toMatchSnapshot();
});

/* test('should add a dish to order', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(addItemToOrder).toHaveBeenCalledWith(dishes[0]);
});*/

