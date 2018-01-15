/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow } from 'enzyme';
import Event from '../../components/Event';
import {events} from '../fixtures/events';

test('should render the event component properly', () => {
    const wrapper = shallow(<Event event={events[0]}/>);
    expect(wrapper).toMatchSnapshot();
});