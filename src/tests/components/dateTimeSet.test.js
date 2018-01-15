/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import DateTimeSet from '../../components/DateTimeSet';

const myMoment = {
    toISOString : moment().toISOString()
};

test('should render the DateTimeSet component properly', () => {
    const wrapper = shallow(<DateTimeSet defaultDate={moment()} defaultTime={moment()} context="today"/>);
    expect(wrapper).toMatchSnapshot();
});