/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow } from 'enzyme';
import FileUpload from '../../components/Filter';

test('should render the Filter component properly', () => {
    const wrapper = shallow(<FileUpload/>);
    expect(wrapper).toMatchSnapshot();
});