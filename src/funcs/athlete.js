/**
 * Created by HP on 17-Jan-18.
 */


/**
 * Extracts all necessary information (to display) from an API response
 * @param athlete
 */
export const extractPropertiesToShow = athlete => {
    const listToShow = ['firstname', 'lastname', 'city', 'weight', 'bikes', 'shoes'];
    const elements = [];
    for (let prop in athlete) {
        if (listToShow.indexOf(prop) >= 0){
            switch(prop) {
                case ('firstname'):
                    elements.push({title: athlete[prop]});
                    break;
                case ('lastname'):
                    elements[0].subtitle = athlete[prop];
                    break;
                case ('city'):
                    elements[0].subtitle += athlete[prop];
                    break;
                case ('weight'):
                    elements.push({title: `Your weight is ${athlete[prop]}kg`, changeable : true});
                    break;
                case ('bikes'):
                    elements.push({title: `Your main bike is ${athlete[prop][0].name}`});
                    break;
                case ('shoes'):
                    elements.push({title : `Your main shoes ${athlete[prop][0].name}`, subtitle: `And you've made ${athlete[prop][0].distance}km in them`})
            }
        }
    }
    return elements;
};