/**
 * Created by HP on 16-Jan-18.
 */
import React from 'react';

import ENV from '../../../ENV';


export default class HomePage extends React.Component {

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const code = params.get('code');
        if(!code) {
            window.location.assign(`https://www.strava.com/oauth/authorize?client_id=${ENV.stravaAPI.clientID}` +
                `&response_type=code&redirect_uri=${ENV.stravaAPI.redirectURL}&scope=view_private,write`);
        }
    }


    render() {
        return(
            <h1>HomePage Placeholder</h1>
        )
    }
}