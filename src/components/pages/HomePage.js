/**
 * Created by HP on 16-Jan-18.
 */
import React from 'react';
import {connect} from 'react-redux';

import ENV from '../../../ENV';
import {getAccessToken, getAthlete, updateAthlete} from '../../actions/user';
import {extractPropertiesToShow} from '../../funcs/athlete';
import Element from '../SimpleElement';
import WeightElement from '../WeightElement';
import Loader from '../Loader';
import Fade from  '../MountAnimation';




class HomePage extends React.Component {

    state = {
        nothingWasFound : false
    };

    /**
     * Authorization in Strava application on component mount
     * Gets authorization code and if it's already present
     * Makes another request to get a private access_token
     */
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const accessCode = params.get('code');
        const clientId = ENV.stravaAPI.clientID;

        if((!accessCode && !this.props.access_token && !localStorage.getItem('access_token'))) {
            window.location.assign(`https://www.strava.com/oauth/authorize?client_id=${clientId}` +
                `&response_type=code&redirect_uri=${ENV.stravaAPI.redirectURL}&scope=view_private,write`);
        } else if(!this.props.access_token && !localStorage.getItem('access_token')) {
            this.props.getAccessToken(accessCode);
        } else {
            this.props.getAthlete();
        }

        setTimeout(() => {
            if(!this.props.athlete.id) this.setState({nothingWasFound : true})
        }, 8000)
    }



    /**
     * Gets athlete's info if there is an access_token obtained
     */
    componentWillReceiveProps(nextProps) {
        if(this.props.access_token !== nextProps.access_token) {
            this.props.getAthlete();
        }
    }




    render() {
        const elements = extractPropertiesToShow(this.props.athlete);
        return(
            <div className="home__elements">
                {  !this.state.nothingWasFound && (elements.length > 0
                        ?
                        elements.map((el, i) =>
                            el.type === 'weight'
                                ?
                                <WeightElement
                                    key={i}
                                    title={el.title}
                                    value={el.value}
                                    subtitle={el.subtitle}
                                    extraClass={el.class}
                                />
                                :
                                <Element
                                    key={i}
                                    title={el.title}
                                    subtitle={el.subtitle}
                                    extraClass={el.class}
                                />
                        )
                        :
                        <div className="nothingWasFound">
                            <Loader/>
                        </div>
                )}
                <Fade in={this.state.nothingWasFound}>
                    <div>
                        {this.state.nothingWasFound && <p>Nothing was found... Try again later</p>}
                    </div>
                </Fade>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    access_token : state.userData.access_token,
    athlete      : state.userData.athlete,
});


const mapDispatchToProps = dispatch => ({
    getAccessToken : code => dispatch(getAccessToken(code)),
    getAthlete     : () => dispatch(getAthlete()),
    updateAthlete  : updates => dispatch(updateAthlete(updates))
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);