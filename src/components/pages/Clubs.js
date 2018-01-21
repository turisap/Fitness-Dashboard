/**
 * Created by HP on 21-Jan-18.
 */
import React from 'react';
import { connect } from 'react-redux';

import {getAthletesClubs} from '../../actions/clubs';
import Club from '../Club';
import Loader from '../Loader';


/**
 * Represents the clubs page
 */
class Clubs extends React.Component {


    /**
     * Makes an AJAX request to STRAVA API if there is no clubs in the Redux store
     */
    componentDidMount () {
        if(!this.props.clubs.length){
            this.props.getClubs();
        }
    }


    render() {
        return(
            <div>
                {this.props.clubs.length > 0
                    ?
                    this.props.clubs.map(cl => <Club key={cl.id} club={cl}/>)
                    :
                    <Loader/>
                }
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