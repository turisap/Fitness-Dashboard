/**
 * Created by HP on 21-Jan-18.
 */
import React from 'react';
import { connect } from 'react-redux';

import {getAthletesClubs} from '../../actions/clubs';
import Club from '../Club';
import Loader from '../Loader';
import Fade from '../MountAnimation';


/**
 * Represents the clubs page
 */
class Clubs extends React.Component {

    state = {
        nothingWasFound : false
    };

    /**
     * Makes an AJAX request to STRAVA API if there is no clubs in the Redux store
     */
    componentDidMount () {
        if(!this.props.clubs.length){
            this.props.getClubs();
        }
        setTimeout(() => {
            if(!this.props.clubs.length) this.setState({nothingWasFound :true})
        },5000)
    }


    render() {
        return(
            <div>
                {!this.state.nothingWasFound && (this.props.clubs.length > 0
                    ?
                    this.props.clubs.map(cl => <Club key={cl.id} club={cl}/>)
                    :
                    <Loader/>
                )}
                <Fade in={this.state.nothingWasFound}>
                     <p>No clubs were found.. Try again later</p>
                </Fade>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    getClubs : () => dispatch(getAthletesClubs()),
});

const mapStateToProps = state => ({
    clubs : state.clubs.athleteClubs,
});

export default connect(mapStateToProps, mapDispatchToProps)(Clubs)