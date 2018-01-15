/**
 * Created by HP on 05-Jan-18.
 */

/**
 * Returns an exact event (via id) from the events or filtered events arrays in Redux store
 * @param state
 * @param id
 * @returns {Array.<T>}
 */
export const findEventById = (state, id) => {
    let event = state.events.filteredEvents.filter(ev => ev.id === id);
    if(!event.length) event = state.events.events.filter(ev => ev.id === id);
    return event;
};