/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import {LoadingOrElements} from '../../components/LoadingOrElements';

test('should render LoadingOrElements component properly', () => {
    const wrapper = shallow(<LoadingOrElements/>);
    expect(wrapper).toMatchSnapshot();
});