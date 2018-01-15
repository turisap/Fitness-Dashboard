/**
 * Created by HP on 15-Dec-17.
 *
 * Testing query function for retrieving visible dishes in accordance with filters set
 *
 */

import visibleDishes from '../../selectors/visibleDishes';
import database from '../fixtures/orders';
import {dishes} from '../../data/data'

test('should return filtered dishes', () => {
    const filteredDishes = visibleDishes('PASTA');
    expect(filteredDishes).toEqual(dishes.filter(d => d.category === 'PASTA'))
});

test('should return filtered dishes', () => {
    const filteredDishes = visibleDishes('PIZZA');
    expect(filteredDishes).toEqual(dishes.filter(d => d.category === 'PIZZA'))
});

test('should return filtered dishes', () => {
    const filteredDishes = visibleDishes('DESSERTS');
    expect(filteredDishes).toEqual(dishes.filter(d => d.category === 'DESSERTS'))
});