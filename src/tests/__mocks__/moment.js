/**
 * Created by HP on 08-Jan-18.
 */
const moment = require.requireActual('moment');
export default (timestamp = 0) => {
    return moment(timestamp);
}