/**
 * Created by HP on 23-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getEvents, setError} from '../../actions/events';
import {getUsersLocality} from '../../actions/userData';
import SearchForm from '../SearchForm';
import Event from '../Event';
import LoadingOrElements from '../LoadingOrElements';
import img1 from '../../assets/img/ticket.jpg';



export class HomePage extends React.Component {

    /**
     * Dispatches getting event action after receiving user's location
     */
    componentDidUpdate() {
        if (!this.props.events.length) {
            this.props.getEvents(this.props.location);
            this.props.getLocality(this.props.location);
        }
    }


    render(){
        const events = this.props.events.map(event => <Event key={event.id} event={event}/>);
        return(
            <div className="homepage container=fluid">
                <section className="homepage__slider">
                    <img src="scripts/assets/ticket.jpg"/>
                    <section className="homepage__searchform">
                        <SearchForm/>
                    </section>
                </section>
                <section className="homepage__greeting">
                    {this.props.location.latitude && <h1 className="display-2">All events in {this.props.locality}</h1>}
                </section>
                <div className="homepage__events">
                    {LoadingOrElements(events, this.props.events.length)}
                </div>
            </div>
        )
    }
}

/**
 * Validation of props
 * @type {{location: *, events: *}}
 */
HomePage.propTypes = {
    location : PropTypes.object,
    events   : PropTypes.array,
};


/**
 * Mapping user's location alogn with nearby events to props
 * @param state
 */
const mapStateToProps = state => ({
    location : state.userData.location,
    locality : state.userData.locality,
    events   : state.events.events
});


/**
 * Mapping dispatchers of getting nearby events and setting error to props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
    getEvents : (cords) => dispatch(getEvents(cords)),
    setError : (error) => dispatch(setError(error)),
    getLocality : (coord) => dispatch(getUsersLocality(coord))
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);