/**
 * Created by HP on 08-Jan-18.
 */
import React from 'react';
import { shallow } from 'enzyme';
import {EventPage} from '../../components/pages/EventPage';
import {events} from '../fixtures/events';
import venue from '../fixtures/venue';

let wrapper, setVenue, resetVenue;

beforeEach(() => {
    setVenue = jest.fn();
    resetVenue = jest.fn();
    wrapper = shallow(<EventPage
        setVenue={setVenue}
        resetVenue={resetVenue}
        event={events}
        venue={venue}
    />, { lifecycleExperimental: true });
});


test('should render EventPage properly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should call setVenue() on component initial mount', () => {
    expect(setVenue).toHaveBeenCalledWith(events[0].venue_id);
});


test('should reset venue on component unmount', () => {
    wrapper.unmount();
    expect(resetVenue).toHaveBeenCalled();
});