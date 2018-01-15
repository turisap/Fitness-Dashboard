/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import {FiltersForm} from '../../components/FiltersForm';


let wrapper, getCategories, handleClick, setToday, setPrice, setType, setCategory, setLocation;

beforeEach(() => {
    getCategories = jest.fn();
    handleClick   = jest.fn();
    setToday      = jest.fn();
    setPrice      = jest.fn();
    setType       = jest.fn();
    setCategory   = jest.fn();
    setLocation   = jest.fn();
    wrapper = shallow(<FiltersForm
        userData={userDataReducerDefaultState}
        categories={['the first category', 'the second one']}
        getCategories={getCategories}
        handleClick={handleClick}
        setToday={setToday}
        setPrice={setPrice}
        setType={setType}
        setLocation={setLocation}
        setCategory={setCategory}
    />)
});

const userDataReducerDefaultState = {
    location : {},
    locality : '',
    authenticated : false,
    jwtToken : '',
    authErrors : '',
    clicked    : true
};

test('should render the FiltersForm component properly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should call getCategories()', () => {
    expect(getCategories).toHaveBeenCalled();
});

test('should call setLocation with "Kemerovo', () => {
    const e = {target:{value:'Kemerovo'}};
    wrapper.find('.filterForm__text-input').simulate('blur', e);
    expect(setLocation).toHaveBeenCalledWith('Kemerovo');
});


test('should set an active tab after clicking on a category div', () => {
    wrapper.find('.filterForm__group').at(0).simulate('click');
    expect(wrapper.state('activeTab')[0]).toBe(true);
    expect(wrapper.find('.test').hasClass('filterForm--active')).toBe(true);
});

test('should set an call setToday()', () => {
    wrapper.find('.control-time').at(0).simulate('click');
    expect(setToday).toHaveBeenCalled();
});

test('should call setPrice() with "all prices"', () => {
    wrapper.find('.control-price').at(0).simulate('click');
    expect(setPrice).toHaveBeenCalledWith('all prices');
});

test('should call setType() with "class" filter', () => {
    wrapper.find('.control-type').at(0).simulate('click');
    expect(setType).toHaveBeenCalledWith('class');
});

test('should call setCategory with "the second one"', () => {
    wrapper.find('.control-category').at(1).simulate('click');
    expect(setCategory).toHaveBeenCalledWith('the second one');
});