/**
 * Created by HP on 23-Dec-17.
 */

/**
 * This file holds authentication data for all
 * */
const ENV = {
    stravaAPI : {
        clientID : 22686,
        userId : 27288736,
        clientSecret : 'fe6516086d6c0893b2de715069861ca7bd2f23d4',
        publicAccessToken : 'f6d620252df82826e071a301ea45625b919fb136',
        redirectURL : 'https://fitness-dashboard.herokuapp.com/',
        activitiesBaseEndPoint : 'https://www.strava.com/api/v3/activities?',
        athleteActivitiesBaseEndPoint : 'https://www.strava.com/api/v3/athlete/activities?',
        athleteClubsBaseEndPoint      : 'https://www.strava.com/api/v3/athlete/clubs',
        leaveClub : 'https://www.strava.com/api/v3/clubs/'
    },
    backendServer : {
        rootUrl : ''
    }
};

export default ENV;
