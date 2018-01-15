/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import {SearchForm} from '../../components/SearchForm';

test('should render the searchForm component properly', () => {
    const wrapper = shallow(<SearchForm/>);
    expect(wrapper).toMatchSnapshot();
});