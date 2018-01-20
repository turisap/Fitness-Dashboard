/**
 * Created by HP on 19-Jan-18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Card, Input, Dropdown } from 'semantic-ui-react'
import { MorphIcon } from 'react-svg-buttons'
import { DatePicker } from 'antd';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

import {getActivities} from '../../actions/activities';
import Activity from '../Activity';
import {setModalOff} from '../../actions/menuElements';
import {getListOfActivities} from '../../funcs/acitvities';
import Validator from '../../validators/formValidator';



/**
 * This component represents Activities page
 */
export class Activities extends React.Component {

    /**
     * State for holding data from inputs
     * @type {{name: string, description: string, type: string, start_date_local: string}}
     */
    state = {
        name : '',
        description : '',
        type : '',
        start_date_local : '',
        elapsed_time : 9253
    };



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
            <form onSubmit={this.addActivity}>
                <Input onChange={e => this.setState({name: e.target.value})} placeholder='Name..' />
                <Input onChange={e => this.setState({description: e.target.value})} placeholder='Description..' />
                <Dropdown onChange={(e, { value }) => this.setState({type : value.toLowerCase()})} placeholder='Type of activity' options={getListOfActivities()} />
                <DatePicker onChange={e => this.setState({start_date_local : e.format('YYYY-MM-DDTHH:mm:ss')})} defaultDate={moment()}/>
                <Button type="submit" primary loading>Add Activity</Button>
            </form>
        );

        // this line provides modal with a callback function which erases data from page's state
        // which prevents submission of an empty form with really existing data
        window.MODAL_CALLBACK = () => this.setState.call(this,
            {name : '', type : '', description : '', start_date_local: ''});

        this.props.setModalOff(content);
    };


    validateForm = () => {
        const rules = {name : 'isRequired|shouldContainLetter', type : 'numeric|isRequired'};
        const errors = new Validator(this.state, rules);
    };



    /**
     * Saves a new activity to Strava API
     * @param e
     */
    addActivity = e => {
        e.preventDefault();
        this.validateForm();
        //alert('adding activity')
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