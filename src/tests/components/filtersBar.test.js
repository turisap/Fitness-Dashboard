/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow } from 'enzyme';
import {FiltersBar} from '../../components/FiltersBar';

test('should render the FilterBar component properly', () => {
    const wrapper = shallow(<FiltersBar/>);
    expect(wrapper).toMatchSnapshot();
});