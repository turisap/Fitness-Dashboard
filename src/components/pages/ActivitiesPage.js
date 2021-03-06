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

import {getActivities, createActivity} from '../../actions/activities';
import Activity from '../Activity';
import {setModalOff, setModalErrors} from '../../actions/menuElements';
import {getListOfActivities} from '../../funcs/acitvities';
import Loader from '../Loader';
import Validator from '../../validators/formValidator';
import Fade from '../MountAnimation';



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
        "Start date" : '',
        elapsed_time : 9253,
        errors : [],
        nothingWasFound : false
    };



    /**
     * Gets list of activities from Strava API on page mount
     */
    componentDidMount() {
        if(!this.props.activities.length) {
            this.props.getActivities();
        }
        setTimeout(() => {
            if(!this.props.activities.length) this.setState({nothingWasFound : true})
        }, 55000)
    }



    /**
     * Shows a modal with add activity form on button click
     * @param e
     */
    showAddForm = e => {
        const content = (
            <form onSubmit={this.addActivity} className="modal__add-activity">
                <Input onChange={e => this.setState({name: e.target.value})} placeholder='Name..' />
                <Input onChange={e => this.setState({description: e.target.value})} placeholder='Description..' />
                <Dropdown className="modal__type" onChange={(e, { value }) => this.setState({type : value.toLowerCase()})} placeholder='Type of activity' options={getListOfActivities()} />
                <DatePicker onChange={e => this.setState({"Start date" : e.format('YYYY-MM-DDTHH:mm:ss')})} defaultDate={moment()}/>
                <p className="error">{this.state.errors.join(' | ')}</p>
                <Button type="submit" default loading={this.state.loadingButton}>Add Activity</Button>
            </form>
        );

        // this line provides modal with a callback function which erases data from page's state
        // which prevents submission of an empty form with really existing data
        window.MODAL_CALLBACK = () => this.setState.call(this,
            {name : '', type : '', description : '', start_date_local: ''});

        this.props.setModalOff(content);
    };



    /**
     * Validates form and saves a new activity to Strava API on successful validation
     * @param e
     */
    addActivity = e => {
        e.preventDefault();
        const rules = {
            name : 'isRequired|shouldContainLetters',
            type : 'isRequired{Please choose type of activity}',
            description : 'isRequired|hasMinLength[10]|hasMaxLength{too much of description}[100]',
            "Start date" : 'isRequired'
        };
        const errors = new Validator(this.state, rules);
        this.setState({ errors });
        this.props.setModalErrors(errors);
        if (!errors.length) {
            Object.defineProperty(this.state, 'errors', {enumerable:false});
            this.props.createActivity(this.state);
        }
    };




    render() {
        const activities = this.props.activities;
        return (
            <div className="activities__page">
                {!this.state.nothingWasFound && (activities.length > 0
                    ?
                    <div>
                        {activities.map(act => <Activity key={act.id} activity={act}/>)}
                        <Card>
                            <Card.Content>
                                <MorphIcon type="plus" onClick={this.showAddForm} className="activities__add"/>
                            </Card.Content>
                        </Card>
                    </div>
                    :
                    <Loader/>
                )}
                <Fade in={this.state.nothingWasFound}>
                    <p className="nothingWasFound">No activities were found.. Try again later</p>
                </Fade>
            </div>
        )
    }
}





const mapDispatchToProps = dispatch => ({
    getActivities    : () => dispatch(getActivities()),
    setModalOff      : content => dispatch(setModalOff(content)),
    setModalErrors   : errors => dispatch(setModalErrors(errors)),
    createActivity   : activity => dispatch(createActivity(activity)),
});



const mapStateToProps = state => ({
    activities         : state.activities.usersActivities,
    modalContent       : state.menuElements.modalContent,
});



export default connect(mapStateToProps, mapDispatchToProps)(Activities);