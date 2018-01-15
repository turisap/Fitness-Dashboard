/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow} from 'enzyme';
import {HomePage} from '../../components/pages/HomePage';
import {events} from '../fixtures/events';

let wrapper, getEvents, getLocality;

beforeEach(() => {
    getEvents = jest.fn();
    getLocality = jest.fn();
    wrapper = shallow(<HomePage
        getEvents={getEvents}
        getLocality={getLocality}
        events={events}
        location={{}}
    />)
});

test('should render the home page properly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call getEvents and getLocality functions on component update', () => {
    wrapper.setProps({events: []});
    expect(getLocality).toHaveBeenCalled();
    expect(getEvents).toHaveBeenCalled();
});