/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import {Browse} from '../../components/pages/Browse';
import {userDataReducerDefaultState} from '../../reducers/userDataReducer';
import {filtersReducerDefaultState} from '../../reducers/filtersReducer';
import {events} from '../fixtures/events';


let wrapper, getFilteredEvents, getUsersLocality, spy;

beforeEach(() => {
    getFilteredEvents = jest.fn();
    getUsersLocality   = jest.fn();
    wrapper = shallow(<Browse
        userData={userDataReducerDefaultState}
        filters={filtersReducerDefaultState}
        getUsersLocality={getUsersLocality}
        getFilteredEvents={getFilteredEvents}
        events={events}
    />, { lifecycleExperimental: true });
});


test('should render the browse page properly', () => {
    expect(wrapper).toMatchSnapshot();
});

/**
 * This is how to trigger componentDidUpdate
 * Keep in mind that setProps() should change on of those props from mapStateToProps (apparently)
 */
test('should call getUserLocality() on component update', () => {
    wrapper.setProps({ filters: {} });
    expect(getUsersLocality).toHaveBeenCalled();
    expect(getFilteredEvents).toHaveBeenCalled();
});
