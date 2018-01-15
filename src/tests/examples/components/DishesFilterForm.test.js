/**
 * Created by HP on 16-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import {DishesFilterForm} from '../../components/DishesFilterForm';

let wrapper, setPizzaFilter, setPastaFilter, setDessertsFilter, setTextFilter;

beforeEach(() => {
    setPizzaFilter = jest.fn();
    setPastaFilter = jest.fn();
    setDessertsFilter = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow(<DishesFilterForm
        setPizzaFilter={setPizzaFilter}
        setPastaFilter={setPastaFilter}
        setDessertFilter={setDessertsFilter}
        setTextFilter={setTextFilter}
    />);
});

test('should render dishes filter component', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should set pizza filter', () => {
    let text = 'PIZZA';
    wrapper.find('a').at(0).simulate('click', {
        target : { text }
    });
    expect(setPizzaFilter).toBeCalled();
});

test('should set pasta filter', () => {
    let text = 'PASTA';
    wrapper.find('a').at(0).simulate('click', {
        target : { text }
    });
    expect(setPastaFilter).toBeCalled();
});

test('should set desserts filter', () => {
    let text = 'DESSERTS';
    wrapper.find('a').at(0).simulate('click', {
        target : { text }
    });
    expect(setDessertsFilter).toBeCalled();
});



