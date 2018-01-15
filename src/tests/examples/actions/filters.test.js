/**
 * Created by HP on 15-Dec-17.
 *
 * Testing action functions for the filters reducer
 *
 */
import {setTextFilter, setPizzaFilter, setPastaFilter, setDessertFilter} from '../../actions/filters';

test('shouldl return a setTextFilter action object', () => {
    const action = setTextFilter('kampot');
    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text : 'kampot'
    })
});

test('should return a setPizzaFilter action object', () => {
    const action = setPizzaFilter();
    expect(action).toEqual({
        type : 'SET_FILTER_PIZZA',
        filterBy : 'PIZZA'
    })
});

test('should return a setPastaFilter action object', () => {
    const action = setPastaFilter();
    expect(action).toEqual({
        type : 'SET_PASTA_FILTER',
        filterBy : 'PASTA'
    })
});

test('should return a setDessertFilter action object', () => {
    const action = setDessertFilter();
    expect(action).toEqual({
        type : 'SET_DESSERT_FILTER',
        filterBy : 'DESSERTS'
    })
});

