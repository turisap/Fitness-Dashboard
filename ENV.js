/**
 * Created by HP on 23-Dec-17.
 */

/**
 * This file holds authentication data for requests to eventbrite API
 * As well as data for requests to google's API
 * You can obtain it by registering an app 
 * */
const ENV = {
    eventbriteAPI : {
        OAuthToken : 'Bearer YOUR EVENTBRITE TOKEN',
        clientSecret : 'YOUR EVENTBRITE CLIENT SECRET',
        rootURL : 'https://www.eventbriteapi.com/v3',
    },
    googleAPI : {
        rootURL : 'https://maps.googleapis.com/maps/api/geocode/json',
        keyAPI  : 'YOUR API KEY FOR GOOGLE APPLICATION',
    },
    backendServer : {
        rootUrl : 'URL TO YOUR APPLICATION'
    }
};

export default ENV;
