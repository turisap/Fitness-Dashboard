/**
 * Created by HP on 19-Jan-18.
 */
import React from 'react';
import { connect } from 'react-redux';
import {getActivities} from '../../actions/activities';
import Activity from '../Activity';


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
            this.props.activities.map(act => <Activity key={act.id} activity={act}/>)
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