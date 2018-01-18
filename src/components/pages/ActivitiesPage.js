/**
 * Created by HP on 19-Jan-18.
 */
import React from 'react';
import { connect } from 'react-redux';
import {getActivities} from '../../actions/activities';


/**
 * This component represents Activities page
 */
export class Activities extends React.Component {

    componentDidMount() {
        if(!this.props.activities.length) {
            this.props.getActivities();
        }
    }

    render() {
        return (
            <h1>Activities Placeholder</h1>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getActivities : () => dispatch(getActivities()),
});

const mapStateToProps = state => ({
    activities : state.activities.usersActivities
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);