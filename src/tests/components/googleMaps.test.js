/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import {Map} from '../../components/GoogleMap';

test('should rende the google map component properly', () => {
    const wrapper = shallow(<Map googleMapURL="t" loadingElement="ldskfj"/>);
    expect(wrapper).toMatchSnapshot();
});