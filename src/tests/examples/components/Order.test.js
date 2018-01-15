/**
 * Created by HP on 15-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import {Order} from '../../components/pages/Order';
import orders from '../fixtures/fullorders';
import moment from 'moment';

let wrapper, setPickUpTime, fillCredentials;

beforeEach(() => {
    setPickUpTime = jest.fn();
    fillCredentials = jest.fn();
    wrapper = shallow(
    <Order
        setPickupTime={setPickUpTime}
        fillCredentials={fillCredentials}
        orders={orders}
    />);
});

test('should render order page properly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should set timeError', () => {
    let e = moment();
    wrapper.find('TimePicker').simulate('change', e);
    expect(wrapper.state('timeError').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should not set timeError and set pickuptime', () => {
    let e = moment().add(90, 'minutes');
    wrapper.find('TimePicker').simulate('change', e);
    expect(wrapper.state('timeError')).toBe(undefined);
    expect(setPickUpTime).toHaveBeenCalledWith(e.format('Do MMM, HH:mm'));
});

test('should fill credentials', () => {
    let e = moment().add(2, 'hours');
    e = {
        ...e,
        preventDefault : () => {}
    };
    wrapper.find('form').simulate('submit', e);
    expect(fillCredentials).toHaveBeenCalledWith(wrapper.state());
});
