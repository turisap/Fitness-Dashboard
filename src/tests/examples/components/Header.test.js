/**
 * Created by HP on 15-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/pages/Header';

test('should render Header properly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
});