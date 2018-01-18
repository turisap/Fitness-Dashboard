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
                    const value = parseFloat(athlete[prop]).toFixed(2);
                    elements.push({title: `Your weight is ${value} kg`, value , type : 'weight'});
                    break;
                case ('bikes'):
                    elements.push({title: `Your main bike is ${athlete[prop][0].name}`});
                    break;
                case ('shoes'):
                    elements.push({title : `Your main shoes ${athlete[prop][0].name}`, subtitle: `And you've made ${athlete[prop][0].distance} km in them`})
            }
        }
    }
    return elements;
};


/**
 * Creates a message for modal basing on weight difference (existing weight and user's input)
 * @param prevWeight
 * @param newWeight
 * @returns {*}
 */
export const changingWeightModalMessage = (prevWeight, newWeight) => {
    const diff = (parseFloat(newWeight) - parseFloat(prevWeight)).toFixed(2);
    switch (true) {
        case (diff < -1):
            return `Wow! You\'ve done a lot, ${diff} kilos lost. Keep doing!`;
            break;
        case ((diff < 0 && diff > -1)):
            return `You've lost ${diff} kg. Keep doing it and you'll achieve you goals!`;
            break;
        case (diff > 0 && diff < 1):
            return `Ok, that was a nice weekend, you've gained ${diff} kilo. You need to exercise more now.`;
            break;
        case(diff > 1):
            return `Hey, you got ${diff} kilos!! Lock yourself in your flat for 3 days without any food!`;
        default: return 'TURISAP'
    }
};