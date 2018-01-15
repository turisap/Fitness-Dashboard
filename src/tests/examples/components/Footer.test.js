/**
 * Created by HP on 15-Dec-17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/pages/Footer';

test('should render footer properly', () => {
   const wrapper = shallow(<Footer/>);
   expect(wrapper).toMatchSnapshot();
});