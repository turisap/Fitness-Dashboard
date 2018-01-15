/**
 * Created by HP on 15-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/pages/HomePage';

test('should render homepage properly', () => {
    const wrapper = shallow(<HomePage/>);
    expect(wrapper).toMatchSnapshot();
});