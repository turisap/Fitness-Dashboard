/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import {Footer} from '../../components/Footer';

test('should render the footer component properly', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper).toMatchSnapshot();
});

