/**
 * Created by HP on 19-Jan-18.
 */
import list from '../data/activitiesTypes';

export const getListOfActivities = () => {
    return list.map((el, i) => ({
        key: i,
        value : el,
        text : el
    }))
};