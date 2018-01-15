/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import moment from 'moment';

import {CreateForm} from '../../components/pages/CreateEvent';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<CreateForm submissionErrors={[]}/>)
});

test('should render the create event page properly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should change title in component\'s state on input change', () => {
    const e = {target: {value: 'Tarampampui'}};
    wrapper.find('#title').simulate('change', e);
    expect(wrapper.state('title').value).toBe('Tarampampui');
});

test('should change location in component\'s state on input change', () => {
    const e = {target: {value: 'Ho Chi Minh'}};
    wrapper.find('#location').simulate('change', e);
    expect(wrapper.state('location').value).toBe('Ho Chi Minh');
});

test('should change picture in component\'s state on picture input change', () => {
    const e = 'picture';
    wrapper.find('#picture').simulate('change', e);
    expect(wrapper.state('picture').value).toBe('picture');
});

test('should change description in component\'s state on textarea change', () => {
    const e = {target: {value: 'Kerfuffle'}};
    wrapper.find('#description').simulate('change', e);
    expect(wrapper.state('description').value).toBe('Kerfuffle');
});

test('should change organizer\'s name in component\'s state on textarea change', () => {
    const e = {target: {value: 'that guy who lives in the Rosana\'s ship'}};
    wrapper.find('#organizerName').simulate('change', e);
    expect(wrapper.state('organizerName').value).toBe('that guy who lives in the Rosana\'s ship');
});

test('should set the touched flag to true on form submission and fill errors for each empty input', () => {
    const e = {
        preventDefault : () => {}
    };
    wrapper.find('.create-event__form').simulate('submit', e);
    expect(wrapper.state('touched')).toBe(true);
    expect(wrapper.state('title').error).toBe('This field is required');
    expect(wrapper.state('location').error).toBe('This field is required');
    expect(wrapper.state('startDate').error).toBe('This field is required');
    expect(wrapper.state('endDate').error).toBe('This field is required');
    expect(wrapper.state('picture').error).toBe('This field is required');
    expect(wrapper.state('description').error).toBe('This field is required');
    expect(wrapper.state('organizerName').error).toBe('This field is required');
});