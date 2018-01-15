/**
 * Created by HP on 15-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/pages/about'

test('should render About page', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper).toMatchSnapshot();
});
