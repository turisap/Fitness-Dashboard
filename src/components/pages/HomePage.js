/**
 * Created by HP on 16-Jan-18.
 */
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import ENV from '../../../ENV';
import {getAccessToken} from '../../actions/user';


class HomePage extends React.Component {


    /**
     * Authorization in Strava application on component mount
     * Gets authorization code and if it's already present
     * makes another request to get an access_token
     */
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const accessCode = params.get('code');
        const clientSecret = ENV.stravaAPI.clientSecret;
        const clientId = ENV.stravaAPI.clientID;

        if(!accessCode) {
            window.location.assign(`https://www.strava.com/oauth/authorize?client_id=${clientId}` +
                `&response_type=code&redirect_uri=${ENV.stravaAPI.redirectURL}&scope=view_private,write`);
        } else {
            this.props.getAccessToken(accessCode);
        }
    }


    render() {
        return(
            <h1>HomePage Placeholder</h1>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getAccessToken : code => dispatch(getAccessToken(code))
});

export default connect(undefined, mapDispatchToProps)(HomePage);