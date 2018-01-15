/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import {Header} from '../../components/Header';

test('should render the header component properly', () => {
   const wraper = shallow(<Header/>);
   expect(wraper).toMatchSnapshot();
});

test('should call toggleNavbar()', () => {
    const toggleNavbar = jest.fn();
    const wrapper = shallow(<Header toggleNavbar={toggleNavbar}/>);
    wrapper.find('.navbar-toggler').simulate('click');
    expect(toggleNavbar).toBeCalled();
});