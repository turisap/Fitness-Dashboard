/**
 * Created by HP on 19-Jan-18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Card, Input, Select } from 'semantic-ui-react'
import { MorphIcon } from 'react-svg-buttons'
import { DatePicker } from 'antd';
import moment from 'moment';

import {getActivities} from '../../actions/activities';
import Activity from '../Activity';
import {setModalOff} from '../../actions/menuElements';
import {getListOfActivities} from '../../funcs/acitvities'



/**
 * This component represents Activities page
 */
export class Activities extends React.Component {

    /**
     * Gets list of activities from Strava API on page mount
     */
    componentDidMount() {
        if(!this.props.activities.length) {
            this.props.getActivities();
        }
    }

    /**
     * Shows a modal with add activity form on button click
     * @param e
     */
    showAddForm = e => {
        const content = (
            <form>
                <Input placeholder='Name..' />
                <Select placeholder='Type of activity' options={getListOfActivities()} />
                <DatePicker defaultDate={moment()}/>
            </form>
        );
        window.MODAL_CALLBACK = this.addActivity.bind(this);
        this.props.setModalOff(content);

    };

    addActivity = activity => {
        alert('adding activity')
    };

    render() {
        return (
            <div>
                {this.props.activities.map(act => <Activity key={act.id} activity={act}/>)}
                <Card>
                    <Card.Content>
                        <MorphIcon type="plus" onClick={this.showAddForm} />
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getActivities : () => dispatch(getActivities()),
    setModalOff   : content => dispatch(setModalOff(content))
});

const mapStateToProps = state => ({
    activities : state.activities.usersActivities,
    modalContent : state.menuElements.modalContent
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);