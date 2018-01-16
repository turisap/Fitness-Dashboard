/**
 * Created by HP on 17-Jan-18.
 */


/**
 * Extracts all necessary information (to display) from an API response
 * @param athlete
 */
export const extractPropertiesToShow = athlete => {
    const listToShow = ['firstname', 'lastname', 'city', 'weight', 'bikes', 'shoes'];
    const elements = [[]];
    for (let prop in athlete) {
        if (listToShow.indexOf(prop) > 0){
            if (prop == 'firstname' || prop == 'lastname' || prop == 'city') {
                elements[0].push(athlete[prop])
            } else {
                elements.push(athlete[prop])
            }
        }
    }
    console.log(elements);
};