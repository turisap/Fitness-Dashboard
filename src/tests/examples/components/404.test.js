/**
 * Created by HP on 15-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/pages/404'

test('should render 404 page', () => {
    const wrapper = shallow(<NotFound/>);
    expect(wrapper).toMatchSnapshot();
});
